'use client';

import React from 'react';
import { ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ComplianceBarProps {
  onOpenCompliance?: () => void;
}

export function ComplianceBar({ onOpenCompliance }: ComplianceBarProps) {
  const credentials = [
    { label: 'RC1459932 (CAC Reg. Dec 2017)', detail: 'Corporate Affairs Commission' },
    { label: 'NUPRC Specialized Service Permits', detail: 'Upstream Petroleum' },
    { label: 'NMDPRA Mid & Downstream Permits', detail: 'Refinery & Pipelines' },
    { label: 'NOGIC JQS Certified', detail: '100% In-Country Retention' },
    { label: 'SCUML Registered (EFCC)', detail: 'AML/CFT Verified' },
    { label: 'FIRS Tax Clearance Certificate Valid', detail: 'CIT & VAT Current' },
    { label: 'ITF & NSITF Dual Compliant', detail: 'Employee Protections' },
    { label: 'Comprehensive Group Life Policy', detail: 'Workmen Assurance Active' },
  ];

  // Duplicate for seamless infinite horizontal scroll
  const marqueeItems = [...credentials, ...credentials];

  return (
    <div className="bg-slate-100 border-y border-slate-200 text-slate-700 py-2.5 px-4 sm:px-6 text-xs select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left pinned label */}
        <div className="flex items-center gap-2 text-teal-800 font-semibold tracking-wide shrink-0 pr-3 border-r border-slate-300">
          <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
          <span className="uppercase tracking-wider text-[11px] font-bold whitespace-nowrap">
            Regulatory Permits
          </span>
        </div>

        {/* Center Marquee with gradient edges */}
        <div className="relative flex-1 overflow-hidden min-w-0">
          {/* Gradient fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-100 to-transparent z-10" />

          {/* Scrolling items */}
          <div className="animate-marquee flex items-center gap-6 py-0.5">
            {marqueeItems.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="flex items-center gap-2 shrink-0 group cursor-default"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="font-semibold text-slate-800 text-[11px] whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-500 font-normal hidden sm:inline whitespace-nowrap">
                  ({item.detail})
                </span>
                <span className="text-slate-300 ml-3" aria-hidden="true">
                  |
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right pinned action linking to About Page compliance archive */}
        <a
          href="/about#compliance-archive"
          className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold text-teal-800 bg-white hover:bg-teal-50 border border-slate-300 hover:border-teal-300 rounded-md transition-colors shrink-0 shadow-xs"
        >
          <span>Verify Certificates</span>
          <ExternalLink className="w-3 h-3 text-teal-700" />
        </a>
      </div>
    </div>
  );
}
