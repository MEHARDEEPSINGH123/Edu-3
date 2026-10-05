'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CareerDomain, EnrichedCourse } from '@/lib/types';
import { careerJourneyPaths, enrichedCourses, enrichedCertifications } from '@/lib/dataset-loader';
import {
  Cpu,
  BarChart3,
  Cloud,
  ShieldCheck,
  Palette,
  Code2,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Sparkles,
} from 'lucide-react';

interface CareerDestinationSelectorProps {
  selectedCareer: CareerDomain;
  onSelectCareer: (career: CareerDomain) => void;
  onSelectCourse: (course: EnrichedCourse) => void;
}

export default function CareerDestinationSelector({
  selectedCareer,
  onSelectCareer,
  onSelectCourse,
}: CareerDestinationSelectorProps) {
  const options: {
    domain: CareerDomain;
    label: string;
    icon: React.ElementType;
    brief: string;
  }[] = [
    {
      domain: 'AI Engineer',
      label: 'AI Engineer',
      icon: Cpu,
      brief: 'Agentic Workflows, PyTorch & LLM Systems',
    },
    {
      domain: 'Data Analyst',
      label: 'Data Analyst',
      icon: BarChart3,
      brief: 'Causal Inference, DuckDB & Modern Analytics',
    },
    {
      domain: 'Cloud Architect',
      label: 'Cloud Architect',
      icon: Cloud,
      brief: 'Distributed Topologies, eBPF & Kubernetes',
    },
    {
      domain: 'Cybersecurity Specialist',
      label: 'Cybersecurity Specialist',
      icon: ShieldCheck,
      brief: 'Zero-Trust, Red Team Range & Binary Forensics',
    },
    {
      domain: 'Product Designer',
      label: 'Product Designer',
      icon: Palette,
      brief: 'Design Systems, Spatial Ergonomics & React Tokens',
    },
    {
      domain: 'Full Stack Developer',
      label: 'Full Stack Developer',
      icon: Code2,
      brief: 'Next.js 15, Rust WebAssembly & CRDTs',
    },
  ];

  const currentPath = careerJourneyPaths[selectedCareer];

  // Dynamically filter courses for this domain from the 120-course dataset
  const recommendedCourses = enrichedCourses
    .filter((c) => {
      if (selectedCareer === 'AI Engineer') return c.category === 'AI';
      if (selectedCareer === 'Data Analyst') return c.category === 'Analytics';
      if (selectedCareer === 'Cloud Architect') return c.category === 'Cloud';
      if (selectedCareer === 'Cybersecurity Specialist') return c.category === 'Cybersecurity';
      if (selectedCareer === 'Product Designer') return c.category === 'Design';
      if (selectedCareer === 'Full Stack Developer') return c.category === 'Development';
      return false;
    })
    .slice(0, 3);

  return (
    <section id="career-destination" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            01 / Strategic Orientation
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            What career are you working towards?
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Every curriculum begins with the endgame in mind. Choose your career destination to calibrate your learning path.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-sans text-neutral-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>Recommendations adapt dynamically</span>
        </div>
      </div>

      {/* Horizontal / Grid Destination Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selectedCareer === opt.domain;

          return (
            <button
              key={opt.domain}
              onClick={() => onSelectCareer(opt.domain)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative cursor-pointer border flex flex-col justify-between min-h-[140px] group ${
                isSelected
                  ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-xl shadow-[#0B132B]/10 -translate-y-1'
                  : 'bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200/80 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div
                  className={`p-2.5 rounded-xl transition-colors ${
                    isSelected ? 'bg-white/10 text-emerald-300' : 'bg-neutral-100 text-neutral-600 group-hover:text-[#0B132B]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                )}
              </div>

              <div>
                <h3 className={`font-heading font-semibold text-sm sm:text-base leading-tight mb-1 ${
                  isSelected ? 'text-white' : 'text-[#0B132B]'
                }`}>
                  {opt.label}
                </h3>
                <p className={`text-[11px] leading-snug line-clamp-2 ${
                  isSelected ? 'text-neutral-300' : 'text-neutral-500'
                }`}>
                  {opt.brief}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Recommendation Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCareer}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white border border-neutral-200/80 p-6 sm:p-10 shadow-sm"
        >
          {/* Path Header & Market Signals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-neutral-100">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-mono font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Calibrated Path: {currentPath.primaryTrack}
              </div>
              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] tracking-tight">
                {selectedCareer} Transformation Roadmap
              </h3>
              <p className="font-sans text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
                {currentPath.tagline}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-neutral-50/70 p-5 rounded-2xl border border-neutral-100">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                  SG Compensation Bracket
                </span>
                <div className="font-heading font-bold text-lg sm:text-xl text-[#0B132B] mt-1">
                  {currentPath.averageSalarySG}
                </div>
                <span className="text-[11px] text-neutral-500">Ministry of Manpower benchmarks</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                  Hiring Demand Surge
                </span>
                <div className="font-heading font-bold text-lg sm:text-xl text-emerald-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {currentPath.growthRate.split(' ')[0]}
                </div>
                <span className="text-[11px] text-neutral-500">Tier-1 Singapore enterprise</span>
              </div>
            </div>
          </div>

          {/* Recommended Curriculum from JSON Dataset */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  Recommended Curriculum Modules
                </span>
                <h4 className="font-heading font-semibold text-lg text-[#0B132B]">
                  Flagship Courses from Institute Dataset ({recommendedCourses.length} Selected)
                </h4>
              </div>
              <a
                href="#course-discovery"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                View all 120 courses <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => onSelectCourse(course)}
                  className="group p-6 rounded-2xl border border-neutral-200/80 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 bg-neutral-50/30 hover:bg-white cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                      <span>{course.id}</span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-sans font-medium text-[11px]">
                        {course.durationWeeks} Wks
                      </span>
                    </div>

                    <h5 className="font-heading font-semibold text-base text-[#0B132B] group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                      {course.cleanTitle}
                    </h5>

                    <p className="text-xs text-neutral-500 line-clamp-2 mb-4 leading-relaxed">
                      {course.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {course.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-neutral-400">Subsidized Fee</div>
                      <div className="text-sm font-heading font-bold text-[#0B132B]">
                        SGD ${course.subsidizedFeeSGD.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      Inspect <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
