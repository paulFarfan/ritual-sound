function EventCard({ event, featured }) {
  return (
    <div
      className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
        featured ? "h-[420px]" : "h-[300px]"
      }`}
    >
      {/* IMAGE */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl" />

      {/* VIBE TAG */}
      <div className="absolute top-4 left-4">
        <span className="text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-white/10">
          {event.vibe}
        </span>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 w-full">
        {/* DATE + LOCATION */}
        <p className="text-xs text-purple-400 mb-1">
          {event.date} • {event.location}
        </p>

        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          {event.title}
        </h3>

        {/* DESCRIPTION (solo featured) */}
        {featured && (
          <p className="text-white/70 text-sm mt-2 max-w-md">
            {event.description}
          </p>
        )}

        {/* CTA HOVER */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
          <span className="text-xs uppercase tracking-wider text-purple-400">
            View Event →
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
