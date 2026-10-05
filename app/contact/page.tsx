'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Building2,
  Building,
  CheckCircle2,
  PhoneCall,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  // Formspree React Hook using endpoint https://formspree.io/f/xbgdjroe
  const [state, handleFormspreeSubmit, resetFormspree] = useForm('xbgdjroe');

  // Contact form controlled state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [inquiryId, setInquiryId] = useState('');

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const refCode = `MM-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryId(refCode);
    await handleFormspreeSubmit(e);
  };

  const handleReset = () => {
    resetFormspree();
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setFormCompany('');
    setFormMessage('');
    setInquiryId('');
  };

  const addressCards = [
    {
      title: 'Port Harcourt Head Office',
      address: '12 Mayawada Lane, Akpa Rumuodor, Ogbogoro Town, Rivers State, Nigeria.',
      icon: Building2,
    },
    {
      title: 'Port Harcourt Branch Office',
      address: '10 Street A, Eliminigwe Estate, Phase 1, Elelenwo, Port Harcourt, Rivers State.',
      icon: Building,
    },
    {
      title: 'Lagos Branch',
      address: '54 Greenville Estate, Off Badore Road, Ajah, Lagos State, Nigeria.',
      icon: MapPin,
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-900 bg-slate-100 overflow-hidden">
      {/* Background Image - 100% raw image without any overlay or fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero_industrial_engineering_1790592378237.jpg"
          alt="Min-Max Engineering Operations Hub"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. HERO SECTION */}
        <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl bg-white/95 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-md space-y-3 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              CONTACT &amp; OPERATIONAL HUBS
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Reach our engineering management, schedule technical audits at our Port Harcourt workshops, or transmit scopes of work directly to our project engineers.
            </p>
          </div>
        </section>

        {/* 2. MAIN SECTION: 3 ADDRESS CARDS + CONTACT CARD ON LEFT, FORM ON RIGHT (EQUAL HEIGHT) */}
        <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT COLUMN: 3 Address Cards + Contact Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
              {/* 3 Address Cards */}
              {addressCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/95 border border-slate-200/90 rounded-xl p-5 shadow-sm backdrop-blur-md flex-1 flex flex-col justify-center hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-teal-700 mb-1.5">
                      <Icon className="w-4 h-4 shrink-0" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                      {card.address}
                    </p>
                  </div>
                );
              })}

              {/* 4th Card: Contact Details */}
              <div className="bg-white/95 border border-slate-200/90 rounded-xl p-5 shadow-sm backdrop-blur-md flex-1 flex flex-col justify-center hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-2 text-teal-700 mb-2">
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Contact Details
                  </h3>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-slate-400 font-medium text-xs">Phone:</span>
                    <div className="font-mono font-semibold text-slate-800 flex flex-wrap gap-x-2">
                      <a href="tel:+2347010497911" className="hover:text-teal-700 transition-colors">
                        +234 701 049 7911
                      </a>
                      <span>/</span>
                      <a href="tel:+2348125441614" className="hover:text-teal-700 transition-colors">
                        +234 812 544 1614
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium text-xs">Email:</span>
                    <a
                      href="mailto:info@minmaxengineering.com"
                      className="text-teal-700 hover:text-teal-800 font-medium transition-colors"
                    >
                      info@minmaxengineering.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white/95 border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-sm backdrop-blur-md flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the form below and our engineering team will get back to you promptly.
                  </p>
                </div>

                {state.succeeded ? (
                  <div className="bg-slate-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4 my-auto animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Message Sent Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formName || 'Client'}</strong>. Your message has been routed to our Port Harcourt engineering desk under reference code{' '}
                      <strong className="font-mono text-teal-700">{inquiryId}</strong>.
                    </p>
                    <p className="text-xs text-slate-500">
                      An engineer from our operations desk will reach out to you shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors shadow-xs"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmitHandler} className="space-y-4 text-xs flex flex-col h-full">
                    {/* Hidden Formspree Subject & Reference */}
                    <input
                      type="hidden"
                      name="_subject"
                      value={`[Min-Max Contact] Inquiry from ${formName || 'Client'} (${formCompany || 'Organization'})`}
                    />
                    <input
                      type="hidden"
                      name="reference_id"
                      value={inquiryId || 'MM-INQ-PENDING'}
                    />

                    {/* Global Formspree Error if any */}
                    {state.errors && Object.keys(state.errors).length > 0 && (
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-xs">There was an issue sending your message.</p>
                          <p className="text-[11px] text-rose-600">Please verify your inputs or contact us directly via telephone.</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                          Your Name &amp; Title <span className="text-orange-600">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Engr. Adebayo Nwosu"
                          className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 transition-colors"
                          required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                          Company / Organization <span className="text-orange-600">*</span>
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                          placeholder="Client Enterprise / Operator"
                          className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 transition-colors"
                          required
                        />
                        <ValidationError prefix="Company" field="company" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-orange-600">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="a.nwosu@company.com"
                          className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 transition-colors"
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                          Telephone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="+234 803 000 0000"
                          className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 transition-colors"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[11px] font-semibold text-slate-700 mb-1.5">
                        Message Details / Project Scope <span className="text-orange-600">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Describe your inquiry, project scope, or required timeline..."
                        className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 transition-colors"
                        required
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Submitting to Operations...</span>
                          </>
                        ) : (
                          <span>Submit Message</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
