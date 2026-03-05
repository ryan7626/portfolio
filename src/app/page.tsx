'use client';

import dynamic from 'next/dynamic';

// Dynamically import all components for better performance
const StarField = dynamic(() => import('@/components/space/StarField'), {
  ssr: false,
});

const Hero = dynamic(() => import('@/components/sections/Hero'));
const Philosophy = dynamic(() => import('@/components/sections/Philosophy'));
const Projects = dynamic(() => import('@/components/sections/Projects'));
const SkillsConstellation = dynamic(() => import('@/components/sections/SkillsConstellation'));
const Metrics = dynamic(() => import('@/components/sections/Metrics'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Projects />
        <SkillsConstellation />
        <Metrics />
        <Contact />
      </main>
    </div>
  );
}
