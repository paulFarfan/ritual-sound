import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function StepSuccess() {
  const navigate = useNavigate();
  const { session } = useAuth();

  const [slug, setSlug] = useState(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("dj_profiles")
        .select("slug")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (data) setSlug(data.slug);
    };

    if (session) load();
  }, [session]);

  return (
    <div className="text-center max-w-md">
      <h1 className="text-3xl font-bold mb-4">Your profile is live ⚡</h1>

      <p className="text-white/60 mb-6">
        You’re now part of Ritual Sound. Start shaping your identity and sharing
        your sound.
      </p>
      <p className="text-xs text-white/40 mt-4">
        Check your email to verify your account.
      </p>
      <button
        onClick={() => slug && navigate(`/dj/${slug}`)}
        className="px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 transition"
      >
        View My Profile
      </button>
    </div>
  );
}
