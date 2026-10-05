'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnrichedCourse, EnrichedCampus, EnrichedTrainer } from '@/lib/types';
import {
  enrichedCourses,
  enrichedCampuses,
  enrichedTrainers,
  enrichedCertifications,
} from '@/lib/dataset-loader';
import {
  Search,
  X,
  BookOpen,
  MapPin,
  User,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface SearchCommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: EnrichedCourse) => void;
}

export default function SearchCommandModal({
  isOpen,
  onClose,
  onSelectCourse,
}: SearchCommandModalProps) {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const matchedCourses = query
    ? enrichedCourses.filter(
        (c) =>
          c.cleanTitle.toLowerCase().includes(query.toLowerCase()) ||
          c.id.toLowerCase().includes(query.toLowerCase()) ||
          c.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5)
    : enrichedCourses.slice(0, 4);

  const matchedCampuses = query
    ? enrichedCampuses.filter(
        (cmp) =>
          cmp.locationName.toLowerCase().includes(query.toLowerCase()) ||
          cmp.district.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : enrichedCampuses.slice(0, 3);

  const matchedFaculty = query
    ? enrichedTrainers.filter(
        (t) =>
          t.fullName.toLowerCase().includes(query.toLowerCase()) ||
          t.formerCompany.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : enrichedTrainers.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: -10 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-neutral-200 gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across 120 courses, 12 campuses, 40 faculty, certifications..."
            className="w-full text-sm font-sans text-neutral-800 placeholder-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-100 hidden sm:block">
            ESC
          </span>
        </div>

        {/* Results Container */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Courses Category */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              Programs &amp; Courses ({matchedCourses.length})
            </span>
            <div className="space-y-1.5">
              {matchedCourses.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    onClose();
                    onSelectCourse(c);
                  }}
                  className="p-3 rounded-xl hover:bg-neutral-50 transition-colors flex items-center justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-neutral-400">{c.id}</span>
                      <span className="font-heading font-semibold text-xs sm:text-sm text-[#0B132B] group-hover:text-blue-600 transition-colors">
                        {c.cleanTitle}
                      </span>
                    </div>
                    <span className="text-[11px] text-neutral-500">
                      {c.category} &bull; {c.durationWeeks} Weeks &bull; SGD ${c.subsidizedFeeSGD.toLocaleString()} (Subsidized)
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Campuses */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              Singapore Campuses ({matchedCampuses.length})
            </span>
            <div className="space-y-1.5">
              {matchedCampuses.map((cmp) => (
                <div
                  key={cmp.id}
                  className="p-3 rounded-xl bg-neutral-50/50 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-heading font-semibold text-neutral-800">{cmp.locationName}</span>
                    <p className="text-[11px] text-neutral-500">{cmp.district} &bull; {cmp.mrt}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">{cmp.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-600" />
              Faculty &amp; Resident Chairs ({matchedFaculty.length})
            </span>
            <div className="space-y-1.5">
              {matchedFaculty.map((t) => (
                <div
                  key={t.id}
                  className="p-3 rounded-xl bg-neutral-50/50 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-heading font-semibold text-neutral-800">{t.fullName}</span>
                    <p className="text-[11px] text-neutral-500">{t.role} &bull; {t.formerCompany}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">{t.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3 px-6 bg-neutral-50 border-t border-neutral-100 text-[11px] text-neutral-400 font-mono flex items-center justify-between">
          <span>Search index dynamically generated from full dataset.</span>
          <span>CodeForge Institute Singapore</span>
        </div>
      </motion.div>
    </div>
  );
}
