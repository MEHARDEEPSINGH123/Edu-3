'use client';

import React, { useState } from 'react';
import FloatingNav from '@/components/FloatingNav';
import HeroLanding from '@/components/HeroLanding';
import CareerDestinationSelector from '@/components/CareerDestinationSelector';
import CareerJourneyBuilder from '@/components/CareerJourneyBuilder';
import LearningTracks from '@/components/LearningTracks';
import CourseDiscovery from '@/components/CourseDiscovery';
import LearningFormats from '@/components/LearningFormats';
import FacultyExpertise from '@/components/FacultyExpertise';
import TrialClassExperience from '@/components/TrialClassExperience';
import AdmissionsStudio from '@/components/AdmissionsStudio';
import CertificationEcosystem from '@/components/CertificationEcosystem';
import CampusExperience from '@/components/CampusExperience';
import SuccessStories from '@/components/SuccessStories';
import CareerOutcomes from '@/components/CareerOutcomes';
import ReviewsSection from '@/components/ReviewsSection';
import FooterSection from '@/components/FooterSection';

import TrialBookingModal from '@/components/TrialBookingModal';
import AdmissionsApplyModal from '@/components/AdmissionsApplyModal';
import CourseDetailModal from '@/components/CourseDetailModal';
import SearchCommandModal from '@/components/SearchCommandModal';

import { CareerDomain, EnrichedCourse, EnrichedTrialClass } from '@/lib/types';

export default function HomePage() {
  // Global interactive states
  const [selectedCareer, setSelectedCareer] = useState<CareerDomain>('AI Engineer');
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<EnrichedCourse | null>(null);

  // Modals state
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedTrialClass, setSelectedTrialClass] = useState<EnrichedTrialClass | null>(null);

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handlers
  const handleOpenTrialModal = (trialClass?: EnrichedTrialClass) => {
    setSelectedTrialClass(trialClass || null);
    setIsTrialModalOpen(true);
  };

  const handleOpenCourseDetail = (course: EnrichedCourse) => {
    setSelectedCourseForDetail(course);
  };

  const scrollToSelector = () => {
    const el = document.getElementById('career-destination');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative bg-[#FAF9F7] text-[#111827] overflow-x-hidden selection:bg-[#0B132B] selection:text-[#FAF9F7]">
      {/* Floating Navigation Dock */}
      <FloatingNav
        onOpenTrialModal={() => handleOpenTrialModal()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Landing Experience */}
      <HeroLanding
        onExploreClick={scrollToSelector}
        onBookTrialClick={() => handleOpenTrialModal()}
      />

      {/* SECTION 1: Career Destination Selector */}
      <CareerDestinationSelector
        selectedCareer={selectedCareer}
        onSelectCareer={setSelectedCareer}
        onSelectCourse={handleOpenCourseDetail}
      />

      {/* SECTION 2: Career Journey Builder */}
      <CareerJourneyBuilder
        selectedCareer={selectedCareer}
        onSelectCourse={handleOpenCourseDetail}
        onOpenAdmissions={() => setIsApplyModalOpen(true)}
      />

      {/* SECTION 3: Learning Tracks */}
      <LearningTracks
        onSelectCourse={handleOpenCourseDetail}
        onSelectCareer={setSelectedCareer}
      />

      {/* SECTION 4: Course Discovery */}
      <CourseDiscovery
        onSelectCourse={handleOpenCourseDetail}
      />

      {/* SECTION 5: Learning Formats */}
      <LearningFormats
        onOpenAdmissions={() => setIsApplyModalOpen(true)}
      />

      {/* SECTION 6: Faculty Expertise */}
      <FacultyExpertise />

      {/* SECTION 7: Trial Class Experience */}
      <TrialClassExperience
        onBookClass={handleOpenTrialModal}
      />

      {/* SECTION 8: Admissions Studio */}
      <AdmissionsStudio
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* SECTION 9: Certification Ecosystem */}
      <CertificationEcosystem />

      {/* SECTION 10: Campus Experience */}
      <CampusExperience />

      {/* SECTION 11: Success Stories */}
      <SuccessStories />

      {/* SECTION 12: Career Outcomes */}
      <CareerOutcomes
        onOpenAdmissions={() => setIsApplyModalOpen(true)}
      />

      {/* SECTION 13: Reviews */}
      <ReviewsSection />

      {/* Editorial Footer */}
      <FooterSection
        onOpenAdmissions={() => setIsApplyModalOpen(true)}
        onOpenTrialModal={() => handleOpenTrialModal()}
      />

      {/* Modals & Drawers */}
      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialClass={selectedTrialClass}
      />

      <AdmissionsApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        defaultDomain={selectedCareer}
      />

      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onApply={() => {
          setSelectedCourseForDetail(null);
          setIsApplyModalOpen(true);
        }}
        onBookTrial={() => {
          setSelectedCourseForDetail(null);
          handleOpenTrialModal();
        }}
      />

      <SearchCommandModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={handleOpenCourseDetail}
      />
    </main>
  );
}
