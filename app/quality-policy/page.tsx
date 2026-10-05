'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  ArrowLeft,
  CheckCircle2,
  Target,
  Sparkles,
  PhoneCall,
} from 'lucide-react';

export default function QualityPolicyPage() {

  const actionCommitments = [
    'Make quality work the responsibility of Management and Employees, our commitment is to utilize every available means to "do it right the first time"',
    'Promote quality awareness and employee work involvement in quality improvement programs',
    'Ensure that customer’s expectation, as well as specifications, are an integral part of every program',
  ];

  const supportingSystems = [
    'Regular gathering and monitoring of customer feedback',
    'Training and development for our employees',
    'Regular audit of our internal process',
    'Create a conducive working environment for our employees',
    'Commitment to quality',
    'Team work, mutual trust, respect and love',
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[340px] sm:min-h-[400px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mechanical_valve_testing_1790592391076.jpg"
            alt="Min-Max Engineering Quality Assurance and Testing Bay"
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
              <Award className="w-3.5 h-3.5" />
              <span>Corporate Policy Document</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              QUALITY POLICY STATEMENT
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Min-Max Engineering Services Ltd official quality benchmark for Oil &amp; Gas, Marine, Civil, and Construction operations.
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
                QUALITY POLICY STATEMENT
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-lg text-xs font-semibold text-teal-800">
              <Target className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Goal: Exceeding Client Expectations</span>
            </div>
          </div>

          {/* Exact Text in Clean Structured Flow */}
          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p>
              Min-Max Engineering Services Ltd is committed to providing the highest possible quality and reliability of services to the Oil &amp; Gas, Marine, Civil and Construction industries, in order to obtain new customers and retain existing ones.
            </p>

            <p>
              Min-Max Engineering Services Ltd is committed to continuous improvement in quality with the goal of meeting and exceeding our customers’ expectations and requirements.
            </p>

            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
              Improvement in quality is everyone’s responsibility in Min-Max Engineering Services. Our commitment to quality improvement will lower costs by eliminating errors.
            </p>

            {/* Strategic Commitments */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-slate-900">
                To achieve the above, Min-Max Engineering Services will:
              </h3>
              <div className="space-y-2.5">
                {actionCommitments.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Systems and Procedures */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-slate-900">
                We have the following systems and procedures in place to support us in our aim of total customer satisfaction and continuous improvement throughout our business:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supportingSystems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Motto */}
            <div className="bg-teal-900 text-white p-6 sm:p-8 rounded-xl space-y-3 text-center sm:text-left shadow-sm">
              <div className="inline-flex items-center gap-2 text-teal-200 text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Our Quality Credo</span>
              </div>
              <p className="text-lg sm:text-xl font-bold italic leading-relaxed">
                “We say what we do and we do what we say”, with discipline and effectiveness.
              </p>
              <p className="text-xs text-teal-200/80 pt-1 border-t border-teal-800/80">
                This policy is posted on the company’s Notice Board.
              </p>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Min-Max Engineering Services Ltd · Quality Assurance &amp; Quality Control (QA/QC)
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
