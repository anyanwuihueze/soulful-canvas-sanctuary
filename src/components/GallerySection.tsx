import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import { Sparkles } from 'lucide-react';

const GallerySection = () => {
  const artworks = [
    {
      id: 1,
      title: "Ancestral Wisdom",
      image: artwork1,
      emotion: "The weight of stories untold",
      story: "In his eyes, I carry the dreams of generations. Each line on my face is a map of resilience, each breath a prayer for those who come after me."
    },
    {
      id: 2,
      title: "Tomorrow's Promise",
      image: artwork2,
      emotion: "Pure hope illuminated",
      story: "I am the future dancing in present light. My smile holds the power to change the world, my joy is the antidote to yesterday's pain."
    },
    {
      id: 3,
      title: "Inner Sanctuary",
      image: artwork3,
      emotion: "Sacred contemplation",
      story: "In this moment of stillness, I commune with the divine within. The chaos of the world fades as I find peace in the cathedral of my soul."
    }
  ];

  return (
    <section id="gallery" className="sacred-section bg-gradient-to-b from-background to-secondary/10">
      <div className="sacred-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="sacred-title">
            Sacred
            <span className="block text-primary font-playfair italic">Gallery</span>
          </h2>
          <p className="sacred-subtitle max-w-2xl mx-auto">
            Each portrait is a window into the soul, where hyperrealism meets the abstract language of emotion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="artwork-card group">
              <div className="relative">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Button variant="outline" size="sm" className="btn-voice w-full">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Voice of the Canvas
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-primary italic font-medium">
                    {artwork.emotion}
                  </p>
                </div>
                
                <p className="sacred-text text-sm leading-relaxed">
                  "{artwork.story}"
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="btn-sacred">
            <span className="relative z-10">View Full Collection</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;