'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Clock,
  ArrowLeft,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function ValvesRepairRecertificationPage() {
  const { openRfqWithPreset } = useRfq();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mechanical_valve_testing_1790592391076.jpg"
            alt="Valves Repair and Recertification Testing Bay"
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
              VALVES REPAIR &amp; RECERTIFICATION
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Comprehensive valve inspection, repair, overhaul, testing, calibration, and recertification services up to 400 bar for Oil &amp; Gas, energy, and process facilities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset('Valves Repair & Recertification', 'Mechanical & Asset Integrity')
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Valve Quotation</span>
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
        {/* Overview Statement */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            At Min-Max Engineering Services, we provide comprehensive valve inspection, repair, overhaul, testing, calibration, and recertification services designed to improve operational efficiency, reduce downtime, extend equipment lifespan, and ensure compliance with industry safety standards—particularly within the oil &amp; gas, energy, and industrial sectors.
          </p>
          <p>
            Our services cover both on-site and off-site maintenance solutions, including emergency response, routine servicing, shutdown maintenance, lubrication, packing replacement, calibration, and performance testing. Our Valve Maintenance Service includes:
          </p>
        </section>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inspection & Testing */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              Inspection &amp; Testing
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Min-Max Engineering Services carries out detailed inspection and testing services to ensure valves operate safely and efficiently, including:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Non-Destructive Testing (NDT)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Hydrostatic and Pneumatic Pressure Testing (up to 400 bar)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Safety and Relief Valve Calibration</span>
              </li>
            </ul>
          </div>

          {/* Repair & Overhaul */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              Repair &amp; Overhaul
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our repair and overhaul solutions are designed to restore valve functionality and reliability through:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Replacement of Worn Components (Stems, Springs, Seats, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Cleaning and Lubrication</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Complete Valve Refurbishment and Reconditioning</span>
              </li>
            </ul>
          </div>

          {/* On-Site & Field Services */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              On-Site &amp; Field Services
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Through our mobile workshop solutions, Min-Max Engineering Services provides responsive field support, including:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>On-site Valve Diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Emergency Maintenance and Shutdown Support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Field Repairs and Testing Services</span>
              </li>
            </ul>
          </div>

          {/* Specialized Valve Maintenance */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              Specialized Valve Maintenance
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We offer specialized maintenance services for a wide range of industrial valves, including:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Hydraulic/Pneumatic Control Valves</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Motor-Operated Valves (MOVs)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Safety Relief Valves</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Management & Procurement Support */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            Management &amp; Procurement Support
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our support services also include:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
              <span>Maintenance Documentation and History Management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
              <span>Spare Parts Management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
              <span>Procurement of New Valves and Components</span>
            </li>
          </ul>
        </section>

        {/* Facility & Engineering Standards Details */}
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            Our valve assembly and repair facility is fully equipped to test, calibrate, and recertify both isolation and safety valves. Using advanced testing equipment and OEM-trained service engineers, we perform seat, shell, pop, back pressure, body, and bellow tests in compliance with the latest API standards.
          </p>
          <p>
            We also provide control valve packaging, actuator assembly, and calibration of actuators and positioners in accordance with OEM procedures and industry best practices.
          </p>
        </section>

        {/* Bottom CTA Card */}
        <div className="bg-white border-2 border-teal-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need Valve Overhaul or Hydrostatic Testing?
            </h3>
            <p className="text-xs text-slate-600">
              Mobilize our workshop in Elelenwo, Port Harcourt or deploy mobile field test units to your asset.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset('Valve Testing & Recertification (400 Bar)', 'Mechanical & Asset Integrity')
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
