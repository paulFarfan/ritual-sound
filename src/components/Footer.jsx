function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold neon-text mb-4">
            SunnyFun Collective
          </h3>

          <p className="opacity-70 text-sm">
            Melbourne-based DJ collective hosting underground electronic
            parties, DJ classes and connecting DJs with events across the city.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>

          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a href="#events" className="hover:text-purple-400 transition">
                Events
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

            <li>
              <a href="#djs" className="hover:text-purple-400 transition">
                Our DJs
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>

          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Email
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}

      <div className="text-center text-xs opacity-50 mt-12">
        © {new Date().getFullYear()} SunnyFun Collective. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
