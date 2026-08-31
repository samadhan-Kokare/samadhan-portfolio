export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: { text: string; metric?: string }[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'cloudrevel',
    role: 'Software Engineer',
    company: 'Cloudrevel Innovation Pvt Ltd',
    location: 'Chennai',
    period: 'March 2025 — Present',
    current: true,
    bullets: [
      {
        text: 'Architected Next.js (SSR/SSG) frontend modules for a full-scale ATS platform, improving initial page load performance and SEO visibility across active job requisitions.',
        metric: '500+ requisitions',
      },
      {
        text: 'Built recruiter dashboards, multi-stage candidate pipelines, and role-based interview workflows, consolidating the entire hiring lifecycle into one UI.',
      },
      {
        text: 'Integrated React Query for API caching, background refetching, and optimistic updates, cutting redundant network requests and standardising error state handling across the platform.',
        metric: '~40% fewer requests',
      },
      {
        text: 'Designed dynamic forms with 30+ conditional fields, multi-step validation, and real-time state sync — handling complex recruiter inputs without performance degradation.',
        metric: '30+ conditional fields',
      },
      {
        text: 'Applied React.memo, useMemo, and useCallback to eliminate unnecessary re-renders in data-heavy dashboard components; used lazy loading and dynamic imports to reduce JS bundle size.',
      },
    ],
  },
  {
    id: 'tcs',
    role: 'System Engineer',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Mumbai',
    period: 'March 2022 — January 2025',
    bullets: [
      {
        text: 'Automated UI-driven workflows for enterprise clients, contributing to a measurable increase in operational efficiency validated across sprint reviews and stakeholder sign-offs.',
        metric: '30% efficiency gain',
      },
      {
        text: 'Developed and maintained large-scale React.js applications with Redux Toolkit, handling async workflows and structured global state across multi-module projects over 6+ release cycles.',
        metric: '6+ release cycles',
      },
      {
        text: 'Built reusable component libraries that reduced code duplication, cutting new-feature development time and accelerating team onboarding.',
        metric: '~35% less duplication',
      },
      {
        text: 'Optimized React rendering performance by refactoring inefficient component trees, introducing memoisation patterns, and improving load times across critical user journeys.',
      },
    ],
  },
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  school: "KIT's Autonomous College of Engineering, Kolhapur",
  period: 'June 2021',
};

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  bullets: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 'myrecruit',
    title: 'MyRecruit - Applicant Tracking System (ATS)',
    period: '2025 - Present',
    description:
      'Enterprise recruitment platform that streamlines hiring by managing job postings, candidates, interview workflows, and recruiter operations in a single application.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Ant Design',
      'React Query',
      'Tailwind CSS',
      'REST APIs',
    ],
    bullets: [
      'Built recruiter dashboards and candidate management modules for end-to-end hiring workflows.',
      'Developed job posting, candidate tracking, interview scheduling, and hiring pipeline management features.',
      'Integrated React Query for API caching, background refetching, and optimistic updates.',
      'Created dynamic forms with conditional fields, multi-step validation, and real-time state synchronization.',
      'Optimized dashboard performance using React.memo, useMemo, useCallback, lazy loading, and dynamic imports.',
      'Implemented responsive UI components using Ant Design and Tailwind CSS for a consistent recruiter experience.',
    ],
  },

  {
    id: 'mypeople',
    title: 'My People - HRMS Platform',
    period: '2025 - Present',
    description:
      'Human Resource Management System (HRMS) designed to manage the complete employee lifecycle from onboarding to exit.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Ant Design',
      'React Query',
      'Tailwind CSS',
      'REST APIs',
    ],
    bullets: [
      'Developed employee management modules for maintaining workforce records and organizational data.',
      'Built responsive HR dashboards for employee information and administrative workflows.',
      'Implemented reusable UI components and scalable frontend architecture for HR operations.',
      'Integrated backend APIs to manage employee data, workflows, and system configurations.',
      'Created form-driven workflows with validation and real-time updates for employee-related processes.',
      'Collaborated with backend and product teams to deliver production-ready HRMS features.',
    ],
  },
];