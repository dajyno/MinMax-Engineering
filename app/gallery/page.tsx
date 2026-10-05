'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { useRfq } from '@/context/rfq-context';

interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

// 40 client-uploaded operational and field engineering images
const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 40 }, (_, idx) => {
  const num = idx + 1;
  return {
    id: `gallery-img-${num}`,
    image: `/gallery/gallery-${num}.jpeg`,
    alt: `Min-Max Engineering Operations & Field Execution - Image ${num}`,
  };
});

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { openContactModal, openRfq } = useRfq();

  const itemCount = GALLERY_ITEMS.length;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % itemCount : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + itemCount) % itemCount : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, itemCount]);

  const activeItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* ================= HERO HEADER ================= */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            ENGINEERING GALLERY &amp; FIELD OPERATIONS
          </h1>
        </div>

        {/* ================= GALLERY GRID: ONLY IMAGES WITH PROPER LAZY LOADING ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 relative"
            >
              {/* Image Container with 4:3 Aspect Ratio and Optimization */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={80}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                <div className="absolute top-2.5 right-2.5 p-1.5 bg-slate-900/70 hover:bg-teal-600 rounded-lg text-white transition-colors backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PRE-FOOTER CTA CARD ================= */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
              Facility Audits &amp; Tender Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Require Workshop Inspections or Field Mobilization?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Schedule an in-person audit at our Elelenwo heavy engineering machine yard or request technical quotations directly from our engineering estimation desk.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={openContactModal}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-colors shadow-sm"
            >
              Get in Touch
            </button>
            <button
              onClick={openRfq}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            >
              Request a Quote (RFQ)
            </button>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + itemCount) % itemCount : null))
            }
            className="absolute left-3 sm:left-6 z-20 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-teal-600 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % itemCount : null))
            }
            className="absolute right-3 sm:right-6 z-20 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-teal-600 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={90}
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="font-mono text-teal-400 font-semibold">
                Photo {lightboxIndex + 1} of {itemCount}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openContactModal}
                  className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
