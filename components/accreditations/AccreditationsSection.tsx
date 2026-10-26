"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface AccreditationItem {
  id: string;
  name: string;
  shortCode: string;
  category: string;
  image: string;
  width: number;
  height: number;
}

const ACCREDITATIONS: AccreditationItem[] = [
  {
    id: "gra",
    name: "Ghana Revenue Authority",
    shortCode: "GRA",
    category: "Statutory Tax Compliance",
    image: "/images/accreditations/gra.png",
    width: 220,
    height: 100,
  },
  {
    id: "ssnit",
    name: "Social Security & National Insurance Trust",
    shortCode: "SSNIT",
    category: "Pension & Social Security",
    image: "/images/accreditations/ssnitt.webp",
    width: 200,
    height: 90,
  },
  {
    id: "ppa",
    name: "Public Procurement Authority",
    shortCode: "PPA",
    category: "Procurement & Public Contracting",
    image: "/images/accreditations/ppa.png",
    width: 200,
    height: 90,
  },
  {
    id: "gpha",
    name: "Ghana Ports and Harbours Authority",
    shortCode: "GPHA",
    category: "Port & Marine Operations",
    image: "/images/accreditations/GPHALOGO.png",
    width: 220,
    height: 100,
  },
  {
    id: "fire",
    name: "Ghana National Fire Service",
    shortCode: "GNFS",
    category: "Fire Safety & Rescue Compliance",
    image: "/images/accreditations/fire.jpg",
    width: 180,
    height: 90,
  },
  {
    id: "gma",
    name: "Ghana Maritime Authority",
    shortCode: "GMA",
    category: "Maritime Safety & Crewing Licensing",
    image: "/images/accreditations/gma.jpg",
    width: 190,
    height: 90,
  },
  {
    id: "labour",
    name: "Ministry of Employment & Labour Relations",
    shortCode: "Labour Dept.",
    category: "Private Employment Agency Licensing",
    image: "/images/accreditations/labour.jpg",
    width: 180,
    height: 85,
  },
  {
    id: "petro-comm",
    name: "Petroleum Commission Ghana",
    shortCode: "PC Ghana",
    category: "Upstream Petroleum Permit",
    image: "/images/accreditations/petro_comm_ghana_cover.jpg",
    width: 220,
    height: 95,
  },
  {
    id: "orc",
    name: "Office of the Registrar of Companies",
    shortCode: "ORC / RGD",
    category: "Corporate Registration & Standing",
    image: "/images/accreditations/org.png",
    width: 190,
    height: 85,
  },
  {
    id: "iso-45001",
    name: "ISO 45001:2018",
    shortCode: "ISO 45001",
    category: "Occupational Health & Safety",
    image: "/images/accreditations/45001.webp",
    width: 180,
    height: 80,
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    shortCode: "ISO 14001",
    category: "Environmental Management",
    image: "/images/accreditations/2015.webp",
    width: 180,
    height: 80,
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    shortCode: "ISO 9001",
    category: "Quality Management System",
    image: "/images/accreditations/9001.webp",
    width: 180,
    height: 80,
  },
];

export default function AccreditationsSection() {
  return (
    <section
      id="accreditations"
      aria-labelledby="accred-title"
      className="relative w-full py-16 sm:py-24 bg-white border-t border-slate-200/80 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59E0B]">
            Recognised standards
          </span>
        </div>

        {/* Heading */}
        <h2
          id="accred-title"
          className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0D2238] tracking-tight leading-tight mb-4"
        >
          Our accreditations.
        </h2>

        {/* Supporting description */}
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Statutory compliance, professional certifications, and internationally
          certified management systems governing every service delivered.
        </p>
      </div>

      {/* Self-contained Keyframe & Interactive Zoom Styling */}
      <style>{`
        @keyframes djs-marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .djs-marquee-viewport {
          overflow: hidden;
          position: relative;
          width: 100%;
          padding: 85px 0;
          margin: -55px 0;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
        }
        .djs-marquee-track {
          display: flex !important;
          width: max-content !important;
          animation: djs-marquee-scroll 26s linear infinite !important;
          will-change: transform;
        }
        .djs-marquee-viewport:hover .djs-marquee-track {
          animation-play-state: paused !important;
        }
        .djs-accred-card {
          position: relative;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          transform-origin: center center;
          will-change: transform, box-shadow;
        }
        .djs-accred-card:hover {
          z-index: 50 !important;
          background-color: #ffffff !important;
          border-color: #F59E0B !important;
          box-shadow: 0 25px 65px -10px rgba(13, 34, 56, 0.45), 0 10px 25px -5px rgba(0, 0, 0, 0.18) !important;
        }
        @media (min-width: 640px) {
          .djs-accred-card:hover {
            transform: scale(2.25);
          }
        }
        @media (max-width: 639px) {
          .djs-accred-card:hover {
            transform: scale(1.75);
          }
        }
      `}</style>

      {/* Marquee Viewport with soft edge gradient mask */}
      <div className="djs-marquee-viewport">
        <div className="djs-marquee-track flex items-center">
          {/* First loop of items */}
          <div className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 shrink-0">
            {ACCREDITATIONS.map((item) => (
              <div
                key={`group1-${item.id}`}
                className="djs-accred-card group flex flex-col items-center justify-center w-[165px] sm:w-[195px] h-[95px] sm:h-[105px] px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 shrink-0 cursor-pointer"
                title={`${item.name} (${item.category})`}
              >
                <div className="relative w-full h-[65px] sm:h-[72px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="max-h-full w-auto max-w-[90%] object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                {/* On-hover readable caption for crystal clear identification */}
                <div className="hidden group-hover:flex flex-col items-center text-center mt-1 w-full px-1">
                  <span className="text-[8px] sm:text-[8.5px] font-extrabold uppercase tracking-wider text-[#0D2238] leading-tight line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[6.5px] sm:text-[7px] font-bold text-[#087BC1] leading-tight line-clamp-1">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate loop of items for infinite seamless scroll */}
          <div
            className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 shrink-0"
            aria-hidden="true"
          >
            {ACCREDITATIONS.map((item) => (
              <div
                key={`group2-${item.id}`}
                className="djs-accred-card group flex flex-col items-center justify-center w-[165px] sm:w-[195px] h-[95px] sm:h-[105px] px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 shrink-0 cursor-pointer"
                title={`${item.name} (${item.category})`}
              >
                <div className="relative w-full h-[65px] sm:h-[72px] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt=""
                    width={item.width}
                    height={item.height}
                    className="max-h-full w-auto max-w-[90%] object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                {/* On-hover readable caption for crystal clear identification */}
                <div className="hidden group-hover:flex flex-col items-center text-center mt-1 w-full px-1">
                  <span className="text-[8px] sm:text-[8.5px] font-extrabold uppercase tracking-wider text-[#0D2238] leading-tight line-clamp-1">
                    {item.name}
                  </span>
                  <span className="text-[6.5px] sm:text-[7px] font-bold text-[#087BC1] leading-tight line-clamp-1">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust pill indicator */}
      <div className="mt-8 flex justify-center items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>100% Fully Compliant & Licensed Entity</span>
      </div>
    </section>
  );
}
