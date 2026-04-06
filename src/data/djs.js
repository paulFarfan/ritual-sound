import maxi from "../assets/djs/maxi.jpg";
import bautista from "../assets/djs/bautista.jpg";
import andre from "../assets/djs/andres.jpg";

const djs = [
  {
    id: "maxi-horta",
    name: "DJ Maxi Horta",
    genre: "House / Techno",
    city: "Melbourne",

    instagram: "maxi.horta",
    instagramUrl: "https://www.instagram.com/maxi.horta/",

    image: maxi,

    // 🔥 ya pensando a futuro
    bio: "Underground DJ focused on deep grooves and late-night energy.",
    styles: ["House", "Techno"],
    experience: "5+ years",

    featured: true,
  },

  {
    id: "bautista",
    name: "DJ Bautista",
    genre: "Tech House",
    city: "Melbourne",

    instagram: "bauti_gallo1",
    instagramUrl: "https://www.instagram.com/bauti_gallo1/",

    image: bautista,

    bio: "Energetic tech house sets with strong groove and crowd connection.",
    styles: ["Tech House"],
    experience: "3+ years",

    featured: true,
  },

  {
    id: "andre-guevara",
    name: "DJ Andres Guevara",
    genre: "Bass / EDM",
    city: "Melbourne",

    instagram: "djandresguevara",
    instagramUrl: "https://www.instagram.com/djandresguevara/",

    image: andre,

    bio: "High-energy bass and EDM with festival vibes.",
    styles: ["EDM", "Bass"],
    experience: "4+ years",

    featured: false,
  },
];

export default djs;
