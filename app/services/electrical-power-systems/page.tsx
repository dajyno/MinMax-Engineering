'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  ArrowLeft,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function ElectricalPowerSystemsPage() {
  const { openRfqWithPreset } = useRfq();

  const electricalItems = [
    'Installation, Termination, Hook-up of Electrical Power Distribution Switchboards, Control Panels, Electric Motors, Transformers and Generators',
    'Installation of Cathodic Protection System',
    'Grounding of Steel Structures',
    'Installation of Security System (Access Control Locks) and Video Protection Surveillance (CCTV)',
    'Industrial Electrical equipment Installation, Cable laying and Earthing',
    'Electric Motors and Alternator rewinding',
    'Installation of Cable Trays',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/electrical_automation_panel_1790592401334.jpg"
            alt="Electrical & Power Systems Maintenance and Control Panels"
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
              ELECTRICAL &amp; POWER SYSTEMS MAINTENANCE
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Consultancy, design, testing, inspection, calibration, installation, repairs, and maintenance of industrial electrical power and distribution equipment.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset('Electrical & Power Systems Maintenance', 'Electrical & Power Systems')
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Electrical RFQ</span>
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

      {/* MAIN CONTENT BODY */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Scope Introduction */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-3">
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            We provide consultancy, design, testing, inspection and calibration services for the under listed electrical items. We are also into the installation, repairs and maintenance of these items:
          </p>
        </section>

        {/* List of Electrical Scope Items */}
        <div className="space-y-3">
          {electricalItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-white border-2 border-teal-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need Switchgear Servicing, Motor Rewinding or Cable Hook-Up?
            </h3>
            <p className="text-xs text-slate-600">
              Our Port Harcourt and offshore electrical engineers mobilize with calibrated test instruments.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset('Switchboard, Motor Rewind & Power Maintenance', 'Electrical & Power Systems')
            }
            className="px-6 py-3 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Request Quotation
          </button>
        </div>
      </div>
    </div>
  );
}
