import { useState } from "react";
import { supabase } from "../../lib/supabase";
import defaultAvatar from "../../assets/images/default-avatar.png";
import EditProfileModal from "./EditProfileModal";

function ProfileHero({ dj, isOwner }) {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const avatar = dj?.media?.avatar || defaultAvatar;
  const cover = dj?.media?.cover || null;

  const locations = Array.isArray(dj.profile.location)
    ? dj.profile.location
    : dj.profile.location
      ? [dj.profile.location]
      : [];

  // 🔥 UPLOAD GENÉRICO (avatar / cover)
  const uploadImage = async (file, type) => {
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${dj.id}-${type}-${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("dj-media")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      console.error(uploadError.message);
      return;
    }

    const { data } = supabase.storage.from("dj-media").getPublicUrl(fileName);

    const url = data.publicUrl;

    await supabase.from("dj_media").upsert(
      {
        dj_id: dj.id,
        [type]: url,
      },
      { onConflict: "dj_id" },
    );

    window.location.reload();
  };

  // 🔥 HANDLERS
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    uploadImage(file, "avatar");
  };

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    uploadImage(file, "cover");
  };

  const handleAvatarClick = () => {
    if (isOwner) {
      document.getElementById("avatarUpload").click();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <section className="relative">
        {/* 🔥 HERO / COVER */}
        <div
          className="relative h-[60vh] cursor-pointer group"
          onClick={() =>
            isOwner && document.getElementById("coverUpload").click()
          }
        >
          {cover ? (
            <img
              src={cover}
              alt={dj.profile.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-neutral-800" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* INPUT COVER */}
          <input
            type="file"
            accept="image/*"
            id="coverUpload"
            className="hidden"
            onChange={handleCoverUpload}
          />

          {/* EDIT COVER */}
          {isOwner && (
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition">
              Edit
            </div>
          )}
        </div>

        {/* 🔥 CONTENT */}
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          <div className="-mt-16 flex items-center gap-4">
            {/* AVATAR */}
            <div className="relative group">
              <img
                src={avatar}
                alt={dj.profile.name}
                onClick={handleAvatarClick}
                className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-2xl border-4 border-neutral-900 shadow-lg cursor-pointer hover:scale-105 transition"
              />

              {/* INPUT AVATAR */}
              <input
                type="file"
                accept="image/*"
                id="avatarUpload"
                className="hidden"
                onChange={handleAvatarUpload}
              />

              {/* EDIT AVATAR */}
              {isOwner && (
                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition">
                  Edit
                </div>
              )}
            </div>

            {/* TEXT */}
            <div className="pb-2 flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold neon-text">
                {dj.profile.name}
              </h1>

              {dj.profile.tagline && (
                <p className="text-white/70 mt-1">{dj.profile.tagline}</p>
              )}

              {/* LOCATION + ORIGIN */}
              <p className="text-sm text-white/50 mt-2">
                {[dj.profile.origin, ...locations].filter(Boolean).join(" • ")}
              </p>

              {/* EXPERIENCE */}
              {dj.meta?.experience && (
                <p className="text-xs text-white/40 mt-1">
                  {dj.meta.experience}
                </p>
              )}

              {/* EDIT PROFILE */}
              {isOwner && (
                <button
                  onClick={() => setEditOpen(true)}
                  className="mt-3 w-fit px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition text-sm"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* TAGS */}
          <div className="flex gap-2 mt-6 flex-wrap">
            {(dj.sound.genres || []).map((s, i) => (
              <span
                key={`genre-${s}-${i}`}
                className="text-xs px-3 py-1 border border-white/20 rounded-full"
              >
                {s}
              </span>
            ))}

            {(dj.sound.mood || []).map((m, i) => (
              <span
                key={`mood-${m}-${i}`}
                className="text-xs px-3 py-1 border border-purple-500/40 text-purple-300 rounded-full"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔍 PREVIEW AVATAR */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={avatar}
            alt={dj.profile.name}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* ✏️ EDIT PROFILE MODAL */}
      {editOpen && (
        <EditProfileModal dj={dj} onClose={() => setEditOpen(false)} />
      )}
    </>
  );
}

export default ProfileHero;
