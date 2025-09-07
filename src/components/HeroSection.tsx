import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="sacred-section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroPortrait} 
          alt="Sacred Portrait" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="sacred-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="sacred-title leading-tight">
                Where Souls
                <span className="block text-primary font-playfair italic">
                  Speak in Color
                </span>
              </h1>
              
              <p className="sacred-subtitle max-w-lg">
                Step into a sanctuary where hyperrealistic portraits meet vibrant abstraction, 
                where every brushstroke carries the weight of human emotion.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="btn-sacred relative z-10">
                <span className="relative z-10">Enter the Gallery</span>
              </Button>
              
              <Button variant="outline" size="lg" className="btn-voice">
                Sacred Nights Events
              </Button>
            </div>
            
            <div className="sacred-text max-w-md">
              <p className="italic text-muted-foreground">
                "This is not a portfolio. This is a prayer. Not a store. A sanctuary."
              </p>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <img 
              src={heroPortrait} 
              alt="Featured Portrait" 
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;