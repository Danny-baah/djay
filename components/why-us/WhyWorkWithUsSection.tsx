"use client";

import React from "react";
import { Users, FileCheck, Settings, MapPin } from "lucide-react";

export default function WhyWorkWithUsSection() {
  return (
    <section
      id="why-work-with-us"
      aria-label="Why organisations work with DJay Integrated Services Group"
      className="relative w-full bg-[#081726] text-white overflow-hidden select-none"
    >
      {/* ================= TOP BLOCK: NARRATIVE + ROUNDED ARCH PHOTO ================= */}
      <div className="relative w-full min-h-[460px] lg:min-h-[500px] xl:min-h-[540px]">
        {/* Desktop Arched Photo Mask & Glowing Vector Border */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
          <svg
            viewBox="0 0 1024 380"
            preserveAspectRatio="none"
            className="w-full h-full"
            aria-hidden="true"
          >
            <defs>
              {/* Exact parabolic arch matching the reference screenshot */}
              <clipPath id="whyUsExactArchClip">
                <path d="M 645 0 C 555 60, 495 170, 495 380 L 1024 380 L 1024 0 Z" />
              </clipPath>
              {/* Golden gradient for the primary arc */}
              <linearGradient id="whyUsGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#D98207" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Base Background */}
            <rect width="1024" height="380" fill="#081726" />

            {/* Clipped Master Photography */}
            <image
              href="/images/why-us-engineer.jpg"
              x="485"
              y="0"
              width="539"
              height="380"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#whyUsExactArchClip)"
            />

            {/* Subtle Outer Blue Glow Arc */}
            <path
              d="M 632 0 C 542 60, 482 170, 482 380"
              stroke="rgba(8, 123, 193, 0.45)"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Primary Golden Arc */}
            <path
              d="M 645 0 C 555 60, 495 170, 495 380"
              stroke="url(#whyUsGoldGrad)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Mobile / Tablet Background Fallback */}
        <div className="lg:hidden absolute top-0 right-0 w-full h-full pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-right-top opacity-35"
            style={{ backgroundImage: "url('/images/why-us-engineer.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081726] via-[#081726]/85 to-transparent" />
        </div>

        {/* Left-Side Narrative Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-xl lg:max-w-[48%]">
            {/* Eyebrow with horizontal rule */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#F59E0B]">
                Why organisations work with us
              </span>
              <span className="h-[1.5px] w-12 bg-amber-500/60 rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black text-white tracking-tight leading-[1.08] mb-6">
              One partner,
              <br />
              <span className="text-[#087BC1]">four essential</span>
              <br />
              capabilities.
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-[17px] leading-relaxed max-w-lg font-normal">
              We bring people, process and equipment together, so you manage one
              relationship instead of many vendors.
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR: 4 FOUNDATION PILLARS ================= */}
      <div className="relative z-20 w-full bg-[#061422] border-t border-white/10 py-8 lg:py-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {/* 1. Trained personnel */}
            <div className="flex items-center gap-4 lg:px-6 first:pl-0">
              <div className="w-14 h-14 rounded-full bg-[#0D243A] border border-sky-500/30 flex items-center justify-center shrink-0 shadow-inner">
                <Users className="w-6 h-6 text-[#087BC1]" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base leading-tight mb-1">
                  Trained personnel
                </h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                  Vetted, trained teams across HR, security and safety.
                </p>
              </div>
            </div>

            {/* 2. Clear accountability */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-14 h-14 rounded-full bg-[#0D243A] border border-amber-500/30 flex items-center justify-center shrink-0 shadow-inner relative">
                <FileCheck className="w-6 h-6 text-sky-400" />
                <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base leading-tight mb-1">
                  Clear accountability
                </h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                  Every service line reports through a defined structure.
                </p>
              </div>
            </div>

            {/* 3. Practical delivery */}
            <div className="flex items-center gap-4 lg:px-6">
              <div className="w-14 h-14 rounded-full bg-[#0D243A] border border-sky-500/30 flex items-center justify-center shrink-0 shadow-inner relative">
                <Settings className="w-6 h-6 text-sky-400" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base leading-tight mb-1">
                  Practical delivery
                </h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                  Field-tested processes, not just policy documents.
                </p>
              </div>
            </div>

            {/* 4. Nationwide reach */}
            <div className="flex items-center gap-4 lg:px-6 last:pr-0">
              <div className="w-14 h-14 rounded-full bg-[#0D243A] border border-amber-500/30 flex items-center justify-center shrink-0 shadow-inner">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base leading-tight mb-1">
                  Nationwide reach
                </h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                  Mobilised from Accra to project sites across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
