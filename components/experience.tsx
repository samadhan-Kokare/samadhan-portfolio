'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './section-heading';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built"
          description="3.9+ years across an enterprise IT services company and a product startup, shipping recruiter-facing dashboards and large-scale React applications."
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid gap-4 rounded-2xl border border-line bg-panel p-6 sm:grid-cols-[220px_1fr] sm:gap-8 sm:p-8"
            >
              <div>
                <div className="flex items-center gap-2 sm:hidden">
                  <Briefcase size={15} className="text-accent" />
                  <span className="font-mono text-xs text-inkFaint">{job.period}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink sm:mt-0">{job.role}</h3>
                <p className="mt-1 text-sm text-inkSoft">{job.company}</p>
                <p className="text-xs text-inkFaint">{job.location}</p>
                <p className="mt-3 hidden font-mono text-xs text-inkFaint sm:block">{job.period}</p>
                {job.current && (
                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-metricSoft px-2.5 py-1 text-[11px] font-medium text-metric">
                    <span className="h-1.5 w-1.5 rounded-full bg-metric" />
                    Current role
                  </span>
                )}
              </div>

              <ul className="space-y-3 border-t border-line pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                {job.bullets.map((b) => (
                  <li key={b.text} className="flex gap-3 text-sm leading-relaxed text-inkSoft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-inkFaint" />
                    <span>
                      {b.text}
                      {b.metric && (
                        <span className="ml-2 inline-block rounded-full bg-accentSoft px-2 py-0.5 font-mono text-[11px] font-medium text-accent">
                          {b.metric}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
