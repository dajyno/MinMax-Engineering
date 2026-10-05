export interface TrainingCourse {
  id: string;
  code: string;
  title: string;
  category: string;
  duration: string;
  practicalHours: number;
  theoryHours: number;
  certifications: string;
  targetAudience: string;
  prerequisites: string;
  syllabus: {
    module: string;
    topics: string[];
  }[];
  upcomingBatches: string[];
}

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'course-oil-gas-processes',
    code: 'MMT-OGP-101',
    title: 'Oil & Gas Production Processes & Facility Operations',
    category: 'Process Engineering',
    duration: '2 Weeks (Full-Time) / 4 Weeks (Executive Weekend)',
    practicalHours: 40,
    theoryHours: 40,
    certifications: 'Min-Max Engineering Technical Diploma & Industry CPD Certificate',
    targetAudience: 'Process operators, production technicians, junior petroleum engineers, facilities engineers',
    prerequisites: 'Basic diploma or B.Sc in science/engineering discipline',
    syllabus: [
      {
        module: 'Module 1: Reservoir to Separator Dynamics',
        topics: [
          'Wellhead Christmas tree valve lineups, chokes, and subsea tie-ins',
          'Two-phase and three-phase separator internal hydraulics and retention physics',
          'Emulsion breaking, demulsifier dosing, and crude stabilization columns',
        ],
      },
      {
        module: 'Module 2: Gas Treatment & Compression',
        topics: [
          'Gas dehydration using Triethylene Glycol (TEG) contactors and reboilers',
          'Amine gas sweetening units for H2S and CO2 removal',
          'Reciprocating vs centrifugal compressor staging, surge control, and anti-surge loops',
        ],
      },
      {
        module: 'Module 3: Produced Water & Utility Systems',
        topics: [
          'Hydrocyclones, induced gas flotation (IGF) units, and skim piles',
          'Instrument air packages, nitrogen generation membranes, and flare knockout drums',
          'Safe shutdown protocols, relief blowdown systems, and emergency depressurization (EDP)',
        ],
      },
    ],
    upcomingBatches: ['October 14, 2026', 'November 11, 2026', 'January 13, 2027'],
  },
  {
    id: 'course-instrumentation-maintenance',
    code: 'MMT-INS-202',
    title: 'Industrial Instrumentation Maintenance & Field Calibration',
    category: 'Instrumentation',
    duration: '3 Weeks Hands-On Workshop',
    practicalHours: 65,
    theoryHours: 35,
    certifications: 'NUPRC-Aligned Instrumentation Competency Certificate',
    targetAudience: 'Instrumentation technicians, E&I maintenance leads, field service engineers',
    prerequisites: 'Electrical or Electronics technical background',
    syllabus: [
      {
        module: 'Module 1: Primary Sensing Elements & Transmitters',
        topics: [
          'Differential pressure (DP) cells, capacitive sensors, and orifice plate calculations',
          'Coriolis mass flowmeters, electromagnetic flowmeters, and ultrasonic transit-time meters',
          'Radar level transmitters (guided wave vs non-contact 80GHz) in pressurized vessels',
        ],
      },
      {
        module: 'Module 2: HART Protocol & Bench Calibration',
        topics: [
          'Fluke 754/752 document calibrators and Rosemount 475/TrexFibre communicators',
          '5-point calibration procedure, hysteresis calculation, and tolerance limits (±0.1% FS)',
          'Zero elevation, suppression, and hydrostatic wet-leg/dry-leg compensations',
        ],
      },
      {
        module: 'Module 3: Control Valve Actuation & Positioners',
        topics: [
          'Bench set spring tensioning, packing gland adjustment, and diaphragm replacement',
          'Digital valve positioner auto-tuning and stroke speed adjustments',
          'Troubleshooting sticky stems, cavitation erosion, and flashing damage',
        ],
      },
    ],
    upcomingBatches: ['October 21, 2026', 'November 25, 2026', 'February 03, 2027'],
  },
  {
    id: 'course-automation-control-systems',
    code: 'MMT-AUT-303',
    title: 'PLC / SCADA Automation & Safety Instrumented Systems (SIS)',
    category: 'Automation & Control',
    duration: '3 Weeks Intensive',
    practicalHours: 70,
    theoryHours: 30,
    certifications: 'Certified Industrial Automation Specialist (Min-Max Certified)',
    targetAudience: 'Automation engineers, system integrators, control room technicians, electrical supervisors',
    prerequisites: 'Familiarity with digital logic and industrial electrical controls',
    syllabus: [
      {
        module: 'Module 1: PLC Architecture & Ladder/Function Block Coding',
        topics: [
          'Allen-Bradley ControlLogix 5580 & Siemens S7-1500 hardware configuration',
          'IEC 61131-3 programming: Ladder diagram (LD), Function Block (FBD), Structured Text (ST)',
          'Analog scaling (4-20mA to engineering units) and PID controller loop tuning',
        ],
      },
      {
        module: 'Module 2: Industrial Communications & SCADA Design',
        topics: [
          'Modbus TCP/IP, Profinet, Ethernet/IP, and OPC-UA client/server configurations',
          'High-performance HMI design, alarm shelving, and real-time trending screens',
          'Fail-safe network topologies: Device Level Ring (DLR) and Redundant Ring Switches',
        ],
      },
      {
        module: 'Module 3: Safety Systems (SIS) & ESD Logic',
        topics: [
          'IEC 61508 / IEC 61511 functional safety lifecycle and SIL 2/3 voting architectures (1oo2, 2oo3)',
          'Cause & Effect (C&E) matrix programming and Emergency Shutdown (ESD) interlocks',
          'Fire & Gas system voting logic and deluge valve release sequence testing',
        ],
      },
    ],
    upcomingBatches: ['November 04, 2026', 'December 02, 2026', 'January 20, 2027'],
  },
  {
    id: 'course-mechanical-rotating-equipment',
    code: 'MMT-MEC-404',
    title: 'Pumps, Compressors & Mechanical Seal Overhaul',
    category: 'Mechanical Engineering',
    duration: '2 Weeks Practical Workshop',
    practicalHours: 55,
    theoryHours: 25,
    certifications: 'Certified Rotating Equipment Overhaul Technician',
    targetAudience: 'Mechanical technicians, plant millwrights, reliability inspectors, maintenance fitters',
    prerequisites: 'Mechanical engineering diploma or 2 years plant maintenance experience',
    syllabus: [
      {
        module: 'Module 1: Centrifugal Pump Teardown & Inspection',
        topics: [
          'Impeller wear ring clearances, axial play, and runout measurements using dial indicators',
          'Mechanical seal failure modes: thermal cracking, dry running, and chemical attack',
          'API 682 seal piping plans (Plan 11, 23, 52, 53A/B) installation and maintenance',
        ],
      },
      {
        module: 'Module 2: Precision Laser Alignment & Dynamic Balancing',
        topics: [
          'Laser alignment tool setup (Prüftechnik / Easy-Laser) for horizontal and vertical shafts',
          'Thermal growth compensation calculations and soft-foot elimination',
          'Single-plane and dual-plane dynamic balancing on workshop balancing rigs to ISO 1940',
        ],
      },
      {
        module: 'Module 3: Vibration Analysis & Bearing Overhaul',
        topics: [
          'Rolling element bearing frequencies (BPFO, BPFI, BSF, FTF) identification on FFT spectrum',
          'Hydraulic bearing dismounting, induction heating mounting (up to 110°C), and radial internal clearance (RIC)',
          'Lubrication regimes, grease compatibility charts, and oil cleanliness monitoring',
        ],
      },
    ],
    upcomingBatches: ['October 28, 2026', 'December 09, 2026', 'February 10, 2027'],
  },
  {
    id: 'course-welding-fabrication',
    code: 'MMT-WLD-505',
    title: 'Certified 6G Pipe Welding & Non-Destructive Testing (NDT)',
    category: 'Fabrication & Welding',
    duration: '4 Weeks Full Workshop Immersion',
    practicalHours: 110,
    theoryHours: 30,
    certifications: 'AWS D1.1 / ASME Section IX Welder Qualification Test Record (WQTR)',
    targetAudience: 'Welders seeking offshore 6G/6GR certification, QA/QC welding inspectors, fabricators',
    prerequisites: 'Basic welding experience (SMAW/GMAW)',
    syllabus: [
      {
        module: 'Module 1: SMAW & GTAW 6G Pipe Welding Mastery',
        topics: [
          'TIG (GTAW) root run with argon purge on carbon steel and stainless steel pipes',
          'E7018-1 low-hydrogen fill and cap passes in 6G inclined fixed position (45°)',
          'Heat input control, interpass temperature monitoring, and bevel preparation geometry',
        ],
      },
      {
        module: 'Module 2: Welding Metallurgy & Defect Prevention',
        topics: [
          'Hydrogen-induced cracking (HIC), lamellar tearing, and incomplete root penetration',
          'Preheat calculation based on carbon equivalent (CE) and joint restraint thickness',
          'Welding Procedure Specification (WPS) interpretation and Procedure Qualification Record (PQR)',
        ],
      },
      {
        module: 'Module 3: NDT Inspection Methods',
        topics: [
          'Visual inspection (VT) using weld profile gauges and pit depth indicators',
          'Liquid Penetrant Testing (PT) and Magnetic Particle Testing (MT) procedures',
          'Radiographic Testing (RT) film interpretation and Ultrasonic Testing (UT) flaw sizing',
        ],
      },
    ],
    upcomingBatches: ['October 14, 2026', 'November 18, 2026', 'January 06, 2027'],
  },
];

