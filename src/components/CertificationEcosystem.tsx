'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedCertifications } from '@/lib/dataset-loader';
import {
  Award,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function CertificationEcosystem() {
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  // Take top 6 certifications from CERT001 - CERT030
  const certList = enrichedCertifications.slice(0, 6);
  const activeCert = certList[selectedCertIndex] || certList[0];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            09 / Verified Credentials
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Certification Ecosystem
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Progression maps &amp; industry-recognized credentials. Rigorously attested by Singapore statutory boards and global consortia.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-500">
          30 Accredited Credentials (CERT001–CERT030)
        </div>
      </div>

      {/* Progression Hierarchy Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Progression Tiers Navigation (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Credential Progression Tier
          </div>

          {certList.map((cert, idx) => {
            const isSelected = idx === selectedCertIndex;
            return (
              <button
                key={cert.id}
                onClick={() => setSelectedCertIndex(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-start gap-4 cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-lg'
                    : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                    isSelected ? 'bg-white/10 text-emerald-300' : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-emerald-300' : 'text-neutral-400'}`}>
                      {cert.id}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/15 text-neutral-200' : 'bg-neutral-100 text-neutral-600'}`}>
                      {cert.recognitionScore}% Match
                    </span>
                  </div>

                  <h3 className={`font-heading font-semibold text-sm leading-snug ${isSelected ? 'text-white' : 'text-[#0B132B]'}`}>
                    {cert.officialTitle}
                  </h3>

                  <p className={`text-xs mt-1 truncate ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {cert.authority}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Progression Specification Card (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {activeCert.level}
                </span>
                <span className="text-xs font-mono text-neutral-400">{activeCert.id}</span>
              </div>

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] mb-2 leading-snug">
                {activeCert.officialTitle}
              </h3>

              <p className="text-xs font-mono text-neutral-500 mb-6">
                Issuing Body: <span className="text-neutral-800 font-sans font-medium">{activeCert.authority}</span> &bull; {activeCert.validity}
              </p>

              {/* Verified Learning Outcomes */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Verified Technical Competencies
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCert.skillsVerified.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-medium text-neutral-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Rigor & Defense Format */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-3 mb-8">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Examination &amp; Attestation Method
                  </span>
                  <div className="text-xs sm:text-sm font-sans text-neutral-800 leading-relaxed font-medium">
                    {activeCert.examFormat}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Prerequisites
                  </span>
                  <div className="text-xs font-sans text-neutral-600 leading-relaxed">
                    {activeCert.prerequisites}
                  </div>
                </div>
              </div>

              {/* Salary Impact & Career Value */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase block">
                    Documented Market Valuation
                  </span>
                  <div className="font-heading font-semibold text-sm sm:text-base text-emerald-600 flex items-center gap-1.5 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>{activeCert.salaryImpact}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 px-3.5 py-2 rounded-full">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>CPE &amp; SSG Registry Verified</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
