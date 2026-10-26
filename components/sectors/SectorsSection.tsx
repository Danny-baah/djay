"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  Building2,
  Truck,
  Anchor,
  Flame,
  Plane,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

interface SectorItem {
  id: string;
  name: string;
  line1: string;
  line2: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  alt: string;
  shortDesc: string;
  highlights: string[];
}

const SECTORS: SectorItem[] = [
  {
    id: "construction-mining",
    name: "Construction & Mining",
    line1: "Construction",
    line2: "& Mining",
    icon: HardHat,
    image: "/images/sector-construction.jpg",
    alt: "Heavy quarry excavator on rugged terrain",
    shortDesc: "Comprehensive equipment supply, quarrying operations and high-hazard site safety.",
    highlights: ["Heavy plant supply", "Site safety audits", "Blast area logistics"],
  },
  {
    id: "corporate-institutional",
    name: "Corporate & Institutional",
    line1: "Corporate &",
    line2: "Institutional",
    icon: Building2,
    image: "/images/sector-corporate.jpg",
    alt: "Modern glass enterprise skyscraper headquarters",
    shortDesc: "Integrated facilities, workplace health management and commercial infrastructure services.",
    highlights: ["Facilities maintenance", "Corporate health", "Asset integrity"],
  },
  {
    id: "industrial-logistics",
    name: "Industrial & Logistics",
    line1: "Industrial",
    line2: "& Logistics",
    icon: Truck,
    image: "/images/sector-logistics.jpg",
    alt: "Intermodal container freight terminal and forklift",
    shortDesc: "End-to-end cargo freight, intermodal transport, warehousing and fleet tracking.",
    highlights: ["Cold chain logistics", "Heavy freight transit", "Customs clearing"],
  },
  {
    id: "maritime-offshore",
    name: "Maritime & Offshore",
    line1: "Maritime &",
    line2: "Offshore",
    icon: Anchor,
    image: "/images/sector-maritime.jpg",
    alt: "Offshore supply vessel and tanker at deepwater port",
    shortDesc: "Vessel agency, deepwater crew provisioning, maritime safety gear and bunker support.",
    highlights: ["Vessel chandlery", "Offshore support", "Port clearance"],
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    line1: "Oil & Gas",
    line2: "",
    icon: Flame,
    image: "/images/sector-oilgas.jpg",
    alt: "Illuminated oil refinery distillation towers at dusk",
    shortDesc: "Upstream and downstream maintenance, specialized industrial safety and pipeline technical teams.",
    highlights: ["Rig support services", "HSE certified crews", "Turnaround logistics"],
  },
  {
    id: "travel-tourism",
    name: "Travel & Tourism",
    line1: "Travel &",
    line2: "Tourism",
    icon: Plane,
    image: "/images/sector-travel.jpg",
    alt: "Commercial jetliner ascending at sunset over coastline",
    shortDesc: "Corporate business travel itineraries, executive protocol, charter bookings and crew repatriation.",
    highlights: ["Executive charters", "Corporate bookings", "Transit protocols"],
  },
];

