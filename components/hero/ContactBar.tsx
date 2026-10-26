"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactBar() {
  return (
    <header className="contact-bar" role="region" aria-label="Contact information">
      <div className="contact-bar__inner">
        {/* Left Side: Location & Email */}
        <div className="contact-bar__group">
          <div className="contact-bar__item">
            <MapPin className="contact-bar__icon" size={14} aria-hidden="true" />
            <span>Accra, Ghana</span>
          </div>
          <span className="contact-bar__divider" aria-hidden="true" />
          <div className="contact-bar__item">
            <Mail className="contact-bar__icon" size={14} aria-hidden="true" />
            <a
              href="mailto:info@djayservice.com"
              className="hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              info@djayservice.com
            </a>
          </div>
        </div>

        {/* Right Side: Phone Numbers */}
        <div className="contact-bar__group contact-bar__right">
          <div className="contact-bar__item">
            <Phone className="contact-bar__icon" size={14} aria-hidden="true" />
            <a
              href="tel:+233302741551"
              className="hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              +233 302 741 551
            </a>
          </div>
          <span className="contact-bar__divider" aria-hidden="true" />
          <div className="contact-bar__item">
            <a
              href="tel:+233244375517"
              className="hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              +233 244 375 517
            </a>
          </div>
          <span className="contact-bar__divider" aria-hidden="true" />
          <div className="contact-bar__item">
            <a
              href="tel:+233592707010"
              className="hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              +233 592 707 010
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
