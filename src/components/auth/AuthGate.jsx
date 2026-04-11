import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { supabase } from "../../lib/supabase";

export default function AuthGate({ children, requireProfile = true }) {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    const check = async () => {
      if (!session) {
        navigate("/auth");
        return;
      }

      if (!requireProfile) return;

      const { data } = await supabase
        .from("dj_profiles")
        .select("*")
        .eq("user_id", session.user.id)
        .single();

      if (!data) {
        navigate("/onboarding");
      }
    };

    check();
  }, [session, loading, navigate, requireProfile]);

  if (loading) return <div className="text-white">Loading...</div>;

  return children;
}
