import { useEffect, useRef } from "react";

function AudioVisualizer({ audioRef }) {
  const canvasRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const ctxRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    const c = canvas.getContext("2d");

    // 🔥 crear contexto una sola vez
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;

      analyserRef.current = ctx.createAnalyser();
      analyserRef.current.fftSize = 64;

      sourceRef.current = ctx.createMediaElementSource(audio);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(ctx.destination);

      // opcional: exponer para el player
      window.audioContext = ctx;
    }

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // 🔥 resize real del canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 🔥 render controlado
    const render = () => {
      animationRef.current = requestAnimationFrame(render);

      // 👉 solo dibujar si el audio está activo
      if (audio.paused) return;

      analyser.getByteFrequencyData(dataArray);

      c.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / bufferLength;

      dataArray.forEach((value, i) => {
        const height = value / 2;

        c.fillStyle = "#a855f7";
        c.fillRect(i * barWidth, canvas.height - height, barWidth - 2, height);
      });
    };

    render();

    // 🧹 cleanup (CRÍTICO)
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [audioRef]);

  return <canvas ref={canvasRef} className="w-full h-20" />;
}

export default AudioVisualizer;
