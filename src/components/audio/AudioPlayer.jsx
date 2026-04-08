import { useRef, useEffect, useState } from "react";
import AudioVisualizer from "./AudioVisualizer";

function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // 🔁 RESET cuando cambia el track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.load();
    setPlaying(false);
  }, [src]);

  // 🎧 SINCRONIZAR estado con el audio real
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  // ▶️ TOGGLE REAL
  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="bg-neutral-900/60 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-4">
      {/* ▶️ PLAY BUTTON */}
      <button
        onClick={toggle}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/20 transition"
      >
        {playing ? "❚❚" : "▶"}
      </button>

      {/* 🎵 TITLE */}
      <p className="text-sm text-white/70 truncate">{title}</p>

      {/* 📊 VISUALIZER */}
      <div className="flex-1">
        <AudioVisualizer audioRef={audioRef} />
      </div>

      {/* 🔊 AUDIO ELEMENT */}
      <audio ref={audioRef} src={src} />
    </div>
  );
}

export default AudioPlayer;
