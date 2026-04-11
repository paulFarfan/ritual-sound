import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let res;

      if (mode === "signup") {
        res = await supabase.auth.signUp({
          email,
          password,
        });
      } else {
        res = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      }

      if (res.error) throw res.error;

      const user = res.data.user;

      if (!user) throw new Error("No user returned");

      // 🔍 check profile
      const { data } = await supabase
        .from("dj_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      // 🚀 redirección correcta
      if (!data) {
        navigate("/onboarding");
      } else {
        navigate("/catalog");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {mode === "login" ? "Welcome back" : "Join Ritual Sound"}
      </h1>

      <form onSubmit={handleAuth} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-black border border-white/20 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 bg-black border border-white/20 rounded"
          required
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-white text-black font-semibold rounded"
        >
          {loading
            ? "Loading..."
            : mode === "login"
              ? "Login"
              : "Create account"}
        </button>
      </form>

      <button
        onClick={() => setMode(mode === "login" ? "signup" : "login")}
        className="mt-4 text-sm text-white/60"
      >
        {mode === "login"
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}
