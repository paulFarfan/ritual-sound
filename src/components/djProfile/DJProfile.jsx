import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDJBySlug } from "../../services/djService.js";
import useAuth from "../../hooks/useAuth";

import ProfileHero from "./ProfileHero";
import ProfileAudio from "./ProfileAudio";
import ProfileBio from "./ProfileBio";
import ProfileEvents from "./ProfileEvents";
import ProfileGallery from "./ProfileGallery";
import ProfileFooter from "./ProfileFooter";
import ProfileVideos from "./ProfileVideos";

function DJProfile() {
  const { slug } = useParams();
  const { session } = useAuth();

  const [dj, setDj] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDJ = async () => {
      const data = await getDJBySlug(slug);
      setDj(data);
      setLoading(false);
    };

    loadDJ();
  }, [slug]);

  // 🔥 calcular ownership SOLO cuando hay datos
  const isOwner = !!session && !!dj && session.user.id === dj.user_id;

  // ⏳ loading
  if (loading) {
    return (
      <main className="bg-neutral-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-white/60">Loading profile...</p>
      </main>
    );
  }

  // ❌ no encontrado
  if (!dj) {
    return (
      <main className="bg-neutral-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-white/60">DJ not found</p>
      </main>
    );
  }

  return (
    <main className="bg-neutral-900 text-white">
      <ProfileHero dj={dj} isOwner={isOwner} />
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
