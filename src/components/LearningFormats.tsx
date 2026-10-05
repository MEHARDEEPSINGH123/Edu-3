'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedLearningFormats } from '@/lib/dataset-loader';
import {
  Clock,
  Calendar,
  Compass,
  Zap,
  Building2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface LearningFormatsProps {
  onOpenAdmissions: () => void;
}

export default function LearningFormats({ onOpenAdmissions }: LearningFormatsProps) {
  const [selectedFormatIndex, setSelectedFormatIndex] = useState(0);

  const formatList = enrichedLearningFormats.slice(0, 6);
  const activeFormat = formatList[selectedFormatIndex] || formatList[0];

  const icons = [Zap, Clock, Calendar, Compass, Building2, Briefcase];

  return (
    <section id="learning-formats" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            05 / Delivery Architecture
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Learning Formats &amp; Cadence
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Engineered for intense rigor without career disruption. Choose the tempo aligned with your professional life.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-500">
          6 Flexible Modes &bull; Derived from LF001–LF012 Dataset
        </div>
      </div>

      {/* Visual Pathway Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Format Navigation Pills (4 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {formatList.map((format, idx) => {
            const Icon = icons[idx % icons.length];
            const isSelected = idx === selectedFormatIndex;

            return (
              <button
                key={format.id}
                onClick={() => setSelectedFormatIndex(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-start gap-4 cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-lg -translate-x-1'
                    : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                    isSelected ? 'bg-white/10 text-emerald-300' : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-emerald-300' : 'text-neutral-400'}`}>
                      {format.id}
                    </span>
                    <span className={`text-[11px] font-sans font-medium px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/15 text-neutral-200' : 'bg-neutral-100 text-neutral-600'}`}>
                      {format.schedulePattern.split(' ')[0]} Wks
                    </span>
                  </div>

                  <h3 className={`font-heading font-semibold text-base leading-snug ${isSelected ? 'text-white' : 'text-[#0B132B]'}`}>
                    {format.formatTitle}
                  </h3>

                  <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {format.commitment}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Visual Pathway Deep-Dive & Weekly Cadence Canvas (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFormat.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-sm"
            >
              {/* Format Tag & Title */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-medium border border-emerald-100">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeFormat.highlightTag}
                </span>
                <span className="text-xs font-mono text-neutral-400">{activeFormat.id}</span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] mb-4">
                {activeFormat.formatTitle}
              </h3>

              <p className="font-editorial text-lg text-neutral-600 leading-relaxed mb-8">
                {activeFormat.description}
              </p>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 mb-8">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Time Commitment
                  </span>
                  <div className="font-sans font-semibold text-sm text-[#0B132B]">
                    {activeFormat.commitment}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Delivery Methodology
                  </span>
                  <div className="font-sans font-semibold text-sm text-[#0B132B]">
                    {activeFormat.deliveryMethod}
                  </div>
                </div>

                <div className="sm:col-span-2 pt-3 border-t border-neutral-200/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Ideal Candidate Profile
                  </span>
                  <div className="font-sans text-xs text-neutral-700 leading-relaxed">
                    {activeFormat.idealFor}
                  </div>
                </div>
              </div>

              {/* Typical Weekly Cadence Blueprint */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Visual Weekly Rhythm Blueprint
                </span>
                <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dIdx) => {
                    const isLabDay =
                      selectedFormatIndex === 0 ? dIdx < 5 :
                      selectedFormatIndex === 1 ? dIdx === 1 || dIdx === 3 || dIdx === 5 :
                      selectedFormatIndex === 2 ? dIdx === 5 :
                      selectedFormatIndex === 3 ? dIdx === 2 || dIdx === 6 :
                      selectedFormatIndex === 4 ? dIdx < 4 :
                      dIdx < 5;

                    return (
                      <div
                        key={day}
                        className={`p-3 rounded-xl border flex flex-col justify-between min-h-[75px] ${
                          isLabDay
                            ? 'bg-[#0B132B] text-white border-[#0B132B]'
                            : 'bg-neutral-50 text-neutral-400 border-neutral-100'
                        }`}
                      >
                        <span className="font-mono text-[11px] font-bold">{day}</span>
                        <span className="text-[10px] leading-tight">
                          {isLabDay ? 'Studio Lab' : 'Async'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="text-xs text-neutral-500 font-sans">
                  Cohorts commence monthly across Singapore campuses.
                </div>
                <button
                  onClick={onOpenAdmissions}
                  className="bg-[#0B132B] text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-[#1C2541] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Select This Cadence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
