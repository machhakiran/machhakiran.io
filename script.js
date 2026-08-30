/* machhakiran.io — small behaviours only: theme, reveal, nav state. */

(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- colour scheme ---------- */

  /* The saved theme is already applied by the inline head script. */
  var STORE = 'mk-theme';

  function currentMode() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var toggle = document.getElementById('themeToggle');

  function paintToggle() {
    if (!toggle) return;
    var mode = currentMode();
    Array.prototype.forEach.call(toggle.querySelectorAll('span'), function (s) {
      s.classList.toggle('on', s.dataset.mode === mode);
    });
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentMode() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORE, next); } catch (e) { /* ignore */ }
      paintToggle();
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function () {
      if (!root.getAttribute('data-theme')) paintToggle();
    });

  paintToggle();

  /* ---------- reveal on scroll ---------- */

  /* A plain measured sweep rather than an IntersectionObserver. The observer
     was leaving whichever section sat past the fold permanently at opacity 0
     when it never produced an intersection; a sweep re-checks on every scroll,
     resize and load, so nothing can stay hidden. */
  var pending = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function revealAll() {
    pending.forEach(function (el) { el.classList.add('in'); });
    pending = [];
  }

  function sweepReveals() {
    if (!pending.length) return;
    var h = window.innerHeight || document.documentElement.clientHeight;
    pending = pending.filter(function (el) {
      if (el.getBoundingClientRect().top < h - 40) {
        el.classList.add('in');
        return false;
      }
      return true;
    });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealAll();
  } else {
    sweepReveals();
    window.addEventListener('load', sweepReveals);
    window.addEventListener('resize', sweepReveals, { passive: true });
    /* Web fonts land after first layout and reflow every section down the page,
       so re-measure once they are in. */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sweepReveals);
    }
    /* Last resort: never leave content invisible because of a layout surprise. */
    setTimeout(revealAll, 4000);
  }

  /* ---------- active section in the nav strip ---------- */

  var links = document.querySelectorAll('#nav a');
  var sections = [];

  Array.prototype.forEach.call(links, function (a) {
    var href = a.getAttribute('href');
    /* Cross-page tabs (fde.html, index.html) are not selectors — skip them. */
    if (!href || href.charAt(0) !== '#') return;
    var el = document.querySelector(href);
    if (el) sections.push({ link: a, el: el });
  });

  var ticking = false;

  /* The nav is sticky; once it reaches the top, show the name inside it. */
  var nav = document.getElementById('nav');
  var navTop = nav ? nav.offsetTop : 0;

  function markStuck() {
    if (!nav) return;
    nav.classList.toggle('stuck', window.scrollY >= navTop - 1);
  }

  function onFrame() {
    ticking = false;
    sweepReveals();
    markActive();
    markStuck();
  }

  function markActive() {
    var line = window.scrollY + window.innerHeight * 0.32;
    var active = null;

    sections.forEach(function (s) {
      if (s.el.offsetTop <= line) active = s;
    });

    /* Above the first section, highlight it rather than nothing. */
    if (!active && sections.length) active = sections[0];

    sections.forEach(function (s) {
      s.link.classList.toggle('active', s === active);
    });
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onFrame);
    }
  }, { passive: true });

  markActive();
  markStuck();

  /* Font loading shifts the masthead height, so re-measure the trigger point. */
  window.addEventListener('resize', function () {
    if (nav) navTop = nav.offsetTop;
    markStuck();
  }, { passive: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (nav) navTop = nav.offsetTop;
      markStuck();
    });
  }

  /* ---------- dateline + colophon ---------- */

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  var today = document.getElementById('today');
  if (today) {
    today.textContent = new Date().toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  }
})();
