'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, ChevronDown, Award, Clock } from 'lucide-react';
import { CareerDomain, EnrichedCourse } from '@/lib/types';
import { enrichedCourses, enrichedCertifications } from '@/lib/dataset-loader';

interface LearningTracksProps {
  onSelectCourse: (course: EnrichedCourse) => void;
  onSelectCareer: (career: CareerDomain) => void;
}

export default function LearningTracks({ onSelectCourse, onSelectCareer }: LearningTracksProps) {
  const [activePathway, setActivePathway] = useState<number>(0);

  const pathways = [
    {
      index: '01',
      title: 'Autonomous Systems & Agentic Intelligence Track',
      careerDomain: 'AI Engineer' as CareerDomain,
      editorialHeadline: 'Beyond Prompt Engineering: Writing GPU Kernels & Multi-Agent Consensus',
      duration: '16 – 24 Weeks (480 Hours)',
      pace: 'Full-Time Residency / Executive Hybrid',
      skills: ['PyTorch 2.0', 'CUDA C++', 'vLLM', 'LangGraph', 'Triton', 'Distributed Training', 'LoRA / DPO Fine-Tuning'],
      certifications: 'SG Specialist Diploma in Autonomous AI Architecture (SSG Level 6) & NVIDIA AI Enterprise Certification',
      outcomes: 'Senior AI Engineer, ML Infrastructure Architect, Foundation Model Researcher',
      curriculumHighlights: [
        'Writing custom CUDA kernels and memory-coalescing algorithms for tensor ops',
        'Serving 70B+ parameter open-source models with sub-20ms first-token latency using vLLM',
        'Deterministic tool execution and self-healing multi-agent swarms',
        'Formal verification against prompt-injection and training-set contamination',
      ],
      flagshipCourseId: 'CRS001',
    },
    {
      index: '02',
      title: 'Distributed Cloud Architecture & Sovereign Resiliency',
      careerDomain: 'Cloud Architect' as CareerDomain,
      editorialHeadline: 'Zero Single Point of Failure: Surviving Datacenter Annihilation',
      duration: '16 – 24 Weeks (420 Hours)',
      pace: 'Executive Hybrid / Weekend Sprint',
      skills: ['AWS Solutions Architecture', 'Kubernetes Core', 'Terraform / Pulumi', 'eBPF / Cilium', 'ArgoCD', 'CockroachDB Raft'],
      certifications: 'AWS Solutions Architect Professional, CNCF Certified Kubernetes Security Specialist (CKS)',
      outcomes: 'Principal Cloud Architect, Staff Platform Engineer, Enterprise SRE Lead',
      curriculumHighlights: [
        'Multi-region active-active VPC peering with automated BGP convergence',
        'eBPF kernel-level packet telemetry and micro-segmentation with Cilium',
        'MAS Technology Risk Management (TRM) compliant air-gapped sovereign landing zones',
        'Chaos engineering drills: surviving split-brain consensus without transaction rollback',
      ],
      flagshipCourseId: 'CRS003',
    },
    {
      index: '03',
      title: 'Critical Infrastructure Cyber Defense & Red Team Range',
      careerDomain: 'Cybersecurity Specialist' as CareerDomain,
      editorialHeadline: 'Offensive Exploitation & Nation-State Threat Neutralization',
      duration: '20 – 24 Weeks (500 Hours)',
      pace: 'Air-Gapped Range Immersion',
      skills: ['Burp Suite Pro', 'Cobalt Strike', 'BloodHound', 'Ghidra Reverse Engineering', 'eBPF Falco', 'Memory Forensics'],
      certifications: 'Offensive Security Certified Professional (OSCP+), Singapore Cyber Security Agency (CSA) Endorsed',
      outcomes: 'Senior Red Team Operator, Critical Infrastructure CISO, Malware Analyst',
      curriculumHighlights: [
        'Decompiling stripped binaries in Ghidra to pinpoint zero-day heap overflows',
        'Automated Active Directory domain dominance and Kerberos attack chains',
        'Defending industrial SCADA and smart-port communication protocols',
        'Memory analysis with Volatility 3 to extract fileless in-memory beacons',
      ],
      flagshipCourseId: 'CRS004',
    },
    {
      index: '04',
      title: 'Quantitative Data Systems & Financial Econometrics',
      careerDomain: 'Data Analyst' as CareerDomain,
      editorialHeadline: 'Micro-Signals & Causality: Constructing High-Throughput Alpha Pipelines',
      duration: '16 – 20 Weeks (380 Hours)',
      pace: 'Executive Evening / Modular Stack',
      skills: ['DuckDB', 'dbt Core', 'Snowflake', 'Python Polars', 'Causal Impact', 'Apache Flink', 'Kepler.gl Geospatial'],
      certifications: 'IBF Advanced Specialist in Algorithmic Systems & Financial Econometrics',
      outcomes: 'Lead Quantitative Analyst, Financial Data Platform Architect, Risk Analytics Director',
      curriculumHighlights: [
        'Replacing sluggish pandas pipelines with vectorized DuckDB and Polars compute engines',
        'Synthetic counterfactual modeling and Bayesian structural time-series',
        'Streaming tick-by-tick anomaly identification with Apache Flink and ClickHouse',
        'Modern data stack CI/CD with automated schema regression testing in dbt',
      ],
      flagshipCourseId: 'CRS002',
    },
    {
      index: '05',
      title: 'High-Performance Distributed Systems & Full-Stack Craft',
      careerDomain: 'Full Stack Developer' as CareerDomain,
      editorialHeadline: 'From Silicon to Browser: React 19, Rust WebAssembly & CRDTs',
      duration: '16 – 24 Weeks (450 Hours)',
      pace: 'Full-Time Bootcamp / Co-Op Residency',
      skills: ['Next.js 15 App Router', 'React 19', 'TypeScript', 'Rust', 'Go gRPC', 'Postgres Internals', 'CRDTs & Yjs'],
      certifications: 'Open Source Systems Guild Senior Fellow & Rust Systems Engineering Credential',
      outcomes: 'Staff Distributed Systems Engineer, Principal Full-Stack Architect, Tech Founder',
      curriculumHighlights: [
        'Multiplayer collaborative canvas powered by Conflict-Free Replicated Data Types',
        'Compiling high-performance computational math to client-side WebAssembly via Rust',
        'Postgres write-ahead log (WAL) inspection and low-latency logical replication',
        'Next.js 15 Server Components, streaming SSR, and edge hydration optimizations',
      ],
      flagshipCourseId: 'CRS005',
    },
    {
      index: '06',
      title: 'Design Systems Engineering & Human-Computer Ergonomics',
      careerDomain: 'Product Designer' as CareerDomain,
      editorialHeadline: 'Mathematical Aesthetics: Where Swiss Typography Meets Production React',
      duration: '16 – 20 Weeks (360 Hours)',
      pace: 'Atelier Studio / Hybrid',
      skills: ['Figma API Automation', 'Design Tokens', 'Style Dictionary', 'GSAP & Framer Motion', 'WCAG 2.2 AAA', 'Storybook'],
      certifications: 'Design Systems Consortium Staff Architect Credential & Nielsen Norman Master Certified',
      outcomes: 'Staff Design Systems Architect, Design Technologist Lead, Head of Product Design',
      curriculumHighlights: [
        'Automating multi-brand design tokens from Figma REST API directly to Tailwind CSS',
        'Ergonomics of probabilistic AI interfaces, streaming state transitions, and copilots',
        'Swiss typography scale mathematics and baseline grid alignment in CSS',
        'Micro-interactions and physics-based motion choreography with GSAP & Framer Motion',
      ],
      flagshipCourseId: 'CRS006',
    },
  ];

  return (
    <section id="learning-tracks" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            03 / Strategic Architectures
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Learning Tracks & Pathways
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Editorial pathway blueprints. No random courses; only unified, high-conviction engineering tracks.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-500">
          6 Specialized Pathways &bull; 120 Total Modules
        </div>
      </div>

      {/* Pathway Layout System (Editorial Accordion / Stack) */}
      <div className="space-y-4">
        {pathways.map((pw, idx) => {
          const isOpen = activePathway === idx;
          const matchedCourse = enrichedCourses.find((c) => c.id === pw.flagshipCourseId) || enrichedCourses[0];

          return (
            <div
              key={pw.index}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white border-neutral-400 shadow-xl'
                  : 'bg-white/60 hover:bg-white border-neutral-200/80 hover:border-neutral-300'
              }`}
            >
              {/* Pathway Header Row */}
              <button
                onClick={() => setActivePathway(isOpen ? -1 : idx)}
                className="w-full p-6 sm:p-8 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-400 w-8">
                    {pw.index}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-lg sm:text-2xl text-[#0B132B]">
                      {pw.title}
                    </h3>
                    <p className="font-editorial italic text-sm sm:text-base text-neutral-500 mt-0.5 hidden sm:block">
                      {pw.editorialHeadline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-8 shrink-0">
                  <div className="hidden md:flex flex-col text-right">
                    <span className="text-xs font-mono text-neutral-400">Duration</span>
                    <span className="text-xs font-semibold text-neutral-800">{pw.duration.split(' ')[0]} Wks</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-neutral-200 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0B132B] text-white' : 'bg-neutral-50 text-neutral-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expanded Pathway Specification */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="border-t border-neutral-100"
                  >
                    <div className="p-6 sm:p-8 sm:pt-6 space-y-8">
                      {/* Pathway Pillars */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                            Duration & Pace
                          </div>
                          <div className="font-heading font-semibold text-sm text-[#0B132B]">
                            {pw.duration}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5">{pw.pace}</div>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                            Skills Mastered
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {pw.skills.slice(0, 4).map((s) => (
                              <span key={s} className="text-[10px] font-mono px-2 py-0.5 bg-white border border-neutral-200 rounded text-neutral-700">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                            Accredited Credential
                          </div>
                          <div className="text-xs font-medium text-[#0B132B] leading-snug">
                            {pw.certifications}
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                            Career Outcomes
                          </div>
                          <div className="text-xs font-semibold text-emerald-700 leading-snug">
                            {pw.outcomes}
                          </div>
                        </div>
                      </div>

                      {/* Editorial Deep Dive & Capstone Rigor */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8">
                          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-neutral-400 mb-3">
                            Production Crucible Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {pw.curriculumHighlights.map((hl, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed bg-white p-3 rounded-xl border border-neutral-100">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-[#0B132B] text-white">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                              Flagship Module
                            </span>
                            <h5 className="font-heading font-semibold text-base mt-1 mb-2">
                              {matchedCourse.cleanTitle}
                            </h5>
                            <p className="text-xs text-neutral-300 line-clamp-2">
                              {matchedCourse.summary}
                            </p>
                          </div>
                          <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                            <button
                              onClick={() => {
                                onSelectCareer(pw.careerDomain);
                                onSelectCourse(matchedCourse);
                              }}
                              className="text-xs font-medium text-emerald-400 hover:text-white flex items-center gap-1 transition-colors"
                            >
                              <span>Explore Full Syllabus</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-mono text-neutral-400">
                              SGD ${matchedCourse.subsidizedFeeSGD.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
