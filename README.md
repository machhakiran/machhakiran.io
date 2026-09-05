# machhakiran.io

Personal site for **Kiran Machha** — Forward Deployed AI Engineer.

Static, no build step, no dependencies:

| File | Purpose |
| --- | --- |
| `index.html` | Front page — lead, capabilities, stack, domains, projects, experience, work, contact |
| `portrait.jpg` | Profile photo, 300×300, cropped square (rounded by CSS) |
| `fde.html` | “A Day in the FDE” — how a deployment day and week actually run |
| `workflow.html` | “The FDE Workflow” — the engagement method and twelve-week timeline |
| `styles.css` | Editorial broadsheet layout, colour tokens, responsive rules |
| `script.js` | Theme toggle, scroll reveal, active nav state |

All three pages share `styles.css` and `script.js`, and cross-link through the red tabs at
the right-hand end of the nav strip.

## Run locally

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Design

An editorial / newspaper treatment: a masthead with dateline, mono kickers, hairline
column rules, drop caps and ink-on-paper emphasis.

**Type** — Fraunces (display), Newsreader (body), IBM Plex Mono (labels), served from
Google Fonts.

**Colour** — defined as CSS custom properties at the top of `styles.css`:

```
--cream  #FAF7F0   paper
--ink    #141310   type
--faint  #8F8A7E   secondary
--hair   #D8D3C6   rules
--red    #B3261E   accent
```

There is no highlighter colour. Emphasis is carried by ink (solid blocks, underlines,
rules) with red reserved for kickers, tags, hover states and gate markers.

Dark mode follows the OS by default and can be overridden with the Day/Night toggle in
the dateline (stored in `localStorage` under `mk-theme`). The dark palette is a second
set of values for the same tokens — edit those blocks to retune it.

## Editing content

Everything is plain HTML in `index.html`, section by section:

- `#lead` — the positioning statement plus the profile card (portrait, availability badge,
  fast facts, contact buttons, engagement notices)
- `#capabilities` — the six areas: AI agents, model tuning & training, AI infrastructure,
  AI observability, sovereign & on-premise AI, enterprise integration
- `#domains` — banking, payments, telecom, logistics, ecommerce, government & healthcare
- `#projects` — twelve solution write-ups across banking, payments, telecom, logistics,
  ecommerce and government. Each card carries Problem / Agents / Controls rows plus an
  open-source stack line
- `#stack` — the canonical open-source stack, by layer (models, inference, training,
  agents, vector/data, Kubernetes & GPU, observability, access)
- `#experience` — the ledger of roles
- `#work` — selected repositories
- `#wire` — contact

### The FDE page (`fde.html`)

- `#day` — a deployment day hour by hour, plus the five rules I work by
- `#week` — the weekly discover → prototype → show → iterate loop
- `#outputs` — what ships at the end of a 6–12 week engagement

The weekly cadence, daily routine, operating rules, and deliverables are Kiran Machha's
own battle-tested methodology developed through on-site enterprise deployments.

### The workflow page (`workflow.html`)

- `#thesis` — why deployment, not model access, is the advantage
- `#job` — the method: audit, evals, deployment, plus the five-part operating map
- `#workflow` — the invoice example, current state vs AI-native, and the automation decision
- `#evals` — the five-case grading table and the evaluation report figures
- `#deploy` — the three deployment rules and the audit → build → evals → deploy → observe loop
- `#timeline` — the twelve-week engagement: four gates, with deliverables under each

The audit / evals / deployment framing draws on
[Varick's guide to AI Forward Deployed Engineering](https://learn.varickagents.com/fde-in-30-days),
credited in a source note. The twelve-week timeline, the gates and the deliverables are
original — edit them to match how you actually scope an engagement.

### One source of truth for tooling

The `#stack` section is the canonical tooling list. Capability and domain cards carry
**no** tool names at all — they describe outcomes — so the stack cannot contradict them.
Project and experience entries keep one short contextual stack line each, naming only what
that specific piece of work used. When adding a technology, add it to `.layers` first.

### Replacing the portrait

`portrait.jpg` is a 300×300 square cropped from the original photo; the circle, the
grey-to-colour hover and the ring come from `.portrait img` in `styles.css`. To swap it,
drop in another square image at the same path — crop so the eyes sit around a third of the
way down, since the frame is circular.

### ⚠️ Placeholders to replace

**Projects** (`#projects` in `index.html`) are solution designs built on enterprise use
cases that are widely published and discussed — agentic invoice and cheque OCR, card
dispute handling, fraud triage, month-end close, corporate RAG, sovereign inference,
telecom voice and NOC assistants, freight document and dock vision, product discovery, and
guardrails/observability. They are **not client case studies**: no customer names, dates or
metrics are claimed, because none were supplied.

Two things to do before sending this to anyone:

1. **Cut what you have not built.** Twelve is a strong portfolio only if every one is
   defensible in an interview. Delete any card you could not talk through for ten minutes.
2. **Add real outcomes.** Volumes, accuracy, latency, hours or cost saved. That is what
   turns a credible design into evidence.


The **experience** section is marked with an HTML comment. Only the current role
(KaviAI, Singapore) comes from public sources; the three earlier entries use the
domains named in the GitHub bio — *banking, payments, SaaS* — as stand-ins.

Replace the `<div class="when">` date ranges and `<div class="org">` employer names with
the real ones before publishing.

## Deploying

**GitHub Pages** — push to a repo, then Settings → Pages → deploy from branch (root).
Add a `CNAME` file containing `machhakiran.io` and point an `ALIAS`/`A` record at
GitHub's Pages IPs.

**Netlify / Vercel / Cloudflare Pages** — drop the folder in; no build command, publish
directory is the root.
