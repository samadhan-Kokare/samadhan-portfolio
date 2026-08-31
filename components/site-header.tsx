'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Download, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import ThemeToggle from './theme-toggle';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Project' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors',
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'
      )}
    >
      <div className="container-content flex items-center justify-between px-5 py-4">
        <Link href="#top" className="font-display text-base font-semibold tracking-tight text-ink">
          Samadhan Kokare
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] text-inkSoft transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-xs font-medium text-inkSoft transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={14} /> Email me
          </Link>
          <Link
            href={profile.resumeFile}
            download
            className="flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:bg-accent"
          >
            <Download size={14} /> Resume
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-md p-2 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-line bg-paper md:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-sm text-inkSoft hover:bg-accentSoft hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={profile.resumeFile}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper"
            >
              <Download size={15} /> Download Resume
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
