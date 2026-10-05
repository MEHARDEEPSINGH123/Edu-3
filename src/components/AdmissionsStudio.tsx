'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { admissionSteps } from '@/lib/dataset-loader';
import {
  FileText,
  Terminal,
  Users2,
  DollarSign,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calculator,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface AdmissionsStudioProps {
  onOpenApplyModal: () => void;
}

export default function AdmissionsStudio({ onOpenApplyModal }: AdmissionsStudioProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [citizenStatus, setCitizenStatus] = useState<'citizen' | 'citizen40' | 'pr' | 'intl'>('citizen');
  const [selectedBaseFee, setSelectedBaseFee] = useState(4800);

  const activeStep = admissionSteps[activeStepIndex] || admissionSteps[0];
  const stepIcons = [FileText, Terminal, Users2, DollarSign, Compass];

  // Fee subsidy calculation
  const subsidyPercent =
    citizenStatus === 'citizen40' ? 0.9 : citizenStatus === 'citizen' ? 0.7 : citizenStatus === 'pr' ? 0.5 : 0;
  const netPayable = Math.round(selectedBaseFee * (1 - subsidyPercent));
  const monthlyInstallment = Math.round(netPayable / 12);

  return (
    <section id="admissions-studio" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            08 / Selective Crucible
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Admissions Studio &amp; Evaluation
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            A 5-stage meritocratic journey. We admit engineers based on quantitative clarity, not credential prestige.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Cohort 26-Alpha Intake Closing in 14 Days</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main 5-Stage Animated Journey (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-neutral-200 p-6 sm:p-10 shadow-sm">
          {/* Step Progress Tracker Navigation */}
          <div className="grid grid-cols-5 gap-2 pb-8 border-b border-neutral-100">
            {admissionSteps.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              const isPassed = idx < activeStepIndex;
              const Icon = stepIcons[idx];

              return (
                <button
                  key={step.code}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-2xl text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[90px] border ${
                    isSelected
                      ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                      : isPassed
                      ? 'bg-neutral-50 text-neutral-800 border-neutral-200'
                      : 'bg-white hover:bg-neutral-50 text-neutral-500 border-neutral-200/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-[10px] font-mono">
                    <span>0{step.stepNumber}</span>
                    {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                  </div>

                  <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-300' : 'text-neutral-500'}`} />

                  <span className={`text-[10px] font-heading font-semibold truncate w-full ${isSelected ? 'text-white' : 'text-neutral-700'}`}>
                    {step.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Narrative */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.code}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-8"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                  Stage 0{activeStep.stepNumber} &bull; {activeStep.timeline}
                </span>
                <span className="text-xs font-mono text-neutral-400">{activeStep.code}</span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] mb-4">
                {activeStep.title}
              </h3>

              <p className="font-editorial text-lg text-neutral-600 leading-relaxed mb-6">
                {activeStep.overview}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Stage Requirements &amp; Deliverables
                </span>
                <div className="space-y-2.5">
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Meta & Next Step Trigger */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-neutral-500 font-sans">
                  {activeStep.acceptanceRateNote}
                </div>

                <div className="flex items-center gap-3">
                  {activeStepIndex < admissionSteps.length - 1 ? (
                    <button
                      onClick={() => setActiveStepIndex((prev) => prev + 1)}
                      className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next: Stage 0{activeStepIndex + 2}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : null}

                  <button
                    onClick={onOpenApplyModal}
                    className="bg-[#0B132B] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-[#1C2541] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>{activeStep.actionCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Singapore SkillsFuture & IBF Subsidy Calculator (4 cols) */}
        <div className="lg:col-span-4 bg-[#0B132B] text-white rounded-3xl p-8 border border-[#0B132B] shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Funding Calculator</span>
          </div>

          <h3 className="font-heading font-semibold text-xl text-white mb-2">
            Singapore Tuition Subsidies
          </h3>
          <p className="text-xs text-neutral-300 mb-6 leading-relaxed">
            Eligible Singapore Citizens &amp; PRs receive extensive government co-funding under SSG and IBF schemes.
          </p>

          {/* Citizen status toggle */}
          <div className="space-y-2 mb-6">
            <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
              Citizenship Status
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setCitizenStatus('citizen40')}
                className={`p-2.5 rounded-xl border text-left cursor-pointer transition-colors ${
                  citizenStatus === 'citizen40'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="font-semibold">SG Citizen 40+</div>
                <div className="text-[10px] text-neutral-400">90% MCES Subsidy</div>
              </button>

              <button
                onClick={() => setCitizenStatus('citizen')}
                className={`p-2.5 rounded-xl border text-left cursor-pointer transition-colors ${
                  citizenStatus === 'citizen'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="font-semibold">SG Citizen &lt;40</div>
                <div className="text-[10px] text-neutral-400">70% SSG Subsidy</div>
              </button>

              <button
                onClick={() => setCitizenStatus('pr')}
                className={`p-2.5 rounded-xl border text-left cursor-pointer transition-colors ${
                  citizenStatus === 'pr'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="font-semibold">SG Permanent Res.</div>
                <div className="text-[10px] text-neutral-400">50% SSG Subsidy</div>
              </button>

              <button
                onClick={() => setCitizenStatus('intl')}
                className={`p-2.5 rounded-xl border text-left cursor-pointer transition-colors ${
                  citizenStatus === 'intl'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="font-semibold">EP / International</div>
                <div className="text-[10px] text-neutral-400">Full Standard Fee</div>
              </button>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 mb-6">
            <div className="flex justify-between text-xs text-neutral-400">
              <span>Standard Baseline Tuition:</span>
              <span className="font-mono text-neutral-200">SGD ${selectedBaseFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs text-emerald-400">
              <span>SkillsFuture / IBF Grant:</span>
              <span className="font-mono font-bold">- SGD ${(selectedBaseFee - netPayable).toLocaleString()}</span>
            </div>
            <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Net Payable</span>
                <span className="text-xl font-heading font-bold text-white">SGD ${netPayable.toLocaleString()}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-neutral-400 block">12-Mo 0% Installment</span>
                <span className="text-sm font-mono text-emerald-300">SGD ${monthlyInstallment}/mo</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenApplyModal}
            className="w-full bg-emerald-400 text-[#0B132B] font-semibold py-3 rounded-full text-xs hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Check Subsidy &amp; Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
