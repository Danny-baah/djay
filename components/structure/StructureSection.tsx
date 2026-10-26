"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Settings,
  BarChart3,
  Building2,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function StructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    const currentElem = sectionRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  return (
    <section
      id="structure"
      ref={sectionRef}
      className="relative w-full bg-white pt-10 sm:pt-16 pb-20 sm:pb-32 overflow-hidden"
      aria-label="DJay Integrated Services Group Governance and Structure"
    >
      <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Narrative, CTA & 3 Feature Indicators ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              className={`mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[#F59E0B] text-[13px] sm:text-[14px] font-bold tracking-[0.14em] uppercase">
                Our Structure
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`text-[#0D2238] text-[36px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.015em] mb-6 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Strong governance.
              <br />
              Aligned <span className="text-[#087BC1]">for impact.</span>
            </h2>

            {/* Description */}
            <p
              className={`text-[#526375] text-[16px] sm:text-[17px] leading-[1.65] font-normal mb-8 max-w-[480px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Our organisational structure enables clear leadership, effective
              oversight and seamless collaboration across all service lines and
              operations.
            </p>

            {/* Outlined Pill CTA */}
            <div
              className={`mb-10 sm:mb-12 transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/#structure"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border-[1.5px] border-[#F59E0B] rounded-full text-[#0D2238] font-semibold text-[14px] sm:text-[15px] hover:bg-amber-500/10 hover:border-amber-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group"
              >
                <span>View our organisational structure</span>
                <ArrowRight
                  size={16}
                  className="text-[#F59E0B] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* 3 Value Badges */}
            <div
              className={`grid grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Badge 1: Clear Leadership */}
              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#EBF5FA] flex items-center justify-center shrink-0">
                  <Users size={18} className="text-[#087BC1]" />
                </div>
                <div>
                  <div className="text-[#0D2238] font-bold text-[13px] sm:text-[14px] leading-tight">
                    Clear
                  </div>
                  <div className="text-[#0D2238] font-bold text-[13px] sm:text-[14px] leading-tight">
                    leadership
                  </div>
                </div>
              </div>

              {/* Badge 2: Effective Governance */}
              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#EBF5FA] flex items-center justify-center shrink-0">
                  <Settings size={18} className="text-[#087BC1]" />
                </div>
                <div>
                  <div className="text-[#0D2238] font-bold text-[13px] sm:text-[14px] leading-tight">
                    Effective
                  </div>
                  <div className="text-[#0D2238] font-bold text-[13px] sm:text-[14px] leading-tight">
                    governance
                  </div>
                </div>
              </div>

              {/* Badge 3: Aligned Delivery */}
              <div className="flex items-center gap-3">
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#EBF5FA] flex items-center justify-center shrink-0">
                  <BarChart3 size={18} className="text-[#087BC1]" />
                </div>
                <div>
                  <div className="text-[#0D2238] font-bold text-[13px] sm:text-[14px] leading-tight">
                    Aligned
                  </div>
                  <div className="text-[#0D2238] font-bold text-[13px] sm:text-[14px] leading-tight">
                    delivery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Boardroom Photography with Floating Org Chart Card ── */}
          <div className="lg:col-span-7">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[530px] flex items-center justify-end p-4 sm:p-6 lg:p-8 bg-[#0D2238] transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[1.02] translate-y-8"
              }`}
            >
              {/* Background Boardroom Photography */}
              <Image
                src="/images/boardroom-governance.jpg"
                alt="Executive corporate boardroom overlooking city skyline"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />

              {/* Ambient overlay for depth */}
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

              {/* Floating White Org Chart Card */}
              <div
                className={`relative z-10 w-full max-w-[420px] bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/60 mx-auto sm:mr-0 transition-all duration-700 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                {/* Level 1: Board */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#0D2238] text-white py-2 px-8 rounded-lg font-bold text-center text-[13px] shadow-sm tracking-wide">
                    Board
                  </div>

                  {/* Vertical Connector Line 1 with Amber Dot */}
                  <div className="relative w-[1.5px] h-6 bg-amber-400/80 my-0.5">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                  </div>
                </div>

                {/* Level 2: Managing Director */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#0066CC] hover:bg-[#0055aa] text-white py-2.5 px-8 rounded-lg font-bold text-center text-[13px] shadow-sm tracking-wide w-48 transition-colors">
                    Managing Director
                  </div>

                  {/* Vertical Connector Line 2 with Amber Dot */}
                  <div className="relative w-[1.5px] h-6 bg-amber-400/80 my-0.5">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                  </div>
                </div>

                {/* Level 3: General Manager */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#459AD4] hover:bg-[#3b8ac0] text-white py-2.5 px-8 rounded-lg font-bold text-center text-[13px] shadow-sm tracking-wide w-48 transition-colors">
                    General Manager
                  </div>

                  {/* Vertical stem down to branch line */}
                  <div className="relative w-[1.5px] h-4 bg-amber-400/80 my-0.5">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                  </div>
                </div>

                {/* Branch Connector Bar */}
                <div className="relative w-full max-w-[340px] mx-auto h-[1.5px] bg-gray-200 mt-1 mb-3">
                  {/* Vertical connectors down to each child card */}
                  <span className="absolute left-[12%] -top-1 w-2 h-2 rounded-full bg-amber-400" />
                  <span className="absolute left-[38%] -top-1 w-2 h-2 rounded-full bg-amber-400" />
                  <span className="absolute left-[62%] -top-1 w-2 h-2 rounded-full bg-amber-400" />
                  <span className="absolute left-[88%] -top-1 w-2 h-2 rounded-full bg-amber-400" />
                </div>

                {/* Level 4: 4 Subsidiary / Department Cards */}
                <div className="grid grid-cols-4 gap-2 sm:gap-2.5 pt-1">
                  {/* Card 1: DFI */}
                  <div className="bg-[#F1F6FA] hover:bg-sky-50 rounded-xl p-2.5 text-center flex flex-col items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5 border border-black/5 shadow-xs cursor-pointer group">
                    <Building2 size={18} className="text-[#087BC1] group-hover:scale-110 transition-transform" />
                    <span className="text-[#0D2238] font-bold text-[11px] tracking-tight">DFI</span>
                  </div>

                  {/* Card 2: DJAY */}
                  <div className="bg-[#F1F6FA] hover:bg-sky-50 rounded-xl p-2.5 text-center flex flex-col items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5 border border-black/5 shadow-xs cursor-pointer group">
                    <Users size={18} className="text-[#087BC1] group-hover:scale-110 transition-transform" />
                    <span className="text-[#0D2238] font-bold text-[11px] tracking-tight">DJAY</span>
                  </div>

                  {/* Card 3: Audit */}
                  <div className="bg-[#F1F6FA] hover:bg-sky-50 rounded-xl p-2.5 text-center flex flex-col items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5 border border-black/5 shadow-xs cursor-pointer group">
                    <FileText size={18} className="text-[#087BC1] group-hover:scale-110 transition-transform" />
                    <span className="text-[#0D2238] font-bold text-[11px] tracking-tight">Audit</span>
                  </div>

                  {/* Card 4: QHSE Manager */}
                  <div className="bg-[#F1F6FA] hover:bg-sky-50 rounded-xl p-2 sm:p-2.5 text-center flex flex-col items-center justify-center gap-1 transition-all hover:-translate-y-0.5 border border-black/5 shadow-xs cursor-pointer group">
                    <ShieldCheck size={18} className="text-[#087BC1] group-hover:scale-110 transition-transform" />
                    <span className="text-[#0D2238] font-bold text-[10px] leading-tight tracking-tight">QHSE Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
