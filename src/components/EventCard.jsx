function EventCard({ event }) {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 hover:scale-105 transition duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
      <h3 className="text-xl font-bold mb-2">{event.name}</h3>

      <p className="text-sm opacity-70 mb-3">
        {event.date} • {event.location}
      </p>

      <div className="text-sm opacity-80 mb-4">
        Lineup:
        <ul className="mt-2">
          {event.lineup.map((dj, index) => (
            <li key={index}>• {dj}</li>
          ))}
        </ul>
      </div>

      <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg neon-button hover:scale-105 transition">
        View Event
      </button>
    </div>
  );
}

export default EventCard;
