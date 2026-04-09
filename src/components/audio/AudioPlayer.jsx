import { useRef, useEffect, useState } from "react";
import AudioVisualizer from "./AudioVisualizer";

function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔁 cuando cambia track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0; // 🔥 mejor que load()
    setPlaying(false);
  }, [src]);

  // 🎧 sync estado con audio real
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setPlaying(true);
      setLoading(false);
    };

    const handlePause = () => setPlaying(false);
    const handleWaiting = () => setLoading(true);
    const handleCanPlay = () => setLoading(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  // ▶️ toggle robusto
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      // 🔥 desbloquear AudioContext
      const ctx = window.audioContext;
      if (ctx && ctx.state === "suspended") {
        await ctx.resume();
      }

      if (audio.paused) {
        setLoading(true);
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.error("Audio play error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900/60 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-4">
      {/* ▶️ PLAY BUTTON */}
      <button
        onClick={toggle}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/20 transition"
      >
        {loading ? "…" : playing ? "❚❚" : "▶"}
      </button>

      {/* 🎵 TITLE */}
      <p className="text-sm text-white/70 truncate">
        {title || "Untitled Mix"}
      </p>

      {/* 📊 VISUALIZER */}
      <div className="flex-1">
        <AudioVisualizer audioRef={audioRef} />
      </div>

      {/* 🔊 AUDIO ELEMENT */}
      <audio
        ref={audioRef}
        src={src}
        crossOrigin="anonymous"
        preload="metadata" // 🔥 mejora performance
      />
    </div>
  );
}

export default AudioPlayer;
