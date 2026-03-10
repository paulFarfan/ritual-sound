import djs from "../data/djs";
import DJCard from "../components/DJCard";

function DJs() {
  return (
    <section id="djs" className="py-28 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Meet Our DJs
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {djs.map((dj) => (
            <DJCard key={dj.id} dj={dj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DJs;
