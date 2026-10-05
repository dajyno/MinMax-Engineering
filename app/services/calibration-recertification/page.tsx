'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Gauge,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  ArrowLeft,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function CalibrationRecertificationPage() {
  const { openRfqWithPreset } = useRfq();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mechanical_valve_testing_1790592391076.jpg"
            alt="Calibration and Recertification Testing Operations"
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
              CALIBRATION &amp; RECERTIFICATION SERVICES
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              In Situ Pop-Testing, Live Float, Servicing, and Overhaul for Pressure Safety Devices and instrumentation across Onshore and Offshore environments.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset('Calibration & Recertification Services', 'Electrical, Instrumentation & Control')
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Calibration RFQ</span>
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
        {/* Capability Overview */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            At Min-Max Engineering Services Ltd we are able to perform In Situ Testing which include Pop-Test, Live Float, Servicing and Overhauling for Pressure Safety Devices such as Pressure Relief Valves, Shutdown Valves, Manual Valves, Blow down Valves, Vacuum Breakers and Pressure Control in accordance with API and ASME Standard.
          </p>
          <p className="font-semibold text-slate-900">
            Our capability encompasses both Onshore and Offshore Valve Testing and Servicing.
          </p>
        </section>

        {/* Valve Testing, Calibration, Servicing and Recertification */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Valve Testing, Calibration, Servicing and Recertification
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Our Services includes the following Activities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Pressure Relief Valve / Pressure Safety Devices Inspection / Recertification for Marine and Offshore Industries.
              </span>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                We carry out on site Pop-Test, Inspection, Calibration, Overhauling and Servicing
              </span>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Hydraulic Valve Testing / Pneumatic Valve Test / Electronic Valve Test
              </span>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Control Valve Troubleshooting, Testing and Calibration
              </span>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Manual Valve Reconditioning and Testing
              </span>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>
                Spare Parts Supply and Support for Valve
              </span>
            </div>
          </div>
        </section>

        {/* Technician Expertise Section */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Our qualified instrument technicians have the training and equipment necessary to provide you with state-of-the art testing and calibration. We can help you reduce disruption, as we can perform tests on site, also eliminate instrument-related problems and decrease process downtime caused by control failures.
          </p>
        </section>

        {/* Bottom CTA Card */}
        <div className="bg-white border-2 border-teal-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need In Situ PSV Pop-Testing or Instrument Calibration?
            </h3>
            <p className="text-xs text-slate-600">
              Schedule our mobile calibration engineers for rapid on-site certification.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset('In Situ Pop-Testing & Instrument Calibration', 'Calibration & Recertification')
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
