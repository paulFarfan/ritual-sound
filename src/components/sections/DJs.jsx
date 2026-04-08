import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import djs from "../../data/djs";
import DJCard from "../utils/DJCard";

import { useNavigate } from "react-router-dom";

function DJs() {
  const navigate = useNavigate();
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    rubberband: false,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.2,
          spacing: 24,
        },
      },
    },
  });

  return (
    <section
      id="djs"
      className="relative py-20 md:py-28 bg-neutral-900 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 neon-text">
          The Collective
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          A group of DJs shaping Melbourne’s underground electronic scene.
        </p>

        {/* CAROUSEL */}
        <div ref={sliderRef} className="keen-slider">
          {djs.map((dj) => (
            <div key={dj.id} className="keen-slider__slide">
              <DJCard dj={dj} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            className="px-6 py-3 border border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition uppercase tracking-wider text-sm"
            onClick={() => navigate("/catalog")}
          >
            Explore All DJs
          </button>
        </div>
      </div>
    </section>
  );
}

export default DJs;
