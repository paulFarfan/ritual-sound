function DJCard({ dj }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
      {/* GLOW */}
      <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* CARD */}
      <div className="relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden transition duration-300 group-hover:scale-[1.03] group-hover:border-purple-500">
        {/* IMAGE */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={dj.image}
            alt={dj.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="text-lg font-bold uppercase tracking-widest">
            {dj.name}
          </h3>
          <p className="text-xs text-white/50">
            {dj.city} • {dj.genre}
          </p>
          <a
            href={dj.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 hover:text-pink-400 transition"
          >
            @{dj.instagram}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DJCard;
