'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { profile, heroStats } from '@/data/profile';

export default function Hero() {
  return (
    <section id="top" className="section relative overflow-hidden pt-16 sm:pt-20">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-content relative px-1 ">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 font-mono text-xs sm:text-sm text-inkFaint"
        >
          <MapPin size={15} />
          {profile.location} — open to remote &amp; relocation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl font-display text-[2rem] font-semibold leading-[1.08] tracking-normal text-ink sm:text-5xl"
        >
          Frontend Developer building{' '}
          <span className="text-accent">fast, production-grade</span> React &amp; Next.js products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-inkSoft sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#experience"
            className="flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            View experience
          </Link>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="bg-panel px-5 py-6">
              <p className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-inkFaint">{s.label}</p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
