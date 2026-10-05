'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export default function ConsultingTrainingPage() {
  const { openRfqWithPreset } = useRfq();

  const trainingCourses = [
    'Oil and Gas Processes',
    'Instrumentation Maintenance',
    'Mechanical Maintenance',
    'Electrical Maintenance',
    'Automation / Control Systems',
    'Welding and Fabrication',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/technical_training_workshop_1790592424114.jpg"
            alt="Technical Training Workshop and Practical Engineering Simulator"
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
              CONSULTING &amp; TRAINING
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              At Min–Max Engineering Services Ltd we play active role in skill development, custom technical training, and professional engineering advisory services.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  openRfqWithPreset(
                    'Technical Training & Consulting Inquiry',
                    'Consulting & Training'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
              >
                <span>Request Training Quotation (RFQ)</span>
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
            <GraduationCap className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Practical Capacity Building &amp; Engineering Consulting
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              At Min–Max Engineering Services Ltd we play active role in skill development.
            </p>
            <p>
              We manage the training of our local Operators and Technicians at our workshop.
            </p>
            <p>
              Min–Max Engineering Services Ltd is known in designing customized Training Programs in transferring Technical Knowledge and recruiting top management staff.
            </p>
            <p>
              Min-Max Engineering Services delivers solutions to all your engineering challenges and gives professional advisory services. We also build capacities and develop manpower. The firm is well equipped with facilities and expertise that give practical experience to trainees. Our Training courses include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {trainingCourses.map((course, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Enroll Your Corporate Technical Teams or Request Engineering Advisory
            </h3>
            <p className="text-xs text-slate-400">
              Hands-on practical training conducted at our Port Harcourt workshop simulators.
            </p>
          </div>
          <button
            onClick={() =>
              openRfqWithPreset(
                'Technical Training & Consulting Inquiry',
                'Consulting & Training'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Inquire for Training Batches
          </button>
        </div>
      </section>
    </div>
  );
}
