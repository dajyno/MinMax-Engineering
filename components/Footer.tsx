'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  ShieldCheck,
  LogIn,
  Building2,
  Building,
  MapPin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1523] text-slate-400 border-t border-slate-800 text-xs mt-auto">
      {/* Main 3-Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Company Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5 text-white font-bold text-base tracking-tight">
              <span>MIN-MAX</span>
              <span className="text-teal-400 font-semibold">ENGINEERING</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Min-Max Engineering Services Ltd (RC1459932) is an indigenous integrated engineering,
              procurement, maintenance, and technical training enterprise supporting the Nigerian Oil &amp; Gas,
              Power, and Infrastructure sectors since December 2017.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-teal-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>RC1459932 · NUPRC · NMDPRA · NOGIC JQS</span>
            </div>
          </div>

          {/* Column 2: Our Locations (4 cols) - matching Contact page titles */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Our Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <Building2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Port Harcourt Head Office</span>
                </div>
                <p className="text-slate-400 text-[11px] pl-5 leading-relaxed">
                  12 Mayawada Lane, Akpa Rumuodor, Ogbogoro Town, Rivers State, Nigeria.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <Building className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Port Harcourt Branch Office</span>
                </div>
                <p className="text-slate-400 text-[11px] pl-5 leading-relaxed">
                  10 Street A, Eliminigwe Estate, Phase 1, Elelenwo, Port Harcourt, Rivers State.
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Lagos Branch</span>
                </div>
                <p className="text-slate-400 text-[11px] pl-5 leading-relaxed">
                  54 Greenville Estate, Off Badore Road, Ajah, Lagos State, Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Direct Inquiries
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div className="font-mono text-[11px] space-y-0.5">
                  <a href="tel:+2347010497911" className="hover:text-white block transition-colors">
                    +234 701 049 7911
                  </a>
                  <a href="tel:+2348125441614" className="hover:text-white block transition-colors">
                    +234 812 544 1614
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@minmaxengineering.com"
                  className="hover:text-white text-[11px] truncate block transition-colors"
                >
                  info@minmaxengineering.com
                </a>
              </li>

              {/* Email Login highlighted in brand teal without dividing line */}
              <li className="flex items-center gap-2 pt-0.5">
                <LogIn className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a
                  href="https://webmail.minmaxengineering.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  Email Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Center-aligned ONLY on mobile; Left/Right aligned on desktop */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center md:justify-between gap-4 text-xs text-slate-400">
          {/* Copyright notice & Designed by Zobrex link (Left-aligned & single line on desktop, 2 close lines & centered on mobile) */}
          <div className="order-2 md:order-1 text-center md:text-left text-slate-400 text-xs leading-normal">
            <span className="block md:inline">
              © 2026 Min-Max Engineering Services Ltd. All rights reserved.
            </span>
            <span className="hidden md:inline text-slate-600 mx-1.5">|</span>
            <span className="block md:inline text-slate-500 mt-0.5 md:mt-0">
              Designed by{' '}
              <a
                href="https://www.zobrex.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
              >
                Zobrex
              </a>
            </span>
          </div>

          {/* HSE & Quality Policy links (Right-aligned on desktop, centered on mobile) */}
          <div className="order-1 md:order-2 flex flex-wrap items-center justify-center md:justify-end gap-4 text-slate-400 text-xs uppercase tracking-wider">
            <Link href="/hse-statement" className="hover:text-slate-300 transition-colors">
              HSE STATEMENT
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/quality-policy" className="hover:text-slate-300 transition-colors">
              QUALITY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
