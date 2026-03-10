function DJCard({ dj }) {
  return (
    <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition hover:scale-105">
      {/* avatar */}
      <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
        {dj.name.charAt(0)}
      </div>

      <h3 className="text-xl font-bold mb-1">{dj.name}</h3>

      <p className="opacity-70 text-sm mb-2">{dj.genre}</p>

      <p className="opacity-60 text-xs mb-4">{dj.city}</p>

      <button className="px-4 py-2 bg-purple-600 rounded-lg neon-button hover:scale-105 transition text-sm">
        View Profile
      </button>
    </div>
  );
}

export default DJCard;
