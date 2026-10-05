export interface ServiceItem {
  id: string;
  category: 'mechanical' | 'electrical' | 'fabrication' | 'specialized';
  categoryLabel: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  testingCapabilities: string[];
  keyStandards: string[];
  features: string[];
  operationalScope: string;
  image?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Mechanical & Asset Integrity
  {
    id: 'valve-repair-recertification',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Asset Integrity',
    title: 'Valve Repair, Overhaul & Recertification',
    shortDesc: 'Comprehensive workshop and field refurbishment of ball, gate, globe, check, and pressure safety valves (PSVs).',
    fullDesc: 'Min-Max Engineering delivers complete valve lifecycle management. Our dedicated valve repair bay in Elelenwo, Port Harcourt handles severe service valves, body machining, lapping, seat/disc replacement, gland packing renewal, and precision recertification.',
    testingCapabilities: [
      'Hydrostatic Shell Testing up to 400 bar (5,800 psi)',
      'High-pressure gas/nitrogen seat leak testing (API 598 & API 6D)',
      'PSV Pop-test set pressure verification & bench calibration',
      'Non-Destructive Testing (Dye Penetrant, Magnetic Particle, Ultrasonic)',
    ],
    keyStandards: ['API 598', 'API 6D', 'API 527', 'ASME Section VIII Div 1', 'ISO 9001:2015'],
    features: [
      'On-site portable test bench deployment for turnaround maintenance',
      'Electronic digital certificate generation with torque log',
      'Stellite hard-facing and automated orbital welding refurbishment',
      'OEM gasket & seal kits integration (Jamesbury, Fisher, Cameron, Mokveld)',
    ],
    operationalScope: 'Offshore platforms, FPSOs, refinery processing trains, manifold stations',
    image: '/images/mechanical_valve_testing_1790592391076.jpg',
  },
  {
    id: 'pumps-compressors-overhaul',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Asset Integrity',
    title: 'Pumps, Compressors & Rotating Equipment Overhaul',
    shortDesc: 'Precision dynamic balancing, mechanical seal replacement, bearing replacement, and laser shaft alignment.',
    fullDesc: 'Full overhaul of multistage centrifugal pumps, positive displacement pumps, reciprocating compressors, and rotary screw compressors. We carry out precision dynamic balancing to ISO 1940 Grade G2.5, laser optical alignment, and complete mechanical seal retrofits.',
    testingCapabilities: [
      'Laser shaft and geometric alignment (within 0.02mm tolerance)',
      'FFT vibration spectrum baseline analysis & bearing health audit',
      'Hydrostatic casing pressure testing',
      'Lube oil flushing & particulate cleanliness certification (ISO 4406)',
    ],
    keyStandards: ['API 610', 'API 618', 'ISO 10816', 'ISO 1940 G2.5'],
    features: [
      'Single & double cartridge mechanical seal refurbishment',
      'Shaft sleeve precision machining and ceramic hard-coating',
      'Reverse engineering of discontinued pump impellers',
      '24/7 emergency breakdown crew dispatch for critical booster stations',
    ],
    operationalScope: 'Crude transfer stations, water injection skids, gas lift compressor platforms',
  },
  {
    id: 'corrosion-cathodic-protection',
    category: 'mechanical',
    categoryLabel: 'Mechanical & Asset Integrity',
    title: 'Corrosion Control, Cathodic Protection & Coating',
    shortDesc: 'Sacrificial anode and impressed current cathodic protection (ICCP), blast cleaning, and epoxy coating systems.',
    fullDesc: 'Combat aggressive marine and onshore pipeline corrosion. Min-Max provides specialized cathodic protection design, potential surveys (CIPS/DCVG), sacrificial zinc/aluminum anode installation, and industrial high-build epoxy coating systems compliant with ISO 12944 CX.',
    testingCapabilities: [
      'Close Interval Potential Surveys (CIPS) & Pearson surveys',
      'Direct Current Voltage Gradient (DCVG) coating defect surveys',
      'Holiday testing for micro-pinhole detection up to 35 kV',
      'Dry Film Thickness (DFT) and cross-hatch adhesion pull-off testing',
    ],
    keyStandards: ['NACE SP0169', 'NACE TM0497', 'ISO 12944 CX', 'SSPC-SP 10 / NACE No. 2'],
    features: [
      'Impressed Current Cathodic Protection (ICCP) transformer-rectifier skids',
      'Offshore riser splash-zone neoprene and thermal-spray aluminum wrapping',
      'Grit blasting to Sa 2.5 near-white metal standard',
      'Chemical corrosion inhibitor batch injection program setup',
    ],
    operationalScope: 'Subsea pipelines, jetty pilings, atmospheric storage tanks, crude export terminals',
  },

  // 2. Electrical, Instrumentation & Automation
  {
    id: 'electrical-switchboards-motors',
    category: 'electrical',
    categoryLabel: 'Electrical, Instrumentation & Control',
    title: 'Power Distribution, Switchboards & Motor Rewinding',
    shortDesc: 'Low and medium voltage switchgear maintenance, transformer servicing, and electric motor overhaul up to 500kW.',
    fullDesc: 'Min-Max manages critical power distribution infrastructure. We service air circuit breakers (ACBs), vacuum circuit breakers (VCBs), motor control centers (MCC), dry/oil transformers, and operate a clean-room electric motor rewind facility with VPI (Vacuum Pressure Impregnation).',
    testingCapabilities: [
      'Insulation resistance & Polarization Index (PI) testing up to 10 kV',
      'Primary & secondary current injection testing for protection relays',
      'Transformer oil dielectric breakdown voltage & dissolved gas analysis',
      'Thermal infrared thermography inspection of busbars and contacts',
    ],
    keyStandards: ['IEC 61439', 'IEEE Std 43', 'IEC 60076', 'NFPA 70E'],
    features: [
      'Class H and Class F copper winding with surge comparison testing',
      'Busbar torquing, silver-plating restoration, and contact resistance measurement',
      'Arc-flash mitigation retrofits for legacy MCC switchboards',
      'Emergency generator synchronization and load-bank validation',
    ],
    operationalScope: 'Gas turbine generator skids, refinery substations, offshore living quarters',
    image: '/images/electrical_automation_panel_1790592401334.jpg',
  },
  {
    id: 'plc-scada-process-automation',
    category: 'electrical',
    categoryLabel: 'Electrical, Instrumentation & Control',
    title: 'PLC / DCS Automation & Control Systems',
    shortDesc: 'Turnkey industrial control system integration, SCADA visualization, and field loop calibration.',
    fullDesc: 'From wellhead control panels to central distributed control systems (DCS), our certified automation engineers program, commission, and maintain Rockwell Allen-Bradley, Siemens S7, Schneider Modicon, and Honeywell Experion architectures.',
    testingCapabilities: [
      '4-20mA HART / Foundation Fieldbus end-to-end loop checking',
      'Safety Instrumented System (SIS) proof testing to IEC 61511 / SIL-2/3',
      'Network diagnostic packet analysis for Modbus TCP, Profinet & ControlNet',
      'Redundant power supply bump testing and failover verification',
    ],
    keyStandards: ['IEC 61131-3', 'IEC 61508', 'IEC 61511', 'ISA-88 / ISA-95'],
    features: [
      'Bespoke SCADA HMI graphical interface design with high-performance graphics',
      'Emergency shutdown (ESD) logic coding and interlock matrix validation',
      'Wellhead remote telemetry unit (RTU) solar-powered integration',
      'Cybersecurity hardening for operational technology (OT) industrial networks',
    ],
    operationalScope: 'Flow stations, gas plants, metering skids, FPSO topsides',
  },
  {
    id: 'fire-gas-detection-calibration',
    category: 'electrical',
    categoryLabel: 'Electrical, Instrumentation & Control',
    title: 'Fire & Gas Detection & Instrumentation Calibration',
    shortDesc: 'Precision multi-gas analyzers, flame detectors, acoustic leak detectors, and certified test gas bump verification.',
    fullDesc: 'Life-safety and environmental monitoring in hydrocarbon plants. We install, calibrate, and recertify flammable/toxic gas sensors (CH4, H2S, CO), optical flame detectors (UV/IR), smoke aspirators, and mass flow/density transmitters.',
    testingCapabilities: [
      'NIST-traceable calibration gas bump testing and zero/span adjustment',
      'Optical flame detector response time benchmarking',
      'Hydrostatic & pneumatic pressure transmitter 5-point calibration',
      'RTD and thermocouple temperature bath verification (-20°C to +450°C)',
    ],
    keyStandards: ['NFPA 72', 'IEC 60079', 'API RP 14C', 'ISA-75'],
    features: [
      'Portable calibration bench with Fluke document calibrators and HART communicators',
      'Traceable calibration certificate issuance compliant with DPR/NUPRC guidelines',
      'Acoustic ultrasound leak detection for hazardous process piping',
      'Zoned intrinsically safe (Ex d, Ex ia) explosion-proof equipment compliance',
    ],
    operationalScope: 'Wellheads, compressor sheds, chemical storage bunkers, battery rooms',
  },

  // 3. Welding, Structural Fabrication & Civil Works
  {
    id: 'structural-steel-fabrication',
    category: 'fabrication',
    categoryLabel: 'Welding, Structural Fabrication & Civil Works',
    title: 'Heavy Structural Steel Fabrication & Piping Spools',
    shortDesc: 'Certified MIG, TIG, SMAW, and SAW welding of high-pressure piping spools, skid packages, and structural decks.',
    fullDesc: 'Min-Max operates equipped fabrication bays in Port Harcourt with heavy overhead lifting, plate rolls, sub-arc welding stations, and calibrated beveling machinery. We fabricate high-pressure process piping spools (carbon steel, stainless, duplex) and offshore structural modules.',
    testingCapabilities: [
      '100% Radiographic Testing (RT) and Ultrasonic Testing (UT)',
      'Magnetic Particle (MT) & Liquid Penetrant Testing (PT) by ASNT Level II inspectors',
      'Post-Weld Heat Treatment (PWHT) with calibrated chart recorders',
      'Positive Material Identification (PMI) using XRF spectrometers',
    ],
    keyStandards: ['ASME B31.3', 'ASME B31.8', 'AWS D1.1', 'API 1104', 'ASME Section IX'],
    features: [
      'Welder Performance Qualifications (WPQ) certified for 6G and 6GR positions',
      'Pre-qualified Welding Procedure Specifications (WPS) and PQR database',
      'Modular equipment skids with integrated drip pans and lifting slings',
      '3D laser scanning for tie-in spool precision fit-up prior to offshore barge transit',
    ],
    operationalScope: 'Offshore platform jackets, topside structural skids, manifold frames, tank farms',
    image: '/images/structural_welding_fabrication_1790592411900.jpg',
  },
  {
    id: 'civil-foundations-infrastructure',
    category: 'fabrication',
    categoryLabel: 'Welding, Structural Fabrication & Civil Works',
    title: 'Civil Foundations, Equipment Bases & Industrial Works',
    shortDesc: 'Heavy equipment concrete plinths, dynamic machine foundations, bund walls, culverts, and access roads.',
    fullDesc: 'Civil engineering tailored for industrial environments. We construct reinforced concrete foundations for heavy compressors, dynamic pumps, and storage vessels, as well as impermeable containment bunds, drainage networks, and heavy-haul access roads.',
    testingCapabilities: [
      'Concrete core compression crushing strength tests (7, 14, 28-day)',
      'Soil compaction testing (Proctor density & California Bearing Ratio CBR)',
      'Rebar magnetic cover-meter scanning and reinforcement mapping',
      'Dynamic settlement monitoring of vibrating machinery plinths',
    ],
    keyStandards: ['ACI 318', 'BS 8110', 'BS 8007 (Liquid retaining structures)', 'ASTM C39'],
    features: [
      'Anti-vibration mass blocks designed for reciprocating compressors',
      'Chemical-resistant epoxy and polyurethane bund linings for hydrocarbon containment',
      'Cast-in-place anchor bolt placement using precision steel templates',
      'Heavy-duty storm water runoff oil-water separator integration',
    ],
    operationalScope: 'Refinery tank farms, power substations, compressor stations, logistics yards',
  },

  // 4. Specialized Facilities & HVAC
  {
    id: 'industrial-hvac-refrigeration',
    category: 'specialized',
    categoryLabel: 'Specialized Facilities & HVAC',
    title: 'Industrial HVAC, Pressurization & Marine Refrigeration',
    shortDesc: 'Hazardous area HVAC systems, living quarters pressurization, explosion-proof chillers, and ductwork.',
    fullDesc: 'Engineered climate control for explosive gas atmospheres (Zone 1 and Zone 2). We install and service explosion-proof ATEX/IECEx HVAC package units, control room positive pressurization systems, marine chillers, and deep-freeze provisions refrigeration.',
    testingCapabilities: [
      'Control room differential pressure continuous monitoring (>50 Pa positive)',
      'Airflow velocity and CFM balancing using calibrated balometers',
      'Refrigerant moisture and acidity oil testing (R-134a, R-407C, R-410A)',
      'Acoustic sound pressure decibel surveys inside control environments',
    ],
    keyStandards: ['NFPA 496', 'ASHRAE 62.1', 'ATEX Directive 2014/34/EU', 'IEC 60079-13'],
    features: [
      'Explosion-proof hermetic scroll compressors with spark-resistant copper-nickel coils',
      'Chemical carbon air scrubber filters for hydrogen sulfide (H2S) absorption',
      'Emergency shutdown (ESD) smoke damper automatic actuation tie-in',
      'Redundant 100% duty/standby dual refrigeration circuits with automatic rollover',
    ],
    operationalScope: 'Offshore living quarters (LQ), analyzer houses, substation switchgear rooms',
  },
  {
    id: 'hydro-blasting-chemical-cleaning',
    category: 'specialized',
    categoryLabel: 'Specialized Facilities & HVAC',
    title: 'Ultra High-Pressure Hydro-Blasting & Chemical Cleaning',
    shortDesc: 'Hydro-jetting up to 2,800 bar (40,000 psi) for heat exchanger tube bundles, tanks, and process lines.',
    fullDesc: 'Non-destructive industrial cleaning of fouled heat exchanger tubes, columns, vessel internal walls, and subsea structures. Using automated rotodrive nozzles and high-volume triplex pumps, we remove stubborn calcium scale, crude polymer wax, and heavy coke deposits.',
    testingCapabilities: [
      'Borescope internal optical camera tube bundle cleanliness inspections',
      'Hydrostatic proof testing of cleaned tube bundles to TEMA standards',
      'Effluent pH and hydrocarbon neutralization monitoring',
      'Surface profile roughness measurement post-jetting',
    ],
    keyStandards: ['TEMA Standards', 'WJ-1 / WJ-4 Waterjet Cleaning Standards', 'NACE No. 5'],
    features: [
      'Automated multi-lance bundle cleaners with operator blast cabin safety',
      'Hot chemical circulation cleaning (organic acids & passivation)',
      'No abrasive media residue, reducing environmental disposal overheads',
      'Self-contained mobile water recycling and sludge filtration units',
    ],
    operationalScope: 'Refinery heat exchangers, reboilers, crude distillation columns, FPSO ballast tanks',
  },
];
