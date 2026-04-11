function ProfileFooter({ dj }) {
  return (
    <section className="text-center py-16">
      <a
        href={dj.social.instagram_url}
        target="_blank"
        className="text-white/60 hover:text-white"
      >
        @{dj.social.instagram}
      </a>

      <div className="mt-6">
        <button className="px-6 py-3 border border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500 hover:text-white transition">
          Request Booking
        </button>
      </div>
    </section>
  );
}

export default ProfileFooter;
