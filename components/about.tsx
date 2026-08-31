'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './section-heading';
import { education } from '@/data/experience';

export default function About() {
  return (
    <section id="about" className="section border-t border-line bg-panel">
      <div className="container-content">
        <SectionHeading
          eyebrow="About"
          title="Focused on production performance, not just pixels"
          description="I specialize in React.js and Next.js — SSR/SSG rendering strategies, state architecture with Redux Toolkit and React Query, and the performance work that keeps data-heavy interfaces fast at scale."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Rendering strategy',
              text: 'Next.js SSR/SSG to improve initial load and SEO visibility on high-traffic, requisition-heavy platforms.',
            },
            {
              title: 'State & data',
              text: 'Redux Toolkit for structured global state; React Query for caching, background refetch, and optimistic updates.',
            },
            {
              title: 'Performance discipline',
              text: 'React.memo, useMemo, useCallback, code-splitting, and dynamic imports applied where they measurably matter.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <h3 className="font-display text-base font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex items-center gap-3 rounded-2xl border border-line bg-paper p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
            <GraduationCap size={18} />
          </div>
          <div>
            <p className="text-sm font-medium text-ink">{education.degree}</p>
            <p className="text-xs text-inkFaint">
              {education.school} · {education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
