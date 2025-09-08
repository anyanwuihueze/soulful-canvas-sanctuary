import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="sacred-section">
      <div className="sacred-container text-center">
        <h2 className="sacred-title">
          About the <span className="italic font-playfair text-primary">Artist</span>
        </h2>
        <p className="sacred-text max-w-3xl mx-auto mt-6 mb-10">
          Discover the journey and inspiration behind each sacred portrait. 
          Every piece carries the spirit of African heritage, reimagined in a 
          modern artistic expression. Connect directly with the artist or 
          commission a custom piece made just for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Connect with Artist button */}
          <a 
            href="mailto:studio@sacredcanvas.art?subject=Connecting%20with%20the%20Artist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full sm:w-auto">Connect with the Artist</Button>
          </a>

          {/* Commission button */}
          <a 
            href="mailto:studio@sacredcanvas.art?subject=Commissioning%20a%20Sacred%20Portrait"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">Commission a Piece</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
