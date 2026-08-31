import type { Metadata } from 'next';
import { Sora, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/profile';
import ThemeProvider from '@/components/theme-provider';

const display = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: `${profile.name} — Frontend Developer (React.js & Next.js)`,
  description: profile.summary,
  keywords: [
    'Samadhan Kokare',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'React.js Specialist',
    'Redux Toolkit',
    'React Query',
    'Mumbai Frontend Developer',
  ],
  openGraph: {
    title: `${profile.name} — Frontend Developer`,
    description: profile.summary,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-paper text-ink">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
