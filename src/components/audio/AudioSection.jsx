import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

function AudioSection({ mixes }) {
  const [current, setCurrent] = useState(mixes[0]);

  return (
    <section>
      <h3 className="text-xl mb-4 neon-text">Selected Sound</h3>

      {/* 🎛️ TRACK SELECTOR */}
      <div className="flex gap-3 flex-wrap mb-6">
        {mixes.map((mix) => (
          <button
            key={mix.title}
            onClick={() => setCurrent(mix)}
            className={`px-3 py-1 text-sm rounded-full border transition
              ${
                current.title === mix.title
                  ? "border-purple-500 text-purple-400"
                  : "border-white/20 text-white/60"
              }
            `}
          >
            {mix.title}
          </button>
        ))}
      </div>

      {/* 🔊 PLAYER + VISUALIZER */}
      <AudioPlayer src={current.url} title={current.title} />
    </section>
  );
}

export default AudioSection;
