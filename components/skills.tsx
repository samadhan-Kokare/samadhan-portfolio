'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="container-content">
        <SectionHeading eyebrow="Skills" title="Technical skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-line bg-panel p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
