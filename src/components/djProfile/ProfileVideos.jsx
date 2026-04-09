function getYouTubeEmbed(url) {
  try {
    const parsed = new URL(url);

    // youtube.com/watch?v=ID
    if (parsed.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }

    // youtu.be/ID
    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${parsed.pathname}`;
    }

    // ya es embed
    if (parsed.pathname.includes("/embed/")) {
      return url;
    }

    return null;
  } catch {
    return null;
  }
}
function ProfileVideos({ dj }) {
  const videos = dj.mediaContent?.videos || [];

  if (!videos.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-xl mb-6 neon-text">Live Sets</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => {
          const embedUrl = getYouTubeEmbed(video.url);

          if (!embedUrl) return null;

          return (
            <div key={video.id || video.url} className="space-y-2">
              <iframe
                src={embedUrl}
                className="w-full h-64 rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <p className="text-sm text-white/60">
                {video.title || "Untitled set"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProfileVideos;
