import Hero from '@/components/Hero';
import AboutStrip from '@/components/AboutStrip';
import MenuContent from '@/components/MenuContent';
import WhyFoodz from '@/components/WhyFoodz';
import GalleryContent from '@/components/GalleryContent';
import ContactContent from '@/components/ContactContent';

export const metadata = {
  title: 'Foodz by RG | Real Food. Real Fast.',
  description:
    'Foodz by RG — authentic North Indian curries, tandoori, and Fuzzion street food. Royal Road, Rivière du Rempart, Mauritius. 100% Halal.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutStrip />
      <section id="menu" className="scroll-mt-16">
        <MenuContent />
      </section>
      <WhyFoodz />
      <section id="gallery" className="scroll-mt-16">
        <GalleryContent />
      </section>
      <section id="find-us" className="scroll-mt-16">
        <ContactContent />
      </section>
    </main>
  );
}
