import AudioSection from "../audio/AudioSection";

function ProfileAudio({ dj }) {
  if (!dj.media?.mixes?.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <AudioSection mixes={dj.media.mixes} />
    </section>
  );
}

export default ProfileAudio;
