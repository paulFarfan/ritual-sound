import { useEffect, useRef } from "react";

function AudioVisualizer({ audioRef }) {
  const canvasRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 🔥 SOLO CREAR UNA VEZ
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();

      analyserRef.current = ctxRef.current.createAnalyser();

      sourceRef.current = ctxRef.current.createMediaElementSource(audio);

      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(ctxRef.current.destination);

      analyserRef.current.fftSize = 64;
    }

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    const render = () => {
      requestAnimationFrame(render);

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
  }, [audioRef]);

  return (
    <canvas ref={canvasRef} width={300} height={80} className="w-full h-20" />
  );
}

export default AudioVisualizer;
