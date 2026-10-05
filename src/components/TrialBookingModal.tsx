'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnrichedTrialClass } from '@/lib/types';
import { enrichedTrialClasses, enrichedCampuses } from '@/lib/dataset-loader';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Ticket,
} from 'lucide-react';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClass?: EnrichedTrialClass | null;
}

export default function TrialBookingModal({
  isOpen,
  onClose,
  initialClass,
}: TrialBookingModalProps) {
  const [selectedClassId, setSelectedClassId] = useState<string>(
    initialClass?.id || enrichedTrialClasses[0]?.id || ''
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialClass) {
      setSelectedClassId(initialClass.id);
    }
  }, [initialClass]);

  const currentClass =
    enrichedTrialClasses.find((c) => c.id === selectedClassId) ||
    initialClass ||
    enrichedTrialClasses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSuccess(true);
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0B132B', '#3A86FF', '#06D6A0', '#FAF9F7'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 pb-4 border-b border-neutral-100">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Live Interactive Crucible
            </span>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#0B132B]">
              Book A Complimentary Trial Class
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
          /* Confirmation Pass Screen */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold">
                Seat Confirmed &bull; Access Pass Issued
              </span>
              <h4 className="font-heading font-bold text-2xl text-[#0B132B] mt-1">
                You&apos;re Booked, {name.split(' ')[0]}!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-md mx-auto">
                We have reserved your workstation for{' '}
                <strong className="text-neutral-800">{currentClass.classTitle}</strong>. Calendar invite and campus pass dispatched to <span className="text-blue-600">{email}</span>.
              </p>
            </div>

            {/* Boarding Pass Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-left space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>PASS ID: CF-TRIAL-{currentClass.id}</span>
                <span className="text-emerald-700 font-semibold">NO FEE &bull; SG CITIZEN / PR</span>
              </div>
              <div className="font-heading font-semibold text-base text-[#0B132B]">
                {currentClass.classTitle}
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-600 pt-2 border-t border-neutral-200/60">
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Date</span>
                  <span className="font-medium text-neutral-800">{currentClass.scheduleDate}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Time</span>
                  <span className="font-medium text-neutral-800">{currentClass.timeSlot}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Campus</span>
                  <span className="font-medium text-neutral-800">{currentClass.campusName}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full bg-[#0B132B] text-white py-3.5 rounded-full font-medium text-xs hover:bg-[#1C2541] transition-colors"
            >
              Done &bull; Return to Platform
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Select Trial Class Dropdown */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                Select Masterclass Topic ({enrichedTrialClasses.length} Available)
              </label>
              <select
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-50 border border-neutral-300 text-xs font-sans text-neutral-800 focus:outline-none focus:border-[#0B132B]"
              >
                {enrichedTrialClasses.slice(0, 10).map((tc) => (
                  <option key={tc.id} value={tc.id}>
                    {tc.id} &bull; {tc.classTitle} ({tc.seatsRemaining} seats left)
                  </option>
                ))}
              </select>
            </div>

            {/* Class Details Snapshot */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-medium text-neutral-800">{currentClass.scheduleDate}</span>
                <span className="text-neutral-400">&bull;</span>
                <span>{currentClass.timeSlot}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>{currentClass.campusName} &bull; {currentClass.format}</span>
              </div>
            </div>

            {/* Attendee Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kenneth Tan"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-[#0B132B]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                  Corporate / Personal Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. kenneth.tan@enterprise.sg"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-[#0B132B]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                  Mobile Number (For Singapore SMS Pass)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+65 9123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-800 focus:outline-none focus:border-[#0B132B]"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0B132B] text-white py-3.5 rounded-full font-medium text-xs hover:bg-[#1C2541] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Confirm Workstation Reservation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-center text-neutral-400">
              Zero credit card required. Certified under Singapore Private Education Act.
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
