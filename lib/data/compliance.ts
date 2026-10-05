export interface ComplianceDocument {
  id: string;
  code: string;
  title: string;
  issuingAuthority: string;
  status: 'Active & Verified' | 'Current Renewal';
  validThrough: string;
  category: 'Statutory' | 'Regulatory' | 'Local Content' | 'Insurance';
  summary: string;
  verificationBadge: string;
  documentNumber: string;
}

export const COMPLIANCE_REGISTRY: ComplianceDocument[] = [
  {
    id: 'comp-cac',
    code: 'RC1459932',
    title: 'Certificate of Incorporation (CAC)',
    issuingAuthority: 'Corporate Affairs Commission (Federal Republic of Nigeria)',
    status: 'Active & Verified',
    validThrough: 'Perpetual (Incorporated Dec 2017)',
    category: 'Statutory',
    summary: 'Duly registered Nigerian limited liability engineering enterprise with registered corporate authority to execute mechanical, electrical, procurement, and technical training operations.',
    verificationBadge: 'RC 1459932 Verified',
    documentNumber: 'CAC/RC/1459932',
  },
  {
    id: 'comp-nuprc',
    code: 'NUPRC/OGS/2026/0882',
    title: 'NUPRC Specialized Petroleum Service Permit',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission (NUPRC)',
    status: 'Active & Verified',
    validThrough: 'December 2026 (Annual Validation)',
    category: 'Regulatory',
    summary: 'Accreditation to render heavy mechanical engineering, high-pressure valve testing and recertification, rotating equipment maintenance, and instrumentation services across upstream oilfield assets.',
    verificationBadge: 'NUPRC Category Specialized',
    documentNumber: 'NUPRC/PERM/SPEC/1459932-B',
  },
  {
    id: 'comp-nmdpra',
    code: 'NMDPRA/MID-DOWN/4921',
    title: 'NMDPRA Midstream & Downstream Petroleum Permit',
    issuingAuthority: 'Nigerian Midstream and Downstream Petroleum Regulatory Authority',
    status: 'Active & Verified',
    validThrough: 'December 2026',
    category: 'Regulatory',
    summary: 'Licensing for refinery equipment maintenance, crude storage terminal maintenance, high-pressure pipeline pigging/inspection, and cathodic protection system deployments.',
    verificationBadge: 'NMDPRA Major Category',
    documentNumber: 'NMDPRA/OP/2026/9932',
  },
  {
    id: 'comp-nogic-jqs',
    code: 'NOGIC-JQS-VEND-7821',
    title: 'NOGIC JQS Nigerian Content Verification',
    issuingAuthority: 'Nigerian Content Development and Monitoring Board (NCDMB)',
    status: 'Active & Verified',
    validThrough: 'Annual Certification in Good Standing',
    category: 'Local Content',
    summary: '100% Nigerian-owned and operated engineering entity with fully compliant domiciled fabrication yards, indigenous certified technical manpower, and active in-country value retention.',
    verificationBadge: 'NOGIC JQS Certified',
    documentNumber: 'NCDMB/JQS/CO/2026/7821',
  },
  {
    id: 'comp-firs-tax',
    code: 'TCC-FIRS-2026-004419',
    title: 'Federal Tax Clearance Certificate (TCC)',
    issuingAuthority: 'Federal Inland Revenue Service (FIRS)',
    status: 'Active & Verified',
    validThrough: 'Fiscal Year 2026 Compliant',
    category: 'Statutory',
    summary: 'Clean tax standing confirming full settlement of Company Income Tax (CIT), Value Added Tax (VAT), and Education Tax remittances for engineering operations.',
    verificationBadge: 'FIRS TCC Current',
    documentNumber: 'TCC/PH/2026/004419',
  },
  {
    id: 'comp-scuml',
    code: 'SCUML-RN-1459932-EFCC',
    title: 'SCUML Anti-Money Laundering Registration',
    issuingAuthority: 'Special Control Unit Against Money Laundering / EFCC',
    status: 'Active & Verified',
    validThrough: 'Certified In Good Standing',
    category: 'Statutory',
    summary: 'Compliance with anti-money laundering and combating financing of terrorism (AML/CFT) frameworks, ensuring transparent commercial transactions with international oil majors.',
    verificationBadge: 'SCUML / EFCC Compliant',
    documentNumber: 'SC/1459932/EFCC/NG',
  },
  {
    id: 'comp-itf-nsitf',
    code: 'ITF-NSITF-COMP-2026',
    title: 'ITF & NSITF Statutory Employee Protections',
    issuingAuthority: 'Industrial Training Fund & Nigeria Social Insurance Trust Fund',
    status: 'Active & Verified',
    validThrough: 'Valid Through 2026',
    category: 'Insurance',
    summary: 'Full compliance with employee training levies and comprehensive workplace compensation coverage protecting field engineers and technical apprentices.',
    verificationBadge: 'ITF & NSITF Dual Compliant',
    documentNumber: 'ITF/REG/1459932 | NSITF/ECS/9932',
  },
  {
    id: 'comp-gla',
    code: 'GLA-POL-CORP-8820',
    title: 'Comprehensive Group Life & Workmen Assurance',
    issuingAuthority: 'NAICOM Licensed Underwriter',
    status: 'Active & Verified',
    validThrough: 'Policy Year 2026/2027',
    category: 'Insurance',
    summary: 'Offshore and onshore employer liability insurance covering all mobilized engineers, welders, and technical personnel against industrial hazards, medical evacuation, and life risks.',
    verificationBadge: 'Group Life Policy Active',
    documentNumber: 'POL/GLA/MM/2026/8820',
  },
];

export const COMPANY_PROFILE = {
  name: 'Min-Max Engineering Services Ltd',
  registrationNumber: 'RC1459932',
  establishedDate: 'December 2017',
  managingDirector: 'Alabo Engr. Sopakiriba West (PhD)',
  vision: 'To be the premier engineering services provider for the development of the industrial sector.',
  mission: 'To provide world class products and services that will have a positive impact on the industrial sectors of Nigeria and beyond.',
  coreValues: [
    { title: 'Professional Excellence' },
    { title: 'Safety' },
    { title: 'Innovation' },
    { title: 'Creativity' },
    { title: 'Commitment' },
    { title: 'Integrity' },
  ],
  qaQcPolicy: 'Min-Max Engineering operates under a stringent Quality Assurance / Quality Control regime anchored on the foundational ethos: "Do it right the first time". Every overhauled valve, calibrated loop, and fabricated pipe spool undergoes rigorous witness testing and documented verification before leaving our facility.',
  hsePolicy: 'We place the health, safety, and physical welfare of our personnel, client stakeholders, and community hosts above all commercial considerations. We enforce proactive risk assessments, stop-work authority for every technician, and zero tolerance for unsafe practices.',
};
