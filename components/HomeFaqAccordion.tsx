'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Mail } from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

interface FaqItem {
  id: string;
  question: string;
  category: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Mechanical & Testing',
    question: 'What pressure ratings and standards does your valve test bay support?',
    answer:
      'Our Elelenwo heavy engineering facility features a dedicated 400-bar (approx. 5,800 PSI) hydrostatic and pneumatic valve testing bay. We overhaul, machine, calibrate, and pressure-test ball, gate, globe, check, butterfly, choke, and safety relief valves in strict compliance with API 598, API 6D, ASME B16.34, and ISO 5208. Every tested valve is returned with verifiable pressure-time chart recordings, hydrostatic certification, and NUPRC-compliant inspection sign-offs.',
  },
  {
    id: 'faq-2',
    category: 'Regulatory & Compliance',
    question: 'What statutory permits and certifications does Min-Max Engineering hold?',
    answer:
      'Min-Max Engineering Services Ltd (RC1459932, incorporated December 2017) maintains comprehensive regulatory standing in Nigeria: NUPRC Specialized & General Upstream Petroleum Permits, NMDPRA Mid & Downstream Operational Permits, NOGIC JQS Registration (100% Indigenous Nigerian Local Content Retention), SCUML (EFCC Anti-Money Laundering Compliance), FIRS Tax Clearance Certificate (TCC), ITF, and NSITF ECS clearance.',
  },
  {
    id: 'faq-3',
    category: 'Field Operations',
    question: 'What is your response time for emergency mechanical breakdowns and turnarounds?',
    answer:
      'We maintain a 24/7 technical call-out engineering dispatch team for urgent plant turnarounds, flowstation upsets, pipeline integrity issues, pump failures, and offshore shut-in situations. For operational assets across Rivers State, Bayelsa, Delta, and Lagos, our engineers can mobilize promptly with portable diagnostic equipment, laser alignment tools, and mobile hydrostatic test units.',
  },
  {
    id: 'faq-4',
    category: 'Procurement',
    question: 'How does Min-Max handle equipment procurement and OEM spare parts supply?',
    answer:
      'We provide end-to-end technical procurement for OEM valves, actuators, pressure transmitters, line pipes, electrical switchgear, and certified welding consumables. We provide full EN 10204 3.1 material test certificates (MTCs), country-of-origin documentation, and warranty coverage backed by direct partnerships with verified global manufacturers.',
  },
  {
    id: 'faq-5',
    category: 'Technical Expertise',
    question: 'Are your welders and inspectors certified to international codes?',
    answer:
      'Yes. Our welding personnel are qualified up to 6G positions in SMAW, GTAW (TIG), and GMAW (MIG) under ASME Section IX and AWS D1.1 standards. Our NDT inspection personnel hold ASNT Level II certifications across Visual (VT), Dye Penetrant (PT), Magnetic Particle (MT), Ultrasonic (UT), and Radiographic Interpretation (RT). Our instrumentation division includes certified Siemens and Schneider automation engineers.',
  },
  {
    id: 'faq-6',
    category: 'Engagements',
    question: 'How can our company request a technical site audit or commercial quotation?',
    answer:
      'You can click the "Get in Touch" button in our top menu to transmit your scope immediately, submit inquiries through our online portal, or contact our project commercial desk directly via phone (+234 701 049 7911 / +234 812 544 1614) or email at info@minmaxengineering.com. Our engineering estimating team typically reviews requisitions and provides technical scoping within 24 to 48 business hours.',
  },
];

export function HomeFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { openContactModal } = useRfq();

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-bold text-teal-800 uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Common Queries About Our Engineering Services
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-3.5">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`bg-white border rounded-xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-teal-600 shadow-md ring-1 ring-teal-600/20'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold uppercase text-teal-700 tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div
                  className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-teal-100 text-teal-800 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Helpful Still Have Questions Card */}
      <div className="max-w-4xl mx-auto mt-10 bg-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-base font-bold text-slate-900">
            Have a custom engineering requisition or specific tender scope?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Our engineering managers and technical team in Port Harcourt are ready to assist.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={openContactModal}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-600 rounded-lg transition-colors shadow-xs"
          >
            Get in Touch
          </button>
          <a
            href="tel:+2347010497911"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors font-mono"
          >
            <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
            <span>+234 701 049 7911</span>
          </a>
        </div>
      </div>
    </section>
  );
}
