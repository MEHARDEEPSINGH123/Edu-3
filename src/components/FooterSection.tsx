'use client';

import React from 'react';
import { brand, enrichedCampuses } from '@/lib/dataset-loader';
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

interface FooterSectionProps {
  onOpenAdmissions: () => void;
  onOpenTrialModal: () => void;
}

export default function FooterSection({
  onOpenAdmissions,
  onOpenTrialModal,
}: FooterSectionProps) {
  return (
    <footer className="bg-[#0B132B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Massive Editorial Headline */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              The Next Cohort Crucible
            </span>
            <h2 className="font-heading font-medium text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Ready to forge the next generation of systems?
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenTrialModal}
              className="px-6 py-4 rounded-full bg-white text-[#0B132B] text-xs font-medium hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Book Trial Class</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenAdmissions}
              className="px-6 py-4 rounded-full bg-white/10 text-white border border-white/20 text-xs font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Application</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Multi-Column Editorial Directory */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 border-b border-white/10 text-xs text-neutral-400">
          {/* Col 1: Institute */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-[#0B132B] flex items-center justify-center font-heading font-bold text-sm">
                CF
              </div>
              <span className="font-heading font-bold text-base text-white tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              {brand.manifesto}
            </p>
            <div className="pt-2 text-[11px] text-neutral-400 font-mono space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{brand.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{brand.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>{brand.contactPhone}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Pathways */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white">Pathways</h4>
            <ul className="space-y-2">
              <li><a href="#career-destination" className="hover:text-white transition-colors">AI Engineer</a></li>
              <li><a href="#career-destination" className="hover:text-white transition-colors">Cloud Architect</a></li>
              <li><a href="#career-destination" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#career-destination" className="hover:text-white transition-colors">Data Analyst</a></li>
              <li><a href="#career-destination" className="hover:text-white transition-colors">Product Designer</a></li>
              <li><a href="#career-destination" className="hover:text-white transition-colors">Full Stack Dev</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#course-discovery" className="hover:text-white transition-colors">All 120 Courses</a></li>
              <li><a href="#learning-formats" className="hover:text-white transition-colors">Learning Formats</a></li>
              <li><a href="#trial-classes" className="hover:text-white transition-colors">Trial Masterclasses</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">SSG Level 6 Certs</a></li>
              <li><a href="#admissions-studio" className="hover:text-white transition-colors">Admissions Studio</a></li>
            </ul>
          </div>

          {/* Col 4: Key Campuses */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white">Campuses</h4>
            <ul className="space-y-2">
              <li><a href="#campus-experience" className="hover:text-white transition-colors">One-North LaunchPad</a></li>
              <li><a href="#campus-experience" className="hover:text-white transition-colors">Marina Bay Tech Tower</a></li>
              <li><a href="#campus-experience" className="hover:text-white transition-colors">Jurong Innovation District</a></li>
              <li><a href="#campus-experience" className="hover:text-white transition-colors">Raffles Place Studio</a></li>
              <li><a href="#campus-experience" className="hover:text-white transition-colors">Changi CBP Cyber Range</a></li>
            </ul>
          </div>

          {/* Col 5: Governance */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white">Accreditation</h4>
            <ul className="space-y-2">
              <li className="text-neutral-400">CPE Reg: 202108920C</li>
              <li className="text-neutral-400">SkillsFuture SG Partner</li>
              <li className="text-neutral-400">IBF Financial Standards</li>
              <li className="text-neutral-400">MAS TRM Aligned</li>
              <li className="text-neutral-400">PDPA Data Compliance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Trademark & Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-neutral-500 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Committee for Private Education Registration</span>
            <span>SkillsFuture Singapore Approved Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
