'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryFilter, EnrichedCourse } from '@/lib/types';
import { enrichedCourses, categoryList } from '@/lib/dataset-loader';
import {
  Search,
  Filter,
  ArrowUpRight,
  Sparkles,
  Award,
  Clock,
  User,
  MapPin,
  CheckCircle2,
  DollarSign,
  ChevronRight,
} from 'lucide-react';

interface CourseDiscoveryProps {
  onSelectCourse: (course: EnrichedCourse) => void;
}

export default function CourseDiscovery({ onSelectCourse }: CourseDiscoveryProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // 1 featured + 6 supporting

  // Filter courses from 120 items
  const filteredCourses = useMemo(() => {
    return enrichedCourses.filter((course) => {
      const matchesCategory =
        activeCategory === 'All' || course.category === activeCategory;
      const matchesSearch =
        course.cleanTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.trainerName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured course: the first one or specifically tagged
  const featuredCourse = filteredCourses[0] || enrichedCourses[0];
  const supportingCourses = filteredCourses.slice(1, 10);

  return (
    <section id="course-discovery" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            04 / Curriculum Index
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Course Discovery &amp; Modules
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Magazine-style architecture index spanning 120 rigorous systems engineering modules.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="mt-4 md:mt-0 relative w-full md:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 120 courses or skills..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-neutral-300 text-xs font-sans text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#0B132B] shadow-xs"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categoryList.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-neutral-200'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-emerald-300' : 'text-neutral-400'}`}>
                ({cat === 'All' ? enrichedCourses.length : enrichedCourses.filter((c) => c.category === cat).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Magazine Layout Container */}
      {featuredCourse ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Featured Course: Big Magazine Spread (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Flagship &bull; {featuredCourse.category}
                </div>
                <span className="text-xs font-mono text-neutral-400">{featuredCourse.id}</span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-[#0B132B] tracking-tight mb-4 leading-tight">
                {featuredCourse.cleanTitle}
              </h3>

              <p className="font-editorial text-lg sm:text-xl text-neutral-600 leading-relaxed mb-6">
                {featuredCourse.summary}
              </p>

              {/* Syllabus highlights */}
              <div className="space-y-2 mb-8 bg-neutral-50 p-5 rounded-2xl border border-neutral-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Core Module Architecture
                </span>
                {featuredCourse.curriculum.map((m, mIdx) => (
                  <div key={mIdx} className="text-xs text-neutral-700 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredCourse.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 rounded-lg text-neutral-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] text-neutral-400 font-sans">
                  Singapore Citizen Subsidized Tuition (SSG / IBF 70-90%)
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-2xl text-[#0B132B]">
                    SGD ${featuredCourse.subsidizedFeeSGD.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400 line-through">
                    SGD ${featuredCourse.fees_sgd.toLocaleString()} (Full)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectCourse(featuredCourse)}
                className="bg-[#0B132B] text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-[#1C2541] transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
              >
                <span>Inspect Full Specification</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Supporting Pathways Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Supporting Modules in {activeCategory}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                {supportingCourses.length} of {filteredCourses.length} displayed
              </span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[620px] pr-1">
              {supportingCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => onSelectCourse(course)}
                  className="p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">{course.id}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                      {course.durationWeeks} Wks
                    </span>
                  </div>

                  <h4 className="font-heading font-semibold text-sm sm:text-base text-[#0B132B] group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
                    {course.cleanTitle}
                  </h4>

                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-3">
                    {course.summary}
                  </p>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-800">
                      SGD ${course.subsidizedFeeSGD.toLocaleString()}
                    </span>
                    <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      Details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-16 text-center bg-white rounded-3xl border border-neutral-200">
          <p className="text-neutral-500 font-sans text-sm">No courses matching your filter criteria.</p>
        </div>
      )}
    </section>
  );
}
