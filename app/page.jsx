import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import ProcessSection from '@/app/components/ProcessSection';
import AboutSection from '@/app/components/AboutSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import CTASection from '@/app/components/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection
        title="We create digital solutions that grow your business"
        subtitle="Our team blends creative expertise with data-driven strategies to craft campaigns that deliver real results and drive sustainable growth."
      />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
