'use client';

import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  FileSpreadsheet,
  Upload,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Send,
  Plus,
  Trash2,
  Clock,
  MapPin,
  Wrench,
  Loader2,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export function RfqModal() {
  const {
    isOpen,
    activeStep,
    formData,
    submittedRfqId,
    closeRfq,
    nextStep,
    prevStep,
    setStep,
    updateFormData,
    addBoqRow,
    removeBoqRow,
    updateBoqRow,
    parseBulkBoqText,
    submitRfq,
    resetRfq,
  } = useRfq();

  const [bulkText, setBulkText] = useState('');
  const [showBulkPaste, setShowBulkPaste] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCopyTrackingId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitRfq();
    setIsSubmitting(false);
  };

  const handleApplyBulk = () => {
    if (bulkText.trim()) {
      parseBulkBoqText(bulkText);
      setBulkText('');
      setShowBulkPaste(false);
    }
  };

  const serviceCategories = [
    'Mechanical & Asset Integrity',
    'Electrical, Instrumentation & Control',
    'Welding, Structural Fabrication & Civil Works',
    'Specialized Facilities & HVAC',
    'Equipment & Materials Procurement',
    'Technical Training & Manpower Supply',
    'Other',
  ];

  const urgencyOptions = [
    'Routine Maintenance',
    'Planned Turnaround Window',
    'Emergency Breakdown Call-Out',
  ];

  const facilityScopes = [
    'Workshop Testing & Overhaul',
    'Onshore Field / Flow Station Facility',
    'Offshore Platform / FPSO / Deepwater',
    'Swamp Barge / Canal Facility',
    'Industrial Manufacturing / Power Plant',
    'Other',
  ];

  // WhatsApp quick trigger
  const whatsappUrl = submittedRfqId
    ? `https://wa.me/2347010497911?text=${encodeURIComponent(
        `Hello Min-Max Engineering, I have submitted an official RFQ [Ref: ${submittedRfqId}].\n\nClient: ${formData.contactName} (${formData.contactCompany})\nService: ${formData.serviceTitle}\nScope: ${formData.facilityScope}\nUrgency: ${formData.urgency}\n\nPlease confirm receipt.`
      )}`
    : `https://wa.me/2347010497911?text=${encodeURIComponent('Hello Min-Max Engineering, I require an urgent engineering quotation.')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white border border-slate-200 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Request for Quotation (RFQ) & Technical Scope
              </h2>
              <p className="text-[11px] text-slate-500">
                Min-Max Engineering Services Ltd · RC1459932 · Direct Technical Dispatch
              </p>
            </div>
          </div>
          <button
            onClick={closeRfq}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition-colors"
            aria-label="Close RFQ dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Tracker */}
        {!submittedRfqId && (
          <div className="px-6 py-3 bg-white border-b border-slate-100">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              {[
                { num: 1, title: 'Service' },
                { num: 2, title: 'Scope & Site' },
                { num: 3, title: 'BOQ / Schedule' },
                { num: 4, title: 'Contact & Submit' },
              ].map((step) => {
                const isActive = activeStep === step.num;
                const isCompleted = activeStep > step.num;
                return (
                  <button
                    key={step.num}
                    onClick={() => setStep(step.num)}
                    className="flex items-center gap-2 group text-left transition-colors"
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        isActive
                          ? 'bg-teal-600 text-white font-bold'
                          : isCompleted
                          ? 'bg-teal-50 text-teal-700 border border-teal-300'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`text-xs hidden sm:inline font-medium ${
                        isActive ? 'text-slate-900 font-bold' : isCompleted ? 'text-teal-700' : 'text-slate-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 text-slate-700">
          {/* SUCCESS SCREEN */}
          {submittedRfqId ? (
            <div className="text-center py-6 max-w-lg mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  RFQ Dispatched Successfully
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your engineering requirements have been logged into our Port Harcourt Technical Command center.
                </p>
              </div>

              {/* Reference box */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[11px] text-slate-500 block uppercase font-mono tracking-wider">
                    Official RFQ Reference ID
                  </span>
                  <span className="text-base font-mono font-bold text-teal-700">
                    {submittedRfqId}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyTrackingId(submittedRfqId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded transition-colors"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200 text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service Line:</span>
                  <span className="font-semibold text-slate-800">{formData.serviceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Operating Scope:</span>
                  <span className="font-semibold text-slate-800">{formData.facilityScope}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">BOQ Schedule:</span>
                  <span className="font-semibold text-slate-800 font-mono">
                    {formData.boqRows.filter((r) => r.item.trim()).length} Items Enlisted
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Urgency:</span>
                  <span className="font-semibold text-orange-600">{formData.urgency}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Notify Lead Engineer via WhatsApp</span>
                </a>
                <button
                  onClick={resetRfq}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                >
                  <span>Submit Another RFQ</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* STEP 1: SERVICE LINE */}
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Engineering Discipline
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => updateFormData({ serviceCategory: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    >
                      {serviceCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {formData.serviceCategory === 'Other' && (
                      <div className="mt-2 animate-fadeIn">
                        <input
                          type="text"
                          value={formData.customCategory || ''}
                          onChange={(e) => updateFormData({ customCategory: e.target.value })}
                          placeholder="Please specify other engineering discipline..."
                          className="w-full bg-white border border-teal-500 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-600"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service / Component Requirement
                    </label>
                    <input
                      type="text"
                      value={formData.serviceTitle}
                      onChange={(e) => updateFormData({ serviceTitle: e.target.value })}
                      placeholder="e.g. 10x 6-inch Class 300 Ball Valve Hydrostatic Testing & Recertification"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Operating Urgency & Turnaround Window
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {urgencyOptions.map((urg) => {
                        const isSelected = formData.urgency === urg;
                        return (
                          <button
                            type="button"
                            key={urg}
                            onClick={() => updateFormData({ urgency: urg })}
                            className={`p-2.5 text-left rounded-lg text-xs border transition-colors ${
                              isSelected
                                ? 'bg-teal-50 border-teal-600 text-teal-900 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 mb-1">
                              <Clock className="w-3.5 h-3.5 text-teal-600" />
                              <span className="font-semibold text-[11px]">
                                {urg.split(' ')[0]}
                              </span>
                            </div>
                            <span className="text-[11px] block">{urg}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: SCOPE & SITE */}
              {activeStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Operating Scope & Facility
                    </label>
                    <select
                      value={formData.facilityScope}
                      onChange={(e) => updateFormData({ facilityScope: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    >
                      {facilityScopes.map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                    {formData.facilityScope === 'Other' && (
                      <div className="mt-2 animate-fadeIn">
                        <input
                          type="text"
                          value={formData.customFacilityScope || ''}
                          onChange={(e) => updateFormData({ customFacilityScope: e.target.value })}
                          placeholder="Please specify operating scope / facility..."
                          className="w-full bg-white border border-teal-500 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-600"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Site / Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={formData.siteLocation}
                        onChange={(e) => updateFormData({ siteLocation: e.target.value })}
                        placeholder="e.g. Bonny Island / Escravos / Port Harcourt Workshop"
                        className="w-full pl-9 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Technical Scope & Engineering Specifications
                    </label>
                    <textarea
                      rows={4}
                      value={formData.technicalSpecs}
                      onChange={(e) => updateFormData({ technicalSpecs: e.target.value })}
                      placeholder="Specify pressure ratings (e.g. 400 bar hydrostatic, ASME Class 600), fluid medium (sour crude, gas), flange standards, weld positions (6G), or OEM part numbers."
                      className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: BOQ SCHEDULE */}
              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">
                        Bill of Quantities (BOQ) Schedule
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Itemize materials, valves, or components for rapid estimation.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={addBoqRow}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-600 rounded-lg shadow-xs transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Add Item</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowBulkPaste(!showBulkPaste)}
                        className="text-xs text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5" />
                        <span>{showBulkPaste ? 'Hide Importer' : 'Bulk Paste'}</span>
                      </button>
                    </div>
                  </div>

                  {showBulkPaste && (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
                      <p className="text-[11px] text-slate-600">
                        Paste tabular rows from Excel (Item | Qty | Unit | Notes):
                      </p>
                      <textarea
                        rows={3}
                        value={bulkText}
                        onChange={(e) => setBulkText(e.target.value)}
                        placeholder="Class 600 Ball Valve | 4 | Units | 1500 PSI test&#10;Sch 80 12-inch Pipe | 100 | Meters | API 5L X65"
                        className="w-full bg-white border border-slate-300 rounded p-2 text-xs font-mono text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                      />
                      <button
                        type="button"
                        onClick={handleApplyBulk}
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded transition-colors"
                      >
                        Parse & Append Rows
                      </button>
                    </div>
                  )}

                  {/* BOQ Table */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="max-h-56 overflow-y-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] tracking-wider sticky top-0 border-b border-slate-200">
                          <tr>
                            <th className="py-2 px-3">Item Description</th>
                            <th className="py-2 px-3 w-20">Qty</th>
                            <th className="py-2 px-3 w-24">Unit</th>
                            <th className="py-2 px-3">Specification / Standards</th>
                            <th className="py-2 px-2 w-10 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {formData.boqRows.length === 0 ? (
                            <tr>
                              <td colSpan={5} className="py-8 px-4 text-center bg-slate-50/60">
                                <div className="flex flex-col items-center justify-center space-y-2 max-w-sm mx-auto">
                                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                                    <FileSpreadsheet className="w-5 h-5" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <p className="text-xs font-bold text-slate-800">
                                      Schedule is currently empty
                                    </p>
                                    <p className="text-[11px] text-slate-500">
                                      Click the button below to add equipment items or paste from your procurement list.
                                    </p>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={addBoqRow}
                                    className="mt-1 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-700 hover:bg-teal-600 rounded-lg shadow-sm transition-all hover:shadow"
                                  >
                                    <Plus className="w-4 h-4 stroke-[2.5]" />
                                    <span>Add Item</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            formData.boqRows.map((row) => (
                              <tr key={row.id}>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.item}
                                    onChange={(e) => updateBoqRow(row.id, 'item', e.target.value)}
                                    placeholder="Item name / Valve type"
                                    className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-teal-600 px-1 py-0.5 text-xs text-slate-800 focus:outline-none"
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.quantity}
                                    onChange={(e) => updateBoqRow(row.id, 'quantity', e.target.value)}
                                    className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-teal-600 px-1 py-0.5 text-xs text-slate-800 text-center focus:outline-none font-mono"
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.unit}
                                    onChange={(e) => updateBoqRow(row.id, 'unit', e.target.value)}
                                    className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-teal-600 px-1 py-0.5 text-xs text-slate-800 focus:outline-none"
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.specNotes}
                                    onChange={(e) => updateBoqRow(row.id, 'specNotes', e.target.value)}
                                    placeholder="Pressure / Class / Standard"
                                    className="w-full bg-transparent border-b border-transparent hover:border-slate-300 focus:border-teal-600 px-1 py-0.5 text-xs text-slate-700 focus:outline-none"
                                  />
                                </td>
                                <td className="p-2 text-center">
                                  <button
                                    type="button"
                                    onClick={() => removeBoqRow(row.id)}
                                    className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                                    title="Remove item"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={addBoqRow}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-600 active:bg-teal-800 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        <span>Add Item</span>
                      </button>
                      <span className="text-[11px] text-slate-500 font-mono font-medium">
                        {formData.boqRows.length} item{formData.boqRows.length === 1 ? '' : 's'} in schedule
                      </span>
                    </div>
                  </div>

                  {/* Attachment simulation */}
                  <div className="border border-dashed border-slate-300 rounded-lg p-3 text-center bg-slate-50">
                    <p className="text-xs text-slate-700 font-medium">
                      Attach Scope Document or P&ID Drawing (Optional)
                    </p>
                    <input
                      type="file"
                      id="rfq-file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          updateFormData({ attachedFileName: file.name });
                        }
                      }}
                    />
                    <label
                      htmlFor="rfq-file"
                      className="inline-block mt-1.5 px-3 py-1 text-xs text-teal-700 border border-teal-300 rounded-md cursor-pointer hover:bg-teal-50 transition-colors font-medium"
                    >
                      {formData.attachedFileName ? `Attached: ${formData.attachedFileName}` : 'Select Document'}
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMISSION */}
              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name & Title <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => updateFormData({ contactName: e.target.value })}
                        placeholder="Engr. Name"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Client Enterprise <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactCompany}
                        onChange={(e) => updateFormData({ contactCompany: e.target.value })}
                        placeholder="e.g. Energy Operator / EPC"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Corporate Email <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => updateFormData({ contactEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Direct Phone / WhatsApp <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => updateFormData({ contactPhone: e.target.value })}
                        placeholder="+234 803 000 0000"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs space-y-1 text-slate-600">
                    <div className="font-bold text-slate-800 mb-1 text-[11px] uppercase tracking-wider">
                      Summary Verification
                    </div>
                    <p>
                      <strong className="text-slate-700">Requirement:</strong> {formData.serviceTitle} ({formData.serviceCategory})
                    </p>
                    <p>
                      <strong className="text-slate-700">Scope:</strong> {formData.facilityScope} · {formData.siteLocation || 'Port Harcourt'}
                    </p>
                    <p>
                      <strong className="text-slate-700">Urgency:</strong> {formData.urgency}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  {activeStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {activeStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors"
                    >
                      <span>Proceed</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.contactName || !formData.contactEmail}
                      className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 disabled:opacity-50 rounded-lg transition-colors shadow-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Submitting to Operations...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Official RFQ</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer hotline */}
        <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>24/7 Breakdown Hotline:</span>
            <a href="tel:+2347010497911" className="text-slate-900 hover:text-teal-700 font-mono font-bold">
              +234 701 049 7911
            </a>
          </div>
          <span className="text-slate-500">Elelenwo Workshop Operational 24/7</span>
        </div>
      </div>
    </div>
  );
}
