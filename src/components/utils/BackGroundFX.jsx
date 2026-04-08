function BackgroundFX() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 🔥 SMOKE DEBUG */}
      <div
        className="absolute bottom-0 w-full h-[60%] 
          bg-purple-500/30 blur-[120px] animate-smoke"
      />

      {/* ⚡ LIGHT RAYS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* RAY 1 */}
        <div
          className="absolute left-1/4 top-0 w-[2px] h-full 
  bg-gradient-to-b from-purple-400/40 via-purple-400/10 to-transparent 
  blur-sm animate-ray"
        />

        {/* RAY 2 */}
        <div
          className="absolute left-1/2 top-0 w-[3px] h-full 
  bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent 
  blur-sm animate-ray delay-200"
        />

        {/* RAY 3 */}
        <div
          className="absolute left-3/4 top-0 w-[2px] h-full 
  bg-gradient-to-b from-purple-400/30 via-purple-400/10 to-transparent 
  blur-sm animate-ray delay-500"
        />
      </div>
    </div>
  );
}

export default BackgroundFX;
