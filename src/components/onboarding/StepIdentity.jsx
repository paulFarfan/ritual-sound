import { useState } from "react";
import { supabase } from "../../lib/supabase";
import useAuth from "../../hooks/useAuth";

export default function StepIdentity({ onNext }) {
  const { session } = useAuth();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");

  // 🔥 location como array
  const [location, setLocation] = useState([]);
  const [inputLocation, setInputLocation] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // ➕ agregar ciudad
  const addLocation = () => {
    const value = inputLocation.trim();

    if (!value) return;
    if (location.length >= 3) return;

    if (!location.includes(value)) {
      setLocation([...location, value]);
    }

    setInputLocation("");
  };

  // ❌ eliminar ciudad
  const removeLocation = (city) => {
    setLocation(location.filter((l) => l !== city));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const user = session?.user;

      if (!user) throw new Error("No user session");

      if (!name.trim()) throw new Error("Name is required");

      const slug = generateSlug(name);

      const { error } = await supabase.from("dj_profiles").insert([
        {
          user_id: user.id,
          name,
          slug,
          tagline,
          location, // ✅ array
        },
      ]);

      if (error) throw error;

      onNext(); // 👉 pasar al siguiente step
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold">Define your identity</h1>

        {/* NAME */}
        <input
          placeholder="DJ Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 bg-black border border-white/20"
          required
        />

        {/* TAGLINE */}
        <input
          placeholder="Tagline (your vibe)"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="p-3 bg-black border border-white/20"
        />

        {/* LOCATION INPUT */}
        <div className="flex gap-2">
          <input
            placeholder="Add city"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            className="p-3 bg-black border border-white/20 flex-1"
          />

          <button
            type="button"
            onClick={addLocation}
            className="px-3 border border-white/30 text-sm"
          >
            Add
          </button>
        </div>

        {/* LOCATION TAGS */}
        <div className="flex flex-wrap gap-2">
          {location.map((city) => (
            <span
              key={city}
              onClick={() => removeLocation(city)}
              className="px-3 py-1 border border-white/30 text-sm cursor-pointer hover:bg-white hover:text-black transition"
            >
              {city} ✕
            </span>
          ))}
        </div>

        {/* ERROR */}
        {error && <p className="text-red-400 text-sm">{error}</p>}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-white text-black font-semibold"
        >
          {loading ? "Creating..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
