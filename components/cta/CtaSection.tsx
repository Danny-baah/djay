"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="contact"
      aria-label="Contact and consultation call to action"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none"
    >
      {/* ── Background Decorative Vector Graphics ── */}
      {/* 1. Top-Right Soft Blue Wave & Flowing Golden Stroke */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[80%] pointer-events-none -z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 700 450"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-80"
        >
          {/* Soft Pastel Blue Wave Shape */}
          <path
            d="M 150 0 C 260 80, 360 160, 520 130 C 640 105, 680 50, 700 0 L 700 450 L 580 450 C 420 400, 320 220, 150 0 Z"
            fill="url(#blueWaveGrad)"
          />
          {/* Flowing Golden Accent Stroke */}
          <path
            d="M 280 0 C 360 110, 460 190, 620 145 C 680 130, 700 70, 700 70"
            stroke="#F59E0B"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="blueWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EBF4FD" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#F3F8FE" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Bottom-Left Subtle Ambient Glow */}
      <div
        className="absolute bottom-0 left-0 w-[35%] h-[55%] pointer-events-none -z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 300"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full opacity-60"
        >
          <path
            d="M 0 300 L 0 140 C 140 160, 240 240, 320 300 Z"
            fill="url(#bottomBlueGlow)"
          />
          <defs>
            <linearGradient id="bottomBlueGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EBF4FD" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Bottom-Right Dotted Matrix Pattern (hidden on mobile to prevent overlapping) */}
      <div
        className="hidden sm:block absolute bottom-4 right-6 sm:bottom-6 sm:right-10 pointer-events-none -z-0 opacity-40"
        aria-hidden="true"
      >
        <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
          <pattern
            id="ctaDots"
            x="0"
            y="0"
            width="15"
            height="15"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#087BC1" />
          </pattern>
          <rect width="90" height="60" fill="url(#ctaDots)" />
        </svg>
      </div>

      {/* ── Main Container ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HEADLINE & CTAs ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#F59E0B]">
                Let&apos;s Work Together
              </span>
              <span className="h-[1.5px] w-8 sm:w-12 bg-amber-500/50 rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[50px] xl:text-[54px] font-black text-[#0D2238] tracking-tight leading-[1.12] mb-3 sm:mb-5">
              Ready to discuss
              <br />
              <span className="text-[#087BC1]">your needs?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#526375] text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg font-normal">
              Get in touch with our team to explore how DJay can support your
              operations with safe, efficient and sustainable solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary Amber Pill */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#F59E0B] text-[#0D2238] font-bold text-xs uppercase tracking-wider hover:bg-[#E08A00] hover:shadow-md transition-all duration-300 group shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#0D2238] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Blue-Outlined Pill */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-[1.5px] border-[#087BC1] text-[#0D2238] font-bold text-xs uppercase tracking-wider hover:bg-sky-50 transition-all duration-300 group bg-white/70"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#087BC1] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3 CONTACT CHANNELS ================= */}
          <div className="lg:col-span-6 w-full">
            
            {/* ── Mobile Layout (< sm): Sleek, Unified Interactive Contact Card ── */}
            <div className="block sm:hidden w-full bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200/80 shadow-sm divide-y divide-slate-200/70">
              
              {/* Mobile Channel 1: Call Us */}
              <div className="flex items-center gap-3.5 pb-3.5">
                <div className="w-11 h-11 rounded-full bg-[#EBF5FC] text-[#087BC1] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-[#0D2238] text-[13px] leading-tight mb-0.5">
                    Call Us
                  </h3>
                  <div className="text-slate-600 text-[12px] font-medium flex flex-wrap gap-x-2">
                    <a
                      href="tel:+233303936790"
                      className="hover:text-[#F59E0B] active:text-[#F59E0B] transition-colors"
                    >
                      +233 303 936 790
                    </a>
                    <span className="text-slate-300">·</span>
                    <a
                      href="tel:+233303960303"
                      className="hover:text-[#F59E0B] active:text-[#F59E0B] transition-colors"
                    >
                      +233 303 960 303
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Channel 2: Email Us */}
              <div className="flex items-center gap-3.5 py-3.5">
                <div className="w-11 h-11 rounded-full bg-[#EBF5FC] text-[#087BC1] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-[#0D2238] text-[13px] leading-tight mb-0.5">
                    Email Us
                  </h3>
                  <div className="text-slate-600 text-[12px] font-medium truncate">
                    <a
                      href="mailto:info@djayservice.com"
                      className="hover:text-[#F59E0B] active:text-[#F59E0B] transition-colors"
                    >
                      info@djayservice.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Channel 3: Visit Our Office */}
              <div className="flex items-start gap-3.5 pt-3.5">
                <div className="w-11 h-11 rounded-full bg-[#EBF5FC] text-[#087BC1] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-[#0D2238] text-[13px] leading-tight mb-0.5">
                    Visit Our Office
                  </h3>
                  <address className="text-slate-600 text-[12px] leading-relaxed not-italic">
                    No. 36 Kanda Highway, Airport Residential Area, Accra, Ghana
                  </address>
                </div>
              </div>

            </div>

            {/* ── Tablet & Desktop Layout (>= sm): 3-Column Layout with Vertical Dividers ── */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-2 items-center divide-x divide-slate-200">
              
              {/* Channel 1: Call Us */}
              <div className="flex flex-col items-center text-center px-3 sm:px-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF5FC] text-[#087BC1] flex items-center justify-center mb-3 shadow-sm hover:scale-110 hover:bg-[#D8ECFB] transition-all duration-200">
                  <Phone className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-extrabold text-[#0D2238] text-sm mb-1.5">
                  Call Us
                </h3>
                <div className="text-slate-500 text-xs sm:text-[13px] leading-relaxed flex flex-col gap-0.5">
                  <a
                    href="tel:+233303936790"
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    +233 303 936 790
                  </a>
                  <a
                    href="tel:+233303960303"
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    +233 303 960 303
                  </a>
                </div>
              </div>

              {/* Channel 2: Email Us */}
              <div className="flex flex-col items-center text-center px-3 sm:px-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF5FC] text-[#087BC1] flex items-center justify-center mb-3 shadow-sm hover:scale-110 hover:bg-[#D8ECFB] transition-all duration-200">
                  <Mail className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-extrabold text-[#0D2238] text-sm mb-1.5">
                  Email Us
                </h3>
                <div className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                  <a
                    href="mailto:info@djayservice.com"
                    className="hover:text-[#F59E0B] transition-colors break-all"
                  >
                    info@djayservice.com
                  </a>
                </div>
              </div>

              {/* Channel 3: Visit Our Office */}
              <div className="flex flex-col items-center text-center px-3 sm:px-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF5FC] text-[#087BC1] flex items-center justify-center mb-3 shadow-sm hover:scale-110 hover:bg-[#D8ECFB] transition-all duration-200">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-extrabold text-[#0D2238] text-sm mb-1.5">
                  Visit Our Office
                </h3>
                <address className="text-slate-500 text-xs sm:text-[13px] leading-relaxed not-italic">
                  No. 36 Kanda Highway,
                  <br />
                  Airport Residential Area,
                  <br />
                  Accra, Ghana
                </address>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
