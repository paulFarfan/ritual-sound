function Academy() {
  return (
    <section
      id="academy"
      className="relative py-20 md:py-28 bg-neutral-900 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT SIDE */}
        <div className="text-center md:text-left">
          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text">
            DJ Academy
          </h2>

          {/* SUBTITLE */}
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
            Learn • Perform • Join the Collective
          </p>

          {/* MAIN MESSAGE */}
          <p className="text-white/70 mb-8 max-w-xl mx-auto md:mx-0">
            From your first mix to your first crowd. We don’t just teach DJing —
            we guide you into real events, connect you with the scene, and help
            you grow as an artist inside the collective.
          </p>

          {/* JOURNEY */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-purple-400 mb-4">
              Your Journey
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <p className="text-lg font-bold">Learn</p>
                <p className="text-xs text-white/60">Master the fundamentals</p>
              </div>

              <div className="hidden md:block text-white/30">→</div>

              <div>
                <p className="text-lg font-bold">Perform</p>
                <p className="text-xs text-white/60">
                  Play your first live set
                </p>
              </div>

              <div className="hidden md:block text-white/30">→</div>

              <div>
                <p className="text-lg font-bold">Join</p>
                <p className="text-xs text-white/60">
                  Become part of the collective
                </p>
              </div>

              <div className="hidden md:block text-white/30">→</div>

              <div>
                <p className="text-lg font-bold">Grow</p>
                <p className="text-xs text-white/60">
                  Get booked & build your name
                </p>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <ul className="space-y-3 mb-8 text-white/80 text-sm">
            <li>🎧 Beginner to advanced DJ training</li>
            <li>🎛 Hands-on mixing & equipment sessions</li>
            <li>🎚 1:1 mentorship from active DJs</li>
            <li>🔥 Graduation = live performance at our events</li>
          </ul>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-purple-600 rounded-xl hover:scale-105 transition uppercase tracking-wider text-sm">
              Start Your Journey
            </button>
          </div>
        </div>

        {/* VISUAL CARD */}
        <div className="relative flex justify-center">
          <div className="relative bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-left max-w-md w-full group hover:scale-[1.02] transition">
            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wider">
              From Student to DJ
            </h3>

            <p className="text-white/60 mb-4 text-sm">
              A structured program designed to take you from zero to performing
              in real events.
            </p>

            {/* HIGHLIGHT */}
            <p className="text-xs text-purple-400 mb-6">
              Graduation = Live performance at a Ritual Sound event
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 text-center mb-6">
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-white/60">Weeks</p>
              </div>

              <div>
                <p className="text-2xl font-bold">1:1</p>
                <p className="text-xs text-white/60">Mentorship</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Live</p>
                <p className="text-xs text-white/60">Set</p>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full border border-purple-500 text-purple-400 py-2 rounded-lg text-sm uppercase tracking-wider hover:bg-purple-500 hover:text-white transition">
              View Program
            </button>

            {/* GLOW */}
            <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          {/* EXTRA GLOW */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}

export default Academy;
