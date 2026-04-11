import DJCard from "../utils/DJCard";

function DJGrid({ djs = [] }) {
  if (djs.length === 0) {
    return (
      <div className="text-center py-20 text-white/50">
        No DJs found with those filters.
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {djs.map((dj) => (
          <DJCard key={dj.id} dj={dj} variant="catalog" />
        ))}
      </div>
    </section>
  );
}

export default DJGrid;
