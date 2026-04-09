import AudioSection from "../audio/AudioSection";

function ProfileAudio({ dj }) {
  const mixes = dj.mediaContent?.mixes || [];

  if (!mixes.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <AudioSection mixes={mixes} />
    </section>
  );
}

export default ProfileAudio;
