'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CareerDomain, EnrichedCourse } from '@/lib/types';
import { careerJourneyPaths, enrichedCertifications, enrichedCourses } from '@/lib/dataset-loader';
import {
  GitCommit,
  CheckCircle2,
  ArrowDown,
  Layers,
  BookOpen,
  Award,
  Briefcase,
  TrendingUp,
  Building2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface CareerJourneyBuilderProps {
  selectedCareer: CareerDomain;
  onSelectCourse: (course: EnrichedCourse) => void;
  onOpenAdmissions: () => void;
}

export default function CareerJourneyBuilder({
  selectedCareer,
  onSelectCourse,
  onOpenAdmissions,
}: CareerJourneyBuilderProps) {
  const currentPath = careerJourneyPaths[selectedCareer];
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);

  const activeLevel = currentPath.currentSkillLevels[selectedLevelIndex] || currentPath.currentSkillLevels[0];

  // Matched certification
  const matchedCert = enrichedCertifications.find((c) => {
    if (selectedCareer === 'AI Engineer') return c.id === 'CERT001';
    if (selectedCareer === 'Cloud Architect') return c.id === 'CERT002';
    if (selectedCareer === 'Cybersecurity Specialist') return c.id === 'CERT003';
    if (selectedCareer === 'Data Analyst') return c.id === 'CERT004';
    if (selectedCareer === 'Product Designer') return c.id === 'CERT005';
    return c.id === 'CERT006';
  }) || enrichedCertifications[0];

  // Matched flagship course
  const matchedCourse = enrichedCourses.find((c) => {
    if (selectedCareer === 'AI Engineer') return c.id === 'CRS001';
    if (selectedCareer === 'Data Analyst') return c.id === 'CRS002';
    if (selectedCareer === 'Cloud Architect') return c.id === 'CRS003';
    if (selectedCareer === 'Cybersecurity Specialist') return c.id === 'CRS004';
    if (selectedCareer === 'Full Stack Developer') return c.id === 'CRS005';
    return c.id === 'CRS006';
  }) || enrichedCourses[0];

  return (
    <section id="journey-builder" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            02 / Core Interactive Experience
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Career Journey Builder
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            A deterministic architectural roadmap from your current baseline to elite Singapore tech leadership.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <span className="text-xs font-mono uppercase bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full border border-neutral-200">
            Active Destination: {selectedCareer}
          </span>
        </div>
      </div>

      {/* Main Roadmap Container */}
      <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Step 1: Current Skill Level Selector */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-[#0B132B] text-white flex items-center justify-center font-mono text-xs font-bold">
              1
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Step 1 &bull; Select Your Current Baseline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentPath.currentSkillLevels.map((lvl, index) => {
              const isSelected = index === selectedLevelIndex;
              return (
                <button
                  key={lvl.level}
                  onClick={() => setSelectedLevelIndex(index)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md -translate-y-0.5'
                      : 'bg-neutral-50/50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-medium ${isSelected ? 'text-emerald-300' : 'text-neutral-400'}`}>
                      Level {index + 1}
                    </span>
                    <span className={`text-[11px] font-sans px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/10 text-neutral-200' : 'bg-neutral-200/60 text-neutral-600'}`}>
                      {lvl.estimatedTimeline}
                    </span>
                  </div>
                  <h4 className={`font-heading font-semibold text-base mb-1.5 ${isSelected ? 'text-white' : 'text-[#0B132B]'}`}>
                    {lvl.level}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {lvl.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual Down Connector */}
        <div className="flex justify-center my-6">
          <div className="flex flex-col items-center text-neutral-300">
            <div className="w-px h-8 bg-neutral-200" />
            <ArrowDown className="w-5 h-5 text-neutral-400 -mt-1" />
          </div>
        </div>

        {/* Progression Steps: Track -> Course -> Cert -> Project -> Outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          {/* Step 2: Learning Track */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  2
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Learning Track
                </span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-[#0B132B] mb-2 leading-snug">
                {currentPath.primaryTrack}
              </h4>
              <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                Curated modular progression covering deep foundational theory through production systems.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
              Duration: {activeLevel.estimatedTimeline}
            </div>
          </div>

          {/* Step 3: Flagship Course */}
          <div
            onClick={() => onSelectCourse(matchedCourse)}
            className="p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold">
                    3
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Courses
                  </span>
                </div>
                <span className="text-[10px] font-mono text-blue-600">{matchedCourse.id}</span>
              </div>
              <h4 className="font-heading font-semibold text-base text-[#0B132B] group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                {matchedCourse.cleanTitle}
              </h4>
              <p className="text-xs text-neutral-500 line-clamp-3 leading-relaxed mb-3">
                {matchedCourse.summary}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0B132B]">
                SGD ${matchedCourse.subsidizedFeeSGD.toLocaleString()} (Subsidized)
              </span>
              <span className="text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </div>
          </div>

          {/* Step 4: Industry Certification */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  4
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Certification
                </span>
              </div>
              <h4 className="font-heading font-semibold text-base text-[#0B132B] mb-2 leading-snug">
                {matchedCert.officialTitle}
              </h4>
              <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
                Issued by {matchedCert.authority}. Singapore Skills Framework Level 6 credential.
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Score: {matchedCert.recognitionScore}% Industry Match</span>
            </div>
          </div>

          {/* Step 5: Industry Capstone Project */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-[11px] font-bold">
                  5
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Industry Project
                </span>
              </div>
              <h4 className="font-heading font-semibold text-base text-[#0B132B] mb-2 leading-snug">
                {currentPath.capstoneProject.title}
              </h4>
              <p className="text-xs text-neutral-500 line-clamp-3 mb-3 leading-relaxed">
                {currentPath.capstoneProject.description}
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 text-[11px] text-neutral-500">
              Partners: {currentPath.capstoneProject.industryPartners.join(', ')}
            </div>
          </div>

          {/* Step 6: Career Outcome */}
          <div className="p-6 rounded-2xl bg-[#0B132B] text-white border border-[#0B132B] flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-emerald-400 text-[#0B132B] flex items-center justify-center font-mono text-[11px] font-bold">
                  6
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                  Career Outcome
                </span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-white mb-2 leading-snug">
                {currentPath.outcomeRole}
              </h4>
              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Placement in top Singapore engineering teams with comprehensive salary progression.
              </p>
              <div className="text-emerald-400 font-heading font-bold text-base mb-1">
                {currentPath.averageSalarySG}
              </div>
              <div className="text-[10px] text-neutral-400">Verified SG median range</div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-3">
              <button
                onClick={onOpenAdmissions}
                className="w-full bg-white text-[#0B132B] py-2.5 px-3 rounded-xl font-medium text-xs hover:bg-neutral-100 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Apply for Pathway</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
