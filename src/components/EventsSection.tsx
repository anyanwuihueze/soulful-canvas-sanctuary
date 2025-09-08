import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const events = [
  {
    title: "Sacred Nights: Painting with Purpose",
    description: "Join us for an intimate evening of collaborative creation, where we explore the intersection of portraiture and abstract expression.",
    date: "December 15, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "Sacred Canvas Studio",
    attendees: 12,
    maxAttendees: 15,
    status: "available",
  },
  {
    title: "Contemplative Canvas Workshop",
    description: "A meditative journey through color and form, focusing on capturing the essence of human emotion through abstract backgrounds.",
    date: "December 22, 2024",
    time: "6:30 PM - 9:30 PM",
    location: "Sacred Canvas Studio",
    attendees: 8,
    maxAttendees: 12,
    status: "available",
  },
  {
    title: "New Year Intentions Gallery",
    description: "Welcome the new year with a special gallery opening featuring new works and a collective intention-setting ceremony.",
    date: "January 1, 2025",
    time: "8:00 PM - 11:00 PM",
    location: "Sacred Canvas Studio",
    attendees: 20,
    maxAttendees: 20,
    status: "full",
  },
];

const EventsSection = () => {
  const createMailtoLink = (eventTitle: string, isWaitlist: boolean) => {
    const subject = isWaitlist
      ? `Waitlist Request: ${eventTitle}`
      : `Reservation Request: ${eventTitle}`;
    const body = `Hello,\n\nI would like to ${isWaitlist ? 'join the waitlist for' : 'reserve a sacred space at'} the upcoming event: ${eventTitle}.\n\nPlease let me know the next steps.\n\nThank you!`;
    return `mailto:studio@sacredcanvas.art?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="events" className="sacred-section">
      <div className="sacred-container">
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title} className="bg-card/60 border-border/80 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col p-6 rounded-2xl">
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-playfair font-semibold text-foreground">{event.title}</h3>
                <p className="sacred-text text-sm">{event.description}</p>
                <div className="space-y-3 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-3 text-primary" />
                    {event.attendees} / {event.maxAttendees} souls gathered
                  </div>
                </div>
              </div>
              
              <div className="pt-6 mt-auto">
                {event.status === 'available' ? (
                  <a href={createMailtoLink(event.title, false)} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="w-full">Reserve Your Sacred Space</Button>
                  </a>
                ) : (
                  <a href={createMailtoLink(event.title, true)} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full">Join Waitlist</Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 space-y-4">
          <p className="sacred-text italic max-w-lg mx-auto">
            "These are not workshops. They are gatherings of the spirit, where art becomes a shared language of the heart."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
