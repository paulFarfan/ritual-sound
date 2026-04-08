import { useParams } from "react-router-dom";
import djs from "../../data/djs";

import ProfileHero from "./ProfileHero";
import ProfileAudio from "./ProfileAudio";
import ProfileBio from "./ProfileBio";
import ProfileEvents from "./ProfileEvents";
import ProfileGallery from "./ProfileGallery";
import ProfileFooter from "./ProfileFooter";
import ProfileVideos from "./ProfileVideos";

function DJProfile() {
  const { slug } = useParams();

  const dj = djs.find((d) => d.slug === slug);

  if (!dj) return <div>Not found</div>;

  return (
    <main className="bg-neutral-900 text-white">
      <ProfileHero dj={dj} />
      <ProfileBio dj={dj} />
      <ProfileAudio dj={dj} />
      <ProfileEvents dj={dj} />
      <ProfileGallery dj={dj} />
      <ProfileVideos dj={dj} />
      <ProfileFooter dj={dj} />
    </main>
  );
}

export default DJProfile;
