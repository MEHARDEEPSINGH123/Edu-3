'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnrichedCourse } from '@/lib/types';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Award,
  User,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface CourseDetailModalProps {
  course: EnrichedCourse | null;
  onClose: () => void;
  onApply: () => void;
  onBookTrial: () => void;
}

export default function CourseDetailModal({
  course,
  onClose,
  onApply,
  onBookTrial,
}: CourseDetailModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 pb-4 border-b border-neutral-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
              {course.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">{course.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] mb-2 leading-tight">
              {course.cleanTitle}
            </h3>
            <p className="font-editorial text-lg text-neutral-600 leading-relaxed">
              {course.summary}
            </p>
          </div>

          {/* Pricing & Subsidy Box */}
          <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                Singapore Citizen Subsidized Tuition
              </span>
              <div className="font-heading font-bold text-2xl text-[#0B132B]">
                SGD ${course.subsidizedFeeSGD.toLocaleString()}
              </div>
              <span className="text-[11px] text-emerald-700 font-medium">
                70% SkillsFuture SSG / IBF Co-Funded
              </span>
            </div>

            <div className="sm:border-l sm:border-neutral-200 sm:pl-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                Standard Full Tuition
              </span>
              <div className="font-heading font-semibold text-xl text-neutral-500">
                SGD ${course.fees_sgd.toLocaleString()}
              </div>
              <span className="text-[11px] text-neutral-400">
                PSEA &amp; 0% 12-mo installments eligible
              </span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">Duration</span>
              <span className="font-semibold text-neutral-800">{course.durationLabel}</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">Pacing</span>
              <span className="font-semibold text-neutral-800">{course.pacing}</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">Level</span>
              <span className="font-semibold text-neutral-800">{course.level}</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">Next Intake</span>
              <span className="font-semibold text-neutral-800">{course.intakeMonth}</span>
            </div>
          </div>

          {/* Core Syllabus Modules */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" /> Syllabus Architecture
            </h4>
            <div className="space-y-2">
              {course.curriculum.map((mod, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/70 border border-neutral-100 text-xs text-neutral-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-neutral-800">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Acquired */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Technologies &amp; Systems
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {course.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Trainer & Certification info */}
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2 text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Lead Faculty: <strong className="text-neutral-800">{course.trainerName}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Accreditation: <strong className="text-neutral-800">{course.certificationName}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              <span>Schedule Code: <span className="font-mono">{course.scheduleId}</span></span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0 bg-neutral-50/50">
          <button
            onClick={() => {
              onClose();
              onBookTrial();
            }}
            className="px-5 py-3 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Book Free Trial Session First
          </button>

          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="bg-[#0B132B] text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-[#1C2541] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Apply For This Module</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
