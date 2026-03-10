import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center desert-bg overflow-hidden">
      {/* overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* luces neon blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-bold neon-text mb-6">
            Latin Beats. <br /> Outlaw DJs.
          </h1>

          <p className="text-lg md:text-xl opacity-80 mb-10 max-w-xl">
            Melbourne-based DJ collective hosting underground electronic parties
            and DJ classes.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-purple-600 rounded-lg neon-button hover:scale-105 transition">
              View Events
            </button>

            <button className="px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Learn DJ
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img src={logo} alt="SunnyFun Collective" className="w-56 md:w-72" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
