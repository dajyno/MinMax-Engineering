'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function InstrumentationControlPage() {
  const { openRfqWithPreset } = useRfq();

  const serviceAreas = [
    'Calibration and Certification of Field Instruments and Valves Maintenance',
    'Installation of Fire and Gas Detection Systems',
    'Installation of Gas Analyzer, Distribution Control System (DCS) and Programmable Logic Controller (PLC)',
    'Infrastructure Systems Installation including Cabling, Marshalling Panels/Cabinets, Instrument Tubing and Impulse Piping Work.',
  ];

  const calibrationItems = [
    'Transmitters, Temperature Baths, Valves, Flow Meters',
    'Controllers, Recorders, Gauges, Switches',
    'Welding Machines and accessories, etc.',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/electrical_automation_panel_1790592401334.jpg"
            alt="Instrumentation and Process Control System Architecture"
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
              INSTRUMENTATION &amp; CONTROL SYSTEMS
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              We provide the full compliments of our service offerings such as consultancy, designs, installation, repairs, maintenance, calibration, training and manpower supply.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Instrumentation & Control Systems Inquiry',
                    'Instrumentation & Control Systems'
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
        {/* Core Service Areas */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We provide the full compliments of our service offerings such as consultancy, designs, installation, repairs, maintenance, calibration, training and manpower supply in the under listed areas of:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {serviceAreas.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Calibration */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Our calibration and maintenance service assures the accuracy of your instruments and consistent process control.
          </p>
          <p className="text-sm sm:text-base font-semibold text-slate-900">
            We offer specialized instrument calibration in our laboratories or on your site:
          </p>

          <div className="space-y-2.5 pt-1">
            {calibrationItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Require Precision Instrumentation or Control Systems Engineering?
            </h3>
            <p className="text-xs text-slate-400">
              Mobilize our instrument calibration and automation engineers directly to your facility.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'Instrumentation & Control Systems Inquiry',
                'Instrumentation & Control Systems'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Submit Instrumentation Scope
          </button>
        </div>
      </section>
    </div>
  );
}
