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
      title: "Vision Through Truth",
      image: "/lovable-uploads/de9457e8-8b9d-4534-9322-a856502caeb0.png",
      emotion: "Seeing beyond the surface",
      story: "Behind these crimson lenses lies a vision that pierces through facades. Every stroke reveals the authentic self beneath society's expectations."
    },
    {
      id: 2,
      title: "Eternal Gaze",
      image: "/lovable-uploads/cb7449cc-b296-417e-bbec-2b3c2fea257e.png",
      emotion: "The soul's observatory",
      story: "This fragmented eye sees all dimensions of existence. Each panel captures a different spectrum of human experience, united in divine observation."
    },
    {
      id: 3,
      title: "Joy Unbounded",
      image: "/lovable-uploads/56c0cb77-547b-48c5-a487-d0c7844b0caf.png",
      emotion: "Pure euphoria in color",
      story: "This radiant smile transcends canvas boundaries. Every vibrant hue speaks of hope, resilience, and the beautiful complexity of the human spirit."
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