"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, MapPin, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services", hasDropdown: true },
    { label: "Industries", href: "/#industries", hasDropdown: true },
    { label: "Media", href: "/#media", hasDropdown: true },
    { label: "Vacancies", href: "/#vacancies" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <Link
            href="/"
            className="navbar__logo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
            aria-label="DJay Integrated Services Group - Home"
          >
            <Image
              src="/images/logo-navbar.png"
              alt="DJay Integrated Services Group"
              width={200}
              height={64}
              priority
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navbar__links" role="menubar">
            {navLinks.map((item) => (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className={`navbar__link ${item.active ? "navbar__link--active" : ""}`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="navbar__link-chevron" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Request a Quote CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#quote"
              className="navbar__quote-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Request a Quote</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open mobile navigation menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "mobile-menu-overlay--open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? "mobile-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-menu__head">
          <Image
            src="/images/logo-navbar.png"
            alt="DJay Integrated Services Group"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            className="mobile-menu__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-menu__nav">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`mobile-menu__link ${item.active ? "mobile-menu__link--active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown size={16} className="opacity-60" />}
            </Link>
          ))}
        </div>

        <div className="mobile-menu__bottom">
          <Link
            href="/#quote"
            className="mobile-menu__quote-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Request a Quote</span>
            <ArrowRight size={16} />
          </Link>

          <div className="mobile-menu__contact space-y-2">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-amber-500 shrink-0" />
              <span>Accra, Ghana</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-amber-500 shrink-0" />
              <a href="mailto:info@djayservice.com">info@djayservice.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-amber-500 shrink-0" />
              <a href="tel:+233302741551">+233 302 741 551</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
