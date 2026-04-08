import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import img1 from "../../assets/hero/1.jpg";
import img2 from "../../assets/hero/2.jpg";
import img3 from "../../assets/hero/3.jpg";

const images = [img1, img2, img3];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center desert-bg text-white overflow-hidden">
      {/* 🔥 BACKGROUND ROTATING */}
      <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* GLOW */}
      <div className="absolute top-10 left-10 w-40 md:w-72 h-40 md:h-72 bg-purple-600 blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 md:w-72 h-40 md:h-72 bg-blue-500 blur-3xl opacity-30"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl px-6 w-full">
        {/* GRID (como lo tenías) */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-10 items-center">
          {/* LEFT */}
          <div>
            {/* HEADLINE */}
            <h1 className="font-bold neon-text leading-[0.9] tracking-tight text-[clamp(3rem,7vw,5rem)]">
              <span className="block whitespace-nowrap">Ritual Sound.</span>
              <span className="block whitespace-nowrap">Elite DJs.</span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="mt-4 text-purple-400 uppercase tracking-widest text-sm">
              Events • Talent • Culture
            </p>

            {/* DESCRIPTION */}
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl">
              A DJ platform creating underground events, developing new talent,
              and connecting DJs with real opportunities.
            </p>
          </div>

          {/* RIGHT (logo) */}
          <div className="flex justify-center md:justify-center">
            <img
              src={logo}
              alt="Ritual Sound"
              className="w-44 md:w-64 lg:w-72 drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            />
          </div>
        </div>

        {/* BUTTONS (abajo como te gusta) */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="#events"
            className="bg-purple-600 px-6 py-3 md:px-8 md:py-4 rounded-lg text-lg font-semibold hover:scale-105 transition uppercase tracking-wider"
          >
            Explore Events
          </a>

          <a
            href="#academy"
            className="border border-white/50 px-6 py-3 md:px-8 md:py-4 rounded-lg text-lg hover:bg-white hover:text-black transition uppercase tracking-wider"
          >
            Join the Collective
          </a>
        </div>

        {/* SCROLL HINT */}
        <div className="mt-10 text-center text-white/40 text-xs tracking-widest animate-pulse">
          SCROLL
        </div>
      </div>
    </section>
  );
}

export default Hero;
