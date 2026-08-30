export interface Clause {
  term: string;
  definition: string;
}

export interface TableRow {
  col1: string;
  col2: string;
  emph?: boolean;
}

export interface Beat {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface Step {
  title: string;
  description: string;
  human?: boolean;
}

export interface EvalCase {
  case: string;
  rightData: string;
  requiredSteps: string;
  matchesExpert: string;
  safeToAct: string;
}

export interface Stat {
  figure: string;
  label: string;
}

export interface Milestone {
  gate: string;
  title: string;
}

export interface DayCard {
  label: string;
  title: string;
  description: string;
  mark?: boolean;
}

export interface TimelinePhase {
  kicker: string;
  heading: string;
  goal: string;
  deliverables: DayCard[];
}

export const clauses: Clause[] = [
  { term: 'Business reality', definition: 'How the work actually happens today — tools, people, exceptions.' },
  { term: 'FDE judgment', definition: 'Where intelligence belongs, and where it does not.' },
  { term: 'Deployed AI system', definition: 'Working software carrying real responsibility inside the business.' },
];

export const commercialVsTechnical: TableRow[] = [
  { col1: 'Workflows', col2: 'Models' },
  { col1: 'Cost', col2: 'Systems' },
  { col1: 'Incentives', col2: 'APIs' },
  { col1: 'Risk', col2: 'Data' },
  { col1: 'Adoption', col2: 'Code' },
  { col1: 'Business value', col2: 'Reliability', emph: true },
];

export const methodBeats: Beat[] = [
  {
    number: 'Part 01',
    title: 'Audit',
    description: 'Identifies the right problem and maps reality. The documented process is rarely the real process, so the audit determines what should be automated before anyone begins building.',
    bullets: ['Interviews, emails, spreadsheets', 'SOPs, systems, approvals', 'Exception paths', 'Bottlenecks & repetitive work', 'Judgment points & failure modes'],
  },
  {
    number: 'Part 02',
    title: 'Evals',
    description: 'Turns non-determinism into evidence. A graded set of cases — normal, edge, incomplete, ambiguous, high-risk — produces a pass rate, failure categories and thresholds you can argue from.',
    bullets: ['Right data · required steps', 'Matches expert · safe to act', 'Pass rate & failure taxonomy', 'Confidence thresholds', 'Escalation rules'],
  },
  {
    number: 'Part 03',
    title: 'Deployment',
    description: 'Makes it work inside the business. Build over current data and systems, prove it in a sandbox, then grant authority only as reliability is demonstrated.',
    bullets: ['Existing data & internal APIs', 'Identity & permissions', 'Sandbox → production users', 'Human review, logs, alerts', 'Rollback'],
  },
];

export const operatingMapDeliverables = [
  'Current-state workflow — how the work actually happens today.',
  'Future-state workflow — the same work, rebuilt around AI.',
  'Selected use case — one workflow, chosen for value.',
  'Boundaries — what the system may and may not do.',
  'Expected business value — hours, cost and errors, quantified.',
];

export const currentStateSteps: Step[] = [
  { title: 'An email arrives', description: 'The trigger.' },
  { title: 'Copied into a spreadsheet', description: 'Re-keyed by hand.' },
  { title: 'Checked in an internal system', description: 'Tribal knowledge.' },
  { title: 'Approved in Slack', description: 'Waits on a reply.' },
  { title: 'Entered into the ERP', description: 'Forty required fields.' },
];

export const aiNativeSteps: Step[] = [
  { title: 'Deterministic software', description: 'Intake · validation · routing.' },
  { title: 'The agent acts', description: 'Gathers · decides · drafts.' },
  { title: 'A human approves', description: 'One clear decision.', human: true },
  { title: 'Record updated', description: 'The ERP, without re-keying.' },
];

export const automationOptions: Beat[] = [
  {
    number: 'Option 01',
    title: 'Deterministic software',
    description: 'When the rules and inputs are predictable.',
  },
  {
    number: 'Option 02',
    title: 'An agent',
    description: 'When the objective is clear but the inputs, path, or required actions vary.',
  },
  {
    number: 'Option 03',
    title: 'A human in control',
    description: 'When the decision carries material ambiguity, accountability, or irreversible consequences.',
  },
];

export const evalCases: EvalCase[] = [
  { case: 'The normal case', rightData: '✓', requiredSteps: '✓', matchesExpert: '✓', safeToAct: '✓' },
  { case: 'The edge case', rightData: '✓', requiredSteps: '✓', matchesExpert: '✗', safeToAct: '✗' },
  { case: 'Incomplete information', rightData: '✗', requiredSteps: '—', matchesExpert: '—', safeToAct: '→ human' },
  { case: 'An ambiguous request', rightData: '✓', requiredSteps: '✗', matchesExpert: '—', safeToAct: '→ human' },
  { case: 'A high-risk action', rightData: '✓', requiredSteps: '✓', matchesExpert: '✓', safeToAct: '→ human' },
];

export const evalStats: Stat[] = [
  { figure: '82%', label: 'Pass rate\n41 of 50 graded runs passed' },
  { figure: '9', label: 'Failed runs\nMissing data ×5 · wrong record pulled ×4' },
  { figure: '0.80', label: 'Confidence floor\nBelow it, the system must escalate' },
];

export const evalRules: Beat[] = [
  { number: 'Rule 01', title: 'Confidence', description: 'Below 0.80, the system must escalate rather than act.' },
  { number: 'Rule 02', title: 'Escalation', description: 'High-risk actions always reach a person, whatever the score.' },
  { number: 'Rule 03', title: 'Readiness', description: 'Pilot — with human review on every action.' },
];

export const deploySteps: Step[] = [
  { title: 'Integrate with what already exists', description: 'Build over the current data and systems rather than beginning with a large replacement project.' },
  { title: 'Test inside a controlled environment', description: 'Use a sandbox within the company\'s infrastructure to run, inspect and debug safely.' },
  { title: 'Increase autonomy gradually', description: 'Begin with the smallest useful action and grant more authority only after the system proves reliable.' },
];

export const deployLoop = ['Audit', 'Build', 'Evals', 'Deploy', 'Observe', 'Improve'];

export const deployItems = [
  { title: 'Existing data', subtitle: 'Build over, not around' },
  { title: 'Internal APIs', subtitle: 'The real integration surface' },
  { title: 'Identity & permissions', subtitle: 'Who the agent is allowed to be' },
  { title: 'Human review', subtitle: 'On every action, at pilot' },
  { title: 'Logs & alerts', subtitle: 'Evidence, not vibes' },
  { title: 'Rollback', subtitle: 'The condition of being allowed to ship' },
];

export const milestones: Milestone[] = [
  { gate: 'Gate 01 · Week 2', title: 'Problem signed off' },
  { gate: 'Gate 02 · Week 4', title: 'Prototype on real data' },
  { gate: 'Gate 03 · Week 8', title: 'Evaluated system' },
  { gate: 'Gate 04 · Week 12', title: 'In production, handed over' },
];

export const timelinePhases: TimelinePhase[] = [
  {
    kicker: 'Weeks 1–2 · Audit',
    heading: 'Find the workflow worth rebuilding.',
    goal: 'By week 2 we agree what we are building and what it is worth — in writing, before a line of production code exists.',
    deliverables: [
      { label: 'Deliverable', title: 'Stakeholder map', description: 'Who does the work, who owns the systems, who signs the release, and who quietly blocks it.' },
      { label: 'Deliverable', title: 'Current-state workflow', description: 'How the work actually happens today, traced step by step — including every exception handled by hand.' },
      { label: 'Deliverable', title: 'Future-state workflow', description: 'The same work rebuilt around AI, with the human decision points marked explicitly.' },
      { label: 'Deliverable', title: 'Data & access review', description: 'Where the records live, who may see them, and what the security boundary permits.' },
      { label: 'Deliverable', title: 'Boundaries', description: 'What the system may and may not do, and where autonomy stops.' },
      { label: 'Gate 01', title: 'Problem statement, signed', description: 'One use case, chosen for value, with the hours and errors it should remove quantified.', mark: true },
    ],
  },
  {
    kicker: 'Weeks 3–4 · Build',
    heading: 'Something real, on their data, in front of the people who do the work.',
    goal: 'By week 4 an operator has used it and told me what is wrong with it. That feedback is worth more than another month of design.',
    deliverables: [
      { label: 'Deliverable', title: 'Domain model', description: 'The objects, links and actions of their business — the spine everything else hangs from.' },
      { label: 'Deliverable', title: 'Data pipeline', description: 'A first real extract from the source systems, ingested and refreshed rather than hand-loaded.' },
      { label: 'Deliverable', title: 'Retrieval layer', description: 'Their corpus indexed, permission-aware, returning the right document with a citation.' },
      { label: 'Deliverable', title: 'Agent v1', description: 'The loop, the tools it may call, guardrails and a full audit trail from the first run.' },
      { label: 'Deliverable', title: 'Operator interface', description: 'The screen the actual user works in — not a notebook, not a chat window bolted on.' },
      { label: 'Gate 02', title: 'Working prototype', description: 'Running end to end on their own data, demonstrated to the people who will use it.', mark: true },
    ],
  },
  {
    kicker: 'Weeks 5–8 · Harden & evaluate',
    heading: 'Turn a demo into something on-call can defend.',
    goal: 'By week 8 we know how it fails, how often, what it costs per run, and what it does when it is unsure.',
    deliverables: [
      { label: 'Deliverable', title: 'Golden dataset', description: 'Real cases with hand-labelled correct outputs — normal, edge, ambiguous and high-risk.' },
      { label: 'Deliverable', title: 'Eval suite in CI', description: 'Correctness, format, tool selection and escalation behaviour, gated on every change.' },
      { label: 'Deliverable', title: 'Failure taxonomy', description: 'Named categories with counts, so "it sometimes gets it wrong" becomes a number.' },
      { label: 'Deliverable', title: 'Recovery behaviour', description: 'Checkpointing, resume, retries with backoff, and explicit rules for unsafe continuation.' },
      { label: 'Deliverable', title: 'Cost per run', description: 'Model routing, caching and token budgets, measured — not estimated.' },
      { label: 'Gate 03', title: 'Evaluation report', description: 'Pass rate, failure categories, confidence thresholds and the open risks, written down.', mark: true },
    ],
  },
  {
    kicker: 'Weeks 9–12 · Deploy & hand over',
    heading: 'Into production, then out of my hands.',
    goal: 'By week 12 it is live inside their estate and their team is running it. If that has not happened, the engagement has not finished.',
    deliverables: [
      { label: 'Deliverable', title: 'Deployment', description: 'On their infrastructure — on-premise, VPC or air-gapped — through their own release process.' },
      { label: 'Deliverable', title: 'Security review passed', description: 'Identity, permissions, data handling and audit trails signed off by the people whose job that is.' },
      { label: 'Deliverable', title: 'Monitoring & alerting', description: 'Self-hosted traces, quality and cost dashboards, with alerts that reach a human who can act.' },
      { label: 'Deliverable', title: 'Runbook', description: 'What breaks, how it looks when it does, and the first three things to try.' },
      { label: 'Deliverable', title: 'Team enablement', description: 'Their engineers extend it and their operators run it, while I am still there to answer.' },
      { label: 'Gate 04', title: 'Owned by their team', description: 'In production, adopted, and no longer dependent on me being in the room.', mark: true },
    ],
  },
];

export const workflowSourceNote = {
  text: 'The audit / evals / deployment framing draws on',
  link: 'https://learn.varickagents.com/fde-in-30-days',
  linkText: "Varick's guide to AI Forward Deployed Engineering",
  suffix: 'The twelve-week timeline and the gates are how I run it.',
};
