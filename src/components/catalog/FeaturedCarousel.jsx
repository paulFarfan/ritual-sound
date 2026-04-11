import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import DJCard from "../utils/DJCard";

function FeaturedCarousel({ djs = [] }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 24 },
      },
    },
  });

  if (djs.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-xl md:text-2xl neon-text mb-6">Current Energy</h2>

      <div ref={sliderRef} className="keen-slider">
        {djs.slice(0, 10).map((dj, index) => (
          <div key={`${dj.id}-${index}`} className="keen-slider__slide">
            <DJCard dj={dj} variant="featured" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCarousel;
