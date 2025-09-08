import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="sacred-section">
        <div className="sacred-container">
          <div className="text-center space-y-6 mb-16">
            <h1 className="sacred-title">
              The Artist's
              <span className="block text-primary font-playfair italic">Journal</span>
            </h1>
            <p className="sacred-text max-w-3xl mx-auto">
              Welcome to my digital journal. Here, I share the stories behind the art, 
              explorations of new techniques, and reflections on the creative journey. 
              This is a space for connection, inspiration, and a deeper look into the soul of the work.
            </p>
          </div>

          {/* Blog Post Layout */}
          <div className="space-y-16">
            {/* Blog Post 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl p-8 shadow-lg transition-transform hover:shadow-primary/20 hover:-translate-y-2">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video/Image Placeholder</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">September 9, 2025</p>
                <h3 className="text-3xl font-playfair font-semibold text-foreground">
                  The Hyperrealistic Heart: A Journey into Detail
                </h3>
                <p className="sacred-text">
                  People often ask me why I pour hundreds of hours into a single eye or the subtle curve of a lip. For me, hyperrealism isn't about replicating a photograph—it's about capturing a soul...
                </p>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                  Read More &rarr;
                </Button>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl p-8 shadow-lg transition-transform hover:shadow-primary/20 hover:-translate-y-2">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video/Image Placeholder</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">September 9, 2025</p>
                <h3 className="text-3xl font-playfair font-semibold text-foreground">
                  Sacred Spaces: The Story Behind the Abstract Backgrounds
                </h3>
                <p className="sacred-text">
                  The face is the anchor, but the background is the ocean. It's the untamed, emotional landscape where the story truly unfolds. Each color, each swirl, is a prayer...
                </p>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                  Read More &rarr;
                </Button>
              </div>
            </div>
            
            {/* Add more blog posts here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
