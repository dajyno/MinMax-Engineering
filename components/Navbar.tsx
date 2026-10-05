'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

export function Navbar() {
  const pathname = usePathname();
  const { openContactModal } = useRfq();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* ZONE 1: BRAND WORDMARK */}
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group flex items-center gap-1.5"
            >
              <span>MIN-MAX</span>
              <span className="text-teal-600 font-semibold">ENGINEERING</span>
            </Link>

            {/* ZONE 2: DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium text-slate-600">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    className={`hover:text-slate-900 transition-colors py-1 whitespace-nowrap ${
                      isActive
                        ? 'text-teal-700 font-semibold border-b-2 border-teal-600'
                        : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ZONE 3: ACTIONS */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop Only CTA Button (Hidden on Mobile) */}
              <button
                onClick={openContactModal}
                className="hidden lg:inline-flex px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                Get in Touch
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-800" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY & PANEL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Container */}
          <div className="relative bg-white border-b border-slate-200 shadow-2xl px-5 pt-4 pb-8 space-y-5 animate-slideDown max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 border border-teal-200'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-teal-700' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA Button Inside Drawer */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider px-3 pb-1 block">
                Quick Action
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal();
                }}
                className="w-full py-3.5 px-4 text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Call Link */}
              <a
                href="tel:+2347010497911"
                className="w-full py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 font-mono"
              >
                <PhoneCall className="w-4 h-4 text-teal-700" />
                <span>Call Us: +234 701 049 7911</span>
              </a>
            </div>

            {/* Secondary Compliance & Policies */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-xs text-slate-500">
              <Link
                href="/hse-statement"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-700 transition-colors uppercase tracking-wider text-[11px]"
              >
                HSE Statement
              </Link>
              <span>·</span>
              <Link
                href="/quality-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-teal-700 transition-colors uppercase tracking-wider text-[11px]"
              >
                Quality Policy
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
