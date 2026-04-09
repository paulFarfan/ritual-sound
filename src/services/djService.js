import { supabase } from "../lib/supabase";

export async function getDJs() {
  const { data, error } = await supabase
    .from("dj_profiles")
    .select(
      `
      *,
      dj_sound (*),
      dj_media (*),
      dj_social (*),
      dj_meta (*),
     dj_content (*)
    `,
    )
    .eq("approved", true);

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((dj) => {
    const content = dj.dj_content || [];

    return {
      id: dj.id,
      slug: dj.slug,
      featured: dj.featured,
      profile: {
        name: dj.name,
        tagline: dj.tagline,
        bio: dj.bio,
        location: dj.location,
        origin: dj.origin,
      },

      sound: dj.dj_sound[0],
      media: dj.dj_media[0],
      social: dj.dj_social[0],
      meta: dj.dj_meta[0],

      // 🔥 NUEVO SISTEMA
      mediaContent: {
        mixes: content.filter((c) => c.type === "mix"),
        videos: content.filter((c) => c.type === "video"),
        gallery: content.filter((c) => c.type === "image"),
      },
    };
  });
}

export async function getDJBySlug(slug) {
  const { data, error } = await supabase
    .from("dj_profiles")
    .select(
      `
      *,
      dj_sound (*),
      dj_media (*),
      dj_social (*),
      dj_meta (*),
      dj_content (*)
    `,
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  const content = data.dj_content || [];

  return {
    id: data.id,
    slug: data.slug,

    profile: {
      name: data.name,
      tagline: data.tagline,
      bio: data.bio,
      location: data.location,
      origin: data.origin,
    },

    sound: data.dj_sound?.[0],
    media: data.dj_media?.[0],
    social: data.dj_social?.[0],
    meta: data.dj_meta?.[0],

    mediaContent: {
      mixes: content.filter((c) => c.type === "mix"),
      videos: content.filter((c) => c.type === "video"),
      gallery: content.filter((c) => c.type === "image"),
    },
  };
}
