'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Wrench,
  Cpu,
  Layers,
  Shield,
  ShoppingBag,
  GraduationCap,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Building,
  Factory,
  Flame,
  Zap,
  Building2,
  Award,
  Gauge,
  Users,
  Wind,
} from 'lucide-react';
import { ComplianceBar } from '@/components/ComplianceBar';
import { ComplianceModal } from '@/components/ComplianceModal';
import { HomeFaqAccordion } from '@/components/HomeFaqAccordion';
import { useRfq } from '@/context/rfq-context';

export default function HomePageClient() {
  const { openRfq, openRfqWithPreset } = useRfq();
  const [complianceModalOpen, setComplianceModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('oil-gas');

  const businessCategories = [
    {
      id: 'valves-repair',
      title: 'Valves Repair & Recertification',
      desc: 'Comprehensive workshop and field testing, machining, and recertification up to 400 bar.',
      icon: Wrench,
      link: '/services/valves-repair-recertification',
    },
    {
      id: 'calibration-services',
      title: 'Calibration & Recertification Services',
      desc: 'NIST-traceable bench calibration and field certification of pressure, temperature, and gas instruments.',
      icon: Gauge,
      link: '/services/calibration-recertification',
    },
    {
      id: 'electrical-power',
      title: 'Electrical & Power Systems Maintenance',
      desc: 'Low and medium voltage switchgear maintenance, transformer servicing, and electric motor rewinding.',
      icon: Zap,
      link: '/services/electrical-power-systems',
    },
    {
      id: 'instrumentation-control',
      title: 'Instrumentation & Control Systems',
      desc: 'Process automation engineering, PLC/SCADA integration, loop checks, and hazardous area instrumentation.',
      icon: Cpu,
      link: '/services/instrumentation-control-systems',
    },
    {
      id: 'pumps-compressors',
      title: 'Pumps & Compressors Services',
      desc: 'Overhaul, dynamic balancing, alignment, and seal replacement for centrifugal and positive displacement units.',
      icon: Layers,
      link: '/services/pumps-compressors-services',
    },
    {
      id: 'civil-construction',
      title: 'Civil & Construction Services',
      desc: 'Industrial civil foundations, heavy equipment casting, structural steel fabrication, and jetty works.',
      icon: Building,
      link: '/services/civil-construction-services',
    },
    {
      id: 'manpower-recruitment',
      title: 'Manpower Recruitment & Supply',
      desc: 'Rapid sourcing and mobilization of certified offshore and onshore technical engineers and craft specialists.',
      icon: Users,
      link: '/services/manpower-recruitment-supply',
    },
    {
      id: 'tools-equipment',
      title: 'Tools and Equipment Procurement',
      desc: 'Direct supply of OEM certified valves, actuators, line pipes, welding consumables, and safety gear.',
      icon: ShoppingBag,
      link: '/services/tools-equipment-procurement',
    },
    {
      id: 'consulting-training',
      title: 'Consulting and Training',
      desc: 'Accredited hands-on technical simulator workshops and engineering consulting for energy operations.',
      icon: GraduationCap,
      link: '/services/consulting-training',
    },
    {
      id: 'welding-fabrication',
      title: 'Welding & Fabrication Services',
      desc: 'Industrial MIG, TIG, and Arc welding, custom pressure vessel and piping fabrication, structural steel, and protective coatings.',
      icon: Flame,
      link: '/services/welding-fabrication-services',
    },
    {
      id: 'corrosion-control',
      title: 'Corrosion Control Services',
      desc: 'Turnkey cathodic protection surveys, groundbed installation, AC mitigation, and anti-corrosion coatings.',
      icon: Shield,
      link: '/services/corrosion-control-services',
    },
    {
      id: 'hvac-services',
      title: 'HVAC Services',
      desc: 'Installation, repair, and preventive maintenance of domestic, commercial, and industrial HVAC chillers and air handling systems.',
      icon: Wind,
      link: '/services/hvac-services',
    },
  ];

  const industries = [
    {
      id: 'oil-gas',
      label: 'Oil & Gas',
      sublabel: 'Upstream, Midstream & Downstream',
      icon: Flame,
      headline: 'Mission-Critical Engineering for Flow Stations, Refineries & Offshore Platforms',
      points: [
        'Wellhead choke and manifold valve testing under extreme pressures (up to 400 bar).',
        'Turnaround maintenance for crude distillation units, reboilers, and separators.',
        'Offshore topside structural repairs, riser splash-zone protection, and certified 6G pipe tie-ins.',
        'Continuous Fire & Gas detection maintenance with hazardous-area certified instrumentation.',
      ],
      metrics: [
        { label: 'Pressure Testing Capacity', value: '400 Bar' },
        { label: 'Offshore Mobilization', value: 'Within 24 Hrs' },
        { label: 'Safety Record', value: 'Goal Zero Incidents' },
      ],
    },
    {
      id: 'power',
      label: 'Power Generation',
      sublabel: 'Turbines, Transformers & Grids',
      icon: Zap,
      headline: 'Substation Servicing, Turbine Auxiliaries & High-Voltage Reliability',
      points: [
        'Medium and High Voltage switchgear refurbishment, breaker timing tests, and SF6 gas handling.',
        'Transformer oil dielectric breakdown testing, degasification, and bushing replacements.',
        'Excitation systems tuning, generator protection relays calibration, and harmonic analysis.',
        'Vibration spectral analysis on heavy steam and gas turbine rotating shafts.',
      ],
      metrics: [
        { label: 'Voltage Class Supported', value: 'Up to 132 kV' },
        { label: 'Insulation Resistance', value: 'NIST Calibrated' },
        { label: 'Motor Rewinding', value: 'Class H / F Spec' },
      ],
    },
    {
      id: 'manufacturing',
      label: 'Manufacturing & Plants',
      sublabel: 'Industrial Automation & Utilities',
      icon: Factory,
      headline: 'Maximizing Factory Uptime Through Predictive Maintenance & Precision Metrology',
      points: [
        'PLC / SCADA hardware retrofitting and logic debugging for automated packaging and bottling lines.',
        'Pneumatic and electro-hydraulic control loop tuning to optimize steam and water flow.',
        'On-site dynamic laser alignment for heavy-duty drive shafts and multi-stage air compressors.',
        'Predictive thermography and ultrasonic leak audits across facility steam headers.',
      ],
      metrics: [
        { label: 'Unscheduled Downtime Cut', value: 'Up to 35%' },
        { label: 'Metrology Precision', value: 'Class 0.1%' },
        { label: 'Emergency Call-Out', value: 'Available 24/7' },
      ],
    },
    {
      id: 'infrastructure',
      label: 'Civil Infrastructure',
      sublabel: 'Bridges, Foundations & Modules',
      icon: Building,
      headline: 'Heavy Foundations, Structural Steel & High-Integrity Jetty Construction',
      points: [
        'High-load concrete foundation casting for crude oil storage tanks and separator skids.',
        'Certified structural steel erection, load-bearing frames, pipe bridges, and access gangways.',
        'Coastal jetty construction, sheet piling, cathodic protection, and splash-zone epoxy encasement.',
        'Industrial drainage systems, heavy equipment pavement, and modular plant access roads.',
      ],
      metrics: [
        { label: 'Concrete Core Strength', value: 'C30/37 Grade' },
        { label: 'Weld Certification', value: 'ASME IX / AWS D1.1' },
        { label: 'Fabrication Capacity', value: 'Multi-Ton Spools' },
      ],
    },
  ];

  const activeIndustry = industries.find((i) => i.id === selectedIndustry) || industries[0];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_engineering_1790592378237.jpg"
            alt="Min-Max Industrial Heavy Engineering Workshop and Field Testing"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 rounded-md text-xs text-teal-800 font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>NUPRC &amp; NMDPRA Certified Engineering Partner · RC1459932</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Precision Engineering &amp; Industrial Asset Services
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Min-Max Engineering Services Ltd provides specialized mechanical testing (up to 400 bar), instrumentation calibration, electrical automation, structural fabrication, and 24/7 technical call-outs across Nigeria.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={openRfq}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                Request Quotation (RFQ)
              </button>

              <Link
                href="/services"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors whitespace-nowrap"
              >
                View All Services
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>NOGIC JQS Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>400-Bar Test Bay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>ISO 9001:2015 QA/QC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY & STATUTORY COMPLIANCE MARQUEE */}
      <ComplianceBar onOpenCompliance={() => setComplianceModalOpen(true)} />

      {/* 3. ABOUT US */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider text-teal-700 font-bold block mb-1">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              ABOUT US
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p>
                Min-Max Engineering Services is a foremost Indigenous Engineering Service company incorporated in December, 2017 with focus in the Oil and Gas and Civil Construction industries.
              </p>
              <p>
                We develop solutions and services to meet the challenges and requirements of private industries and government organizations. Min-Max Engineering Services has a niche in Engineering design, Mechanical &amp; Electrical Engineering Services, Civil Engineering &amp; Construction, Machine Shop Services, Welding &amp; Fabrication, Installation, Commissioning &amp; Maintenance of instruments, Manpower Recruitment &amp; Supply, Tools &amp; Equipment Procurement, Technical/Engineering Consulting &amp; Training.
              </p>
              <p>
                The company is committed to delighting her clients with high standards and excellence services.
              </p>
              <p>
                At Min-Max Engineering Services, we adopt innovative and digital technologies to provide creative products and services with timely delivery of all projects that meet customers’ demands, quality and foster sustainable prosperity.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  prefetch={false}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-teal-700 hover:text-teal-800 bg-teal-50 border border-teal-200 rounded-lg transition-colors"
                >
                  <span>Learn more about our Vision, Mission &amp; Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                Corporate Identification
              </h3>
              <dl className="space-y-3 text-xs">
                <div>
                  <dt className="text-slate-500 font-medium">CAC Registration Number</dt>
                  <dd className="font-mono font-bold text-slate-900">RC 1459932 (Dec 2017)</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Head Office Location</dt>
                  <dd className="font-medium text-slate-800">Port Harcourt, Rivers State, Nigeria</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Workshop Yard</dt>
                  <dd className="font-medium text-slate-800">Elelenwo Industrial Hub, Port Harcourt</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Local Content Compliance</dt>
                  <dd className="font-medium text-emerald-700">100% Indigenous Nigerian Enterprise</dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Regulatory Scope</dt>
                  <dd className="font-medium text-slate-800">NUPRC, NMDPRA, NOGIC JQS Certified</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-wider text-teal-700 font-bold block mb-1">
            Core Business Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            WHAT WE DO
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2 leading-relaxed">
            We are a technical and engineering firm, our ranges of Service we provide at Min–Max Engineering Services Ltd are categorized into twelve (12) business areas:
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {businessCategories.slice(0, 6).map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: 'easeOut' },
                  },
                }}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-md transition-colors shadow-xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Button Underneath */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-600 rounded-lg transition-all shadow-md shadow-teal-950/20 active:scale-[0.98]"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE (Tabbed Grid) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-teal-700 font-bold block mb-1">
              Sector Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve Across Nigeria
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select an industry sector below to review our specific capabilities and field achievements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{ind.label}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold text-teal-700 uppercase">
                  {activeIndustry.sublabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {activeIndustry.headline}
                </h3>
                <div className="space-y-2.5 pt-2">
                  {activeIndustry.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 space-y-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Key Operational Metrics
                </h4>
                <div className="space-y-3">
                  {activeIndustry.metrics.map((m, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                      <div className="text-[11px] text-slate-500">{m.label}</div>
                      <div className="text-sm font-mono font-bold text-slate-900 mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() =>
                      openRfqWithPreset(
                        `${activeIndustry.label} Engineering Requisition`,
                        activeIndustry.label
                      )
                    }
                    className="w-full py-2 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-md transition-colors text-center"
                  >
                    Submit Scope for {activeIndustry.label}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <HomeFaqAccordion />

      {/* 7. PRE-FOOTER CALL TO ACTION */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs text-teal-400 font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>Port Harcourt Workshop · Elelenwo Yard · Lagos Branch</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Partner With an Indigenous Technical Powerhouse?
          </h2>

          <p className="text-xs sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Submit your valve testing specifications, instrument calibration list, or emergency call-out parameters directly to our engineering desk.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={openRfq}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
            >
              Request a Technical Quote
            </button>
            <a
              href="tel:+2347010497911"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors font-mono"
            >
              Call +234 701 049 7911
            </a>
          </div>
        </div>
      </section>

      {/* Compliance Document Modal */}
      <ComplianceModal
        isOpen={complianceModalOpen}
        onClose={() => setComplianceModalOpen(false)}
      />
    </div>
  );
}
