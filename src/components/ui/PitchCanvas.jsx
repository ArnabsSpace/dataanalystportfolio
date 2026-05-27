import { useEffect, useRef } from 'react';

// Tactical player positions as [x%, y%] fractions of canvas size
const PLAYER_POSITIONS = [
  [0.13, 0.50], [0.24, 0.28], [0.24, 0.72],
  [0.36, 0.18], [0.36, 0.50], [0.36, 0.82],
  [0.50, 0.30], [0.50, 0.70], [0.64, 0.18],
  [0.64, 0.50], [0.64, 0.82], [0.78, 0.50],
];

const HOME_COLOR = '#00ff87';
const AWAY_COLOR = '#00d4ff';
const LINE_DIST_FRACTION = 0.26; // max distance for drawing connection lines

/**
 * PitchCanvas
 * Renders an animated tactical pitch on a <canvas> element.
 * - Player dots float gently via sine-wave offset
 * - Nearby players are connected with faint tactical lines
 * - Canvas resizes responsively
 */
export default function PitchCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;

    // Build particle objects from position array
    const particles = PLAYER_POSITIONS.map(([px, py], i) => ({
      px, py,
      t: Math.random() * Math.PI * 2,      // random phase offset
      r: i === 0 || i === 11 ? 4 : 3,       // goalkeepers slightly larger
      color: i < 6 ? HOME_COLOR : AWAY_COLOR,
    }));

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function drawPitchLines(W, H) {
      ctx.strokeStyle = 'rgba(0,255,135,0.04)';
      ctx.lineWidth   = 1;
      // Outer boundary
      ctx.strokeRect(W * 0.05, H * 0.05, W * 0.9, H * 0.9);
      // Halfway line
      ctx.beginPath();
      ctx.moveTo(W * 0.5, H * 0.05);
      ctx.lineTo(W * 0.5, H * 0.95);
      ctx.stroke();
      // Centre circle
      ctx.beginPath();
      ctx.arc(W * 0.5, H * 0.5, H * 0.18, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawConnections(pts, W) {
      const maxDist = W * LINE_DIST_FRACTION;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.13;
            ctx.strokeStyle = `rgba(0,255,135,${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function drawParticle(p) {
      // Solid dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Radial glow
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
      grd.addColorStop(0, p.color === HOME_COLOR
        ? 'rgba(0,255,135,0.18)'
        : 'rgba(0,212,255,0.18)'
      );
      grd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }

    function frame() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      drawPitchLines(W, H);

      // Advance phase & compute screen position
      const pts = particles.map((p) => {
        p.t += 0.008;
        return {
          ...p,
          x: W * p.px + Math.sin(p.t) * 14,
          y: H * p.py + Math.cos(p.t * 0.7) * 9,
        };
      });

      drawConnections(pts, W);
      pts.forEach(drawParticle);

      animId = requestAnimationFrame(frame);
    }

    frame();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
