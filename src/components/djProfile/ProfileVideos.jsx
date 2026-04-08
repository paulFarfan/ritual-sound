function getYouTubeEmbed(url) {
  const id = url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${id}`;
}

function ProfileVideos({ dj }) {
  const videos = dj.media?.videos || [];

  if (!videos.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-xl mb-6 neon-text">Live Sets</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video, i) => (
          <div key={i} className="space-y-2">
            <iframe
              src={getYouTubeEmbed(video.url)}
              className="w-full h-64 rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <p className="text-sm text-white/60">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfileVideos;
