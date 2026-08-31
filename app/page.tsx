import SiteHeader from '@/components/site-header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import ProjectSection from '@/components/project';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectSection />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
