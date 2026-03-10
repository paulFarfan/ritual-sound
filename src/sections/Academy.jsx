function Academy() {
  return (
    <section id="academy" className="py-28 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            DJ Academy
          </h2>

          <p className="opacity-80 mb-6">
            Learn DJing with SunnyFun Collective. From beginner to club-ready,
            our instructors guide you through mixing, transitions, beatmatching
            and live performance.
          </p>

          <ul className="space-y-3 mb-8 opacity-90">
            <li>🎧 Beginner DJ courses</li>
            <li>🎛 Advanced mixing techniques</li>
            <li>🎚 Equipment training</li>
            <li>🔥 Real performance opportunities</li>
          </ul>

          <button className="px-8 py-4 bg-purple-600 rounded-lg neon-button hover:scale-105 transition">
            Book a Class
          </button>
        </div>

        {/* VISUAL CARD */}
        <div className="relative">
          <div className="bg-black border border-white/10 rounded-xl p-10 text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition">
            <h3 className="text-2xl font-bold mb-4">Become a DJ</h3>

            <p className="opacity-70 mb-6">
              Start your journey into electronic music. Learn to mix, perform,
              and play at SunnyFun events.
            </p>

            <div className="flex justify-center gap-6 text-sm opacity-80">
              <div>
                <p className="text-2xl font-bold">8</p>
                <p>Weeks</p>
              </div>

              <div>
                <p className="text-2xl font-bold">1:1</p>
                <p>Mentorship</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Live</p>
                <p>Performance</p>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}

export default Academy;
