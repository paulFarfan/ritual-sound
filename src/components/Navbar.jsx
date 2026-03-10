import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="SunnyFun" className="w-10" />
          <span className="font-bold text-lg tracking-wider">
            SunnyFun Collective
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="#events" className="hover:text-purple-400 transition">
            Events
          </a>

          <a href="#academy" className="hover:text-purple-400 transition">
            DJ Academy
          </a>

          <a href="#hire" className="hover:text-purple-400 transition">
            Hire a DJ
          </a>

          <a href="#djs" className="hover:text-purple-400 transition">
            DJs
          </a>
        </div>

        {/* CTA */}
        <button className="px-5 py-2 bg-purple-600 rounded-lg neon-button hover:scale-105 transition">
          Book DJ
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
