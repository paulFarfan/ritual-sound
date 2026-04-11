import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function EditProfileModal({ dj, onClose }) {
  const [name, setName] = useState(dj.profile.name || "");
  const [tagline, setTagline] = useState(dj.profile.tagline || "");
  const [bio, setBio] = useState(dj.profile.bio || "");
  const [location, setLocation] = useState(dj.profile.location?.[0] || "");
  const [instagram, setInstagram] = useState(dj.social?.instagram || "");
  const [origin, setOrigin] = useState(dj.profile.origin || "");
  const [experience, setExperience] = useState(dj.meta?.experience || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);

    try {
      // PROFILE
      const { error: profileError } = await supabase
        .from("dj_profiles")
        .update({
          name,
          tagline,
          bio,
          location: [location],
          origin,
        })
        .eq("id", dj.id);

      if (profileError) throw profileError;

      // SOCIAL
      await supabase.from("dj_social").upsert(
        {
          dj_id: dj.id,
          instagram,
          instagram_url: instagram
            ? `https://instagram.com/${instagram}`
            : null,
        },
        { onConflict: "dj_id" },
      );

      // META
      await supabase.from("dj_meta").upsert(
        {
          dj_id: dj.id,
          experience,
        },
        { onConflict: "dj_id" },
      );

      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Update error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 w-full max-w-lg rounded-2xl border border-white/10 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div>
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <p className="text-white/40 text-sm">Update your public identity</p>
        </div>

        {/* 🔥 IDENTITY */}
        <div className="space-y-3">
          <p className="text-xs text-white/40 uppercase tracking-wider">
            Identity
          </p>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="DJ Name"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-purple-500 outline-none"
          />

          <input
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Tagline"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-purple-500 outline-none"
          />
        </div>

        {/* 🔥 ABOUT */}
        <div className="space-y-3">
          <p className="text-xs text-white/40 uppercase tracking-wider">
            About
          </p>

          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Your story, vibe, identity..."
            className="w-full p-3 bg-black border border-white/10 rounded-lg min-h-[100px] focus:border-purple-500 outline-none"
          />
        </div>

        {/* 🔥 DETAILS */}
        <div className="grid grid-cols-2 gap-3">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City"
            className="p-3 bg-black border border-white/10 rounded-lg focus:border-purple-500 outline-none"
          />

          <input
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Origin"
            className="p-3 bg-black border border-white/10 rounded-lg focus:border-purple-500 outline-none"
          />

          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience (years)"
            className="col-span-2 p-3 bg-black border border-white/10 rounded-lg focus:border-purple-500 outline-none"
          />
        </div>

        {/* 🔥 SOCIAL */}
        <div className="space-y-3">
          <p className="text-xs text-white/40 uppercase tracking-wider">
            Social
          </p>

          <input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="@instagram"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-purple-500 outline-none"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="px-5 py-2 bg-purple-600 rounded-lg hover:scale-105 transition disabled:opacity-50 text-sm"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
