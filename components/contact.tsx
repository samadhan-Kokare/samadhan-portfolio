'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line bg-[#0D0F16] text-white">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something that ships.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
            Open to Frontend Developer and React/Next.js roles — remote or Mumbai-based. I usually reply within a day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          <Link
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm transition-colors hover:border-accent hover:bg-white/10"
          >
            <span className="flex items-center gap-3">
              <Mail size={17} className="text-accent" />
              {profile.email}
            </span>
            <ArrowUpRight size={16} className="text-white/40" />
          </Link>

          <Link
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm transition-colors hover:border-accent hover:bg-white/10"
          >
            <span className="flex items-center gap-3">
              <Phone size={17} className="text-accent" />
              {profile.phone}
            </span>
            <ArrowUpRight size={16} className="text-white/40" />
          </Link>

          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm transition-colors hover:border-accent hover:bg-white/10"
          >
            <span className="flex items-center gap-3">
              <Linkedin size={17} className="text-accent" />
              LinkedIn
            </span>
            <ArrowUpRight size={16} className="text-white/40" />
          </Link>

          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm transition-colors hover:border-accent hover:bg-white/10"
          >
            <span className="flex items-center gap-3">
              <Github size={17} className="text-accent" />
              GitHub
            </span>
            <ArrowUpRight size={16} className="text-white/40" />
          </Link>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          href={profile.resumeFile}
          download
          className="mt-4 flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          <Download size={16} /> Download full resume (PDF)
        </motion.a>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
