export interface FacilityInfo {
  id: string;
  name: string;
  type: 'Corporate Headquarters' | 'Heavy Engineering Workshop' | 'Liaison & Commercial Office';
  address: string;
  city: string;
  state: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  operatingHours: string;
  specializedAssets: string[];
  keyCapabilities: string[];
  locationCoordinates: { lat: number; lng: number };
}

export const FACILITIES_DATA: FacilityInfo[] = [
  {
    id: 'facility-head-office',
    name: 'Corporate Headquarters & Project Office',
    type: 'Corporate Headquarters',
    address: '12 Mayawada Lane, Akpa Rumuodor (Opposite Community Secondary School), Ogbogoro Town',
    city: 'Port Harcourt',
    state: 'Rivers State, Nigeria',
    phonePrimary: '+234 701 049 7911',
    phoneSecondary: '+234 812 544 1614',
    email: 'info@minmaxengineering.com',
    operatingHours: '',
    specializedAssets: [
      'Engineering Design & P&ID Workstations',
      'Technical Procurement Command & ERP Center',
      'Client Tender & Contracting Conference Suites',
      'Regulatory & Compliance Records Archive',
    ],
    keyCapabilities: [
      'Executive Leadership & Governance',
      'Turnaround Contract Management',
      'Engineering Consulting & Structural Calculations',
      'Client Relations & IOC Tender Submissions',
    ],
    locationCoordinates: { lat: 4.8395, lng: 6.9421 },
  },
  {
    id: 'facility-workshop-elelenwo',
    name: 'Port Harcourt Branch Office',
    type: 'Heavy Engineering Workshop',
    address: '10 Street A, Eliminigwe Estate, Phase 1, Elelenwo',
    city: 'Port Harcourt',
    state: 'Rivers State, Nigeria',
    phonePrimary: '+234 701 049 7911',
    phoneSecondary: '+234 812 544 1614',
    email: 'workshop@minmaxengineering.com',
    operatingHours: '24/7 Operations for Turnaround & Emergency Breakdowns',
    specializedAssets: [
      '400-Bar (5,800 PSI) Hydrostatic Valve Test Benches',
      'Nitrogen Gas High-Pressure Seat Leak Verification Skids',
      'Dynamic Balancing Rig to ISO 1940 Grade G2.5',
      'Heavy Overhead Gantry Cranes (20-Tonne Capacity)',
      'Submerged Arc Welding (SAW) & Automated Pipe Beveling Stations',
      'Clean-Room Electric Motor Rewind & VPI Chamber',
    ],
    keyCapabilities: [
      'PSV Recertification & Pop-Testing to API 527',
      'Multistage Pump & Compressor Overhaul',
      'Piping Spool Fabrication (Carbon & Stainless Steel)',
      'Abrasive Blast Cleaning (Sa 2.5) & Epoxy Coating Bay',
    ],
    locationCoordinates: { lat: 4.8214, lng: 7.0712 },
  },
  {
    id: 'facility-lagos-branch',
    name: 'Lagos Branch',
    type: 'Liaison & Commercial Office',
    address: '54 Greenville Estate, Off Badore Road, Ajah',
    city: 'Lagos',
    state: 'Lagos State, Nigeria',
    phonePrimary: '+234 701 049 7911',
    phoneSecondary: '+234 812 544 1614',
    email: 'lagos@minmaxengineering.com',
    operatingHours: 'Monday - Friday: 08:30 - 17:00',
    specializedAssets: [
      'Air & Sea Cargo Port Clearing & Transit Warehouse',
      'Procurement Expediting & OEM Inspection Center',
      'Corporate Client Liaison & Executive Briefing Suite',
    ],
    keyCapabilities: [
      'Immediate Western Nigeria IOC / Energy Client Coverage',
      'Import Logistics & Fast-Track Customs Clearance via Apapa / Onne Ports',
      'Vendor Expediting & Quality Witness Inspection',
    ],
    locationCoordinates: { lat: 6.4698, lng: 3.5852 },
  },
];
