const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-16">
      <div className="sacred-container">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="font-playfair text-2xl font-bold text-primary">
              Sacred Canvas
            </div>
            <p className="sacred-text max-w-sm">
              Where souls speak in color, where art becomes prayer, 
              and where every portrait holds the sacred essence of humanity.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-space font-semibold text-foreground">Sacred Spaces</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>Gallery Viewing</div>
              <div>Sacred Nights Events</div>
              <div>Commission Portraits</div>
              <div>Artist Conversations</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-space font-semibold text-foreground">Connect</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>studio@sacredcanvas.art</div>
              <div>+1 (555) 123-SOUL</div>
              <div>123 Sacred Street</div>
              <div>Art District, CA 90210</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="sacred-text italic">
            "This sanctuary of art is dedicated to all souls seeking connection through color and form."
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            © 2024 Sacred Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;