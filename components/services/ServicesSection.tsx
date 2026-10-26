"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
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

  const rightServices = [
    {
      title: "Human Resource Management Services",
      subtitle: "People and workforce support",
      image: "/images/service-hr.jpg",
      alt: "Corporate human resource meeting and workforce interview consultation",
      href: "/#services-hr",
      delay: "delay-[200ms]",
    },
    {
      title: "Risk & Crisis Management",
      subtitle: "Preparedness and response",
      image: "/images/service-risk.jpg",
      alt: "Safety coordinator and risk manager overseeing maritime port logistics",
      href: "/#services-risk",
      delay: "delay-[350ms]",
    },
    {
      title: "Security & Safety Training",
      subtitle: "Practical training for teams",
      image: "/images/service-security.jpg",
      alt: "Security officer conducting safety and security briefing for on-site personnel",
      href: "/#services-security",
      delay: "delay-[500ms]",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-[#F1F5F9] border-y border-slate-200/80 pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden"
      aria-label="DJay Integrated Services Group Capabilities"
    >
      <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-8 md:px-12">
        {/* ── Section Header ── */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: Eyebrow in amber & Headline */}
          <div className="max-w-2xl">
            <div className="text-[#F59E0B] text-[13px] sm:text-[14px] font-bold tracking-[0.14em] uppercase mb-4">
              Our Services
            </div>

            <h2 className="text-[#0D2238] text-[36px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.015em]">
              Twelve capabilities built
              <br />
              to work <span className="text-[#087BC1]">together.</span>
            </h2>
          </div>

          {/* Right: Subtitle & "View all 12 services" Link */}
          <div className="lg:text-left flex flex-col items-start lg:max-w-sm pb-1">
            <p className="text-[#526375] text-[15px] sm:text-[16px] leading-relaxed mb-3">
              One accountable team across people, safety, industry and operations.
            </p>
            <Link
              href="/#all-services"
              className="inline-flex items-center gap-2 text-[#087BC1] font-semibold text-[15px] hover:text-[#065e94] transition-colors group"
            >
              <span>View all 12 services</span>
              <ArrowRight
                size={16}
                className="text-[#F59E0B] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* ── Main Bento Grid Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── Left Column: Visual Showcase Bento (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
            {/* Top Large Featured Card: Maritime & Crew Management */}
            <Link
              href="/#services-maritime"
              className={`group relative w-full aspect-[16/10] sm:aspect-[2/1] rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Image
                src="/images/service-maritime-hd.jpg"
                alt="Maritime & Crew Management vessel operations"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Natural subtle dark vignette overlay for clean text contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Card Footer Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between gap-4 z-10">
                <h3 className="text-white text-[20px] sm:text-[24px] font-bold tracking-tight">
                  Maritime & Crew Management
                </h3>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={22} className="text-[#F59E0B]" />
                </div>
              </div>
            </Link>

            {/* Bottom Row: 2 Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {/* Split Card 1: Oil & Gas Support Services */}
              <Link
                href="/#services-oilgas"
                className={`group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-md transition-all duration-700 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Image
                  src="/images/service-oilgas-hd.jpg"
                  alt="Oil & Gas Support Services offshore platform"
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3 z-10">
                  <h3 className="text-white text-[15px] sm:text-[17px] font-bold tracking-tight leading-snug">
                    Oil & Gas Support Services
                  </h3>
                  <div className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    <ArrowRight size={18} className="text-[#F59E0B]" />
                  </div>
                </div>
              </Link>

              {/* Split Card 2: Occupational Health & Safety */}
              <Link
                href="/#services-health"
                className={`group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-md transition-all duration-700 delay-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Image
                  src="/images/service-health-hd.jpg"
                  alt="Occupational Health & Safety inspection team"
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3 z-10">
                  <h3 className="text-white text-[15px] sm:text-[17px] font-bold tracking-tight leading-snug">
                    Occupational Health & Safety
                  </h3>
                  <div className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                    <ArrowRight size={18} className="text-[#F59E0B]" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Button: Explore all twelve service lines */}
            <div
              className={`pt-2 transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-white border-[1.5px] border-[#087BC1]/40 hover:border-[#087BC1] rounded-full text-[#0D2238] font-semibold text-[14px] sm:text-[15px] hover:bg-sky-50/50 shadow-sm transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087BC1]"
              >
                <span>Explore all twelve service lines</span>
                <ArrowRight
                  size={16}
                  className="text-[#F59E0B] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* ── Right Column: Editorial Service Rows (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-gray-200/80 border-t lg:border-t-0 border-gray-200/80">
            {rightServices.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group py-5 sm:py-6 first:pt-4 lg:first:pt-2 flex items-center justify-between gap-4 transition-all duration-300 ${service.delay} ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } rounded-xl px-3 sm:px-4 -mx-2 sm:-mx-3 border border-transparent hover:border-slate-200/80 hover:bg-white hover:shadow-sm`}
              >
                {/* Left Thumbnail & Text */}
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  {/* Thumbnail */}
                  <div className="relative w-28 sm:w-36 h-20 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden shrink-0 shadow-sm bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="min-w-0 pr-2">
                    <h3 className="text-[#0D2238] text-[16px] sm:text-[18px] font-bold leading-snug tracking-tight group-hover:text-[#087BC1] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] text-[13px] sm:text-[14px] font-normal leading-relaxed mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 pl-1">
                  <ArrowRight size={18} className="text-[#F59E0B]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
