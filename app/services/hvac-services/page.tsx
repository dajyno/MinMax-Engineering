'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Wind,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function HvacServicesPage() {
  const { openRfqWithPreset } = useRfq();

  const buildingSystemsExperience = [
    'Chiller plant',
    'Building management systems',
    'Electrical management systems',
    'Refrigeration (cool rooms and freezer rooms)',
    'Lighting/power',
    'Energy monitoring/metering',
    'Air compressors',
    'Air driers',
    'Air handling systems',
    'VRV/VRF systems',
    'All aspects of building compliance maintenance',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/electrical_automation_panel_1790592401334.jpg"
            alt="HVAC Ventilation Chillers and Building Environmental Controls"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Services</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              HVAC SERVICES
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Installation and maintenance of domestic, commercial, and industrial Heating, Ventilation, and Air Conditioning (HVAC) systems, chillers, and building management automation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'HVAC Installation & Maintenance Requisition',
                    'HVAC Services'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Quotation (RFQ)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:+2347010497911"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors font-mono"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
                <span>+234 701 049 7911</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        {/* Overview */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Min-Max Engineering Services provides Installation and Maintenance of Domestic/Office Air Conditioning (Heating, Ventilation and Cooling) System, these services include installation, repair, and maintenance of different types of HVAC systems. The company is staffed by experienced and knowledgeable professionals who are certified and licensed to perform these jobs.
          </p>
          <p>
            Our team has technical, engineering and project/service management experience in all aspects of mechanical and electrical systems in buildings including:
          </p>
        </div>

        {/* Experience Grid */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-teal-700">
            <Building className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Mechanical &amp; Electrical Building Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {buildingSystemsExperience.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
              >
                <span className="text-teal-600 font-bold shrink-0">Ø</span>
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Preventive Maintenance & Innovation */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-teal-700">
            <Wind className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Preventive Maintenance &amp; Energy Efficiency
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            The company also offers preventive maintenance services and implements innovative solutions to ensure systems are running safely and efficiently. The company is committed to providing the best possible service and listens to customer feedback to ensure satisfaction and meet expectations.
          </p>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Require Chiller Plant Overhaul or Commercial HVAC Maintenance?
            </h3>
            <p className="text-xs text-slate-400">
              Schedule on-site evaluation by certified HVAC refrigeration technicians.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'HVAC Installation & Maintenance Requisition',
                'HVAC Services'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Submit HVAC Request
          </button>
        </div>
      </section>
    </div>
  );
}
