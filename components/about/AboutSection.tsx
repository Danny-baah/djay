"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation only once
        }
      },
      {
        threshold: 0.18, // Trigger when 18% of section is visible
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

  const valuePillars = [
    {
      title: "People first",
      description: "Partnership built on respect.",
      delay: "delay-[500ms]",
    },
    {
      title: "Safety always",
      description: "A responsible way of working.",
      delay: "delay-[650ms]",
    },
    {
      title: "Reliable delivery",
      description: "Practical solutions that perform.",
      delay: "delay-[800ms]",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-white pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden"
      aria-label="About DJay Integrated Services Group"
    >
      {/* ── Upper Content: Story & Photography ── */}
      <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-8 md:px-12 mb-10 sm:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div
              className={`text-[#F59E0B] text-[13px] sm:text-[14px] font-bold tracking-[0.14em] uppercase mb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              About DJay
            </div>

            {/* Headline */}
            <h2
              className={`text-[#0D2238] text-[36px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.1] tracking-[-0.015em] mb-6 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Built on trust.
              <br />
              Driven by <span className="text-[#087BC1]">delivery.</span>
            </h2>

            {/* Narrative Description */}
            <p
              className={`text-[#526375] text-[16px] sm:text-[18px] leading-[1.65] font-normal mb-8 max-w-[540px] transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              DJay brings people, processes and practical expertise together to
              support safe, reliable operations across maritime, energy,
              logistics, security and corporate services.
            </p>

            {/* Outlined Pill CTA */}
            <div
              className={`transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border-[1.5px] border-[#F59E0B] rounded-full text-[#0D2238] font-semibold text-[15px] hover:bg-amber-500/10 hover:border-amber-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group"
              >
                <span>Learn more about us</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 text-[#0D2238]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Res Port Photography & Depth Container */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              {/* Subtle architectural offset card behind image */}
              <div
                className={`absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 w-full h-full bg-[#EAF0F6] rounded-2xl sm:rounded-3xl -z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : "opacity-0 translate-x-6 translate-y-6"
                }`}
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-[#0D2238] transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-[1.03] translate-y-8"
                }`}
              >
                <Image
                  src="/images/about-engineer.jpg"
                  alt="DJay Integrated Services Group engineer in safety gear overlooking port shipping operations"
                  width={600}
                  height={500}
                  quality={95}
                  className="w-full h-auto object-cover object-center block"
                />

                {/* Refined Enterprise Metric Badge (Floating bottom-left) */}
                <div
                  className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0D2238]/92 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl flex items-center gap-3.5 transition-all duration-700 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-[#F59E0B]" size={20} />
                  </div>
                  <div>
                    <div className="text-white text-[14px] sm:text-[15px] font-bold tracking-tight leading-tight">
                      12+ Service Divisions
                    </div>
                    <div className="text-[#AEBBC7] text-[11px] sm:text-[12px] font-medium leading-tight mt-0.5">
                      Operational excellence across Ghana
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lower Navy Band: "What Guides Us" Card with Margins ── */}
      <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-8 md:px-12">
        <div
          className={`w-full bg-[#0D2238] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 text-white shadow-2xl border border-white/5 transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow */}
          <div className="text-[#8E9CA8] text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase mb-4 sm:mb-5">
            What guides us
          </div>

          {/* 3 Pillars Grid with Architectural Vertical Bar Growth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {valuePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`flex items-start gap-3.5 transition-all duration-700 ${pillar.delay} ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  idx > 0
                    ? "md:border-l md:border-white/10 md:pl-6 lg:pl-10"
                    : ""
                }`}
              >
                {/* Architectural Amber Bar that draws down from top */}
                <div
                  className={`w-[3px] h-10 sm:h-11 bg-[#F59E0B] rounded-full shrink-0 origin-top transition-transform duration-700 ${pillar.delay} ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "scale-y-100" : "scale-y-0"
                  }`}
                  aria-hidden="true"
                />

                {/* Pillar Copy */}
                <div>
                  <h3 className="text-white text-[17px] sm:text-[18px] font-bold leading-snug mb-1 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 text-[13px] sm:text-[14px] font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
