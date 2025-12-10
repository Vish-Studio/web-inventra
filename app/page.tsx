import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LogicFlow from '@/components/LogicFlow';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <LogicFlow />
      <CTA />
      <Footer />
    </>
  );
}
