import SimpleHeader from '@/components/layout/SimpleHeader';
import SimpleFooter from '@/components/layout/SimpleFooter';
import AnimatedHero from '@/components/sections/AnimatedHero';
import AnimatedAbout from '@/components/sections/AnimatedAbout';
import OurStory from '@/components/sections/OurStory';
import AnimatedCTA from '@/components/sections/AnimatedCTA';

export default function Home() {
  return (
    <>
      <SimpleHeader />
      <main>
        <AnimatedHero />
        <AnimatedAbout />
        <OurStory />
        <AnimatedCTA />
      </main>
      <SimpleFooter />
    </>
  );
}
