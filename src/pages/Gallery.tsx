import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import artworksData from '@/artworks.json';

const GalleryPage = () => {
  const [artworks] = useState(artworksData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(artworks.map(art => art.category)))];

  const filteredArtworks = selectedCategory === 'All'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="sacred-section bg-gradient-to-b from-background to-secondary/10">
        <div className="sacred-container">
          <div className="text-center space-y-6 mb-16">
            <h1 className="sacred-title">
              Sacred
              <span className="block text-primary font-playfair italic">Gallery</span>
            </h1>
            <p className="sacred-subtitle max-w-2xl mx-auto">
              Each portrait is a window into the soul, where hyperrealism meets the abstract language of emotion
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
