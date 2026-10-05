'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedTrainers } from '@/lib/dataset-loader';
import Image from 'next/image';
import {
  Quote,
  Award,
  Briefcase,
  History,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function FacultyExpertise() {
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);

  // We have 40 trainers in dataset, show top 6 flagship faculty stories
  const facultyList = enrichedTrainers.slice(0, 6);
  const activeFaculty = facultyList[activeFacultyIndex] || facultyList[0];

  return (
    <section id="faculty-expertise" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            06 / Resident Chairs
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Faculty Expertise &amp; Stories
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Editorial faculty profiles. Fellows who engineered Singapore&apos;s digital backbone and global tier-1 distributed systems.
          </p>
        </div>

        {/* Narrative Carousel Navigation */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <button
            onClick={() =>
              setActiveFacultyIndex((prev) => (prev === 0 ? facultyList.length - 1 : prev - 1))
            }
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
            aria-label="Previous Faculty Story"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-neutral-400">
            {activeFacultyIndex + 1} / {facultyList.length}
          </span>
          <button
            onClick={() =>
              setActiveFacultyIndex((prev) => (prev === facultyList.length - 1 ? 0 : prev + 1))
            }
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
            aria-label="Next Faculty Story"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editorial Faculty Story (Magazine Spread) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFaculty.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Column: Portrait & Identity (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[580px] bg-neutral-900 overflow-hidden">
            <Image
              src={activeFaculty.avatar}
              alt={activeFaculty.fullName}
              fill
              className="object-cover object-top filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                {activeFaculty.id} &bull; Resident Chair
              </span>
              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-white">
                {activeFaculty.fullName}
              </h3>
              <p className="text-xs text-neutral-300 mt-1 leading-snug font-sans">
                {activeFaculty.role}
              </p>
              <div className="mt-3 pt-3 border-t border-white/15 text-[11px] text-neutral-400 font-mono">
                {activeFaculty.formerCompany}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              {/* Teaching Philosophy Block Quote */}
              <div className="relative mb-8 pb-8 border-b border-neutral-100">
                <Quote className="w-8 h-8 text-neutral-200 absolute -top-3 -left-2 -z-10" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold mb-2 block">
                  Teaching Philosophy
                </span>
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#0B132B] leading-snug">
                  &ldquo;{activeFaculty.philosophy}&rdquo;
                </p>
              </div>

              {/* Biography & Industry Background */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> Industry Background &amp; Track Record
                  </h4>
                  <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {activeFaculty.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-600" /> Defining Engineering Achievement
                  </h4>
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 text-xs sm:text-sm text-neutral-800 font-sans leading-relaxed">
                    {activeFaculty.notableAchievement}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="pt-8 mt-8 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase">Experience</span>
                <div className="font-heading font-semibold text-lg text-[#0B132B]">
                  {activeFaculty.experienceYears} Years
                </div>
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-400 uppercase">Specialization</span>
                <div className="text-xs font-medium text-neutral-800 line-clamp-1 mt-0.5">
                  {activeFaculty.specialization.split(',')[0]}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono text-neutral-400 uppercase">Fellow Status</span>
                <div className="text-xs font-medium text-emerald-600 mt-0.5">
                  Full Faculty Mentor
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Faculty Thumbnail Strip for Quick Switching */}
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3">
        {facultyList.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActiveFacultyIndex(i)}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              i === activeFacultyIndex
                ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-sm'
                : 'bg-white hover:bg-neutral-50 text-neutral-600 border-neutral-200'
            }`}
          >
            <div className="text-[10px] font-mono opacity-60 mb-0.5">{f.id}</div>
            <div className="font-heading font-semibold text-xs truncate">
              {f.fullName.split(' ')[0]} {f.fullName.split(' ')[1]?.[0]}.
            </div>
            <div className="text-[10px] truncate opacity-70 mt-0.5">
              {f.formerCompany.split(',')[0].replace('Ex-', '')}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
