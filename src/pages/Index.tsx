import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import EventsSection from '@/components/EventsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <EventsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;