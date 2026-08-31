'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectSection() {
  return (
    <section id="project" className="section border-t border-line bg-panel">
      <div className="container-content">
        <SectionHeading
          eyebrow="Key Project"
          title="ATS candidate-pipeline & HR dashboards"
          description="The core product work referenced above, shown in more depth."
        />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {p.title}

                      {p.liveUrl && (
                        <Link
                          href={p?.liveUrl}
                          target="_blank"
                          className="ml-2 inline text-sm font-normal text-blue-500 hover:underline"
                        >
                          <span>Visit ↗</span>
                        </Link>
                      )}
                    </h3>
                  </div>

                  <p className="mt-1 text-xs text-inkFaint">
                    {p.context}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] text-inkSoft"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b.text} className="flex gap-3 text-sm leading-relaxed text-inkSoft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-inkFaint" />
                    <span>
                      {b.text}
                      {b.metric && (
                        <span className="ml-2 inline-block rounded-full bg-metricSoft px-2 py-0.5 font-mono text-[11px] font-medium text-metric">
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
    </section >
  );
}
