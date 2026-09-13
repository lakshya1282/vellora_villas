"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Parallax from "@/components/animations/Parallax";
import MaskReveal from "@/components/animations/MaskReveal";
import TextSplitReveal from "@/components/animations/TextSplitReveal";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Home() {
  const [activeNav, setActiveNav] = useState("About");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navItems = ["About", "Location", "Offers", "Contact"];

  const carouselImages = [
    {
      src: "/images/hero.png",
      title: "Alpine Cliff Sanctuary",
    },
    {
      src: "/images/sanctuary.png",
      title: "Canopy Forest Pavilion",
    },
    {
      src: "/images/sunset-villa.png",
      title: "Ocean Sunset Terrace",
    },
  ];

  // Section 4 Villas Interactive Gallery State
  const villasData = [
    {
      id: "signature",
      title: "Velora Signature Villa",
      location: "Private retreat",
      description: "A spacious two-level villa with panoramic views, warm natural materials, and seamless indoor-outdoor living designed for complete relaxation.",
      image: "/images/sanctuary.png",
    },
    {
      id: "hillside",
      title: "Hillside Villa",
      location: "Private stay",
      description: "Perched gracefully on elevated terrain featuring double-height glass facades and private infinity pool overlooking misty valleys.",
      image: "/images/sunset-villa.png",
    },
    {
      id: "forest",
      title: "Forest Edge Villa",
      location: "Private stay",
      description: "Surrounded by ancient forest canopies, blending acoustic wooden ceilings with open-concept courtyard architecture.",
      image: "/images/hero.png",
    },
    {
      id: "panorama",
      title: "Panorama Villa",
      location: "Private stay",
      description: "360-degree mountain ridge views with floor-to-ceiling glass walls, warm timber decks, and private natural water feature.",
      image: "/images/sanctuary.png",
    },
    {
      id: "garden",
      title: "Garden Villa",
      location: "Private stay",
      description: "Secluded oasis with private courtyard gardens, open-air rainwater bathing pool, and serene lotus pond view.",
      image: "/images/v1.png",
    },
  ];

  const [activeVillaId, setActiveVillaId] = useState("signature");
  const featuredVilla = villasData.find((v) => v.id === activeVillaId) || villasData[0];

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <main className="relative min-h-screen bg-[#141518] text-[#FFFFFF] font-sans selection:bg-white/30 selection:text-white">
      {/* SECTION 1: Hero Container */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-between p-4 md:p-6 lg:px-12 lg:py-6 overflow-hidden">
        
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Parallax speed={-0.25} className="w-full h-full">
            <Image
              src="/images/hero.png"
              alt="Velora Villas Modern Villa Retreat"
              fill
              priority
              quality={100}
              className="object-cover object-center scale-115"
            />
          </Parallax>
        </div>

        {/* Top Floating Glassmorphic Header */}
        <header className="relative z-20 w-full flex items-center justify-between gap-4 pt-2 md:pt-2">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5 md:gap-3">
            <div className="w-5 h-5 md:w-6 md:h-6 border-[1.5px] border-white flex items-center justify-center rotate-45">
              <div className="w-1.5 h-1.5 bg-white" />
            </div>
            <span className="text-[#FFFFFF] font-medium tracking-[0.2em] text-xs md:text-sm uppercase">
              VELORA <span className="font-light text-white/80">VILLAS</span>
            </span>
          </div>

          {/* Center Navigation Links: Individual Separate Glass Pills (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = activeNav === item;
              return (
                <MagneticButton key={item} strength={0.2}>
                  <button
                    onClick={() => setActiveNav(item)}
                    className={`px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white text-[#111115] shadow-lg shadow-black/20 scale-100"
                        : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
                    }`}
                  >
                    {item}
                  </button>
                </MagneticButton>
              );
            })}
          </nav>

          {/* Mobile Right: Hamburger Menu Lines */}
          <div className="flex md:hidden items-center">
            <button
              aria-label="Toggle navigation"
              className="p-1 text-white hover:text-white/80 transition-colors flex flex-col justify-center items-end gap-1.5 w-8 h-8"
            >
              <span className="w-6 h-[1.5px] bg-white rounded-full block" />
              <span className="w-6 h-[1.5px] bg-white rounded-full block" />
            </button>
          </div>

          {/* Desktop Right Action Button (RESERVE YOUR VILLA + ↗ Badge) */}
          <div className="hidden md:flex items-center gap-2">
            <MagneticButton strength={0.3}>
              <div className="flex items-center gap-2 p-1 pl-5 rounded-full bg-white text-[#111115] hover:bg-white/95 transition-all shadow-lg group cursor-pointer">
                <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider pr-1">RESERVE YOUR VILLA</span>
                <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#111115] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </span>
              </div>
            </MagneticButton>
          </div>
        </header>

        {/* Hero Bottom Section */}
        <div className="relative z-20 w-full pt-8 md:pt-12 pb-6 md:pb-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Content Area */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 xl:pr-6 -translate-y-[30px] md:translate-y-0">
            
            {/* Eyebrow Pill Tag (Desktop Only) */}
            <div className="hidden md:block">
              <MaskReveal direction="up" delay={0.05}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-xs text-white/90 font-light tracking-wide mb-3">
                  <span>Private Villa Retreats</span>
                </div>
              </MaskReveal>
            </div>

            {/* Main Headline */}
            <div className="mb-2 md:mb-3 w-full max-w-3xl">
              <TextSplitReveal
                text="Where nature meets quiet luxury"
                as="h1"
                className="text-[34px] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-medium md:font-normal tracking-tight text-white max-w-xs sm:max-w-none"
                stagger={0.03}
              />
            </div>

            {/* Subtitle Description Below Title */}
            <MaskReveal direction="up" delay={0.25}>
              <p className="text-xs sm:text-base md:text-lg text-white/85 sm:text-white/90 font-light max-w-[280px] sm:max-w-xl leading-relaxed mb-6 md:mb-0">
                A collection of private villas designed for a relaxing holiday, where architecture organically blends with nature.
              </p>
            </MaskReveal>

            {/* Mobile Only: RESERVE YOUR VILLA CTA Button (Matching Mockup exactly) */}
            <div className="flex md:hidden items-center pt-2">
              <div className="inline-flex items-center gap-2 p-1.5 pl-5 rounded-full bg-white text-[#111115] shadow-2xl cursor-pointer">
                <span className="text-[11px] font-semibold tracking-wider uppercase pr-1">RESERVE YOUR VILLA</span>
                <span className="w-8 h-8 rounded-full bg-[#111115] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Right Compact Card System (Desktop Only - hidden on mobile per mockup) */}
          <div className="hidden lg:grid lg:col-span-5 grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:pt-0">
            
            {/* Card 1: 180° */}
            <MaskReveal direction="up" delay={0.2} duration={0.8}>
              <div className="bg-white text-[#111115] rounded-[24px] md:rounded-[28px] p-4 md:p-5 shadow-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full h-24 md:h-28 rounded-[16px] overflow-hidden relative mb-3">
                  <Image
                    src="/images/sanctuary.png"
                    alt="Living Room Connection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111115] mb-1">
                    180°
                  </div>
                  <p className="text-xs md:text-sm text-[#55565d] font-normal leading-normal">
                    Private villas designed for comfort, privacy, and uninterrupted connection with nature
                  </p>
                </div>
              </div>
            </MaskReveal>

            {/* Card 2: 100% */}
            <MaskReveal direction="up" delay={0.3} duration={0.8}>
              <div className="bg-white text-[#111115] rounded-[24px] md:rounded-[28px] p-4 md:p-5 shadow-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full h-24 md:h-28 rounded-[16px] overflow-hidden relative mb-3">
                  <Image
                    src="/images/sunset-villa.png"
                    alt="Master Bedroom Suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111115] mb-1">
                    100%
                  </div>
                  <p className="text-xs md:text-sm text-[#55565d] font-normal leading-normal">
                    Immersive experience of nature, where every space is designed for relaxation and silence
                  </p>
                </div>
              </div>
            </MaskReveal>

          </div>

        </div>

      </section>

      {/* SECTION 2: Verbal Statement Section (About Velora - 80vh) */}
      <section id="about" className="w-full min-h-[80vh] bg-white text-[#111115] py-14 md:py-20 px-6 md:px-12 lg:px-[80px] flex flex-col justify-center">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-between">
          
          {/* Left Column (Equal Half 1) */}
          <div className="flex flex-col justify-between h-full min-h-[280px] lg:pr-12">
            {/* Top Left: Number & Section Title */}
            <div>
              <span className="text-xs font-mono text-[#9999A0] block mb-1">(01)</span>
              <span className="text-xs font-medium tracking-[0.2em] text-[#9999A0] uppercase">
                ABOUT VELORA
              </span>
            </div>

            {/* Bottom Left: Paragraph */}
            <MaskReveal direction="up" delay={0.2} duration={0.9}>
              <p className="text-base md:text-xl lg:text-[22px] text-[#444449] font-light leading-relaxed max-w-xl mt-8 lg:mt-0">
                We create a space where architecture and nature exist in perfect balance. Every detail is designed to slow you down, bringing a sense of calm, privacy, and quiet luxury into every moment of your stay, allowing you to fully disconnect from the outside world and reconnect with what truly matters.
              </p>
            </MaskReveal>
          </div>

          {/* Right Column (Equal Half 2) */}
          <div className="flex flex-col justify-between items-start h-full">
            {/* Right Top Paragraph with Reliable Bottom-Up Mask Reveal */}
            <MaskReveal direction="up" delay={0.1} duration={0.9}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-[1.18] tracking-tight mb-8">
                <span className="font-semibold text-[#111115]">Velora Villas</span>{" "}
                <span className="text-[#9999A0]">is designed for those who seek</span>{" "}
                <span className="font-semibold text-[#111115]">stillness, privacy, and a deeper connection with nature —</span>{" "}
                <span className="text-[#9999A0]">where every space invites you to</span>{" "}
                <span className="font-semibold text-[#111115]">slow down and simply be</span>
              </h2>
            </MaskReveal>

            {/* Right Bottom CTA Button */}
            <MagneticButton strength={0.3}>
              <div className="flex items-center gap-3 p-1.5 pl-6 rounded-full bg-[#1D1D21] hover:bg-black text-white transition-all shadow-xl group cursor-pointer">
                <span className="text-xs font-semibold uppercase tracking-wider">EXPLORE VILLAS</span>
                <span className="w-8 h-8 rounded-full border border-white/25 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </MagneticButton>
          </div>

        </div>
      </section>

      {/* SECTION 3: 30-70 Split Villa Carousel & Metrics Section */}
      <section id="offers" className="w-full bg-[#1A1A1D] text-white py-14 md:py-20 overflow-hidden">
        <div className="w-full flex flex-col gap-12">
          
          {/* Top Title & Header Row */}
          <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 lg:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
            
            {/* Top Left 30%: Logo (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-[1.5px] border-white flex items-center justify-center rotate-45">
                  <div className="w-1.5 h-1.5 bg-white" />
                </div>
                <span className="text-white font-medium tracking-[0.2em] text-xs uppercase">
                  VELORA <span className="font-light text-white/60">VILLAS</span>
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="lg:col-span-8">
              <MaskReveal direction="up" delay={0.1}>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal leading-[1.12] sm:leading-[1.08] tracking-tight mb-3 sm:mb-4">
                  <span className="text-white">A private</span>{" "}
                  <span className="text-[#9999A0]">space designed to exist</span>{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-white">in harmony with nature</span>
                </h2>
              </MaskReveal>

              <MaskReveal direction="up" delay={0.2}>
                <p className="text-sm sm:text-base md:text-[17px] text-[#A0A0A5] font-light leading-relaxed max-w-xl">
                  We create a space where architecture and nature exist in perfect balance. Every detail is designed to slow you down, bringing a sense of calm, privacy, and quiet luxury into every moment of your stay, allowing you to fully disconnect from the outside world and reconnect with what truly matters.
                </p>
              </MaskReveal>
            </div>

          </div>

          {/* Middle Row: Left Controls (30%) + Carousel */}
          <div className="w-full px-6 lg:px-[80px] pr-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left 30%: Navigation Controls (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-4 items-center pr-6 lg:pr-8">
              <div className="flex items-center gap-4">
                {/* Prev Button */}
                <MagneticButton strength={0.3}>
                  <button
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </MagneticButton>

                {/* Progress Bar Slider */}
                <div className="w-28 h-[2px] bg-white/20 rounded-full relative overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500"
                    style={{
                      width: `${((carouselIndex + 1) / carouselImages.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Next Button */}
                <MagneticButton strength={0.3}>
                  <button
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Right 70%: Carousel Track on Desktop / Full Width Card on Mobile */}
            <div className="lg:col-span-8 w-full overflow-hidden pr-6 lg:pr-0">
              {/* Mobile View: Single Featured Rounded Image Card (Matching container margins) */}
              <div className="block lg:hidden w-full h-[320px] sm:h-[400px] rounded-[24px] sm:rounded-[28px] overflow-hidden relative border border-white/10 shadow-2xl">
                <Image
                  src={carouselImages[0].src}
                  alt={carouselImages[0].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Desktop View: Multi-slide Track */}
              <div
                className="hidden lg:flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: `translateX(calc(-${carouselIndex} * (54% + 24px)))`,
                }}
              >
                {carouselImages.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[500px] sm:w-[580px] md:w-[640px] lg:w-[700px] shrink-0 rounded-[28px] overflow-hidden relative h-64 sm:h-72 md:h-80 border border-white/10 group shadow-2xl transition-opacity duration-500"
                    style={{
                      opacity: idx < carouselIndex ? 0 : 1,
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-xs text-white border border-white/10">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Metrics Row (Equally Spaced 2x2 on Mobile, 30%-70% 4-column on Desktop) */}
          <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 lg:px-[80px] pt-4 lg:pt-6 lg:border-t lg:border-white/10">
            
            {/* Mobile 2x2 Grid Layout with Identical Left and Right Bounds */}
            <div className="grid grid-cols-2 lg:hidden gap-x-6 gap-y-10 w-full">
              <MaskReveal direction="up" delay={0.05} className="w-full">
                <div className="flex flex-col">
                  <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-1.5">
                    150+
                  </div>
                  <p className="text-xs text-[#9999A0] font-light">
                    Meters above nature
                  </p>
                </div>
              </MaskReveal>

              <MaskReveal direction="up" delay={0.1} className="w-full">
                <div className="flex flex-col">
                  <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-1.5">
                    300+
                  </div>
                  <p className="text-xs text-[#9999A0] font-light">
                    Days of quiet living
                  </p>
                </div>
              </MaskReveal>

              <MaskReveal direction="up" delay={0.15} className="w-full">
                <div className="flex flex-col">
                  <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-1.5">
                    250+
                  </div>
                  <p className="text-xs text-[#9999A0] font-light">
                    m² of pure space
                  </p>
                </div>
              </MaskReveal>

              <MaskReveal direction="up" delay={0.2} className="w-full">
                <div className="flex flex-col">
                  <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-1.5">
                    100+
                  </div>
                  <p className="text-xs text-[#9999A0] font-light">
                    Private stays hosted
                  </p>
                </div>
              </MaskReveal>
            </div>

            {/* Desktop Original Layout */}
            <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
              {/* Left 30% Metric: 150+ */}
              <div className="col-span-4 pr-8">
                <MaskReveal direction="up" delay={0.1}>
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-1">
                      150+
                    </div>
                    <p className="text-xs text-[#9999A0] font-light">
                      Meters above nature
                    </p>
                  </div>
                </MaskReveal>
              </div>

              {/* Right 70% Metrics: 300+, 250+, 100+ */}
              <div className="col-span-8 grid grid-cols-3 gap-6">
                <MaskReveal direction="up" delay={0.15}>
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-1 tracking-tight">
                      300+
                    </div>
                    <p className="text-xs text-[#9999A0] font-light">
                      Days of quiet living
                    </p>
                  </div>
                </MaskReveal>

                <MaskReveal direction="up" delay={0.2}>
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-1 tracking-tight">
                      250+
                    </div>
                    <p className="text-xs text-[#9999A0] font-light">
                      m² of pure space
                    </p>
                  </div>
                </MaskReveal>

                <MaskReveal direction="up" delay={0.25}>
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-1 tracking-tight">
                      100+
                    </div>
                    <p className="text-xs text-[#9999A0] font-light">
                      Private stays hosted
                    </p>
                  </div>
                </MaskReveal>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: Interactive Villa Showcase ("Our Villas") */}
      <section id="location" className="w-full bg-white text-[#111115] py-20 md:py-28 px-6 md:px-12 lg:px-[80px]">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-12">
          
          {/* Header Row: Title on Left, Description & VIEW ALL CTA on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Title Left */}
            <div className="lg:col-span-5">
              <MaskReveal direction="up" delay={0.1}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal tracking-tight text-[#111115]">
                  Our Villas
                </h2>
              </MaskReveal>
            </div>

            {/* Description & VIEW ALL CTA Right */}
            <div className="lg:col-span-7 flex flex-col items-start lg:items-end">
              <MaskReveal direction="up" delay={0.2}>
                <p className="text-sm sm:text-base md:text-[17px] text-[#505055] font-normal leading-relaxed max-w-xl mb-6 text-left">
                  Each villa is designed as a private retreat, thoughtfully blending modern architecture with natural surroundings to create a calm and immersive living experience. Every space is carefully crafted with warm materials, soft light, and open layouts, allowing you to fully unwind, slow down, and feel a deeper connection with nature.
                </p>
              </MaskReveal>

              <MaskReveal direction="up" delay={0.3}>
                <MagneticButton strength={0.3}>
                  <div className="flex items-center gap-3 p-1.5 pl-6 rounded-full bg-[#1D1D21] hover:bg-black text-white transition-all shadow-xl group cursor-pointer">
                    <span className="text-xs font-semibold uppercase tracking-wider">VIEW ALL</span>
                    <span className="w-8 h-8 rounded-full border border-white/25 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </MagneticButton>
              </MaskReveal>
            </div>

          </div>

          {/* Gallery Grid: In-Place Expanding Villa Cards (No column swapping!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start pt-4">
            {villasData.map((item) => {
              const isExpanded = activeVillaId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{
                    layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  }}
                  onClick={() => setActiveVillaId(item.id)}
                  className={`group cursor-pointer flex flex-col ${
                    isExpanded
                      ? "md:col-span-2 lg:col-span-2 row-span-2"
                      : "col-span-1"
                  }`}
                >
                  {/* Image Container expanding in ITS OWN PLACE */}
                  <motion.div
                    layout
                    className={`w-full rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-md mb-3 border border-black/5 transition-all duration-500 bg-[#F5F5F7] ${
                      isExpanded
                        ? "h-[350px] sm:h-[420px] md:h-[480px] shadow-2xl ring-2 ring-[#111115]"
                        : "aspect-square hover:shadow-xl hover:scale-[1.02] opacity-90 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* Title, Location & Description revealed in place */}
                  <motion.div layout className="flex flex-col">
                    <h4 className={`font-semibold text-[#111115] mb-0.5 transition-all ${isExpanded ? "text-xl sm:text-2xl" : "text-sm md:text-base"}`}>
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#888890] font-light mb-2">
                      {item.location}
                    </p>

                    {/* Smooth height and opacity description reveal */}
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, y: 8 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 8 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="text-xs md:text-sm text-[#707074] font-light leading-relaxed max-w-xl overflow-hidden"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: Comprehensive Luxury Footer */}
      <footer id="contact" className="w-full bg-[#111114] text-white pt-20 md:pt-28 pb-12 px-6 md:px-12 lg:px-[80px] border-t border-white/10 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Main Footer Layout (Matching reference image layout & luxury theme) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column (01 indicator, Tags, Brand, Description) */}
            <div className="lg:col-span-6 flex flex-col justify-between items-start gap-8">
              <div className="flex flex-col gap-6 w-full">
                {/* Section Index */}
                <span className="text-xs font-mono text-[#858585]">(01)</span>

                {/* Brand Logo & Name */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border-[1.5px] border-white flex items-center justify-center rotate-45 bg-white text-[#111114]">
                    <span className="rotate-[-45deg] font-serif text-base font-bold tracking-tighter">V</span>
                  </div>
                  <span className="text-white font-medium tracking-[0.2em] text-sm uppercase">
                    VELORA <span className="font-light text-white/60">VILLAS</span>
                  </span>
                </div>

                {/* High-impact About Statement */}
                <MaskReveal direction="up" delay={0.1}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[1.15] text-white tracking-tight max-w-2xl">
                    Velora Villas was created to reflect a quiet and intentional way of living. <span className="text-[#858585]">A space where architecture and nature merge, and every detail is designed to feel calm, minimal, and effortless.</span>
                  </h3>
                </MaskReveal>

                {/* Sub text */}
                <MaskReveal direction="up" delay={0.2}>
                  <p className="text-xs md:text-sm text-[#858585] font-light leading-relaxed max-w-lg mt-2">
                    Every detail was designed to reflect the experience of the villas themselves. Clean layouts, soft transitions, and a minimal interface create a sense of ease, guiding the user naturally through the space.
                  </p>
                </MaskReveal>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-5 py-2 rounded-full border border-white/20 text-xs font-light text-white/90 bg-white/5 backdrop-blur-md">
                  Luxury Living
                </span>
                <span className="px-5 py-2 rounded-full border border-white/20 text-xs font-light text-white/90 bg-white/5 backdrop-blur-md">
                  Minimal Design
                </span>
                <span className="px-5 py-2 rounded-full border border-white/20 text-xs font-light text-white/90 bg-white/5 backdrop-blur-md">
                  Architectural Sanctuary
                </span>
              </div>
            </div>

            {/* Right Column (Navigation, Social Links, Newsletter, Contact) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
              
              {/* Navigation Column */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-[#858585] uppercase tracking-wider">Navigation</span>
                <ul className="flex flex-col gap-3 text-sm text-[#B0B0B5] font-light">
                  {["About Project", "Our Villas", "Architectural Concept", "Location & Estate", "Exclusive Offers", "Guest Experience"].map((item, idx) => (
                    <li key={idx}>
                      <a href={`#${item.toLowerCase().replace(/ /g, "")}`} className="hover:text-white transition-colors duration-300 flex items-center gap-1 group">
                        <span>{item}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links Column */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-[#858585] uppercase tracking-wider">Social Presence</span>
                <ul className="flex flex-col gap-3 text-sm text-[#B0B0B5] font-light">
                  {[
                    { name: "Instagram", handle: "@veloravillas", url: "https://instagram.com" },
                    { name: "Pinterest", handle: "/veloravillas", url: "https://pinterest.com" },
                    { name: "LinkedIn", handle: "Velora Retreats", url: "https://linkedin.com" },
                    { name: "Vimeo", handle: "Velora Films", url: "https://vimeo.com" },
                    { name: "X / Twitter", handle: "@velora_resort", url: "https://x.com" },
                  ].map((social, idx) => (
                    <li key={idx}>
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center justify-between group py-0.5">
                        <span>{social.name}</span>
                        <span className="text-xs text-[#66666E] group-hover:text-white/80 transition-colors flex items-center gap-0.5">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiries & Newsletter Column */}
              <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
                <span className="text-xs font-mono text-[#858585] uppercase tracking-wider">Reservations</span>
                <div className="flex flex-col gap-2 text-xs text-[#B0B0B5] font-light">
                  <p className="text-white font-medium">Private Concierge</p>
                  <a href="mailto:concierge@veloravillas.com" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">
                    concierge@veloravillas.com
                  </a>
                  <p className="mt-1">+41 22 890 1200</p>
                  <p className="text-[#66666E] mt-1">Via Sant'Abbondio 14, 6900 Lugano, Switzerland</p>
                </div>

                {/* Newsletter Box */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                  <span className="text-[11px] text-[#858585] font-light">Stay updated on private villa releases</span>
                  <div className="flex items-center gap-2 p-1 pl-3 rounded-full bg-white/5 border border-white/15 focus-within:border-white/40 transition-colors">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent text-xs text-white placeholder:text-[#66666E] outline-none w-full"
                    />
                    <button className="w-7 h-7 rounded-full bg-white text-[#111114] flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Bottom Bar (Metadata, Legal & Copyright) */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#707074] font-light gap-4">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} VELORA VILLAS. ALL RIGHTS RESERVED.</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="hidden sm:inline">SWITZERLAND / ALPS</span>
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <a href="#" className="hover:text-white transition-colors">COOKIE PREFERENCES</a>
              <a href="#" className="hover:text-white transition-colors">GUEST PORTAL</a>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}
