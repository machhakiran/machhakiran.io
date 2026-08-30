export interface Domain {
  sector: string;
  title: string;
  description: string;
  built: string;
}

export const domains: Domain[] = [
  {
    sector: 'Banking',
    title: 'Regulated by default',
    description:
      'Document-heavy processes with an auditor at the end of them. Nothing ships without a trail showing what the system saw and why it acted.',
    built: 'Cheque & invoice OCR · Corporate RAG · Evidence logs · Human approval gates',
  },
  {
    sector: 'Payments',
    title: 'Latency and reconciliation',
    description:
      'High-volume flows where a duplicate is worse than a delay, and a wrongly held transaction is a customer lost.',
    built: 'Fraud scoring & alert triage · Card disputes · Reconciliation · Idempotent retries',
  },
  {
    sector: 'Telecom',
    title: 'Volume and voice',
    description:
      'Enormous ticket and call volumes where a few points of deflection is real money, and the NOC never stops.',
    built: 'STT / TTS care agents · Alarm correlation · Runbook automation · Knowledge retrieval',
  },
  {
    sector: 'Logistics',
    title: 'Documents in motion',
    description:
      'Paperwork that travels with the freight and arrives as photographs, plus disputes that hinge on what a pallet looked like on arrival.',
    built: 'Bill-of-lading & customs OCR · Dock damage vision · Exception routing · Edge inference',
  },
  {
    sector: 'Ecommerce',
    title: 'Intent, at speed',
    description:
      'Consumer-facing AI judged on responsiveness and taste, where every extra hundred milliseconds is measurable in conversion.',
    built: 'Semantic product discovery · Recommendations · Returns & refunds · Support deflection',
  },
  {
    sector: 'Government & healthcare',
    title: 'Sovereignty first',
    description:
      'Estates where the data legally cannot leave, autonomy is granted last, and the audit chain has to belong to the institution.',
    built: 'On-prem & air-gapped inference · PII redaction · Citizen & clinical retrieval · Owned audit trail',
  },
];
