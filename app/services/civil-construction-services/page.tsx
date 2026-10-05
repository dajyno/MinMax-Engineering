'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Building,
  Layers,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function CivilConstructionPage() {
  const { openRfqWithPreset } = useRfq();

  const coreActivities = [
    'Road Construction and Rehabilitation',
    'Bridge Construction and Maintenance',
    'Culvert and Drainage Systems',
    'School and Commercial Building Construction',
    'Concrete Works and Structural Development',
    'Onshore / Offshore Mechanical Construction Works: -Fabrication of Piping Spools, Pipe Supports and Welding Works for Facility Repairs or Upgrade Projects',
    'Fabrication of Structural Supports for newly installed Pipe Works and Structures',
    'Civil Foundation Works for Pressure Vessels, Crude Oil Storage tanks, Pipelines, Modules and Casting of the Concrete Foundation Supports',
    'Onshore and Offshore Mechanical Modifications, Upgrade and Adhoc Repairs, Hook-up, Surface Preparation, Blasting and Painting, Precommissioning checks and Commissioning Support Services',
    'Construction Management: - Project Planning, Management, Scheduling, Monitoring, Site Supervision and Inspection Services',
  ];

  const civilWorks = [
    'Civil Foundation Works for Pressure Vessels, Crude Oil Storage tanks, Pipelines, Modules and Casting of the Concrete Foundation Supports',
    'Construction of Bridges, Roads and Dams',
    'Construction of Jetties',
    'Municipal Building and Structures',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/structural_welding_fabrication_1790592411900.jpg"
            alt="Civil Engineering and Structural Steel Construction"
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
              CIVIL &amp; CONSTRUCTION SERVICES
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              We provide high-quality civil and structural construction solutions for industrial infrastructure, energy facilities, and public developments.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Civil & Structural Construction Inquiry',
                    'Civil & Construction Services'
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
        {/* Core Activities */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We provide high-quality civil and structural construction solutions. The Civil Engineering and Construction Activities we basically engaged in are, but not limited to the following:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {coreActivities.map((item, idx) => (
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

        {/* Civil Works & Structural Works Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Civil Works */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-700">
              <Building className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                CIVIL WORKS
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Heavy foundations, transportation routes, and water infrastructure.
            </p>

            <div className="space-y-3 pt-2">
              {civilWorks.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Structural Works */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-700">
                <Layers className="w-5 h-5" />
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  STRUCTURAL WORKS
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Precision industrial fabrication and pipe rack supports.
              </p>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  Fabrication of Structural Supports for newly installed Pipe Works and Structures
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Civil Foundation & Structural Fabrication Inquiry',
                    'Civil & Construction Services'
                  )
                }
                className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg transition-colors text-center"
              >
                Inquire About Structural Fabrication
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Planning Civil Foundation Works or Structural Steel Fabrication?
            </h3>
            <p className="text-xs text-slate-400">
              Connect directly with our Civil &amp; Mechanical Project Planning team.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'Civil & Structural Construction Inquiry',
                'Civil & Construction Services'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Submit Project Specifications
          </button>
        </div>
      </section>
    </div>
  );
}
