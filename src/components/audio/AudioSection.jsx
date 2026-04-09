import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

function AudioSection({ mixes = [] }) {
  const [selectedId, setSelectedId] = useState(null);

  // 🔥 asegurar selección válida cuando cambian mixes
  useEffect(() => {
    if (!mixes.length) return;

    const exists = mixes.some((m) => (m.id || m.url) === selectedId);

    if (!exists) {
      setSelectedId(mixes[0].id || mixes[0].url);
    }
  }, [mixes, selectedId]);

  if (!mixes.length) return null;

  // 🔥 derivado robusto
  const current = mixes.find((m) => (m.id || m.url) === selectedId) || mixes[0];

  return (
    <section>
      <h3 className="text-xl mb-4 neon-text">Selected Sound</h3>

      {/* 🎛️ TRACK SELECTOR */}
      <div className="flex gap-3 flex-wrap mb-6">
        {mixes.map((mix) => {
          const id = mix.id || mix.url;
          const isActive = (current.id || current.url) === id;

          return (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={`px-3 py-1 text-sm rounded-full border transition
                ${
                  isActive
                    ? "border-purple-500 text-purple-400"
                    : "border-white/20 text-white/60"
                }
              `}
            >
              {mix.title || "Untitled Mix"}
            </button>
          );
        })}
      </div>

      {/* 🔊 PLAYER */}
      <AudioPlayer
        src={current.url}
        title={current.title || "Untitled Mix"}
        autoPlay // 🔥 NUEVO
      />
    </section>
  );
}

export default AudioSection;
