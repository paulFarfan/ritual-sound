import { useState, useMemo, useEffect } from "react";
import { getAllDJs } from "../../services/djService";

import CatalogHeader from "../../components/catalog/CatalogHeader";
import FeaturedCarousel from "../../components/catalog/FeaturedCarousel";
import FiltersBar from "../../components/catalog/FiltersBar";
import DJGrid from "../../components/catalog/DJGrid";

function Catalog() {
  const [filters, setFilters] = useState({
    genres: [],
    location: [],
  });

  const [djs, setDjs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDJs = async () => {
      const data = await getAllDJs();
      setDjs(data);
      setLoading(false);
    };

    loadDJs();
  }, []);

  // 🔥 SIMPLE Y DIRECTO
  const filtered = useMemo(() => {
    return djs.filter((dj) => {
      const genres = dj.sound.genres;
      const locations = dj.profile.location;

      const matchGenres =
        !filters.genres.length ||
        filters.genres.some((g) =>
          genres.some((item) => item.toLowerCase() === g.toLowerCase()),
        );

      const matchLocation =
        !filters.location.length ||
        filters.location.some((loc) =>
          locations.some((item) => item.toLowerCase() === loc.toLowerCase()),
        );

      return matchGenres && matchLocation;
    });
  }, [filters, djs]);

  // 🔥 evitar recalcular cada render
  const featuredDJs = useMemo(() => djs.filter((dj) => dj.featured), [djs]);

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p className="text-white/60">Loading DJs...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <CatalogHeader />

        {/* 🔥 FEATURED */}
        <FeaturedCarousel djs={featuredDJs} />

        {/* 🎛️ FILTERS */}
        <FiltersBar filters={filters} setFilters={setFilters} />

        {/* 🧩 GRID */}
        <DJGrid djs={filtered} />
      </div>
    </main>
  );
}

export default Catalog;
