'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enrichedReviews } from '@/lib/dataset-loader';
import {
  Quote,
  Star,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function ReviewsSection() {
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

  // Take top 6 flagship reviews from 250 in the dataset
  const reviewList = enrichedReviews.slice(0, 6);
  const activeReview = reviewList[selectedReviewIndex] || reviewList[0];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            13 / Industry Attestation
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-5xl text-[#0B132B] tracking-tight mt-2">
            Reviews &amp; Editorial Voices
          </h2>
          <p className="font-editorial italic text-xl text-neutral-500 mt-2">
            Unvarnished accounts from engineers in the crucible. Verified alumni from Singapore&apos;s foremost tech employers.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-xs font-mono text-neutral-500">
          250 Verified Submissions (REV001–REV250)
        </div>
      </div>

      {/* Featured Editorial Quote Spread */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeReview.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-14 lg:p-16 mb-12 shadow-sm relative overflow-hidden"
        >
          <Quote className="w-16 h-16 text-neutral-100 absolute top-8 right-8 pointer-events-none -z-0" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                {activeReview.id} &bull; {activeReview.courseTitle}
              </span>
              <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 font-medium">
                Verified Alumnus &bull; Rating {activeReview.rating}.0/5
              </span>
            </div>

            <blockquote className="font-editorial italic text-2xl sm:text-4xl text-[#0B132B] leading-tight mb-8">
              &ldquo;{activeReview.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-neutral-100">
              <div>
                <h4 className="font-heading font-semibold text-base text-[#0B132B]">
                  {activeReview.authorName}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {activeReview.currentDesignation} &bull;{' '}
                  <span className="font-semibold text-neutral-800">{activeReview.company}</span>
                </p>
              </div>

              <div className="text-xs font-mono text-neutral-400">
                Graduated {activeReview.date} &bull; CPE Registered
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Supporting Quote Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviewList.map((rev, idx) => (
          <div
            key={rev.id}
            onClick={() => setSelectedReviewIndex(idx)}
            className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
              idx === selectedReviewIndex
                ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                <span className={idx === selectedReviewIndex ? 'text-emerald-300' : 'text-neutral-400'}>
                  {rev.id}
                </span>
                <span className={idx === selectedReviewIndex ? 'text-neutral-300' : 'text-neutral-500'}>
                  {rev.company}
                </span>
              </div>

              <p className={`font-editorial italic text-base leading-snug line-clamp-3 mb-4 ${
                idx === selectedReviewIndex ? 'text-neutral-100' : 'text-neutral-700'
              }`}>
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-100/20 text-xs flex items-center justify-between">
              <span className={`font-semibold ${idx === selectedReviewIndex ? 'text-white' : 'text-[#0B132B]'}`}>
                {rev.authorName}
              </span>
              <span className={`text-[11px] ${idx === selectedReviewIndex ? 'text-emerald-300' : 'text-blue-600'}`}>
                Read Spread &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
