"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

// Clean, accessible SVG icons for social channels
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="relative w-full bg-[#081726] text-white overflow-hidden pt-16 sm:pt-20 pb-10 border-t border-white/10"
    >
      {/* ── Background Subtle Abstract Lines (Bottom-Left) ── */}
      <div
        className="absolute bottom-0 left-0 w-[40%] h-[60%] pointer-events-none -z-0 opacity-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 600 400"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M -100 400 C 150 350, 300 250, 450 0"
            stroke="#087BC1"
            strokeWidth="2"
          />
          <path
            d="M -80 400 C 170 360, 320 270, 480 0"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* ================= MAIN 5-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16">
          
          {/* ── Column 1: Brand & Slogan (Col span 3) ── */}
          <div className="lg:col-span-3 flex flex-col items-start">
            {/* Logo matching Navbar as requested */}
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded mb-4"
              aria-label="DJay Integrated Services Group - Home"
            >
              <Image
                src="/images/logo-navbar.png"
                alt="DJay Integrated Services Group"
                width={200}
                height={64}
                className="h-14 sm:h-16 w-auto object-contain brightness-105"
              />
            </Link>

            <p className="text-slate-300/85 text-xs sm:text-[13px] leading-relaxed max-w-[280px] mb-4">
              Providing reliable manpower, facilities management and support
              services across Ghana and beyond.
            </p>

            {/* Amber accent line */}
            <div className="h-[2.5px] w-8 bg-[#F59E0B] rounded-full mb-4" />

            {/* Slogan */}
            <div className="text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase">
              PEOPLE | SAFETY | SOLUTIONS
            </div>
          </div>

          {/* ── Column 2: Quick Links (Col span 2) ── */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-extrabold text-white text-base mb-1">
              Quick Links
            </h3>
            <div className="h-[2.5px] w-6 bg-[#F59E0B] rounded-full mb-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300/85">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-amber-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Sectors We Support
                </Link>
              </li>
              <li>
                <Link href="/#structure" className="hover:text-amber-400 transition-colors">
                  Our Structure
                </Link>
              </li>
              <li>
                <Link href="/#media" className="hover:text-amber-400 transition-colors">
                  News &amp; Updates
                </Link>
              </li>
              <li>
                <Link href="/#vacancies" className="hover:text-amber-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 3: Our Services (Col span 2) ── */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-extrabold text-white text-base mb-1">
              Our Services
            </h3>
            <div className="h-[2.5px] w-6 bg-[#F59E0B] rounded-full mb-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300/85">
              <li>
                <Link href="/#services" className="hover:text-amber-400 transition-colors">
                  Manpower Supply
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-amber-400 transition-colors">
                  Facilities Management
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-amber-400 transition-colors">
                  Project Support Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-amber-400 transition-colors">
                  Training &amp; Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Sectors We Support (Col span 2) ── */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-extrabold text-white text-base mb-1">
              Sectors We Support
            </h3>
            <div className="h-[2.5px] w-6 bg-[#F59E0B] rounded-full mb-4" />
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-300/85">
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Construction &amp; Mining
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Corporate &amp; Institutional
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Industrial &amp; Logistics
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Oil &amp; Gas
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Maritime &amp; Offshore
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="hover:text-amber-400 transition-colors">
                  Travel &amp; Tourism
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 5: Get in Touch (Col span 3) ── */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-extrabold text-white text-base mb-1">
              Get in Touch
            </h3>
            <div className="h-[2.5px] w-6 bg-[#F59E0B] rounded-full mb-4" />
            
            <div className="space-y-4">
              {/* Call Us */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#102D47] text-[#087BC1] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Call Us</div>
                  <div className="text-slate-400 text-xs sm:text-[12.5px] leading-tight mt-0.5">
                    <a href="tel:+233303936790" className="hover:text-amber-400 block transition-colors">
                      +233 303 936 790
                    </a>
                    <a href="tel:+233303960303" className="hover:text-amber-400 block transition-colors">
                      +233 303 960 303
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#102D47] text-[#087BC1] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Email Us</div>
                  <a
                    href="mailto:info@djayservice.com"
                    className="text-slate-400 text-xs sm:text-[12.5px] hover:text-amber-400 block transition-colors mt-0.5"
                  >
                    info@djayservice.com
                  </a>
                </div>
              </div>

              {/* Visit Our Office */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#102D47] text-[#087BC1] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Visit Our Office</div>
                  <address className="text-slate-400 text-xs sm:text-[12.5px] leading-relaxed not-italic mt-0.5">
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

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-400 text-xs text-center sm:text-left">
            &copy; 2026 DJay Service. All rights reserved.
          </div>

          {/* Legal Links & Socials & Scroll to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Legal Links */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#13324E] hover:bg-[#087BC1] text-white flex items-center justify-center transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#13324E] hover:bg-[#087BC1] text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#13324E] hover:bg-[#087BC1] text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#13324E] hover:bg-[#087BC1] text-white flex items-center justify-center transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-white/20" />

            {/* Scroll to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-9 h-9 rounded-full border-[1.5px] border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0D2238] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
