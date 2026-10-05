export interface RawCampus {
  id: string;
  name: string;
}

export interface RawCourse {
  id: string;
  title: string;
  fees_sgd: number;
}

export interface RawTrainer {
  id: string;
  name: string;
}

export interface RawCertification {
  id: string;
  name: string;
}

export interface RawLearningFormat {
  id: string;
  name: string;
}

export interface RawTrialClass {
  id: string;
  name: string;
}

export interface RawSchedule {
  id: string;
}

export interface RawAdmission {
  id: string;
}

export interface RawEligibility {
  id: string;
}

export interface RawFeeStructure {
  id: string;
}

export interface RawReview {
  id: string;
  rating: number;
}

export interface RawSuccessStory {
  id: string;
}

export interface RawDataset {
  brand: {
    name: string;
  };
  campuses: RawCampus[];
  courses: RawCourse[];
  trainers: RawTrainer[];
  certifications: RawCertification[];
  learning_formats: RawLearningFormat[];
  trial_classes: RawTrialClass[];
  schedules: RawSchedule[];
  admissions: RawAdmission[];
  eligibility_requirements: RawEligibility[];
  fee_structures: RawFeeStructure[];
  student_reviews: RawReview[];
  success_stories: RawSuccessStory[];
}

// Enriched domain types
export type CareerDomain =
  | 'AI Engineer'
  | 'Data Analyst'
  | 'Cloud Architect'
  | 'Cybersecurity Specialist'
  | 'Product Designer'
  | 'Full Stack Developer';

export type CategoryFilter =
  | 'All'
  | 'AI'
  | 'Analytics'
  | 'Cybersecurity'
  | 'Cloud'
  | 'Development'
  | 'Design';

export interface EnrichedCourse extends RawCourse {
  cleanTitle: string;
  category: CategoryFilter;
  level: 'Foundational' | 'Accelerated' | 'Advanced' | 'Executive Mastery';
  durationWeeks: number;
  durationLabel: string;
  pacing: string;
  subsidizedFeeSGD: number;
  subsidyRate: string;
  summary: string;
  curriculum: string[];
  skills: string[];
  trainerId: string;
  trainerName: string;
  certificationId: string;
  certificationName: string;
  scheduleId: string;
  intakeMonth: string;
  formatId: string;
  campusId: string;
  featured?: boolean;
}

export interface EnrichedCampus extends RawCampus {
  locationName: string;
  district: string;
  address: string;
  mrt: string;
  focus: string;
  description: string;
  facilities: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface EnrichedTrainer extends RawTrainer {
  fullName: string;
  role: string;
  formerCompany: string;
  experienceYears: number;
  specialization: string;
  bio: string;
  philosophy: string;
  notableAchievement: string;
  avatar: string;
  linkedCourseCount: number;
}

export interface EnrichedCertification extends RawCertification {
  officialTitle: string;
  authority: string;
  level: string;
  validity: string;
  examFormat: string;
  recognitionScore: number;
  prerequisites: string;
  skillsVerified: string[];
  salaryImpact: string;
}

export interface EnrichedLearningFormat extends RawLearningFormat {
  formatTitle: string;
  commitment: string;
  schedulePattern: string;
  idealFor: string;
  description: string;
  deliveryMethod: string;
  highlightTag: string;
  iconName: string;
}

export interface EnrichedTrialClass extends RawTrialClass {
  classTitle: string;
  category: CategoryFilter;
  instructorName: string;
  campusName: string;
  campusId: string;
  scheduleDate: string;
  timeSlot: string;
  format: 'In-Person Lab' | 'Live Interactive Studio' | 'Hybrid';
  seatsRemaining: number;
  status: 'Open' | 'Filling Fast' | 'Final Seats';
  keyTakeaways: string[];
}

export interface EnrichedSuccessStory extends RawSuccessStory {
  personName: string;
  previousRole: string;
  previousCompany: string;
  newRole: string;
  newCompany: string;
  salaryGrowthPercent: number;
  timeToTransition: string;
  quote: string;
  storyNarrative: string;
  capstoneProject: string;
  track: CareerDomain;
  avatar: string;
}

export interface EnrichedReview extends RawReview {
  authorName: string;
  currentDesignation: string;
  company: string;
  courseTitle: string;
  quote: string;
  date: string;
  verified: boolean;
  highlight: string;
}

export interface EnrichedAdmissionStep {
  stepNumber: number;
  code: string;
  title: string;
  timeline: string;
  overview: string;
  deliverables: string[];
  acceptanceRateNote: string;
  actionCta: string;
}

export interface CareerJourneyPath {
  career: CareerDomain;
  tagline: string;
  averageSalarySG: string;
  growthRate: string;
  currentSkillLevels: {
    level: string;
    description: string;
    coursesRecommended: string[];
    estimatedTimeline: string;
  }[];
  primaryTrack: string;
  coreSkills: string[];
  capstoneProject: {
    title: string;
    description: string;
    industryPartners: string[];
  };
  outcomeRole: string;
}
