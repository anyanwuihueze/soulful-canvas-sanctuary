import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Sacred Nights: Painting with Purpose",
      date: "December 15, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Sacred Canvas Studio",
      attendees: 12,
      maxAttendees: 15,
      description: "Join us for an intimate evening of collaborative creation, where we explore the intersection of portraiture and abstract expression.",
      status: "available"
    },
    {
      id: 2,
      title: "Contemplative Canvas Workshop",
      date: "December 22, 2024", 
      time: "6:30 PM - 9:30 PM",
      location: "Sacred Canvas Studio",
      attendees: 8,
      maxAttendees: 12,
      description: "A meditative journey through color and form, focusing on capturing the essence of human emotion through abstract backgrounds.",
      status: "available"
    },
    {
      id: 3,
      title: "New Year Intentions Gallery",
      date: "January 1, 2025",
      time: "8:00 PM - 11:00 PM", 
      location: "Sacred Canvas Studio",
      attendees: 20,
      maxAttendees: 20,
      description: "Welcome the new year with a special gallery opening featuring new works and a collective intention-setting ceremony.",
      status: "waitlist"
    }
  ];

  return (
    <section id="events" className="sacred-section bg-gradient-to-b from-secondary/5 to-background">
      <div className="sacred-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="sacred-title">
            Sacred
            <span className="block text-primary font-playfair italic">Nights</span>
          </h2>
          <p className="sacred-subtitle max-w-2xl mx-auto">
            Intimate gatherings where art becomes prayer, where strangers become family, 
            and where the canvas holds our collective dreams
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="artwork-card p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="sacred-text text-sm">
                    {event.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Users className="w-4 h-4 mr-3 text-primary" />
                    {event.attendees} / {event.maxAttendees} souls gathered
                  </div>
                </div>
                
                <div className="pt-4">
                  {event.status === 'available' ? (
                    <Button variant="default" size="sm" className="btn-sacred w-full">
                      <span className="relative z-10">Reserve Your Sacred Space</span>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full opacity-60">
                      Join Waitlist
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <p className="sacred-text italic max-w-md mx-auto">
            "These are not workshops. They are gatherings of the spirit, 
            where art becomes a shared language of the heart."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;