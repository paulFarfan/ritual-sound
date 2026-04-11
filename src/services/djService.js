import { supabase } from "../lib/supabase";

// 🔥 SELECT CENTRALIZADO
const DJ_SELECT = `
  *,
  dj_sound (*),
  dj_media (*),
  dj_social (*),
  dj_meta (*),
  dj_content (*)
`;

// 🔥 HELPER UNIVERSAL (CLAVE)
function getSingle(item) {
  if (Array.isArray(item)) return item[0] || {};
  return item || {};
}

// 🔥 NORMALIZADOR
function normalizeDJ(dj) {
  const content = dj.dj_content || [];

  // 🔥 normalizar relaciones
  const sound = getSingle(dj.dj_sound);
  const media = getSingle(dj.dj_media);
  const social = getSingle(dj.dj_social);
  const meta = getSingle(dj.dj_meta);

  // 🔥 location siempre array
  const location = Array.isArray(dj.location)
    ? dj.location
    : dj.location
      ? [dj.location]
      : [];

  return {
    id: dj.id,
    slug: dj.slug,
    featured: dj.featured || false,
    user_id: dj.user_id,

    profile: {
      name: dj.name || "",
      tagline: dj.tagline || "",
      bio: dj.bio || "",
      location,
      origin: dj.origin || "",
    },

    sound: {
      genres: Array.isArray(sound.genres) ? sound.genres : [],
      mood: Array.isArray(sound.mood) ? sound.mood : [],
      energy: Array.isArray(sound.energy) ? sound.energy : [],
      vibe: Array.isArray(sound.vibe) ? sound.vibe : [],
    },

    media: {
      avatar: media.avatar || null,
      cover: media.cover || null,
    },

    social: {
      instagram: social.instagram || "",
      instagram_url: social.instagram_url || "",
    },

    meta: {
      experience: meta.experience || "",
      verified: meta.verified || false,
    },

    mediaContent: {
      mixes: content.filter((c) => c.type === "mix"),
      videos: content.filter((c) => c.type === "video"),
      gallery: content.filter((c) => c.type === "image"),
    },
  };
}

// 🔥 TODOS LOS DJs
export async function getAllDJs() {
  const { data, error } = await supabase
    .from("dj_profiles")
    .select(DJ_SELECT)
    .eq("approved", true);

  if (error) {
    console.error("Error fetching DJs:", error);
    return [];
  }

  return data.map(normalizeDJ);
}

// 🔥 FEATURED
export async function getFeaturedDJs() {
  const { data, error } = await supabase
    .from("dj_profiles")
    .select(DJ_SELECT)
    .eq("approved", true)
    .eq("featured", true);

  if (error) {
    console.error("Error fetching featured DJs:", error);
    return [];
  }

  return data.map(normalizeDJ);
}

// 🔥 SINGLE DJ
export async function getDJBySlug(slug) {
  const { data, error } = await supabase
    .from("dj_profiles")
    .select(DJ_SELECT)
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching DJ:", error);
    return null;
  }

  return normalizeDJ(data);
}
