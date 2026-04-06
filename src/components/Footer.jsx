function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold neon-text mb-4">
            SunnyFun Collective
          </h3>

          <p className="text-white/60 text-sm max-w-sm mx-auto md:mx-0 mb-6">
            A Melbourne-based DJ collective creating events, developing talent,
            and connecting DJs with real opportunities.
          </p>

          {/* MINI CTA */}
          <a
            href="#academy"
            className="text-sm text-purple-400 hover:text-pink-400 transition uppercase tracking-wider"
          >
            Join the Collective →
          </a>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
            Navigation
          </h4>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="#events" className="hover:text-purple-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#djs" className="hover:text-purple-400 transition">
                Artists
              </a>
            </li>
            <li>
              <a href="#academy" className="hover:text-purple-400 transition">
                DJ Academy
              </a>
            </li>
            <li>
              <a href="#hire" className="hover:text-purple-400 transition">
                Hire a DJ
              </a>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">
            Connect
          </h4>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="mailto:hello@sunnyfun.com"
                className="hover:text-purple-400 transition"
              >
                Email
              </a>
            </li>

            <li>
              <a href="#hire" className="hover:text-purple-400 transition">
                Book a DJ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-xs text-white/40 mt-12 px-4">
        © {new Date().getFullYear()} SunnyFun Collective. Built for the
        underground.
      </div>
    </footer>
  );
}

export default Footer;
