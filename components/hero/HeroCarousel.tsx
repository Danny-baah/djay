"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SlideData {
  id: number;
  eyebrow: string;
  headingLine1: string;
  headingLine2Prefix: string;
  highlightedWord: string;
  headingLine2Suffix?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    eyebrow: "DJAY INTEGRATED SERVICES GROUP",
    headingLine1: "Integrated services.",
    headingLine2Prefix: "One ",
    highlightedWord: "accountable",
    headingLine2Suffix: " partner.",
    description: "Multiple capabilities. One dependable partner.",
    primaryCtaText: "Discover DJay",
    primaryCtaHref: "/#about",
    secondaryCtaText: "Explore our services",
    secondaryCtaHref: "/#services",
    image: "/images/hero-slide-1.jpg",
    alt: "Maritime port engineer in protective gear observing offshore vessel and port cranes",
  },
  {
    id: 2,
    eyebrow: "PEOPLE · SAFETY · SECURITY",
    headingLine1: "Protect people.",
    headingLine2Prefix: "Strengthen ",
    highlightedWord: "operations",
    headingLine2Suffix: ".",
    description: "Workforce, security and safety solutions.",
    primaryCtaText: "Discover our expertise",
    primaryCtaHref: "/#services",
    secondaryCtaText: "Explore our services",
    secondaryCtaHref: "/#services",
    image: "/images/hero-slide-2.jpg",
    alt: "Industrial workforce team and safety engineers inspecting industrial manufacturing facility",
  },
  {
    id: 3,
    eyebrow: "MARITIME · ENERGY · LOGISTICS",
    headingLine1: "Keep business",
    headingLine2Prefix: "moving ",
    highlightedWord: "forward",
    headingLine2Suffix: ".",
    description: "Operational support for demanding industries.",
    primaryCtaText: "Discover DJay",
    primaryCtaHref: "/#about",
    secondaryCtaText: "Explore our services",
    secondaryCtaHref: "/#services",
    image: "/images/hero-slide-3.jpg",
    alt: "Major shipping container terminal and logistics hub with heavy gantry cranes at dusk",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay timer: exactly 6 seconds (6000ms) with pause on hover/focus & prefers-reduced-motion check
  useEffect(() => {
    if (isPaused) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Typewriter animation on current slide headline
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const currentData = slides[currentSlide];
    const totalLength =
      currentData.headingLine1.length +
      currentData.headingLine2Prefix.length +
      currentData.highlightedWord.length +
      (currentData.headingLine2Suffix?.length || 0);

    if (prefersReducedMotion) {
      setTypedCount(totalLength);
      return;
    }

    // Reset typewriter count immediately when slide changes
    setTypedCount(0);
    let count = 0;

    // Start typing right away with a crisp 28ms interval
    const typewriterTimer = setInterval(() => {
      count++;
      setTypedCount(count);
      if (count >= totalLength) {
        clearInterval(typewriterTimer);
      }
    }, 28);

    return () => clearInterval(typewriterTimer);
  }, [currentSlide]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    const currentHero = heroRef.current;
    if (currentHero) {
      currentHero.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (currentHero) {
        currentHero.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // min swipe distance in px

    if (diff > threshold) {
      // Swiped left -> next slide
      nextSlide();
    } else if (diff < -threshold) {
      // Swiped right -> prev slide
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Helper to render typewritten heading with highlighted brand blue word
  const renderHeading = (slide: SlideData, isActive: boolean) => {
    const line1Len = slide.headingLine1.length;
    const prefixLen = slide.headingLine2Prefix.length;
    const highlightLen = slide.highlightedWord.length;
    const suffix = slide.headingLine2Suffix || "";
    const suffixLen = suffix.length;
    const totalLen = line1Len + prefixLen + highlightLen + suffixLen;

    if (!isActive) {
      return (
        <>
          <span className="block">{slide.headingLine1}</span>
          <span className="block">
            <span>{slide.headingLine2Prefix}</span>
            <span className="highlight">{slide.highlightedWord}</span>
            <span>{slide.headingLine2Suffix}</span>
          </span>
        </>
      );
    }

    const isTyping = typedCount < totalLen;
    const line1Text = slide.headingLine1.slice(0, Math.min(typedCount, line1Len));
    const line1HasCursor = isTyping && typedCount <= line1Len;

    const rem2 = Math.max(0, typedCount - line1Len);
    const prefixText = slide.headingLine2Prefix.slice(0, Math.min(rem2, prefixLen));

    const remHighlight = Math.max(0, rem2 - prefixLen);
    const highlightText = slide.highlightedWord.slice(0, Math.min(remHighlight, highlightLen));

    const remSuffix = Math.max(0, remHighlight - highlightLen);
    const suffixText = suffix.slice(0, Math.min(remSuffix, suffixLen));
    const line2HasCursor = isTyping && typedCount > line1Len;

    return (
      <>
        <span className="block">
          {line1Text}
          {line1HasCursor && (
            <span
              className="inline-block w-[3px] h-[0.8em] bg-amber-400 ml-1.5 align-baseline animate-pulse"
              aria-hidden="true"
            />
          )}
        </span>
        <span className="block">
          <span>{prefixText}</span>
          {highlightText && <span className="highlight">{highlightText}</span>}
          <span>{suffixText}</span>
          {line2HasCursor && (
            <span
              className="inline-block w-[3px] h-[0.8em] bg-amber-400 ml-1.5 align-baseline animate-pulse"
              aria-hidden="true"
            />
          )}
        </span>
      </>
    );
  };

  const activeData = slides[currentSlide];

  return (
    <section
      ref={heroRef}
      className="hero"
      aria-label="DJay Integrated Services Group Hero Carousel"
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Screen Reader Announcement for slide changes */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Slide ${currentSlide + 1} of ${slides.length}: ${activeData.eyebrow}. ${activeData.headingLine1} ${activeData.headingLine2Prefix}${activeData.highlightedWord}${activeData.headingLine2Suffix || ""}`}
      </div>

      {/* Slide Background Images with Ken Burns effect and smooth crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero__slide-bg ${isActive ? "hero__slide-bg--active" : ""}`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      {/* Hero Foreground Content */}
      <div className="hero__content-wrapper">
        <div className="hero__container">
          <div className="hero__content">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              const fullHeading = `${slide.headingLine1} ${slide.headingLine2Prefix}${slide.highlightedWord}${slide.headingLine2Suffix || ""}`;

              return (
                <div
                  key={slide.id}
                  className={`hero__slide-content ${
                    isActive ? "hero__slide-content--active" : ""
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Clean Eyebrow (No horizontal line) */}
                  <div className="hero__eyebrow">{slide.eyebrow}</div>

                  {/* Headline with Typewriter animation and Brand Blue Highlight */}
                  <h1 className="hero__heading" aria-label={fullHeading}>
                    {renderHeading(slide, isActive)}
                  </h1>

                  {/* Supporting Description */}
                  <p className="hero__description">{slide.description}</p>

                  {/* Call to Action Buttons */}
                  <div className="hero__ctas">
                    <Link
                      href={slide.primaryCtaHref}
                      className="hero__cta-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight aria-hidden="true" />
                    </Link>

                    <Link
                      href={slide.secondaryCtaHref}
                      className="hero__cta-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      <span>{slide.secondaryCtaText}</span>
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
