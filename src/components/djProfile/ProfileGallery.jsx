function ProfileGallery({ dj }) {
  const images = dj.mediaContent?.gallery || [];

  if (!images.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-xl mb-6 neon-text">Moments</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={img.id || i} className="overflow-hidden rounded-xl group">
            <img
              src={img.url} // 🔥 CAMBIO IMPORTANTE
              alt=""
              className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfileGallery;
