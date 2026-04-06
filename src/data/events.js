import night from "../assets/events/night.jpg";
import pool from "../assets/events/pool.jpg";
import sunset from "../assets/events/sunset.jpg";

const events = [
  {
    id: "desert-pulse",
    title: "Desert Pulse",
    date: "Apr 20",
    location: "Melbourne",

    image: sunset,

    description:
      "Sunset session blending deep house and melodic techno as the city fades into night.",

    vibe: "Sunset / Deep",
  },

  {
    id: "midnight-frequency",
    title: "Midnight Frequency",
    date: "May 04",
    location: "Melbourne",

    image: night,

    description:
      "Late-night underground energy with driving techno and immersive soundscapes.",

    vibe: "Night / Techno",
  },

  {
    id: "liquid-groove",
    title: "Liquid Groove",
    date: "May 18",
    location: "Melbourne",

    image: pool,

    description:
      "Day party with house rhythms, sun, and high-energy crowd connection.",

    vibe: "Day / House",
  },
];

export default events;
