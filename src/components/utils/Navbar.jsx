import logo from "../../assets/images/favicon.png";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const { session } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  const [mySlug, setMySlug] = useState(null);
  useEffect(() => {
    const loadProfile = async () => {
      if (!session) return;

      const { data, error } = await supabase
        .from("dj_profiles")
        .select("slug")
        .eq("user_id", session.user.id)
        .single();

      if (!error && data) {
        setMySlug(data.slug);
      }
    };

    loadProfile();
  }, [session]);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <img src={logo} alt="ritual sound" className="w-8 md:w-10" />
          <span className="font-bold text-sm md:text-lg tracking-wider">
            RITUAL SOUND
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="/#djs" className="hover:text-purple-400 transition">
            Artists
          </a>
          <a href="/#events" className="hover:text-purple-400 transition">
            Events
          </a>
          <a href="/#academy" className="hover:text-purple-400 transition">
            Academy
          </a>
          <a href="/#hire" className="hover:text-purple-400 transition">
            Hire
          </a>
        </div>

        {!session ? (
          <a
            href="/auth"
            className="hidden md:block px-5 py-2 bg-purple-600 rounded-lg hover:scale-105 transition uppercase tracking-wider text-sm"
          >
            Join Us
          </a>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            {/* Avatar */}
            <div
              onClick={() => {
                if (mySlug) navigate(`/dj/${mySlug}`);
              }}
              className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer hover:scale-105 transition"
            >
              <span className="text-sm font-bold">
                {session.user.email?.[0].toUpperCase()}
              </span>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="text-xs text-white/60 hover:text-red-400 transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-lg">
          <a href="#djs" onClick={() => setOpen(false)}>
            Artists
          </a>

          <a href="#events" onClick={() => setOpen(false)}>
            Events
          </a>

          <a href="#academy" onClick={() => setOpen(false)}>
            Academy
          </a>

          <a href="#hire" onClick={() => setOpen(false)}>
            Hire
          </a>

          {!session ? (
            <a
              href="/auth"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 bg-purple-600 rounded-lg uppercase tracking-wider"
            >
              Join Us
            </a>
          ) : (
            <div className="flex flex-col items-center gap-4 mt-4">
              <button
                onClick={() => {
                  if (mySlug) navigate(`/dj/${mySlug}`);
                }}
                className="px-6 py-2 border border-white/20 rounded-lg"
              >
                My Profile
              </button>

              <button onClick={handleLogout} className="text-red-400">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[-1]"
        />
      )}
    </nav>
  );
}

export default Navbar;
