import events from "../data/events";
import EventCard from "../components/EventCard";

function Events() {
  const [featured, ...rest] = events;

  return (
    <section id="events" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 neon-text">
          Upcoming Events
        </h2>

        <p className="text-center text-white/60 max-w-2xl mx-auto mb-12">
          Nights, energy and sound curated by the collective.
        </p>

        {/* FEATURED EVENT */}
        {featured && (
          <div className="mb-12">
            <EventCard event={featured} featured />
          </div>
        )}

        {/* OTHER EVENTS */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