export interface ManpowerRole {
  id: string;
  title: string;
  category: 'supervisory' | 'engineering' | 'craft' | 'hse';
  description: string;
  certificationsHeld: string[];
  mobilizationTime: string;
  offshoreReady: boolean;
  typicalDeployment: string;
}

export const MANPOWER_ROLES: ManpowerRole[] = [
  {
    id: 'mp-project-manager',
    title: 'Offshore / Turnaround Project Manager',
    category: 'supervisory',
    description: 'Senior project management specialists with 12+ years directing major offshore shutdown turnarounds, refinery revamp projects, and brownfield installations.',
    certificationsHeld: ['PMP / Prince2', 'BOSIET / OPITO Certified', 'NEBOSH IGC', 'COREN Registered'],
    mobilizationTime: '72 Hours',
    offshoreReady: true,
    typicalDeployment: 'Offshore FPSO turnarounds, refinery major overhauls, pipeline replacement projects',
  },
  {
    id: 'mp-ei-supervisor',
    title: 'Electrical & Instrumentation (E&I) Supervisor',
    category: 'supervisory',
    description: 'Experienced supervisors directing multidisciplinary crews for cabling, loop checks, hazardous area Ex inspection, and switchgear commissioning.',
    certificationsHeld: ['CompEx Ex01-Ex04 Certified', 'BOSIET with CA-EBS', 'COREN Technologist', 'First Aid Level 3'],
    mobilizationTime: '48 Hours',
    offshoreReady: true,
    typicalDeployment: 'Offshore production platforms, gas processing plant commissioning, LNG train overhauls',
  },
  {
    id: 'mp-automation-engineer',
    title: 'Lead PLC / DCS Automation Engineer',
    category: 'engineering',
    description: 'Specialists in Emerson DeltaV, Honeywell Experion, and Rockwell Allen-Bradley architectures. Capable of on-site logic troubleshooting and SIS proof-testing.',
    certificationsHeld: ['TÜV Functional Safety Engineer', 'OEM Certified Systems Specialist', 'BOSIET / OGUK Medical'],
    mobilizationTime: '24 - 48 Hours',
    offshoreReady: true,
    typicalDeployment: 'Emergency plant trip diagnosis, wellhead RTU commissioning, turbine control retrofits',
  },
  {
    id: 'mp-6g-welder',
    title: 'Certified 6G / 6GR High-Pressure Pipe Welder',
    category: 'craft',
    description: 'Precision pipe welders with valid ASME IX / AWS D1.1 certifications in SMAW and GTAW (TIG) processes. Verified 98%+ radiographic pass rates on process piping.',
    certificationsHeld: ['ASME IX 6G/6GR Certified (Stamp Held)', 'BOSIET / HUET', 'Confined Space Entry'],
    mobilizationTime: '24 Hours',
    offshoreReady: true,
    typicalDeployment: 'Riser repairs, deck structural tie-ins, high-pressure manifold fabrication spools',
  },
  {
    id: 'mp-mechanical-fitter',
    title: 'Precision Mechanical Millwright / Valve Fitter',
    category: 'craft',
    description: 'Specialists in high-pressure valve lapping, mechanical seal installation, dynamic pump teardown, and laser shaft alignment.',
    certificationsHeld: ['Trade Test 1 (Mechanical Engineering)', 'Laser Alignment Specialist', 'OPITO BOSIET'],
    mobilizationTime: '24 Hours',
    offshoreReady: true,
    typicalDeployment: 'Turnaround valve overhaul crews, pump station maintenance, compressor overhaul squads',
  },
  {
    id: 'mp-hse-officer',
    title: 'Certified Offshore HSE Officer / Safety Specialist',
    category: 'hse',
    description: 'HSE practitioners enforcing Permit to Work (PTW), Job Safety Analysis (JSA), incident investigation, and zero-harm environmental stewardship.',
    certificationsHeld: ['NEBOSH International Diploma / IGC', 'ISPON Level 3 Certified', 'BOSIET / OPITO', 'Lead Auditor ISO 45001'],
    mobilizationTime: '48 Hours',
    offshoreReady: true,
    typicalDeployment: 'Drilling rig safety monitoring, offshore barge operations, confined space cleaning supervision',
  },
];
