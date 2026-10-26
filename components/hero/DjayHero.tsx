"use client";

import React from "react";
import ContactBar from "./ContactBar";
import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";

export default function DjayHero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#0D2238] select-none">
      {/* 1. Contact Information Bar */}
      <ContactBar />

      {/* 2. Transparent Navbar (Positioned absolutely over Hero) */}
      <Navbar />

      {/* 3. Three-slide Hero Carousel */}
      <main className="relative flex-1 w-full">
        <HeroCarousel />
      </main>
    </div>
  );
}
