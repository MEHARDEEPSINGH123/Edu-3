'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedSuccessStories } from '@/lib/dataset-loader';
import Image from 'next/image';
import {
  TrendingUp,
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export default function SuccessStories() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Take top 6 flagship narratives from 100 success stories
  const storyList = enrichedSuccessStories.slice(0, 6);
  const activeStory = storyList[activeStoryIndex] || storyList[0];

  return (
    <section id="success-stories" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            11 / Transformation Chronicles
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Success Stories &amp; Career Leaps
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Narrative transformation accounts. Rigorous documentation of how Singapore professionals pivot into tier-1 engineering leadership.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-500">
          100 Verified Case Studies (SS001–SS100)
        </div>
      </div>

      {/* Narrative Storytelling Section (Not a slider) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Fellow Transformation Selection List (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Featured Transformation Case Studies
          </span>

          {storyList.map((story, sIdx) => {
            const isSelected = sIdx === activeStoryIndex;
            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(sIdx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-lg -translate-x-1'
                    : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-emerald-300' : 'text-neutral-400'}`}>
                    {story.id} &bull; {story.track}
                  </span>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
                    +{story.salaryGrowthPercent}% Uplift
                  </span>
                </div>

                <h3 className={`font-heading font-semibold text-base mb-1 ${isSelected ? 'text-white' : 'text-[#0B132B]'}`}>
                  {story.personName}
                </h3>

                <div className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  <span>{story.previousRole}</span>
                  <span className="mx-1.5">&rarr;</span>
                  <span className={`font-semibold ${isSelected ? 'text-emerald-300' : 'text-[#0B132B]'}`}>
                    {story.newRole.split(' ')[0]} {story.newRole.split(' ')[1]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Full Narrative Transformation Spread (8 cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm"
            >
              {/* Transformation Delta Visual Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 mb-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Previous Baseline Role
                  </span>
                  <div className="font-heading font-semibold text-base text-neutral-600">
                    {activeStory.previousRole}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{activeStory.previousCompany}</div>
                </div>

                <div className="pt-3 sm:pt-0 sm:border-l sm:border-neutral-200 sm:pl-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 block mb-1">
                    Transformed Destination Role
                  </span>
                  <div className="font-heading font-bold text-base text-[#0B132B]">
                    {activeStory.newRole}
                  </div>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5">{activeStory.newCompany}</div>
                </div>
              </div>

              {/* Quotes & Authentic Voice */}
              <div className="mb-8">
                <Quote className="w-8 h-8 text-neutral-200 mb-2" />
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#0B132B] leading-snug">
                  &ldquo;{activeStory.quote}&rdquo;
                </p>
              </div>

              {/* Narrative Story */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  The Transformation Journey
                </h4>
                <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {activeStory.storyNarrative}
                </p>
              </div>

              {/* Capstone Defense Deliverable */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-white mb-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                  Capstone Engineering Defense
                </span>
                <div className="font-heading font-semibold text-base mb-1">
                  {activeStory.capstoneProject}
                </div>
                <div className="text-xs text-neutral-400">
                  Defended before Singapore engineering panel &bull; Open-source on GitHub
                </div>
              </div>

              {/* Footer Metrics */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Transition Time</span>
                    <div className="font-heading font-semibold text-sm text-[#0B132B]">
                      {activeStory.timeToTransition}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Verified Salary Leap</span>
                    <div className="font-heading font-semibold text-sm text-emerald-600">
                      +{activeStory.salaryGrowthPercent}% Increase
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-400">
                  Candidate ID: {activeStory.id} &bull; Verified Alumni
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
