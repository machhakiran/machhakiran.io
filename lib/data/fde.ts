export interface DaySlot {
  time: string;
  description: string;
  phase: string;
}

export interface DayRule {
  title: string;
  description: string;
}

export interface WeekDay {
  day: string;
  description: string;
  phase: string;
}

export interface Deliverable {
  label: string;
}

export const daySchedule: DaySlot[] = [
  {
    time: '08:30',
    description:
      'On site before the team. Read yesterday\'s run log and the overnight errors — I want to know what broke before anyone tells me.',
    phase: 'Check',
  },
  {
    time: '09:00',
    description:
      'Stand with the operators. Watch the actual workflow being done, not the version in the process document. Note every exception they handle by hand.',
    phase: 'Observe',
  },
  {
    time: '10:30',
    description:
      'Whiteboard with whoever owns the data. Where does this field come from, who is allowed to see it, and what happens today when it is missing?',
    phase: 'Model',
  },
  {
    time: '11:30',
    description:
      'Build. Wire the tool, extend the agent, fix the retrieval that returned the wrong policy version this morning.',
    phase: 'Build',
  },
  {
    time: '14:00',
    description:
      'Run it against real cases from their own data. Add the ones that fail to the eval set so the same mistake cannot come back quietly.',
    phase: 'Evaluate',
  },
  {
    time: '16:00',
    description:
      'Show the operator, not the sponsor. Sit next to them while they use it and write down every hesitation — that is the real backlog.',
    phase: 'Show',
  },
  {
    time: '17:30',
    description:
      'Rebuild what they hesitated over. Small, same-day changes are what earn the right to keep coming back.',
    phase: 'Iterate',
  },
  {
    time: '18:30',
    description:
      'Write it down. What changed, what it cost, what is still open — a short note the sponsor can read in a minute and the next engineer can read in ten.',
    phase: 'Record',
  },
];

export const dayRules: DayRule[] = [
  {
    title: 'Ship something every day',
    description:
      'A working ugly thing today beats a beautiful design next week. Momentum is what keeps an engagement alive.',
  },
  {
    title: 'Show the operator first',
    description:
      'The person doing the work knows things no engineer will. If it does not survive their desk, it will not survive the rollout.',
  },
  {
    title: 'Escalate rather than guess',
    description:
      'Below the confidence threshold, the system asks a human. In a regulated estate a wrong answer costs more than a slow one.',
  },
  {
    title: 'Leave evidence',
    description:
      'Every run logs its prompts, tools, results and errors. If an auditor cannot replay it, it is not finished.',
  },
  {
    title: 'Build to hand over',
    description:
      'The engagement ends with their team running it — documented, tested and owned by someone who is not me.',
  },
];

export const weekDays: WeekDay[] = [
  {
    day: 'Monday',
    description:
      'On site. Back-to-back stakeholder interviews. Understand the workflow and who owns each step of it.',
    phase: 'Discover',
  },
  {
    day: 'Tuesday',
    description:
      'Whiteboard the domain. Sketch the object model. Identify the datasets the system actually needs.',
    phase: 'Model',
  },
  {
    day: 'Wednesday',
    description:
      'Pair with their data engineer to pull the first export. Stand up the pipeline and the retrieval layer.',
    phase: 'Plumb',
  },
  {
    day: 'Thursday',
    description:
      'Build the first working version of the operator\'s app and put it in front of them the same afternoon.',
    phase: 'Prototype',
  },
  {
    day: 'Friday',
    description:
      'They disliked the layout. Rebuild it, then show the sponsor something that runs end to end before the week closes.',
    phase: 'Iterate',
  },
];

export const cadence = ['Discover', 'Prototype', 'Show', 'Iterate'];

export const deliverables: Deliverable[] = [
  { label: 'A problem statement the customer signs off on.' },
  { label: 'A domain model — objects, links and actions — of their business.' },
  { label: 'Data integrations from their source systems.' },
  { label: 'Operational applications that their people use daily.' },
  { label: 'A deployment in their production environment, on their infrastructure.' },
  { label: 'An evaluation set and the runbook to keep quality honest.' },
  { label: 'A trained customer team that can run it without me.' },
];

export const fdeSourceNote = {
  text: 'This forward deployment playbook, daily operating rhythm, and engagement deliverables are authored and battle-tested by Kiran Machha across real-world client VPCs and air-gapped clusters — bridging high-level enterprise objectives with production-grade Sovereign AI and Autonomous Multi-Agent systems.',
  author: 'Kiran Machha',
  role: 'Forward Deployed AI Engineer & Technical Lead',
};
