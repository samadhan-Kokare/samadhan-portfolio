'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { profile, heroStats } from '@/data/profile';

const highlights = ['React.js & Next.js', 'Redux Toolkit', 'React Query', 'Performance Optimisation'];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const maskReveal: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const nameContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

const nameWord: Variants = {
  hidden: { opacity: 0, y: 24, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="section relative overflow-hidden pt-16 sm:pt-24">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-content relative px-4 sm:px-6"
      >
        <div className="flex flex-col items-start">
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-inkFaint sm:text-sm"
          >
            <span className="text-accent">{profile.title}</span>
            <span className="opacity-40">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {profile.location}
            </span>
            <span className="opacity-40">•</span>
            <span className="flex items-center gap-1.5 text-metric">
              <span className="h-1.5 w-1.5 rounded-full bg-metric" />
              Open to remote &amp; relocation
            </span>
          </motion.div>

          <motion.h1
            variants={nameContainer}
            style={{ perspective: 600 }}
            className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {"Hi, I'm Samadhan Kokare.".split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={nameWord}
                whileHover={{
                  x: 8,
                  y: -4,
                  scale: 0.9,
                  color: 'hsl(var(--accent))',
                  transition: { type: 'spring', stiffness: 220, damping: 18 },
                }}
                className="mr-2 inline-block cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-2 overflow-hidden">
            <motion.p
              variants={maskReveal}
              whileHover={{
                x: 10,
                color: 'hsl(var(--ink))',
                transition: { type: 'spring', stiffness: 220, damping: 18 },
              }}
              className="max-w-2xl cursor-default font-display text-xl font-medium text-inkSoft transition-colors duration-300 sm:text-2xl"
            >
              Building fast, production-grade{' '}
              <span className="text-accent">React &amp; Next.js</span> products.
            </motion.p>
          </div>

          <motion.p
            variants={fadeUp}
            whileHover={{
              x: 10,
              color: 'hsl(var(--ink))',
              transition: { type: 'spring', stiffness: 200, damping: 20 },
            }}
            className="mt-6 max-w-2xl cursor-default text-base leading-relaxed text-inkSoft transition-colors duration-300 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2.5">
            {highlights.map((item) => (
              <motion.span
                key={item}
                whileHover={{
                  x: 6,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 300, damping: 15 },
                }}
                className="inline-flex cursor-default items-center rounded-md border border-line bg-panel/60 px-2.5 py-1 font-mono text-xs text-inkSoft backdrop-blur-sm hover:border-accent/40 hover:text-accent"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#experience"
              className="flex items-center gap-2 rounded-full border border-line bg-panel/80 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur-sm transition-all duration-200 hover:border-accent/50 hover:bg-panel hover:text-accent"
            >
              <Briefcase size={16} />
              <span>View experience</span>
            </Link>
          </motion.div>

          {/* <motion.div
            variants={fadeUp}
            className="mt-14 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
          >
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4, x: 2, transition: { type: 'spring', stiffness: 300, damping: 16 } }}
                className="bg-panel px-5 py-6"
              >
                <p className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-inkFaint">{s.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}