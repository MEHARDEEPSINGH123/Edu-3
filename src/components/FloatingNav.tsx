'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Compass,
  GraduationCap,
  Layers,
  MapPin,
  TrendingUp,
  PhoneCall,
  Menu,
  X,
  ArrowUpRight,
  ShieldCheck,
  Search,
} from 'lucide-react';

interface FloatingNavProps {
  onOpenTrialModal: () => void;
  onOpenSearch: () => void;
}

export default function FloatingNav({ onOpenTrialModal, onOpenSearch }: FloatingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('explore');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Section tracking
      const sections = ['explore', 'programs', 'learning', 'admissions', 'careers', 'campuses'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Explore', href: '#career-destination', id: 'explore' },
    { label: 'Programs', href: '#course-discovery', id: 'programs' },
    { label: 'Learning', href: '#learning-formats', id: 'learning' },
    { label: 'Admissions', href: '#admissions-studio', id: 'admissions' },
    { label: 'Careers', href: '#career-outcomes', id: 'careers' },
    { label: 'Campuses', href: '#campus-experience', id: 'campuses' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-500">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full ${
            scrolled
              ? 'glass-nav py-2.5 px-4 sm:px-6 shadow-[0_8px_32px_rgba(11,19,43,0.08)] border border-[#E5E7EB]/80 max-w-5xl w-full'
              : 'bg-transparent py-3 px-3 sm:px-6 max-w-6xl w-full border border-transparent'
          }`}
        >
          {/* Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0B132B] text-white flex items-center justify-center font-heading font-semibold text-sm tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105">
              CF
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-[#0B132B] flex items-center gap-1.5">
                CodeForge <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/50">SG</span>
              </span>
              <span className="text-[10px] tracking-wide text-neutral-500 font-sans hidden sm:block">
                Institute of Advanced Systems
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-sans font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0B132B] font-semibold'
                      : 'text-neutral-600 hover:text-[#0B132B] hover:bg-neutral-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-neutral-200/50 -z-10 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              title="Search programs, faculty & campuses"
              className="p-2 text-neutral-600 hover:text-[#0B132B] hover:bg-neutral-100 rounded-full transition-colors hidden sm:flex items-center justify-center"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Trial Class CTA */}
            <button
              onClick={onOpenTrialModal}
              className="relative group overflow-hidden bg-[#0B132B] text-white text-xs sm:text-sm font-sans font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 hover:bg-[#1C2541] shadow-sm hover:shadow-md flex items-center gap-1.5"
            >
              <span className="relative z-10">Book Trial</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-neutral-200 md:hidden flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Navigation</span>
              <button
                onClick={onOpenSearch}
                className="text-xs text-blue-600 font-medium flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" /> Quick Search
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-neutral-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full bg-[#0B132B] text-white py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
              >
                <span>Book A Trial Class (Free)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
