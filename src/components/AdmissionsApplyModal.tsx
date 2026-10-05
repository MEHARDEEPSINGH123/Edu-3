'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CareerDomain } from '@/lib/types';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  GraduationCap,
} from 'lucide-react';

interface AdmissionsApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDomain?: CareerDomain;
}

export default function AdmissionsApplyModal({
  isOpen,
  onClose,
  defaultDomain = 'AI Engineer',
}: AdmissionsApplyModalProps) {
  const [selectedDomain, setSelectedDomain] = useState<CareerDomain>(defaultDomain);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('1-3 Years Tech / Engineering');
  const [citizenStatus, setCitizenStatus] = useState('Singapore Citizen (Eligible for 70-90% SSG Grant)');
  const [statement, setStatement] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const generatedId = `CF-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0B132B', '#06D6A0', '#3A86FF'],
      });
    } catch (e) {}
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
      >
        <div className="flex items-center justify-between p-6 sm:p-8 pb-4 border-b border-neutral-100">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-600 font-semibold">
              Admissions Studio
            </span>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#0B132B]">
              Application for Cohort 26-Alpha
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold">
                Dossier Received &bull; Under Academic Review
              </span>
              <h4 className="font-heading font-bold text-2xl text-[#0B132B] mt-1">
                Application Lodged, {name.split(' ')[0]}!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-md mx-auto">
                Your application docket <strong className="font-mono text-neutral-800">{appId}</strong> has been transmitted to the Admissions Review Board. A technical diagnostic link has been dispatched to <span className="text-blue-600">{email}</span>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-left space-y-2 text-xs text-neutral-600">
              <div className="flex justify-between font-mono text-[11px] text-neutral-400">
                <span>STAGE: 01 / DOSSIER AUDIT</span>
                <span className="text-emerald-700 font-bold">ACTIVE</span>
              </div>
              <div className="font-semibold text-neutral-800">{selectedDomain} Program Track</div>
              <div>Citizenship Verification: {citizenStatus.split('(')[0]}</div>
              <div className="pt-2 border-t border-neutral-200/60 text-neutral-500">
                Estimated Review Decision: Within 48 hours via portal &amp; SMS.
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full bg-[#0B132B] text-white py-3.5 rounded-full font-medium text-xs hover:bg-[#1C2541] transition-colors"
            >
              Close &bull; Return to Platform
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                Target Pathway
              </label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value as CareerDomain)}
                className="w-full p-3 rounded-xl bg-neutral-50 border border-neutral-300 text-xs font-sans text-neutral-800 focus:outline-none focus:border-[#0B132B]"
              >
                <option value="AI Engineer">AI Engineer (Autonomous Systems &amp; LLMs)</option>
                <option value="Cloud Architect">Cloud Architect (Distributed Resiliency &amp; eBPF)</option>
                <option value="Cybersecurity Specialist">Cybersecurity Specialist (Red Team &amp; Zero Trust)</option>
                <option value="Data Analyst">Data Analyst (Causal Inference &amp; DuckDB)</option>
                <option value="Product Designer">Product Designer (Design Tokens &amp; React UI)</option>
                <option value="Full Stack Developer">Full Stack Developer (Next.js 15, Rust &amp; CRDTs)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rachel Lim"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-[#0B132B]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rachel.lim@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-[#0B132B]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Singapore Citizenship &amp; Subsidy Status
              </label>
              <select
                value={citizenStatus}
                onChange={(e) => setCitizenStatus(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-50 border border-neutral-300 text-xs font-sans text-neutral-800 focus:outline-none focus:border-[#0B132B]"
              >
                <option value="Singapore Citizen (Eligible for 70-90% SSG Grant)">
                  Singapore Citizen (Eligible for 70-90% SSG / IBF Subsidy)
                </option>
                <option value="Singapore Permanent Resident (Eligible for 50% SSG Grant)">
                  Singapore Permanent Resident (Eligible for 50% SSG Subsidy)
                </option>
                <option value="Employment Pass / Tech.Pass / S Pass Holder">
                  Employment Pass / Tech.Pass / S Pass Holder
                </option>
                <option value="International Fellow">International Fellow</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Prior Technical Background
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-50 border border-neutral-300 text-xs font-sans text-neutral-800 focus:outline-none focus:border-[#0B132B]"
              >
                <option value="Non-STEM / Career Pivoter">Non-STEM / Complete Career Pivoter</option>
                <option value="Junior Engineer (0-2 Years)">Junior Engineer (0-2 Years)</option>
                <option value="Mid-Level Engineer (3-6 Years)">Mid-Level Engineer (3-6 Years)</option>
                <option value="Senior Tech Lead / Architect (7+ Years)">Senior Tech Lead / Architect (7+ Years)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                Statement of Intent (Brief)
              </label>
              <textarea
                rows={3}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="What production problem or career transformation are you pursuing at CodeForge?"
                className="w-full p-3 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-[#0B132B]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B132B] text-white py-3.5 rounded-full font-medium text-xs hover:bg-[#1C2541] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Submit Application &amp; Unlock Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
