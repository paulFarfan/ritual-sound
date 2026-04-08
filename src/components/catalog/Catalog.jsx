import { useState, useMemo } from "react";
import djs from "../../data/djs";

import CatalogHeader from "../../components/catalog/CatalogHeader";
import FeaturedCarousel from "../../components/catalog/FeaturedCarousel";
import FiltersBar from "../../components/catalog/FiltersBar";
import DJGrid from "../../components/catalog/DJGrid";

function Catalog() {
  const [filters, setFilters] = useState({});

  // 🔧 MAPEO DE CAMPOS (CLAVE)
  const getField = (dj, key) => {
    switch (key) {
      case "genres":
        return dj.sound?.genres || [];
      case "mood":
        return dj.sound?.mood || [];
      case "energy":
        return dj.sound?.energy || [];
      case "location":
        return dj.profile?.location || [];
      case "eventTypes":
        return dj.booking?.eventTypes || [];
      default:
        return [];
    }
  };

  // 🔍 FILTRADO CORRECTO
  const filtered = useMemo(() => {
    return djs.filter((dj) => {
      return Object.entries(filters).every(([key, values]) => {
        if (!Array.isArray(values) || values.length === 0) return true;

        return values.some((v) =>
          getField(dj, key).some(
            (item) => item.toLowerCase() === v.toLowerCase(),
          ),
        );
      });
    });
  }, [filters]);

  // 🔎 DETECTAR SI HAY FILTROS ACTIVOS
  const hasFilters = Object.values(filters).some(
    (arr) => Array.isArray(arr) && arr.length > 0,
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <CatalogHeader />

        {/* 🔥 FEATURED */}
        <FeaturedCarousel djs={djs.filter((dj) => dj.meta?.featured)} />

        {/* 🎛️ FILTERS */}
        <FiltersBar filters={filters} setFilters={setFilters} />

        {/* 🧩 GRID */}
        <DJGrid djs={hasFilters ? filtered : djs} />
      </div>
    </main>
  );
}

export default Catalog;
