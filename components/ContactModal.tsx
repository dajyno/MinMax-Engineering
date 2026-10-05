'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, PhoneCall, Mail, Copy, Check, Loader2, AlertCircle } from 'lucide-react';
import { useRfq } from '@/context/rfq-context';
import { useForm, ValidationError } from '@formspree/react';

export function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useRfq();

  // Formspree React Hook
  const [state, handleFormspreeSubmit, resetFormspree] = useForm('xbgdjroe');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContactModal();
    };
    if (isContactModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isContactModalOpen, closeContactModal]);

  if (!isContactModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const generatedRef = `MM-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(generatedRef);
    await handleFormspreeSubmit(e);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    resetFormspree();
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
    setReferenceId('');
    closeContactModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={closeContactModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 z-10 animate-scaleUp overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={closeContactModal}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {state.succeeded ? (
          /* Confirmation View */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-bold text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Min-Max Engineering. Our technical project team in Port Harcourt has received your inquiry and will revert within 24 business hours.
              </p>
            </div>

            {/* Reference Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-xs mx-auto space-y-1">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Inquiry Tracking Reference
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-mono font-bold text-teal-800">
                  {referenceId || 'MM-INQ-SUBMITTED'}
                </span>
                <button
                  onClick={handleCopyRef}
                  className="p-1 hover:bg-slate-200 rounded text-slate-600 transition-colors"
                  title="Copy Reference"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Contact Numbers */}
            <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <a
                href="tel:+2347010497911"
                className="flex items-center gap-1.5 font-mono text-teal-700 hover:underline"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>+234 701 049 7911</span>
              </a>
              <a
                href="mailto:info@minmaxengineering.com"
                className="flex items-center gap-1.5 text-teal-700 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@minmaxengineering.com</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form View: Contact Form */
          <div className="space-y-6">
            <div className="space-y-1 pr-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700">
                Direct Inquiries
              </span>
              <h2
                id="contact-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
              >
                Get in Touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly with our engineering desk. Transmit your project details, schedule workshop inspections, or inquire about technical capabilities.
              </p>
            </div>

            {state.errors && Object.keys(state.errors).length > 0 && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 flex items-start gap-2 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Unable to submit inquiry.</p>
                  <p className="text-[11px] text-rose-600">Please check your inputs or reach us via phone.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="_subject"
                value={`[Min-Max Inquiry] Message from ${fullName || 'Client'} (${company || 'Direct'})`}
              />
              <input
                type="hidden"
                name="reference_code"
                value={referenceId || 'MM-INQ-PENDING'}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Engr. Chidi Okafor"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all font-mono"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                </div>

                <div>
                  <label htmlFor="modal-company" className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    id="modal-company"
                    name="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Oil & Gas Operator / EPC"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Project Scope <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your requisition, facility location, valve specs, turnaround timeline, or technical requirements..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600/30 focus:border-teal-600 transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-600 text-[11px] mt-1" />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  Direct Response: Port Harcourt Operations Desk
                </span>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-600 active:bg-teal-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
