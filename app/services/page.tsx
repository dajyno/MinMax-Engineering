'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Gauge,
  Zap,
  Cpu,
  Layers,
  Building,
  Users,
  ShoppingBag,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Flame,
  Shield,
  Wind,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function ServicesPage() {
  const { openRfq } = useRfq();

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
      desc: 'PLC, DCS, and SCADA automation integration, loop checking, and Fire & Gas system safety.',
      icon: Cpu,
      link: '/services/instrumentation-control-systems',
    },
    {
      id: 'pumps-compressors',
      title: 'Pumps & Compressors Services',
      desc: 'Precision rotating equipment overhaul, dynamic balancing to ISO 1940, and laser shaft alignment.',
      icon: Layers,
      link: '/services/pumps-compressors-services',
    },
    {
      id: 'civil-construction',
      title: 'Civil & Construction Services',
      desc: 'Heavy equipment concrete plinths, dynamic machine foundations, bund walls, and industrial infrastructure.',
      icon: Building,
      link: '/services/civil-construction-services',
    },
    {
      id: 'manpower-recruitment',
      title: 'Manpower Recruitment and Supply',
      desc: 'Rapid sourcing and mobilization of certified offshore and onshore technical engineers and craft specialists.',
      icon: Users,
      link: '/services/manpower-recruitment-supply',
    },
    {
      id: 'tools-equipment-procurement',
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

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* BEAUTIFUL HERO SECTION WITH IMAGE */}
      <section className="relative min-h-[400px] sm:min-h-[460px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_engineering_1790592378237.jpg"
            alt="Min-Max Industrial Heavy Engineering Services"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 rounded-md text-xs text-teal-800 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NUPRC &amp; NMDPRA Certified Engineering Lines</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              OUR SERVICES &amp; CAPABILITIES
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Integrated technical engineering, certified asset maintenance, procurement, and manpower solutions for the Oil &amp; Gas, Energy, and Infrastructure sectors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={openRfq}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request a Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+2347010497911"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors font-mono"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
                <span>+234 701 049 7911</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION WITH CLEAN CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10">
        <div className="max-w-3xl">
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

        {/* 9 Clean Business Cards (Name + 1-Line Description + View Details Button) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-md transition-colors shadow-xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-white border-2 border-teal-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mt-8">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need a Custom Engineering Scope or Multi-Discipline Proposal?
            </h3>
            <p className="text-xs text-slate-600">
              Our engineering managers and technical procurement specialists in Port Harcourt are ready to assist.
            </p>
          </div>
          <button
            onClick={openRfq}
            className="px-6 py-3 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Open RFQ Builder
          </button>
        </div>
      </div>
    </div>
  );
}
