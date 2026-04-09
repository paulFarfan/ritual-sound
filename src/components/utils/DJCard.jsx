import { useNavigate } from "react-router-dom";

function DJCard({ dj, variant = "minimal" }) {
  const isCatalog = variant === "catalog";
  const isFeatured = variant === "featured";
  const navigate = useNavigate();

  const avatar = dj.media?.avatar;
  const location = dj.profile?.location?.[0];
  const genres = dj.sound?.genres || [];
  const mood = dj.sound?.mood || [];

  return (
    <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
      {/* GLOW */}
      <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* CARD */}
      <div
        onClick={() => navigate(`/dj/${dj.slug}`)}
        className={`relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden transition duration-300 
        group-hover:scale-[1.03] group-hover:border-purple-500
        ${isFeatured ? "md:scale-105" : ""}
      `}
      >
        {/* IMAGE */}
        <div
          className={`relative overflow-hidden ${isFeatured ? "h-72" : "h-64"}`}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={dj.profile?.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/30 text-sm">
              No Image
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          {/* NAME */}
          <h3 className="text-lg font-bold uppercase tracking-widest">
            {dj.profile?.name}
          </h3>

          {/* 🔥 MINIMAL */}
          {!isCatalog && !isFeatured && (
            <p className="text-xs text-white/50">
              {location} • {genres.join(", ")}
            </p>
          )}

          {/* ⚡ CATALOG + FEATURED */}
          {(isCatalog || isFeatured) && (
            <>
              {/* TAGLINE */}
              {dj.profile?.tagline && (
                <p className="text-sm text-white/70 mt-1">
                  {dj.profile.tagline}
                </p>
              )}

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {genres.slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-1 border border-white/20 rounded-full text-white/70"
                  >
                    {s}
                  </span>
                ))}

                {mood.slice(0, 2).map((m) => (
                  <span
                    key={m}
                    className="text-[10px] px-2 py-1 border border-purple-500/40 text-purple-300 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* LOCATION */}
              <p className="text-xs text-white/40 mt-3">{location}</p>
            </>
          )}

          {/* INSTAGRAM */}
          {!isCatalog && !isFeatured && dj.social?.instagram && (
            <a
              href={dj.social.instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/60 hover:text-pink-400 transition"
              onClick={(e) => e.stopPropagation()} // 🔥 evita navegar al perfil
            >
              @{dj.social.instagram}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default DJCard;
