import { useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/images/default-avatar.png";

function DJCard({ dj, variant = "minimal" }) {
  const navigate = useNavigate();

  const isFeatured = variant === "featured";
  const isMinimal = variant === "minimal";

  // 🔥 DATA DIRECTA (ya normalizada)
  const avatar = dj.media.avatar || defaultAvatar;
  const location = dj.profile.location.length
    ? dj.profile.location.join(", ")
    : "Unknown";
  const genres = dj.sound.genres;

  const name = dj.profile.name || "Unknown DJ";
  const tagline = dj.profile.tagline;

  const instagram = dj.social.instagram;
  const instagramUrl = dj.social.instagram_url;

  const handleClick = () => {
    if (!dj.slug) return;
    navigate(`/dj/${dj.slug}`);
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
      {/* GLOW */}
      <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* CARD */}
      <div
        onClick={handleClick}
        className={`relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden transition duration-300 
        group-hover:scale-[1.03] group-hover:border-purple-500
        ${isFeatured ? "md:scale-105" : ""}`}
      >
        {/* IMAGE */}
        <div
          className={`relative overflow-hidden ${isFeatured ? "h-72" : "h-64"}`}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name}
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
          <h3 className="text-lg font-bold uppercase tracking-widest">
            {name}
          </h3>

          {/* 🟣 MINIMAL */}
          {isMinimal && (
            <p className="text-xs text-white/50 mt-1">{location}</p>
          )}

          {/* 🟢 FULL (catalog + featured) */}
          {!isMinimal && (
            <>
              {tagline && (
                <p className="text-sm text-white/70 mt-1">{tagline}</p>
              )}

              {genres.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {genres.slice(0, 2).map((g, i) => (
                    <span
                      key={`genre-${g}-${i}`}
                      className="text-[10px] px-2 py-1 border border-white/20 rounded-full text-white/70"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-xs text-white/40 mt-3">{location}</p>
            </>
          )}

          {/* INSTAGRAM */}
          {isMinimal && instagram && instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/60 hover:text-pink-400 transition mt-2 block"
              onClick={(e) => e.stopPropagation()}
            >
              @{instagram}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default DJCard;
