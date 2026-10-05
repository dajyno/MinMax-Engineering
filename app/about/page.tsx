'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Target,
  Compass,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
} from 'lucide-react';

interface CertificateItem {
  id: string;
  title: string;
  category: string;
  filterTag: 'nuprc' | 'nmdpra' | 'corporate' | 'ncdmb' | 'statutory';
  issuingAuthority: string;
  documentNumber: string;
  validity: string;
  image: string;
}

const CERTIFICATES_ARCHIVE: CertificateItem[] = [
  {
    id: 'cac-registration',
    title: 'CAC Certificate of Incorporation',
    category: 'Corporate Registration',
    filterTag: 'corporate',
    issuingAuthority: 'Corporate Affairs Commission (CAC)',
    documentNumber: 'RC: 1459932',
    validity: 'Incorporated December 2017 · Active',
    image: '/certificates/cac-certificate.png',
  },
  {
    id: 'tax-clearance',
    title: 'FIRS Tax Clearance Certificate (TCC)',
    category: 'Fiscal Compliance',
    filterTag: 'corporate',
    issuingAuthority: 'Federal Inland Revenue Service (FIRS)',
    documentNumber: 'Tax Clearance Certificate Current',
    validity: 'CIT, VAT & WHT Fully Compliant',
    image: '/certificates/tax-clearance-certificate.png',
  },
  {
    id: 'vat-certificate',
    title: 'VAT Registration Certificate',
    category: 'Tax Administration',
    filterTag: 'corporate',
    issuingAuthority: 'Federal Inland Revenue Service (FIRS)',
    documentNumber: 'FIRS VAT Registration Verified',
    validity: 'Statutory Value Added Tax Registered',
    image: '/certificates/vat-certificate.png',
  },
  {
    id: 'ncdmb-jqs',
    title: 'NCDMB NOGIC JQS Registration Certificate',
    category: 'Nigerian Local Content',
    filterTag: 'ncdmb',
    issuingAuthority: 'Nigerian Content Development & Monitoring Board',
    documentNumber: 'NOGIC JQS In-Country Active',
    validity: '100% Indigenous Nigerian Service Company',
    image: '/certificates/ncdmb-certificate.png',
  },
  {
    id: 'nuprc-specialized-1',
    title: 'NUPRC Specialized Service Permit (Part 1)',
    category: 'Upstream Petroleum',
    filterTag: 'nuprc',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission',
    documentNumber: 'NUPRC Specialized Permit Code',
    validity: '400-Bar Testing, Valves & E&I Certified',
    image: '/certificates/nuprc-specialized-certificate.png',
  },
  {
    id: 'nuprc-specialized-2',
    title: 'NUPRC Specialized Service Permit (Part 2)',
    category: 'Upstream Petroleum',
    filterTag: 'nuprc',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission',
    documentNumber: 'NUPRC Specialized Schedule Scope',
    validity: 'Offshore & Onshore Asset Integrity Maintenance',
    image: '/certificates/nuprc-specialized-certificate-2.png',
  },
  {
    id: 'nuprc-cert-1',
    title: 'NUPRC Petroleum Industry Permit (Schedule 1)',
    category: 'Upstream Petroleum',
    filterTag: 'nuprc',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission',
    documentNumber: 'NUPRC General Industry Service Permit',
    validity: 'Machining, Mechanical Overhaul & Inspection',
    image: '/certificates/nuprc-certificate.png',
  },
  {
    id: 'nuprc-cert-2',
    title: 'NUPRC Petroleum Industry Permit (Schedule 2)',
    category: 'Upstream Petroleum',
    filterTag: 'nuprc',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission',
    documentNumber: 'NUPRC Major Category Operations',
    validity: 'Calibration, Metrology & Automation',
    image: '/certificates/nuprc-certificate-2.png',
  },
  {
    id: 'nuprc-cert-3',
    title: 'NUPRC Petroleum Industry Permit (Schedule 3)',
    category: 'Upstream Petroleum',
    filterTag: 'nuprc',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission',
    documentNumber: 'NUPRC Specialized Technical Services',
    validity: 'Electrical Systems & Power Generation Support',
    image: '/certificates/nuprc-certificate-3.png',
  },
  {
    id: 'nuprc-cert-4',
    title: 'NUPRC Petroleum Industry Permit (Schedule 4)',
    category: 'Upstream Petroleum',
    filterTag: 'nuprc',
    issuingAuthority: 'Nigerian Upstream Petroleum Regulatory Commission',
    documentNumber: 'NUPRC Upstream Certified Operations',
    validity: 'Pumps, Compressors & Dynamic Balancing',
    image: '/certificates/nuprc-certificate-4.png',
  },
  {
    id: 'nmdpra-cert-1',
    title: 'NMDPRA Operational Permit (Part 1)',
    category: 'Mid & Downstream Authority',
    filterTag: 'nmdpra',
    issuingAuthority: 'NMDPRA Nigeria (Midstream & Downstream)',
    documentNumber: 'NMDPRA Operational Permit Schedule 1',
    validity: 'Refineries, Pipelines & Storage Depots',
    image: '/certificates/nmdpra-certificate.png',
  },
  {
    id: 'nmdpra-cert-2',
    title: 'NMDPRA Operational Permit (Part 2)',
    category: 'Mid & Downstream Authority',
    filterTag: 'nmdpra',
    issuingAuthority: 'NMDPRA Nigeria (Midstream & Downstream)',
    documentNumber: 'NMDPRA Operational Permit Schedule 2',
    validity: 'Hydrostatic Pipeline Testing & Cathodic Protection',
    image: '/certificates/nmdpra-certificate-2.png',
  },
  {
    id: 'nmdpra-cert-3',
    title: 'NMDPRA Operational Permit (Part 3)',
    category: 'Mid & Downstream Authority',
    filterTag: 'nmdpra',
    issuingAuthority: 'NMDPRA Nigeria (Midstream & Downstream)',
    documentNumber: 'NMDPRA Operational Permit Schedule 3',
    validity: 'Instrumentation & Process Control Support',
    image: '/certificates/nmdpra-certificate-3.png',
  },
  {
    id: 'scuml-cert',
    title: 'SCUML Compliance Certificate',
    category: 'Anti-Money Laundering',
    filterTag: 'statutory',
    issuingAuthority: 'Special Control Unit Against Money Laundering (EFCC)',
    documentNumber: 'SCUML Registered & Verified',
    validity: 'Anti-Money Laundering / CFT Current',
    image: '/certificates/scuml-certificate.png',
  },
  {
    id: 'itf-compliance',
    title: 'ITF Compliance Certificate',
    category: 'Workforce Development',
    filterTag: 'statutory',
    issuingAuthority: 'Industrial Training Fund (ITF) Nigeria',
    documentNumber: 'ITF Statutory Certificate of Compliance',
    validity: 'Apprenticeship & Levy Statutory Compliance',
    image: '/certificates/itf-certificate.png',
  },
  {
    id: 'ecs-compliance',
    title: 'NSITF ECS Clearance Certificate',
    category: 'Workforce Protection',
    filterTag: 'statutory',
    issuingAuthority: 'Nigeria Social Insurance Trust Fund (NSITF)',
    documentNumber: 'Employees Compensation Scheme Clearance',
    validity: 'Workmen Compensation Active & Current',
    image: '/certificates/ecs-certificate.png',
  },
  {
    id: 'insurance-policy',
    title: 'Comprehensive Group Life Policy',
    category: 'Insurance Assurance',
    filterTag: 'statutory',
    issuingAuthority: 'Underwritten by Certified Insurance Partner',
    documentNumber: 'Comprehensive Life & Disability Assurance',
    validity: 'Full Workforce Protection Policy',
    image: '/certificates/insurance-certificate.png',
  },
];

