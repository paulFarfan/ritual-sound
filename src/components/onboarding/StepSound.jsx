import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import useAuth from "../../hooks/useAuth";

export default function StepSound({ onNext }) {
  const { session } = useAuth();

  const [genres, setGenres] = useState([]);
  const [mood, setMood] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [loading, setLoading] = useState(false);

  const [djId, setDjId] = useState(null);

  // 🔍 obtener dj_profile del usuario
  useEffect(() => {
    const getDJ = async () => {
      const { data } = await supabase
        .from("dj_profiles")
        .select("id")
        .eq("user_id", session.user.id)
        .single();

      if (data) setDjId(data.id);
    };

    if (session) getDJ();
  }, [session]);

  const toggleGenre = (genre) => {
    setGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("dj_sound").insert([
        {
          dj_id: djId,
          genres, // ya array
          mood: [mood], // 🔥 FIX
          energy: [energy], // 🔥 FIX
        },
      ]);

      if (error) throw error;

      onNext();
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const GENRES = ["House", "Techno", "Afro", "Latin", "Ambient"];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <h1 className="text-3xl font-bold">Define your sound</h1>

      {/* GENRES */}
      <div className="flex flex-wrap gap-2">
        {GENRES.map((g) => (
          <button
            type="button"
            key={g}
            onClick={() => toggleGenre(g)}
            className={`px-3 py-1 border ${
              genres.includes(g) ? "bg-white text-black" : "border-white/30"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <input
        placeholder="Mood (dark, energetic...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="p-3 bg-black border border-white/20"
      />

      <input
        placeholder="Energy (low, peak...)"
        value={energy}
        onChange={(e) => setEnergy(e.target.value)}
        className="p-3 bg-black border border-white/20"
      />

      <button type="submit" className="p-3 bg-white text-black">
        {loading ? "Saving..." : "Continue"}
      </button>
    </form>
  );
}
