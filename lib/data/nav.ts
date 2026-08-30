export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Profile', href: '#profile' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const fdeNavLinks: NavLink[] = [
  { label: 'The Day', href: '#day' },
  { label: 'The Week', href: '#week' },
  { label: 'What Ships', href: '#outputs' },
];

export const workflowNavLinks: NavLink[] = [
  { label: 'Why', href: '#thesis' },
  { label: 'The Method', href: '#job' },
  { label: 'The Rebuild', href: '#workflow' },
  { label: 'Evals', href: '#evals' },
  { label: 'Deploy', href: '#deploy' },
  { label: 'Timeline', href: '#timeline' },
];
