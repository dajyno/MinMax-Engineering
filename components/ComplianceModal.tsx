'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, FileText, Download, Building2 } from 'lucide-react';
import { COMPLIANCE_REGISTRY, ComplianceDocument } from '@/lib/data/compliance';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDocId?: string;
}

export function ComplianceModal({ isOpen, onClose, selectedDocId }: ComplianceModalProps) {
  const [activeDoc, setActiveDoc] = useState<ComplianceDocument>(
    COMPLIANCE_REGISTRY.find((d) => d.id === selectedDocId) || COMPLIANCE_REGISTRY[0]
  );
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white border border-slate-200 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Statutory & Regulatory Compliance Registry
              </h2>
              <p className="text-xs text-slate-500">
                Min-Max Engineering Services Ltd · RC 1459932 · Federal Republic of Nigeria
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Document list sidebar */}
          <div className="md:col-span-5 bg-slate-50 border-r border-slate-200 overflow-y-auto p-3 space-y-1">
            <p className="px-3 py-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Accredited Licenses & Permits
            </p>
            {COMPLIANCE_REGISTRY.map((doc) => {
              const isSelected = activeDoc.id === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveDoc(doc)}
                  className={`w-full text-left p-3 rounded-lg text-xs transition-colors flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'bg-white border border-teal-300 shadow-sm text-slate-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-100/80 border border-transparent'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="truncate">{doc.title}</div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {doc.issuingAuthority}
                    </div>
                  </div>
                  <span className="text-[10px] text-teal-700 shrink-0 font-mono font-semibold">
                    {doc.code.split('/')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Document Inspection Card */}
          <div className="md:col-span-7 bg-white p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-5">
              <div className="border border-slate-200 bg-slate-50/50 rounded-lg p-5">
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-teal-700" />
                    <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">
                      Official Certificate Record
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{activeDoc.status}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{activeDoc.title}</h3>
                    <p className="text-xs text-teal-800 font-mono font-semibold mt-0.5">
                      Doc No: {activeDoc.documentNumber}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-slate-200">
                    <div>
                      <span className="text-slate-500 block text-[11px]">Issuing Authority</span>
                      <span className="text-slate-800 font-medium">{activeDoc.issuingAuthority}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Validity Period</span>
                      <span className="text-slate-800 font-medium">{activeDoc.validThrough}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Audit Classification</span>
                      <span className="text-slate-800 font-medium">{activeDoc.category}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Beneficiary Entity</span>
                      <span className="text-slate-800 font-medium">Min-Max Eng. (RC1459932)</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-700 text-xs font-semibold block mb-1">
                      Regulatory Scope & Authority
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                      {activeDoc.summary}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <FileText className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  All certifications are periodically audited and verified with NUPRC, NMDPRA, NCDMB NOGIC JQS, and CAC portals. Verified documentation copies can be furnished directly for tender submissions and vendor pre-qualification audits.
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-3 mt-6">
              <span className="text-xs text-slate-500 font-mono">
                Audit Hash: SHA256-MM-{activeDoc.code.slice(0, 8)}
              </span>
              <button
                onClick={handleSimulateDownload}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {downloadSuccess ? 'Verification Sheet Generated' : 'Download Verification Sheet'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
