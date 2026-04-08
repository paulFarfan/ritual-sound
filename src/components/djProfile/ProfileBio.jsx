function ProfileBio({ dj }) {
  if (!dj.profile.bio) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-6 text-center">
      <p className="text-white/70 leading-relaxed">{dj.profile.bio}</p>
    </section>
  );
}

export default ProfileBio;
