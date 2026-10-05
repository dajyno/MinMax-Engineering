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

export default function PumpsCompressorsPage() {
  const { openRfqWithPreset } = useRfq();

  const supportedEquipment = [
    'Air compressors',
    'Air dryers',
    'Air compressor system components',
    'Air compressor parts',
    'Air compressor rentals',
    'Air compressor repair',
    'Air system audits',
    'Air system installations',
    'Control systems',
    'Cooling towers',
    'Fluid pumps',
    'Vacuum pumps and others',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mechanical_valve_testing_1790592391076.jpg"
            alt="Pumps and Compressors Overhaul Operations"
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
              PUMPS &amp; COMPRESSORS SERVICES
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              At Min-Max Engineering Services, we carry out overhaul of all your Pumps, Centrifugal Compressors, Screw Compressors, Reciprocating Compressors, Blowers, and Fans.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Pumps & Compressors Overhaul Inquiry',
                    'Pumps & Compressors Services'
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
        {/* Overview & DCI */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            At Min-Max Engineering Services, we carry out overhaul of all your Pumps, Centrifugal Compressors, Screw Compressors, Reciprocating Compressors, Blowers, and Fans. Our workshop staff has a long and diverse experience that enables us to satisfy virtually all your needs.
          </p>
          <p>
            Dismantling, Cleaning, &amp; Inspection (DCI) is done to the highest standards in the industry and the outcome is discussed with our customers, based on which the final repair will be carried out. When required, NDE and pressure testing of the equipment is carried out after repair.
          </p>
          <p>
            Our machinery team established the practice as a leader in repair and service of compressors and pumps, including other related machinery equipment.
          </p>
          <p>
            We specialize in the installation, maintenance, and repair of stationary industrial equipment to ensure safety and efficiency.
          </p>
          <p>
            We also carry out overhaul and rehabilitation of aging assets to restore performance and extend service life.
          </p>
          <p>
            We focus on maintaining and optimizing the performance of rotating machinery critical to industrial operations.
          </p>
        </div>

        {/* Equipment & Parts Support */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-5">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            We have a large inventory of parts and provides service for many other equipment brands as well. We support:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            {supportedEquipment.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
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
              Require Rotating Equipment Overhaul or Machine Shop Inspection?
            </h3>
            <p className="text-xs text-slate-400">
              Schedule inspection at our Port Harcourt workshop or dispatch our field technicians.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'Pumps & Compressors Overhaul Inquiry',
                'Pumps & Compressors Services'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Submit Machinery RFQ
          </button>
        </div>
      </section>
    </div>
  );
}
