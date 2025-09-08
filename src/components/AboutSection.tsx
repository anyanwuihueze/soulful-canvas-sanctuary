import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="sacred-section bg-gradient-to-b from-background to-secondary/20">
      <div className="sacred-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="sacred-title text-left">
                The Artist's
                <span className="block text-primary font-playfair italic">Journey</span>
              </h2>
              
              <div className="space-y-6 sacred-text">
                <p>
                  Born from the intersection of hyperrealism and abstraction, my work explores 
                  the sacred space where technical mastery meets emotional truth. Each portrait 
                  begins as a study in human vulnerability, then transforms into a prayer 
                  expressed through vibrant, flowing backgrounds.
                </p>
                
                <p>
                  My art is not about perfection—it's about presence. The hyperrealistic faces 
                  anchor us in our shared humanity, while the abstract backgrounds speak the 
                  language of the soul, fluid and untranslatable yet universally understood.
                </p>
                
                <p className="italic text-primary">
                  "I paint what words cannot say, what silence holds, what the heart whispers 
                  when it thinks no one is listening."
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="btn-sacred">
                <span className="relative z-10">Connect with the Artist</span>
              </Button>
              
              <Button variant="outline" size="lg" className="btn-voice">
                Commission a Sacred Portrait
              </Button>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-accent/10 to-destructive/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="relative group">
                  {/* Hover glow wrapper */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  
                  {/* Fixed Circular framed image */}
                  <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] transition-all duration-500 mx-auto">
                    <img 
                      src="/lovable-uploads/cletus-prof-pic.png"
                      alt="Cletus Zadoc - Artist"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 mix-blend-overlay rounded-full"></div>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground">
                  Cletus Zadoc
                </h3>
                <p className="sacred-text text-primary italic">
                  Visionary Artist & Soul Illuminator
                </p>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Portraits Created</span>
                  <span className="font-semibold text-primary">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sacred Nights Hosted</span>
                  <span className="font-semibold text-primary">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Souls Connected</span>
                  <span className="font-semibold text-primary">432</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
