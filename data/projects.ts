export interface Project {
  id: string;
  title: string;
  context: string;
  liveUrl?: string ;
  githubUrl?: string;
  stack: string[];
  bullets: { text: string; metric?: string }[];
}

export const projects: Project[] = [
  {
    id: 'myrecruit',
    title: 'MyRecruit - Applicant Tracking System (ATS)',
    context: 'Recruitment Management System built at Cloudrevel Innovation Pvt Ltd',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'React Query',
      'Ant Design',
      'Tailwind CSS',
    ],
    bullets: [
      {
        text: 'Built recruiter dashboards and interview tracking screens for managing candidates across multiple hiring stages.',
      },
      {
        text: 'Developed job posting, candidate management, and interview workflow modules within a single recruitment platform.',
        metric: '500+ active job postings',
      },
      {
        text: 'Implemented dynamic forms with conditional fields and multi-step validation to support complex recruitment workflows.',
        metric: '30+ form fields',
      },
      {
        text: 'Integrated React Query for API caching, background refetching, and consistent error handling across the application.',
        metric: '~40% fewer API requests',
      },
      {
        text: 'Optimized dashboard rendering using React.memo, useMemo, useCallback, lazy loading, and dynamic imports.',
      },
    ],
  },

  {
    id: 'mypeople',
    title: 'My People - HRMS Platform',
    context: 'Human Resource Management System built at Cloudrevel Innovation Pvt Ltd',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Ant Design',
      'Tailwind CSS',
      'REST APIs',
    ],
    bullets: [
      {
        text: 'Developed employee management modules covering the employee lifecycle from onboarding to exit.',
      },
      {
        text: 'Built responsive HR dashboards and profile management screens using reusable React components.',
      },
      {
        text: 'Integrated backend APIs for employee records, organizational data, and HR-related workflows.',
      },
      {
        text: 'Created form-based workflows with validation and real-time updates for employee operations.',
      },
      {
        text: 'Collaborated with backend teams to deliver production-ready HRMS features and maintain UI consistency across modules.',
      },
    ],
  },

  {
    id: 'alphage',
    title: 'AlphaGe - Marketing & Product Landing Website',
    context: 'Product marketing website developed at Cloudrevel Innovation Pvt Ltd',
    liveUrl: 'https://alphage.devcri.com',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'Swiper.js',
      'React Icons',
    ],
    bullets: [
      {
        text: 'Built a fully animated fintech marketing website using Next.js, Tailwind CSS, and GSAP for smooth scroll-based animations and page transitions.',
      },
      {
        text: 'Implemented Swiper.js carousels for product showcases, feature highlights, and interactive content sections.',
      },
      {
        text: 'Designed reusable landing page sections including Solutions, Industries, Features, and product showcase modules.',
      },
      {
        text: 'Used React Icons to create a lightweight and consistent icon system across the website.',
      },
      {
        text: 'Leveraged Next.js static rendering to improve page performance, fast loading times, and SEO readiness.',
      },
    ],
  },
];