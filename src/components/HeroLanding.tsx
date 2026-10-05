'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Terminal, Cpu } from 'lucide-react';
import Image from 'next/image';

interface HeroLandingProps {
  onExploreClick: () => void;
  onBookTrialClick: () => void;
}

export default function HeroLanding({ onExploreClick, onBookTrialClick }: HeroLandingProps) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Typographic Monument */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Institution Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-neutral-200/80 shadow-xs mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-sans font-medium text-neutral-800 tracking-wide">
              CPE Registered &bull; SkillsFuture & IBF Accredited Institution
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#0B132B] leading-[1.04] mb-6"
          >
            Build Skills For{' '}
            <span className="font-editorial italic font-normal tracking-tight text-[#1C2541] block sm:inline">
              Industries That Don&apos;t Exist Yet.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl mb-10"
          >
            Singapore&apos;s future-focused learning institution. We forge elite engineers, AI architects, and systems leaders through production-grade crucible tracks and industry-embedded research.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              onClick={onExploreClick}
              className="bg-[#0B132B] text-white text-base font-sans font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#1C2541] hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Career Paths</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <button
              onClick={onBookTrialClick}
              className="bg-white text-[#0B132B] border border-neutral-300 text-base font-sans font-medium px-7 py-4 rounded-full transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-400 flex items-center justify-center gap-2 group cursor-pointer shadow-xs"
            >
              <span>Book A Trial Class</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-500 group-hover:text-[#0B132B]" />
            </button>
          </motion.div>

          {/* Editorial Micro-Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200/80 max-w-lg"
          >
            <div>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] tracking-tight">
                96.4%
              </div>
              <div className="text-xs text-neutral-500 font-sans mt-0.5">
                Career transformation rate within 180 days
              </div>
            </div>
            <div>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] tracking-tight">
                Up to 90%
              </div>
              <div className="text-xs text-neutral-500 font-sans mt-0.5">
                SkillsFuture & IBF funding for SG Citizens
              </div>
            </div>
            <div>
              <div className="font-heading font-semibold text-2xl sm:text-3xl text-[#0B132B] tracking-tight">
                12 Campuses
              </div>
              <div className="text-xs text-neutral-500 font-sans mt-0.5">
                One-North &bull; Marina Bay &bull; Jurong Labs
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Large Editorial Sculpture / Visual Storytelling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900 shadow-[0_30px_70px_-15px_rgba(11,19,43,0.18)] border border-neutral-200">
            {/* High-res architectural tech innovation image */}
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="CodeForge Institute Advanced Collaborative Engineering Lab"
              fill
              priority
              className="object-cover object-center filter saturate-90 contrast-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/30 to-transparent" />

            {/* Floating Terminal Widget on the image */}
            <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 text-white/90">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-[11px] font-mono text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  launchpad-node-01.codeforge.sg
                </span>
                <span className="text-neutral-400">NVIDIA H100 SXM5</span>
              </div>
              <div className="font-mono text-xs text-neutral-200 space-y-1">
                <p className="text-emerald-400/90">&gt; verifying agentic consensus loop...</p>
                <p className="text-neutral-400">&gt; throughput: 4,820 tokens/sec (vLLM distributed)</p>
                <p className="text-blue-300">&gt; zero memory leaks detected in Rust runtime</p>
              </div>
            </div>

            {/* Bottom Caption Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-xl text-[#0B132B] shadow-xl border border-white/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold mb-1">
                    Cohort 26-Alpha Active
                  </div>
                  <h4 className="font-heading font-semibold text-sm sm:text-base leading-snug">
                    One-North LaunchPad &bull; Deep Tech Residency
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Autonomous systems defense with resident fellows from GovTech and DeepMind.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0B132B] text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
