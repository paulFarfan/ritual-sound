import maxi from "../assets/djs/maxi.jpg";
import maxiHero from "../assets/djs/maxi-hero.jpg";
import bautista from "../assets/djs/bautista.jpg";
import bautistaHero from "../assets/djs/bautista-hero.jpg";
import andres from "../assets/djs/andres.jpg";
import andresHero from "../assets/djs/andres-hero.jpg";
import alfonso from "../assets/djs/alfonso.jpg";
import alfonsoHero from "../assets/djs/alfonso-hero.jpg";
import maxiTracks from "../assets/djs/hard-techno.mp3";
import img1 from "../assets/djs/maxi1.png";
import img2 from "../assets/djs/maxi2.png";
import img3 from "../assets/djs/maxi3.png";
const djs = [
  {
    id: "maxi-horta",
    slug: "maxi-horta",

    // 👤 PROFILE
    profile: {
      name: "DJ Maxi Horta",
      tagline: "Late night hypnotic energy",
      bio: "Underground DJ focused on deep grooves and late-night energy.",
      origin: "Chile",
      location: ["Melbourne"],
    },

    // 🎧 SOUND
    sound: {
      genres: ["House", "Techno"],
      mood: ["Deep", "Hypnotic"],
      energy: ["Driving"],
      vibe: ["Underground", "Dark"],
    },

    // 🎯 BOOKING
    booking: {
      eventTypes: ["Clubs", "Festivals", "Private Parties"],
      availability: "open",
    },

    // 🖼️ MEDIA
    media: {
      avatar: maxi,
      cover: maxiHero,
      mixes: [
        {
          type: "file",
          title: "Hard Techno Set",
          url: maxiTracks,
        },
      ],
      videos: [
        {
          type: "youtube",
          title: "Titanium",
          url: "https://youtube.com/watch?v=JRfuAukYTKg&list=RDCLAK5uy_mGt2vOEjyX4yUCxY4OrzVzZLR8nPXGPgE",
          featured: true,
        },
        {
          type: "youtube",
          title: "Don't You Worry Child",
          url: "https://youtube.com/watch?v=1y6smkh6c-0&list=RDCLAK5uy_mGt2vOEjyX4yUCxY4OrzVzZLR8nPXGPgE",
        },
      ],
      gallery: [img1, img2, img3],
    },

    // 🌐 SOCIAL
    social: {
      instagram: "maxi.horta",
      instagramUrl: "https://www.instagram.com/maxi.horta/",
    },

    // 🔐 PERMISSIONS
    permissions: {
      verified: true,
      canUploadAudio: true,
    },

    // ⚙️ META
    meta: {
      experience: "5+ years",
      featured: true,
    },
  },

  {
    id: "bautista",
    slug: "bautista",

    profile: {
      name: "DJ Bautista",
      tagline: "Raw groove with high energy",
      bio: "Energetic tech house sets with strong groove and crowd connection.",
      origin: "Argentina",
      location: ["Melbourne"],
    },

    sound: {
      genres: ["House", "Techno"],
      mood: ["Raw", "Industrial"],
      energy: ["Driving"],
      vibe: ["Underground", "Dark"],
    },

    booking: {
      eventTypes: ["Clubs", "Weddings", "Private Parties"],
      availability: "open",
    },

    media: {
      avatar: bautista,
      cover: bautistaHero,
      mixes: [],
      videos: [],
      gallery: [],
    },

    social: {
      instagram: "bauti_gallo1",
      instagramUrl: "https://www.instagram.com/bauti_gallo1/",
    },

    permissions: {
      verified: true,
      canUploadAudio: true,
    },

    meta: {
      experience: "3+ years",
      featured: true,
    },
  },

  {
    id: "andres-guevara",
    slug: "andres-guevara",

    profile: {
      name: "DJ Andres Guevara",
      tagline: "High energy bass & festival vibes",
      bio: "High-energy bass and EDM with festival vibes.",
      origin: "Colombia",
      location: ["Melbourne"],
    },

    sound: {
      genres: ["Bass", "EDM"],
      mood: ["Deep", "Hypnotic"],
      energy: ["Driving"],
      vibe: ["Underground", "Dark"],
    },

    booking: {
      eventTypes: ["Events", "Weddings", "Private Parties"],
      availability: "open",
    },

    media: {
      avatar: andres,
      cover: andresHero,
      mixes: [],
      videos: [],
      gallery: [],
    },

    social: {
      instagram: "djandresguevara",
      instagramUrl: "https://www.instagram.com/djandresguevara/",
    },

    permissions: {
      verified: true,
      canUploadAudio: true,
    },

    meta: {
      experience: "12+ years",
      featured: true,
    },
  },

  {
    id: "alfonso",
    slug: "alfonso",

    profile: {
      name: "DJ Alfonso",
      tagline: "Afro grooves with raw energy",
      bio: "Energetic afro beat sets with strong groove and chill vibes.",
      origin: "Colombia",
      location: ["Melbourne"],
    },

    sound: {
      genres: ["Afro Beat", "Hardcore"],
      mood: ["Raw", "Bass"],
      energy: ["Driving"],
      vibe: ["Chill", "Dark"],
    },

    booking: {
      eventTypes: ["Clubs", "Weddings", "Private Parties"],
      availability: "open",
    },

    media: {
      avatar: alfonso,
      cover: alfonsoHero,
      mixes: [],
      videos: [],
      gallery: [],
    },

    social: {
      instagram: "aalealp",
      instagramUrl: "https://www.instagram.com/aalealp/",
    },

    permissions: {
      verified: false,
      canUploadAudio: false,
    },

    meta: {
      experience: "1+ years",
      featured: true,
    },
  },
];

export default djs;
