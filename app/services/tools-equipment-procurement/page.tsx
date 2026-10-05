'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  PackageCheck,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function ToolsEquipmentProcurementPage() {
  const { openRfqWithPreset } = useRfq();

  const procurementItems = [
    'Valves, Actuators, Regulators',
    'Instrument Tools',
    'Pumps: -Centrifugal, Hydraulic and Piston Types',
    'Compressors:-Reciprocating, Air and Gas Types',
    'Fluid Hoses, Fittings and Accessories: -Agitators, Air Supply Controls, Filters and Strainers, Fittings and Adapters, Fluid Heaters, Pressure Tanks and Regulators',
    'Generators: -Soundproof and Basic Types',
    'Mechanical Gauges: -Callipers, Venire Calliper, Scales and American Wire Gauge',
    'Meters:- Flow, Pressure, Temperature indicating Types',
    'Piping Fittings and Flanges:- Connectors and Couplings',
    'Pipe Accessories:- Pipe Tool Sets, Pipe Knives, Pipe Rack, Pipe Cleaner and Pipe Filter',
    'Non Corrosive Waterproof Fittings:- 110V, 240V Non Corrosive Light Fittings with Branded Ballast Emergency',
    'Carbon Steel Pipes:- Oil Tubing, Drill Pipes, Line Pipes, ASTM A53, ASTM A106, ASTM A333',
    'Welding Machines:- 400A Inverter Type with Remote, Miller Type, Tig or Argon Type, Lincoln Type',
    'Sealants:- Weatherproof Silicone Type',
    'Welding Consumables:- Welding Electrodes, Mild Steel Welding Wires',
    'Leasing of Cranes and Lifting Equipment:- Fork lift, Self-Loaders, Chain Block',
    'PPEs:- Hard Hat, Coveralls, Safety Boots, Eye Googles, Ear muff and Hand Gloves',
    'Lighting Fittings:- Diffuser Fluorescent Types and Luminaries',
    'Heating Ventilation Air Conditioning (HVAC) Equipment',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_engineering_1790592378237.jpg"
            alt="OEM Tools, Heavy Industrial Equipment and Materials Supply"
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
              TOOLS &amp; EQUIPMENT PROCUREMENT
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              We provide original spare parts for our customers through a network of Original Equipment Manufacturer representatives, with full warehousing and materials control support.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Equipment Procurement & Supply Inquiry',
                    'Tools & Equipment Procurement'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Procurement RFQ</span>
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
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-teal-700">
            <PackageCheck className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              OEM Representation &amp; Materials Control Support
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              We provide original spare parts for our customers through a network of Original Equipment Manufacturer representatives. Our services also include Materials control and warehousing support to maintain availability of essential spare parts and products including inspection, spare parts inventory &amp; controls and systematic packaging methods.
            </p>
            <p className="font-semibold text-slate-900">
              The following listed below include what Min–Max Engineering Services Ltd is in capacity to provide and supply on request:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {procurementItems.map((item, idx) => (
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

        {/* Bottom CTA Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Require Verified OEM Equipment or Direct Consumables Sourcing?
            </h3>
            <p className="text-xs text-slate-400">
              Submit your materials schedule or bill of quantities for rapid estimation.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'Bulk Equipment Procurement Inquiry',
                'Tools & Equipment Procurement'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Submit Procurement BOQ
          </button>
        </div>
      </section>
    </div>
  );
}