export default function AboutPage() {
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Smooth scroll handler when arriving via anchor link #compliance-archive
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#compliance-archive') {
      const el = document.getElementById('compliance-archive');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, []);

  const filteredCerts =
    selectedCategory === 'all'
      ? CERTIFICATES_ARCHIVE
      : CERTIFICATES_ARCHIVE.filter((c) => c.filterTag === selectedCategory);

  const certCount = filteredCerts.length;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeCertIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCertIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveCertIndex((prev) =>
          prev !== null ? (prev + 1) % certCount : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveCertIndex((prev) =>
          prev !== null ? (prev - 1 + certCount) % certCount : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertIndex, certCount]);

  const currentCert = activeCertIndex !== null ? filteredCerts[activeCertIndex] : null;

  const coreValues = [
    'Professional Excellence',
    'Safety',
    'Innovation',
    'Creativity',
    'Commitment',
    'Integrity',
  ];

  const whyChooseUsPoints = [
    {
      title: '1. Our Value Proposition',
      desc: 'End-to-End Solutions: From design and installation to maintenance and upgrades.',
    },
    {
      title: '2. Reliability & Efficiency',
      desc: 'Focused on minimizing downtime and maximizing asset performance.',
    },
    {
      title: '3. Skilled Expertise',
      desc: 'Experienced professionals with hands-on industry knowledge.',
    },
    {
      title: '4. Safety Compliance',
      desc: 'Strict adherence to industry safety and operational standards.',
    },
    {
      title: '5. Cost-Effective Delivery',
      desc: 'Optimized solutions that reduce long-term operational costs',
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ================= MANAGING DIRECTOR'S WELCOME ================= */}
        <section className="bg-gradient-to-br from-slate-900 via-[#0B1523] to-slate-950 text-white border border-slate-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* MD Portrait (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-full lg:max-w-[320px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-500/30 group">
                <Image
                  src="/images/managing_director_portrait.jpg"
                  alt="Managing Director, Min-Max Engineering Services Ltd"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 340px"
                  quality={85}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider">
                    Executive Leadership
                  </div>
                  <div className="text-sm font-bold text-white">
                    Min-Max Engineering Services Ltd
                  </div>
                </div>
              </div>

              {/* Title & Credentials Card */}
              <div className="mt-4 space-y-1 w-full max-w-[320px] bg-slate-800/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 text-left">
                <div className="text-sm font-bold text-white">
                  Alabo Engr. Sopakiriba Maxwell West (PhD)
                </div>
                <div className="text-xs text-teal-400 font-mono flex items-center justify-between">
                  <span>Managing Director / CEO</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[11px] text-slate-400 pt-0.5">
                  Over 20+ Years in Energy Asset Integrity
                </div>
              </div>
            </div>

            {/* MD Welcome Message (8 cols) */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-xs text-teal-300 font-mono font-semibold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5 text-teal-400" />
                <span>Executive Welcome Address</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Nigerian Industry Through Precision Engineering &amp; Uncompromising Safety
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p className="text-sm sm:text-base text-slate-200 font-medium italic border-l-2 border-teal-500 pl-4 py-1">
                  &ldquo;At Min-Max Engineering, we measure our success not just by completed project logs, but by the operational uptime, asset longevity, and absolute safety of the facilities entrusted to our care.&rdquo;
                </p>

                <p>
                  Dear Valued Clients, Partners, and Industry Stakeholders,
                </p>

                <p>
                  On behalf of the Board of Directors, management, and our skilled technical workforce, it is my privilege to welcome you to Min-Max Engineering Services Ltd.
                </p>

                <p>
                  Since our incorporation in December 2017 (RC1459932), our driving mission has been clear: to establish a truly world-class, 100% indigenous engineering powerhouse capable of delivering high-consequence technical solutions for Nigeria’s Oil &amp; Gas, Power, and Infrastructure sectors.
                </p>

                <p>
                  Today, through our dedicated heavy machine yards and certified 400-bar valve testing bays in Port Harcourt, we provide full asset lifecycle integrity—from mechanical overhaul and precision instrumentation calibration to 6G pipe spool fabrication and 24/7 turnaround emergency support. Every scope is executed with zero-compromise adherence to API, ASME, ISO, NUPRC, and NMDPRA regulations.
                </p>

                <p>
                  We are deeply honored by the trust our clients place in our teams. We invite you to explore our capabilities, tour our workshops, and partner with us on your upcoming engineering challenges.
                </p>
              </div>

              {/* Signature Block */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                    Alabo Engr. Sopakiriba Maxwell West (PhD)
                  </div>
                  <div className="text-xs text-teal-400 font-mono">
                    Managing Director &amp; Chief Executive Officer
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Min-Max Engineering Services Ltd · Rivers State, Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT US ================= */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 rounded-md text-xs text-teal-800 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RC1459932 · Incorporated December 2017</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            ABOUT US
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
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
          </div>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* VISION */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">VISION</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To be the premier engineering services provider for the development of the industrial sector.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">MISSION</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To provide world class products and services that will have a positive impact on the industrial sectors of Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CORE VALUES ================= */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              CORE VALUES
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={val}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="text-xs font-mono font-bold text-teal-700">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{val}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OUR TEAM ================= */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              OUR TEAM
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Our pool of professional and experienced staff with multidiscipline and integrated system approach provides solutions to challenges in the industry. We employ unparalleled expertise to provide high class and quality services which has attracted local, international partners and client companies.
            </p>
            <p>
              We worked with a variety of clients such as Oil &amp; Gas Companies, Engineering Firms and Oil &amp; Gas Service Contractors.
            </p>
            <p>
              Min–Max Engineering Services Ltd supports her clients to design, build, operate and maintain energy efficient facilities.
            </p>
            <p>
              We provide them with a full range of resources, skills and services for exploring and investigating new fields, building and operating facilities, maximizing production under the best Safety, Cost, Schedule and Quality conditions.
            </p>
            <p>
              Min–Max Engineering Services Ltd is dedicated to addressing technological and environmental challenges involved in maintaining and operating new Oil and Gas fields.
            </p>
            <p>
              Our extensive field experience combined with the broad competencies of our specialists has made Min–Max Engineering Services Ltd to be an important supporter in the provision of technical expertise for Oil &amp; Gas Industry.
            </p>
            <p>
              Our highly skilled Mechanical Engineers, Electrical &amp; Instrument Engineers, Civil Engineers, Certified Welders, Pipe Fitters, Blasters and Painters with adequate Planning, Monitoring and Solicited support form the basis for execution of our past projects.
            </p>
            <div className="bg-teal-50/70 border border-teal-200 rounded-lg p-4 font-medium text-teal-900">
              At Min–Max Engineering Services Ltd we also undertake Emergency Breakdown Repairs and Intervention Call-out Services in Mechanical, Electrical, Instrument and Civil Works.
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              WHY CHOOSE US
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We deliver integrated engineering solutions tailored to the demands of Oil &amp; Gas, Construction, and Industrial sectors. Our approach combines technical expertise, industry best practices, and a commitment to safety and quality.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {whyChooseUsPoints.map((point) => (
              <div
                key={point.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1 hover:border-slate-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMPLIANCE ARCHIVE / CERTIFICATES GALLERY ================= */}
        <section
          id="compliance-archive"
          className="space-y-6 pt-8 border-t border-slate-200 scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-teal-700 font-bold block mb-1">
                Official Compliance Archive
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Regulatory Certificates &amp; Licenses Gallery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Collection of verified statutory permits and accreditations ({filteredCerts.length} records). Click any certificate to inspect full resolution.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: 'All Certificates', count: CERTIFICATES_ARCHIVE.length },
              { id: 'nuprc', label: 'NUPRC (Upstream)', count: CERTIFICATES_ARCHIVE.filter((c) => c.filterTag === 'nuprc').length },
              { id: 'nmdpra', label: 'NMDPRA (Mid & Downstream)', count: CERTIFICATES_ARCHIVE.filter((c) => c.filterTag === 'nmdpra').length },
              { id: 'corporate', label: 'Corporate & Tax', count: CERTIFICATES_ARCHIVE.filter((c) => c.filterTag === 'corporate').length },
              { id: 'ncdmb', label: 'NCDMB Local Content', count: CERTIFICATES_ARCHIVE.filter((c) => c.filterTag === 'ncdmb').length },
              { id: 'statutory', label: 'Statutory & HSE', count: CERTIFICATES_ARCHIVE.filter((c) => c.filterTag === 'statutory').length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setActiveCertIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.label} <span className="text-[10px] opacity-75 font-mono ml-1">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Certificate Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCerts.map((cert, index) => (
              <div
                key={cert.id}
                onClick={() => setActiveCertIndex(index)}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-teal-500 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                {/* Certificate Preview Thumbnail */}
                <div className="relative aspect-[3/4] w-full bg-slate-50 rounded-lg overflow-hidden border border-slate-200 group-hover:border-teal-400 transition-colors mb-3">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={80}
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title Only */}
                <div className="pt-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= FULL-SCREEN LIGHTBOX MODAL ================= */}
      {currentCert && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setActiveCertIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="pr-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {currentCert.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
                  title="Open raw image"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveCertIndex(null)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area with Navigation */}
            <div className="relative flex-1 bg-slate-100 p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-[350px] sm:min-h-[500px]">
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCertIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredCerts.length) % filteredCerts.length : null
                  );
                }}
                className="absolute left-2 sm:left-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-colors"
                title="Previous certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Large Certificate Image */}
              <div className="relative w-full h-[65vh] max-w-2xl mx-auto flex items-center justify-center">
                <Image
                  src={currentCert.image}
                  alt={currentCert.title}
                  fill
                  priority
                  className="object-contain drop-shadow-md rounded"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCertIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredCerts.length : null
                  );
                }}
                className="absolute right-2 sm:right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-colors"
                title="Next certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <span className="font-mono">
                Certificate {activeCertIndex !== null ? activeCertIndex + 1 : 0} of {filteredCerts.length}
              </span>
              <span className="text-[11px] text-teal-700 font-medium">
                Use Left / Right arrow keys to navigate · Esc to close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
