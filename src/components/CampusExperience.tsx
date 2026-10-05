'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedCampuses } from '@/lib/dataset-loader';
import Image from 'next/image';
import {
  MapPin,
  Train,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function CampusExperience() {
  const [selectedCampusIndex, setSelectedCampusIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeCampus = enrichedCampuses[selectedCampusIndex] || enrichedCampuses[0];

  const handlePrev = () => {
    const newIndex = selectedCampusIndex === 0 ? enrichedCampuses.length - 1 : selectedCampusIndex - 1;
    setSelectedCampusIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = selectedCampusIndex === enrichedCampuses.length - 1 ? 0 : selectedCampusIndex + 1;
    setSelectedCampusIndex(newIndex);
    scrollToCard(newIndex);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const children = scrollContainerRef.current.children;
      if (children[index]) {
        (children[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="campus-experience" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            10 / Physical Infrastructure
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Campus Experience &amp; Spaces
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Immersive campus storytelling across 12 Singapore innovation clusters. No mundane classrooms; only living production labs.
          </p>
        </div>

        {/* Header Carousel Buttons */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
            aria-label="Previous Campus"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-neutral-400">
            {selectedCampusIndex + 1} / {enrichedCampuses.length}
          </span>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
            aria-label="Next Campus"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Immersive Campus Storytelling Stage (No cards) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCampus.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 text-white relative shadow-2xl min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-12"
        >
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src={activeCampus.image}
              alt={activeCampus.locationName}
              fill
              className="object-cover object-center filter brightness-60 contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/90 via-[#0B132B]/50 to-transparent" />
          </div>

          {/* Top Header Row with Badges - Cleanly spaced in the flex layout */}
          <div className="relative z-10 flex flex-wrap items-center gap-2 mb-10">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-emerald-300 font-medium">
              {activeCampus.id} &bull; {activeCampus.district}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-neutral-200 flex items-center gap-1.5">
              <Train className="w-3.5 h-3.5 text-blue-400" />
              {activeCampus.mrt}
            </span>
          </div>

          {/* Content Storytelling Layer */}
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Core Specialization: {activeCampus.focus}
            </span>

            <h3 className="font-heading font-medium text-3xl sm:text-5xl text-white mb-4 leading-tight">
              {activeCampus.locationName}
            </h3>

            <p className="font-editorial text-xl sm:text-2xl text-neutral-200 leading-relaxed mb-8 max-w-3xl">
              {activeCampus.description}
            </p>

            {/* Architectural Specifications Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/15 mb-8">
              {activeCampus.specs.map((sp) => (
                <div key={sp.label}>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                    {sp.label}
                  </span>
                  <span className="font-heading font-semibold text-sm sm:text-base text-white">
                    {sp.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Laboratory Facilities & Address */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {activeCampus.facilities.map((fac, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-xs font-sans px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-neutral-200 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{fac}</span>
                  </span>
                ))}
              </div>

              <div className="shrink-0 text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span className="truncate max-w-xs">{activeCampus.address.split(',')[0]}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Horizontal Singapore District Selector Strip with Left/Right Navigation Arrows (No scrollbar) */}
      <div className="mt-8 relative flex items-center gap-3">
        {/* Left Arrow Button */}
        <button
          onClick={handleScrollLeft}
          className="w-11 h-11 rounded-2xl border border-neutral-300 bg-white hover:bg-neutral-100 shadow-sm flex items-center justify-center text-neutral-700 hover:text-[#0B132B] transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95"
          aria-label="Scroll left"
          title="Previous campuses"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Container without visible scrollbar */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center gap-3 overflow-x-auto py-2 scroll-smooth no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {enrichedCampuses.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCampusIndex(idx);
                scrollToCard(idx);
              }}
              className={`px-5 py-3.5 rounded-2xl border text-left shrink-0 transition-all cursor-pointer min-w-[210px] ${
                idx === selectedCampusIndex
                  ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md scale-[1.02]'
                  : 'bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono ${idx === selectedCampusIndex ? 'text-emerald-300' : 'text-neutral-400'}`}>
                  {c.id}
                </span>
                {idx === selectedCampusIndex && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </div>
              <div className="font-heading font-semibold text-xs whitespace-nowrap">
                {c.locationName.split(' ')[0]} {c.locationName.split(' ')[1]}
              </div>
              <div className={`text-[10px] whitespace-nowrap mt-0.5 ${idx === selectedCampusIndex ? 'text-neutral-300' : 'text-neutral-500'}`}>
                {c.district.split('/')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleScrollRight}
          className="w-11 h-11 rounded-2xl border border-neutral-300 bg-white hover:bg-neutral-100 shadow-sm flex items-center justify-center text-neutral-700 hover:text-[#0B132B] transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95"
          aria-label="Scroll right"
          title="Next campuses"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
