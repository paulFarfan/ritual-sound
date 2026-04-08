function ProfileEvents({ dj }) {
  if (!dj.booking.eventTypes?.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-xl mb-4 neon-text">Plays at</h3>

      <div className="flex gap-3 flex-wrap">
        {dj.booking.eventTypes.map((e) => (
          <span
            key={e}
            className="px-3 py-1 text-sm border border-white/20 rounded-full"
          >
            {e}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ProfileEvents;