export default function SectorsSection() {
  // Index 3 is Maritime & Offshore, matching visual reference default
  const [activeIndex, setActiveIndex] = useState<number>(3);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SECTORS.length) % SECTORS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SECTORS.length);
  };

  const activeSector = SECTORS[activeIndex];

  return (
    <section
      id="sectors"
      aria-label="Sectors We Support"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-100/50"
    >
      {/* Subtle organic ambient backdrop curve matching visual reference */}
      <div
        className="absolute top-0 right-0 w-[70%] h-full pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/60 via-transparent to-transparent -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: NARRATIVE & CONTROLS ================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            {/* Eyebrow with horizontal rule */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59E0B]">
                Sectors We Support
              </span>
              <span className="h-[1.5px] w-12 bg-slate-300 rounded-full inline-block" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#0D2238] tracking-tight leading-[1.15] mb-5">
              Trusted across{" "}
              <br className="hidden sm:inline" />
              diverse{" "}
              <span className="text-[#087BC1]">industries.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#526375] text-base leading-relaxed mb-8 max-w-md">
              We deliver integrated solutions tailored to the unique needs of
              each sector, helping our clients operate safely, efficiently and
              sustainably.
            </p>

            {/* Pill CTA button */}
            <div className="mb-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-[1.5px] border-[#F59E0B] text-[#0D2238] font-bold text-xs uppercase tracking-wider hover:bg-[#F59E0B] hover:text-white transition-all duration-300 group shadow-sm hover:shadow"
              >
                <span>Explore the sectors we support</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Navigation Circular Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous sector"
                className="w-11 h-11 rounded-full bg-[#EBF4FA] hover:bg-sky-100 text-[#5A738E] hover:text-[#087BC1] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next sector"
                className="w-11 h-11 rounded-full border-[1.5px] border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Sector indicator counter */}
              <span className="ml-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {String(activeIndex + 1).padStart(2, "0")} / {String(SECTORS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE ACCORDION DECK ================= */}
          <div className="lg:col-span-8 xl:col-span-8">
            {/* Desktop & Large Tablet Accordion Deck */}
            <div className="hidden md:flex items-center gap-3 lg:gap-3.5 h-[500px] lg:h-[540px] py-6 select-none">
              {SECTORS.map((sector, index) => {
                const isActive = index === activeIndex;
                const IconComponent = sector.icon;

                return (
                  <div
                    key={sector.id}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between ${
                      isActive
                        ? "flex-[2.6] lg:flex-[3.0] h-[500px] lg:h-[540px] -my-4 border-2 border-[#F59E0B] shadow-[0_22px_45px_rgba(13,34,56,0.30)] z-20"
                        : "flex-1 h-[430px] lg:h-[455px] border border-slate-200/90 hover:border-slate-300 shadow-sm opacity-90 hover:opacity-100"
                    } bg-[#0D2238]`}
                  >
                    {/* Background Sector Image */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={sector.alt}
                        fill
                        sizes={isActive ? "(max-width: 1200px) 45vw, 35vw" : "15vw"}
                        className={`object-cover object-center transition-transform duration-700 ease-out ${
                          isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                        }`}
                        priority={isActive}
                      />
                      {/* Gradient overlay from transparent at top to solid navy at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A28] via-[#0D2238]/60 to-transparent" />
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0B1A28]/95" />
                      )}
                    </div>

                    {/* Top Spacing */}
                    <div className="relative z-10 p-2" aria-hidden="true" />

                    {/* Bottom Dark Navy Content Card */}
                    <div className="relative z-10 p-4 sm:p-5 flex flex-col items-center text-center">
                      {/* Icon */}
                      <div
                        className={`transition-all duration-300 mb-2 flex items-center justify-center ${
                          isActive
                            ? "w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-amber-400 border border-white/15 shadow-inner"
                            : "w-9 h-9 text-white/90"
                        }`}
                      >
                        <IconComponent className={isActive ? "w-6 h-6" : "w-5 h-5"} />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-extrabold text-white leading-tight mb-1 transition-all duration-300 ${
                          isActive
                            ? "text-base lg:text-lg tracking-normal"
                            : "text-xs lg:text-sm tracking-tight"
                        }`}
                      >
                        {sector.line1}
                        {sector.line2 && (
                          <>
                            <br />
                            {sector.line2}
                          </>
                        )}
                      </h3>

                      {/* Active-only extended description & CTA button */}
                      {isActive && (
                        <div className="mt-3 flex flex-col items-center animate-fadeIn">
                          <p className="text-slate-300 text-xs leading-relaxed max-w-[260px] line-clamp-2 mb-3 hidden sm:block">
                            {sector.shortDesc}
                          </p>
                          <Link
                            href="#contact"
                            aria-label={`Inquire about ${sector.name}`}
                            className="w-10 h-10 rounded-full bg-[#F59E0B] text-[#0D2238] flex items-center justify-center shadow-lg hover:bg-[#E59207] hover:scale-110 active:scale-95 transition-all duration-200"
                          >
                            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View: Swipeable / Clickable Cards */}
            <div className="md:hidden flex flex-col gap-4">
              {/* Active Card Hero Preview */}
              <div className="relative h-[380px] rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-xl bg-[#0D2238]">
                <Image
                  src={activeSector.image}
                  alt={activeSector.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A28] via-[#0D2238]/60 to-transparent" />



                <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-amber-400 flex items-center justify-center mb-2 border border-white/15">
                    {React.createElement(activeSector.icon, { className: "w-5 h-5" })}
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">
                    {activeSector.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {activeSector.shortDesc}
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F59E0B] text-[#0D2238] font-bold text-xs uppercase tracking-wider"
                  >
                    <span>Connect on this sector</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Sector selection chips for quick navigation on mobile */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {SECTORS.map((sector, idx) => {
                  const isSel = idx === activeIndex;
                  const Icon = sector.icon;
                  return (
                    <button
                      key={sector.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        isSel
                          ? "bg-[#0D2238] text-white border-[#F59E0B] shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isSel ? "text-amber-400" : "text-[#087BC1]"}`} />
                      <span className="truncate">{sector.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
