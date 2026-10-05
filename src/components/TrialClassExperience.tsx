'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnrichedTrialClass } from '@/lib/types';
import { enrichedTrialClasses, enrichedCampuses } from '@/lib/dataset-loader';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Filter,
  Flame,
} from 'lucide-react';

interface TrialClassExperienceProps {
  onBookClass: (trialClass: EnrichedTrialClass) => void;
}

export default function TrialClassExperience({ onBookClass }: TrialClassExperienceProps) {
  const [activeCampusFilter, setActiveCampusFilter] = useState<string>('All');
  const [activeFormatFilter, setActiveFormatFilter] = useState<string>('All');

  // Filter trial classes from 80 items in dataset
  const filteredClasses = enrichedTrialClasses.filter((tc) => {
    const matchesCampus =
      activeCampusFilter === 'All' || tc.campusId === activeCampusFilter;
    const matchesFormat =
      activeFormatFilter === 'All' || tc.format === activeFormatFilter;
    return matchesCampus && matchesFormat;
  }).slice(0, 6);

  return (
    <section id="trial-classes" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            07 / Live Testbed
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Trial Class Experience
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Experience our crucible environment with zero financial obligation. Code alongside resident faculty in production labs.
          </p>
        </div>

        {/* Live Filter Controls */}
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2">
          <select
            value={activeCampusFilter}
            onChange={(e) => setActiveCampusFilter(e.target.value)}
            className="text-xs font-sans bg-white border border-neutral-300 rounded-full px-3 py-2 text-neutral-700 focus:outline-none"
          >
            <option value="All">All 12 Campuses</option>
            {enrichedCampuses.slice(0, 6).map((c) => (
              <option key={c.id} value={c.id}>
                {c.locationName.split(' ')[0]} {c.locationName.split(' ')[1]}
              </option>
            ))}
          </select>

          <select
            value={activeFormatFilter}
            onChange={(e) => setActiveFormatFilter(e.target.value)}
            className="text-xs font-sans bg-white border border-neutral-300 rounded-full px-3 py-2 text-neutral-700 focus:outline-none"
          >
            <option value="All">All Formats</option>
            <option value="In-Person Lab">In-Person Lab</option>
            <option value="Live Interactive Studio">Live Interactive Studio</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Trial Classes Grid with Interactive Booking CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-7 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Top Meta: Availability & Format Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium ${
                    item.status === 'Final Seats'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : item.status === 'Filling Fast'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}
                >
                  {item.status === 'Final Seats' && <Flame className="w-3 h-3 text-rose-600" />}
                  {item.seatsRemaining} Seats Remaining
                </span>

                <span className="text-xs font-mono text-neutral-400">{item.id}</span>
              </div>

              {/* Title & Topic */}
              <h3 className="font-heading font-semibold text-lg text-[#0B132B] group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                {item.classTitle}
              </h3>

              {/* Specification List: Format, Campus, Schedule */}
              <div className="space-y-2.5 mb-6 text-xs text-neutral-600 bg-neutral-50/70 p-4 rounded-2xl border border-neutral-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-medium text-neutral-800">{item.scheduleDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{item.timeSlot}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">{item.campusName}</span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-neutral-200/50">
                  <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Lead: {item.instructorName}</span>
                </div>
              </div>

              {/* Takeaways */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  What You Will Build:
                </span>
                {item.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                  <div key={tIdx} className="text-xs text-neutral-600 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Trigger */}
            <div className="pt-4 border-t border-neutral-100">
              <button
                onClick={() => onBookClass(item)}
                className="w-full bg-[#0B132B] text-white py-3 rounded-full text-xs font-medium hover:bg-[#1C2541] transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
              >
                <span>Reserve Complimentary Seat</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
