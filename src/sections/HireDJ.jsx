function HireDJ() {
  return (
    <section
      id="hire"
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 neon-text">
          Hire a DJ
        </h2>

        {/* SUBTITLE */}
        <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
          Any vibe. Any event. We’ve got you.
        </p>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto text-white/70 mb-14">
          From intimate gatherings to high-energy events, we match you with the
          right DJ from our collective — tailored to your sound, your crowd, and
          your moment.
        </p>

        {/* SERVICES / VIBES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Private Parties",
              desc: "House parties, birthdays & intimate vibes",
            },
            {
              title: "Corporate Events",
              desc: "Clean, professional & adaptable sound",
            },
            {
              title: "Weddings",
              desc: "Emotional moments & unforgettable nights",
            },
            {
              title: "Festivals",
              desc: "High energy & crowd-driven performances",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group bg-neutral-900/60 backdrop-blur border border-white/10 p-6 rounded-2xl overflow-hidden hover:scale-[1.03] transition"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition blur-2xl"></div>

              <h3 className="relative text-lg font-bold mb-2 uppercase tracking-wider">
                {item.title}
              </h3>

              <p className="relative text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* VALUE PROPS */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-white/60">
          <p>✔ Curated DJs</p>
          <p>✔ Custom music selection</p>
          <p>✔ Professional setup</p>
          <p>✔ Reliable & seamless experience</p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-purple-600 rounded-xl hover:scale-105 transition uppercase tracking-wider text-sm">
            Request a DJ
          </button>
        </div>
      </div>
    </section>
  );
}

export default HireDJ;
