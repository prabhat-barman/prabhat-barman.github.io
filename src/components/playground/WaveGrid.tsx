import React, { useRef, useEffect } from 'react';

export const WaveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const cols = 28;
    const rows = 12;

    const render = () => {
      step += 0.035;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const cellW = width / (cols + 1);
      const cellH = height / (rows + 1);

      for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
          const originX = c * cellW;
          const originY = r * cellH;

          // Distance from mouse
          const dx = originX - mouseRef.current.x;
          const dy = originY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          let offset = Math.sin(step + c * 0.25 + r * 0.3) * 6;

          let nodeColor = 'rgba(255, 255, 255, 0.25)';
          let radius = 2;

          if (dist < maxDist && mouseRef.current.active) {
            const influence = (1 - dist / maxDist);
            offset += influence * 24 * Math.sin(step * 2);
            nodeColor = `rgba(204, 255, 0, ${0.4 + influence * 0.6})`;
            radius = 2 + influence * 3.5;
          }

          const currentY = originY + offset;

          ctx.beginPath();
          ctx.arc(originX, currentY, radius, 0, Math.PI * 2);
          ctx.fillStyle = nodeColor;
          ctx.fill();

          // Connect horizontal neighbors subtly
          if (c < cols) {
            ctx.beginPath();
            ctx.moveTo(originX, currentY);
            const nextX = (c + 1) * cellW;
            const nextOffset = Math.sin(step + (c + 1) * 0.25 + r * 0.3) * 6;
            ctx.lineTo(nextX, originY + nextOffset);
            ctx.strokeStyle = dist < maxDist && mouseRef.current.active ? 'rgba(204, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative bg-[#0E0E10] text-[#F9F9F6] p-6 sm:p-8 rounded-2xl border border-black/10 overflow-hidden min-h-[340px] flex flex-col justify-between">
      {/* Top status */}
      <div className="flex items-center justify-between font-mono-tech text-xs text-white/50 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
          <span>EXP_02 :: CANVAS_WAVE_HARMONICS</span>
        </div>
        <div className="text-white/60">
          60 FPS • DAMPED SINE EQUATION
        </div>
      </div>

      {/* Canvas container */}
      <div className="w-full h-[220px] relative my-auto">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-pointer"
        />
      </div>

      {/* Footer info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs font-mono-tech text-white/50">
        <span>Hover cursor across canvas nodes to generate radial wave disturbance</span>
        <span className="text-[#CCFF00]">Native 2D Context • 0 KB Dependency</span>
      </div>
    </div>
  );
};
