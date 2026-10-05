'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Flame,
  Wrench,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function WeldingFabricationPage() {
  const { openRfqWithPreset } = useRfq();

  const weldingOfferings = [
    'Industrial Welding (MIG, TIG, Arc)',
    'On-site and Workshop Welding',
    'Structural Welding for Buildings, Bridges, and Pipelines',
  ];

  const structuralFabrication = [
    'Structural Steel Fabrication (Beams, Frames, Supports)',
    'Mechanical Fabrication for Construction Applications',
    'Custom Metal Works for Infrastructure Projects',
  ];

  const customFabricationItems = [
    'Pressure vessels, pressure piping and Repairs',
    'Sheet metal to heavy plate.',
    'Plasma and Laser cutting',
    'Structural pipeline fabrication.',
  ];

  const pipingAndSpoolServices = [
    'Pre-fabrication of Piping Spools and Pipe Supports',
    'Installation of Pipe works, Field Bends, Cut Pipes lengths, Pipe Supports, Fittings and Welding in accordance with applicable standards',
    'Surface Preparation of Spools, Grit Blasting and Painting',
  ];

  const modificationUpgrades = [
    'Structural Reinforcement and Retrofitting',
    'Modification of Existing Infrastructure',
    'Upgrade of Mechanical Components within Civil Projects',
  ];

  const surfaceTreatments = [
    'Sandblasting and Surface Cleaning',
    'Anti-Corrosion Coating',
    'Protective Painting for Steel Structures and Pipelines',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/structural_welding_fabrication_1790592411900.jpg"
            alt="Structural Welding and Heavy Steel Fabrication"
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
              WELDING &amp; FABRICATION SERVICES
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Industry-standard MIG, TIG, and Arc welding, custom pressure vessel and piping fabrication, structural steel development, and protective surface treatments.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Welding & Fabrication Requisition',
                    'Welding & Fabrication Services'
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
        {/* WELDING SERVICES & STRUCTURAL FABRICATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Welding Services */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-700">
              <Flame className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Welding Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our welding services meet industry standards for strength, durability, and precision. We offer:
            </p>
            <div className="space-y-2.5 pt-1">
              {weldingOfferings.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Structural & Mechanical Fabrication */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-700">
              <Wrench className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Structural &amp; Mechanical Fabrication
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We deliver tailored fabrication solutions to meet diverse infrastructure and construction needs, including:
            </p>
            <div className="space-y-2.5 pt-1">
              {structuralFabrication.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CUSTOM FABRICATION & PIPING SPOOLS */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Custom Fabrication Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We specialize in custom fabrication of small- and large-scale products for a wide array of applications. Our fabrication services are:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {customFabricationItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
              >
                <span className="text-teal-600 font-bold">Ø</span>
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We provide the full compliments of our service offerings such as consultancy, designs, installation, repairs, maintenance, training and manpower supply in the under listed areas of:
            </p>
            <div className="space-y-2.5">
              {pipingAndSpoolServices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <span className="text-teal-600 font-bold shrink-0 mt-0.5">Ø</span>
                  <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EQUIPMENT MODIFICATION & SURFACE PREPARATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Equipment Modification & Upgrades */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-700">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Equipment Modification &amp; Upgrades
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We enhance the performance and lifespan of existing systems through:
            </p>
            <div className="space-y-2.5 pt-1">
              {modificationUpgrades.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <span className="text-teal-600 font-bold shrink-0 mt-0.5">Ø</span>
                  <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Surface Preparation & Protective Coating */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-teal-700">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Surface Preparation &amp; Protective Coating
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We provide surface treatment and protection services to improve durability and resist environmental impact, including:
            </p>
            <div className="space-y-2.5 pt-1">
              {surfaceTreatments.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <span className="text-teal-600 font-bold shrink-0 mt-0.5">Ø</span>
                  <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Require Certified Welding Crews or Custom Spool Fabrication?
            </h3>
            <p className="text-xs text-slate-400">
              Submit your engineering drawings or welding procedures specification (WPS) for rapid quote.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'Welding & Fabrication Requisition',
                'Welding & Fabrication Services'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Submit Fabrication RFQ
          </button>
        </div>
      </section>
    </div>
  );
}
