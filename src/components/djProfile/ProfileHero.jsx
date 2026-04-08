import { useState } from "react";

function ProfileHero({ dj }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative">
        {/* 🩸 HERO */}
        <div className="relative h-[60vh]">
          {/* BACKGROUND */}
          <img
            src={dj.media.cover || dj.media.avatar}
            alt={dj.profile.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* 👤 IDENTITY BLOCK */}
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          <div className="-mt-16 flex items-center gap-4">
            {/* AVATAR */}
            <img
              src={dj.media.avatar}
              alt={dj.profile.name}
              onClick={() => setOpen(true)}
              className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-2xl border-4 border-neutral-900 shadow-lg cursor-pointer hover:scale-105 transition"
            />

            {/* NAME + TAGLINE */}
            <div className="pb-2">
              <h1 className="text-2xl md:text-4xl font-bold neon-text">
                {dj.profile.name}
              </h1>

              {dj.profile.tagline && (
                <p className="text-white/70 mt-1">{dj.profile.tagline}</p>
              )}
            </div>
          </div>

          {/* TAGS */}
          <div className="flex gap-2 mt-6 flex-wrap">
            {dj.sound.genres?.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 border border-white/20 rounded-full"
              >
                {s}
              </span>
            ))}

            {dj.sound.mood?.map((m) => (
              <span
                key={m}
                className="text-xs px-3 py-1 border border-purple-500/40 text-purple-300 rounded-full"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 MODAL AVATAR */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <img
            src={dj.media.avatar}
            alt={dj.profile.name}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

export default ProfileHero;
