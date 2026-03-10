function HireDJ() {
  return (
    <section id="hire" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-text">
          Hire a DJ
        </h2>

        <p className="max-w-2xl mx-auto opacity-80 mb-16">
          Book professional DJs from the SunnyFun Collective for your next
          event. From underground parties to corporate events, we bring the
          desert beats.
        </p>

        {/* SERVICES */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-neutral-900 p-8 rounded-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
            <h3 className="text-xl font-bold mb-3">Private Parties</h3>
            <p className="opacity-70 text-sm">
              Birthdays, house parties and celebrations.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
            <h3 className="text-xl font-bold mb-3">Corporate Events</h3>
            <p className="opacity-70 text-sm">
              Professional DJs for company events.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
            <h3 className="text-xl font-bold mb-3">Weddings</h3>
            <p className="opacity-70 text-sm">
              Music for unforgettable celebrations.
            </p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl border border-white/10 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
            <h3 className="text-xl font-bold mb-3">Festivals</h3>
            <p className="opacity-70 text-sm">
              High energy DJs for large events.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="px-10 py-4 bg-purple-600 rounded-lg neon-button hover:scale-105 transition text-lg">
            Request a DJ
          </button>
        </div>
      </div>
    </section>
  );
}

export default HireDJ;
