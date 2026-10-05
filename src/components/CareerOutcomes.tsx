'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CareerDomain } from '@/lib/types';
import {
  Briefcase,
  CheckCircle2,
  FolderGit2,
  Award,
  Milestone,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface CareerOutcomesProps {
  onOpenAdmissions: () => void;
}

export default function CareerOutcomes({ onOpenAdmissions }: CareerOutcomesProps) {
  const [selectedRole, setSelectedRole] = useState<CareerDomain>('AI Engineer');

  const outcomesData: Record<
    CareerDomain,
    {
      role: string;
      level: string;
      careerPathTrajectory: { title: string; timeline: string; focus: string }[];
      skillsAcquired: string[];
      projectsCompleted: { name: string; tech: string; description: string }[];
      certificationsEarned: string[];
      singaporeEmployers: string[];
    }
  > = {
    'AI Engineer': {
      role: 'Senior AI & Machine Learning Infrastructure Architect',
      level: 'Lead / Staff Level',
      careerPathTrajectory: [
        { title: 'Baseline Software Engineer', timeline: 'Year 0', focus: 'Standard application coding, REST APIs' },
        { title: 'CodeForge Autonomous AI Fellow', timeline: 'Months 1-5', focus: 'CUDA kernels, vLLM distributed, agentic consensus' },
        { title: 'Senior AI Engineer at Tier-1 Firm', timeline: 'Post-Graduation', focus: 'Leading LLM infrastructure, GPU clusters, model evaluation' },
        { title: 'Principal AI Scientist / Head of AI', timeline: 'Year 3+', focus: 'Enterprise cognitive architecture, algorithmic strategy' },
      ],
      skillsAcquired: ['CUDA C++ Kernel Writing', 'PyTorch 2.0 Autograd', 'Distributed vLLM Inference', 'LangGraph Multi-Agent Swarms', 'Slurm / Kubernetes GPU Schedulers', 'Triton Server'],
      projectsCompleted: [
        {
          name: 'Distributed Low-Latency LLM Serving Proxy',
          tech: 'vLLM, Ray, Triton, C++',
          description: 'Achieved sub-20ms first-token latency on 8x H100 GPU cluster with dynamic request batching.',
        },
        {
          name: 'Multi-Agent Regulatory Compliance Engine',
          tech: 'LangGraph, Qdrant, Python',
          description: 'Autonomous multi-step audit agent synthesizing 500+ pages of MAS compliance circulars with zero hallucination.',
        },
      ],
      certificationsEarned: [
        'SG Specialist Diploma in Autonomous AI Architecture (SSG Level 6)',
        'NVIDIA Certified Associate: Generative AI Infrastructure',
      ],
      singaporeEmployers: ['GovTech Singapore', 'Sea Group', 'Grab AI', 'A*STAR', 'Standard Chartered'],
    },
    'Cloud Architect': {
      role: 'Principal Cloud & Zero-Trust Infrastructure Architect',
      level: 'Principal / Fellow Level',
      careerPathTrajectory: [
        { title: 'Systems Admin / DevOps Engineer', timeline: 'Year 0', focus: 'Manual server configuration, virtual machines' },
        { title: 'CodeForge Cloud Architecture Fellow', timeline: 'Months 1-5', focus: 'eBPF networking, multi-region failover, Kubernetes internals' },
        { title: 'Principal Cloud Architect', timeline: 'Post-Graduation', focus: 'Directing multi-cloud sovereignty, disaster recovery' },
        { title: 'Enterprise Chief Technology Officer', timeline: 'Year 3+', focus: 'Multi-million cloud budgets, sovereign security architecture' },
      ],
      skillsAcquired: ['Multi-Region AWS Topologies', 'Kubernetes Core Internals', 'eBPF Kernel Telemetry (Cilium)', 'Terraform & Crossplane GitOps', 'CockroachDB Raft Quorum', 'MAS TRM Compliance'],
      projectsCompleted: [
        {
          name: 'Active-Active Multi-Region Sovereign Banking Mesh',
          tech: 'AWS, Kubernetes, Cilium, CockroachDB',
          description: 'Designed multi-cloud active-active failover sustaining continuous 25,000 tx/sec under simulated datacenter severance.',
        },
        {
          name: 'Automated Ephemeral Developer Infrastructure Fabric',
          tech: 'ArgoCD, Pulumi, GitHub Actions',
          description: 'Reduced developer onboarding and branch testing spinning time from 4 days to 90 seconds.',
        },
      ],
      certificationsEarned: [
        'AWS Certified Solutions Architect – Professional (APAC Tier-1)',
        'CNCF Certified Kubernetes Security Specialist (CKS)',
      ],
      singaporeEmployers: ['DBS Bank', 'Stripe Singapore', 'AWS APAC', 'Singtel Digital Infra', 'Shopee Core'],
    },
    'Cybersecurity Specialist': {
      role: 'Senior Offensive Security Operator & Red Team Lead',
      level: 'Lead Operator Level',
      careerPathTrajectory: [
        { title: 'IT Support / SOC Level 1 Analyst', timeline: 'Year 0', focus: 'Handling basic alerts, antivirus updates' },
        { title: 'CodeForge Cyber Defense Fellow', timeline: 'Months 1-6', focus: 'Air-gapped cyber ranges, binary reversing, Active Directory attack paths' },
        { title: 'Senior Red Team Operator', timeline: 'Post-Graduation', focus: 'Simulating nation-state threats, defensive posture audits' },
        { title: 'Chief Information Security Officer (CISO)', timeline: 'Year 3+', focus: 'National CII security, board-level cyber defense strategy' },
      ],
      skillsAcquired: ['Ghidra Binary Reversing', 'Active Directory BloodHound Attack Paths', 'Cobalt Strike Red Teaming', 'eBPF Falco Detection', 'OT/SCADA Protocol Defense', 'Memory Forensics (Volatility)'],
      projectsCompleted: [
        {
          name: 'Automated Active Directory Domain Dominance Emulation',
          tech: 'BloodHound, Python, C#',
          description: 'Constructed an automated lateral movement tool testing hybrid Entra ID misconfigurations in enterprise domains.',
        },
        {
          name: 'Air-Gapped Maritime Port SCADA Cyber Range Defense',
          tech: 'Modbus, Wireshark, Suricata',
          description: 'Successfully intercepted and mitigated malicious logic controller injection attacking container crane telemetry.',
        },
      ],
      certificationsEarned: [
        'Offensive Security Certified Professional (OSCP+)',
        'Certified Information Systems Security Professional (CISSP SG)',
      ],
      singaporeEmployers: ['CSIT Singapore', 'Standard Chartered Cyber Hub', 'ST Engineering', 'GovTech Cyber', 'DBS Cyber Defense'],
    },
    'Data Analyst': {
      role: 'Staff Quantitative Data Solutions Lead',
      level: 'Lead / Staff Level',
      careerPathTrajectory: [
        { title: 'Business Analyst / Excel Modeler', timeline: 'Year 0', focus: 'Static reporting, spreadsheet pivot tables' },
        { title: 'CodeForge Quantitative Fellow', timeline: 'Months 1-5', focus: 'Polars, DuckDB, causal inference, dbt analytics engineering' },
        { title: 'Staff Data Solutions Lead', timeline: 'Post-Graduation', focus: 'Architecting enterprise data warehouse, automated causal testing' },
        { title: 'Head of Data & Analytics Platform', timeline: 'Year 3+', focus: 'Company-wide data strategy, algorithmic forecasting' },
      ],
      skillsAcquired: ['DuckDB Vectorized Compute', 'Python Polars', 'dbt Core Transformations', 'Causal Impact & Counterfactuals', 'Apache Flink Streaming', 'Geospatial Deck.gl'],
      projectsCompleted: [
        {
          name: 'Real-Time Maritime Vessel Congestion & Berthing Optimization',
          tech: 'DuckDB, Polars, Kepler.gl, Python',
          description: 'Analyzed 40M real-time AIS geospatial pings to predict terminal queue times with 94.2% accuracy.',
        },
        {
          name: 'Bayesian Experimentation Platform with Causal Inference',
          tech: 'dbt, Snowflake, DoWhy, Streamlit',
          description: 'Automated A/B test counterfactual analysis for a fintech checkout flow eliminating false-positive conversions.',
        },
      ],
      certificationsEarned: [
        'IBF Advanced Specialist in Algorithmic Systems & Financial Econometrics',
        'dbt Certified Analytics Engineer',
      ],
      singaporeEmployers: ['PSA International', 'DBS Treasury', 'Grab Financial', 'Shopee Analytics', 'Enterprise Singapore'],
    },
    'Product Designer': {
      role: 'Staff Product Systems Architect & Design Engineer',
      level: 'Staff / Principal Level',
      careerPathTrajectory: [
        { title: 'Junior UI / Visual Designer', timeline: 'Year 0', focus: 'Figma mockups, graphic assets' },
        { title: 'CodeForge Design Systems Fellow', timeline: 'Months 1-5', focus: 'Design tokens, Figma REST API, React 19 component architecture' },
        { title: 'Staff Design Systems Architect', timeline: 'Post-Graduation', focus: 'Multi-brand design systems, token CI/CD pipelines' },
        { title: 'VP of Product Design / Design Ops', timeline: 'Year 3+', focus: 'Cross-functional engineering & design leadership' },
      ],
      skillsAcquired: ['Figma REST API Automation', 'Design Tokens (Style Dictionary)', 'WCAG 2.2 AAA Accessibility', 'GSAP & Framer Motion', 'React 19 Server Components', 'Typography Grid Mathematics'],
      projectsCompleted: [
        {
          name: 'Multi-Theme Automated Design Token Sync Pipeline',
          tech: 'Figma API, Style Dictionary, GitHub Actions, Tailwind',
          description: 'Engineered a zero-touch pipeline converting Figma variables into production CSS tokens across 4 mobile & web apps.',
        },
        {
          name: 'AI Copilot Non-Deterministic Interface System',
          tech: 'React 19, Framer Motion, TypeScript',
          description: 'Created a comprehensive micro-interaction design system handling streaming tokens, confidence states, and human-in-the-loop overrides.',
        },
      ],
      certificationsEarned: [
        'Design Systems Consortium Staff Architect Credential',
        'Nielsen Norman Group UX Master Certified',
      ],
      singaporeEmployers: ['Grab Design', 'Carousell', 'GovTech OGP', 'Lazada Design Studio', 'Stripe APAC'],
    },
    'Full Stack Developer': {
      role: 'Staff Distributed Systems Engineer & Full-Stack Lead',
      level: 'Staff / Principal Level',
      careerPathTrajectory: [
        { title: 'Junior Frontend / Backend Developer', timeline: 'Year 0', focus: 'Basic CRUD applications, CSS styling' },
        { title: 'CodeForge Distributed Systems Fellow', timeline: 'Months 1-5', focus: 'Rust WebAssembly, Next.js 15 App Router, CRDTs, Postgres internals' },
        { title: 'Staff Distributed Systems Engineer', timeline: 'Post-Graduation', focus: 'Low-latency collaborative platforms, event brokers' },
        { title: 'Chief Architect / Engineering Director', timeline: 'Year 3+', focus: 'Guiding whole architecture stack and engineering standards' },
      ],
      skillsAcquired: ['Next.js 15 App Router', 'React 19 Internals', 'Rust WebAssembly', 'CRDTs & Real-Time Yjs', 'Postgres WAL Internals', 'Go gRPC Microservices'],
      projectsCompleted: [
        {
          name: 'High-Concurrency Multiplayer Collaborative Canvas',
          tech: 'Rust WASM, Yjs, WebSockets, Next.js 15',
          description: 'Engineered zero-conflict real-time collaborative workspace supporting 20 simultaneous editors with sub-10ms render updates.',
        },
        {
          name: 'Distributed Double-Entry Financial Ledger',
          tech: 'Go, PostgreSQL, Redis, Docker',
          description: 'Built ACID-compliant high-throughput ledger processing 10,000 ledger balance mutations per second with automated audit trail.',
        },
      ],
      certificationsEarned: [
        'Open Source Systems Guild Senior Fellow Credential',
        'Rust Foundation Systems Programmer Certificate',
      ],
      singaporeEmployers: ['ByteDance APAC', 'Shopee Core Engineering', 'Grab Tech', 'GovTech SG', 'Airwallex'],
    },
  };

  const current = outcomesData[selectedRole];

  return (
    <section id="career-outcomes" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            12 / Verifiable Impact
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Career Outcomes Portfolio
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            No empty statistics or vanity counters. Explicit breakdown of roles, skills, projects, and career trajectories.
          </p>
        </div>
      </div>

      {/* Role Navigation Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {(Object.keys(outcomesData) as CareerDomain[]).map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-4 py-2.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedRole === role
                ? 'bg-[#0B132B] text-white shadow-sm'
                : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Outcome Specification Card */}
      <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm space-y-12">
        {/* Role Headline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-neutral-100 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-600 mb-1">
              Destination Benchmark Role &bull; {current.level}
            </div>
            <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-[#0B132B]">
              {current.role}
            </h3>
          </div>
          <div className="text-xs font-mono text-neutral-500 bg-neutral-50 px-4 py-2 rounded-2xl border border-neutral-100 shrink-0">
            Hiring Partners: {current.singaporeEmployers.slice(0, 3).join(', ')}
          </div>
        </div>

        {/* Career Path Progression Trajectory */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
            <Milestone className="w-4 h-4 text-blue-600" /> Career Path Progression Trajectory
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {current.careerPathTrajectory.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                    <span>Phase 0{idx + 1}</span>
                    <span className="font-bold text-[#0B132B]">{step.timeline}</span>
                  </div>
                  <h5 className="font-heading font-semibold text-sm sm:text-base text-[#0B132B] mb-2 leading-snug">
                    {step.title}
                  </h5>
                </div>
                <p className="text-xs text-neutral-500 pt-3 border-t border-neutral-200/60 leading-relaxed">
                  {step.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Grid: Skills Acquired & Projects Completed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills Acquired (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Concrete Skills Acquired
            </h4>
            <div className="space-y-2">
              {current.skillsAcquired.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-medium text-neutral-800 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-600" /> Certifications Earned
              </h5>
              <div className="space-y-1.5">
                {current.certificationsEarned.map((c, cIdx) => (
                  <div key={cIdx} className="text-xs font-medium text-[#0B132B]">
                    &bull; {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Completed (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-blue-600" /> Production Projects Completed
            </h4>
            <div className="space-y-4">
              {current.projectsCompleted.map((project, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1.5">
                      <span>Project 0{pIdx + 1}</span>
                      <span className="text-blue-600 font-sans font-medium">{project.tech}</span>
                    </div>
                    <h5 className="font-heading font-semibold text-base text-[#0B132B] mb-2">
                      {project.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-neutral-500">
            Graduates gain lifelong access to CodeForge Alumni Guild and private CTO office hours.
          </div>
          <button
            onClick={onOpenAdmissions}
            className="bg-[#0B132B] text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-[#1C2541] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Target This Career Outcome</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
