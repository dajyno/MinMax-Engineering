'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  HeartPulse,
  HardHat,
  PhoneCall,
} from 'lucide-react';

export default function HseStatementPage() {

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[340px] sm:min-h-[400px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_industrial_engineering_1790592378237.jpg"
            alt="Min-Max Engineering Health and Safety Policy"
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
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 rounded-md text-xs text-teal-800 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Corporate Policy Document</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              HEALTH &amp; SAFETY POLICY STATEMENT
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Min-Max Engineering Services Ltd official corporate charter on occupational health, personnel protection, environmental stewardship, and safe operations.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY STATEMENT CONTENT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
          {/* Header Badge */}
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-teal-700 font-bold block mb-1">
                Official Charter
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                HEALTH &amp; SAFETY POLICY STATEMENT
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Target: Near Zero Casualty Rate</span>
            </div>
          </div>

          {/* Exact Text in Clean Structured Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p>
              In Min-Max Engineering Services, we have consistently worked hard to maintain a near zero casualty rate.
            </p>

            <p>
              Our success can be adduced to our continuous education of all staff and insistence on safety as a joint responsibility of the management and staff.
            </p>

            <p>
              The management supervisors and all employees in all undertakings shall vigorously pursue safety of operations, materials, men and environment henceforth.
            </p>

            <p>
              Min-Max Engineering Services is committed to the quality of jobs we execute. It is the company’s goal to always initiate actions and use materials, equipments and personnel to ensure that quality of work executed by us surpassed our client’s expectations.
            </p>

            <p>
              Management accepts totally its legal humane and societal obligations as conferred on her as employer of labour. Every necessary step shall be taken to safeguard all who work for us including third parties, which may not be immediately connected with our operations; we believe that the only way to efficient operations is through safe operations.
            </p>

            <div className="bg-slate-50 border-l-4 border-teal-600 p-5 rounded-r-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <HeartPulse className="w-4 h-4 shrink-0 text-teal-700" />
                <span>Employee &amp; Family Medical Care</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We maintain the services of a government approved Clinic with qualified doctors to ensure that workers and members of their families are properly cared for, hence preserve the health of its employees through regular medical examination, and providing adequate first aid at the appropriate places and time.
              </p>
            </div>

            <p>
              All supervisory cadres shall be held accountable for the safety behaviour of staff under their charge. Positive attitudes to safety shall be rewarded while reported negative inclination shall be frowned at and consciously discouraged.
            </p>

            <p>
              It shall be the duty of all employees to positively influence the safety behaviour of their colleagues. In this regard, every one of us owes it a duty to ensure that the safety and health of all is not jeopardized through acts of omission or commission.
            </p>

            <div className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-xl space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <HardHat className="w-4 h-4 shrink-0 text-orange-600" />
                <span>Personnel Protection &amp; Certification</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Physical infrastructures necessary for employees’ personal protection shall be provided by us as required; only persons who are certified with the relevant certifications shall be deployed to operations that required such certifications.
              </p>
            </div>

            <p>
              During the course of executing any job; all recognized codes, standards, statutory regulations and other laid down specifications shall be rigidly adhered to and short cuts shall not be entertained.
            </p>

            <p>
              Attempt to lower standards shall be checked while constantly seeking to improve our overall performance. Min-Max Engineering Services is committed to reduce the cost of supervision and attendant frustration occasioned by poor quality work and job delay and/or abandonment.
            </p>

            <div className="bg-teal-900 text-white p-6 rounded-xl space-y-2 shadow-sm">
              <h4 className="text-sm font-bold text-teal-200 uppercase tracking-wider">
                Our Core Operating Viewpoint
              </h4>
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                We operate from the view point that all accidents and other down grading occurrences are preventable. We put this view point to firm practice and our measure of effectiveness is hinged on our safety performance.
              </p>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Min-Max Engineering Services Ltd · Corporate Health &amp; Safety Division
            </div>
            <a
              href="tel:+2347010497911"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
              <span>+234 701 049 7911</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
