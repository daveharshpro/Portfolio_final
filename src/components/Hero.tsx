"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// ── Fixed canvas grid ──────────────────────────────────────────────────────
const CANVAS_W = 460;
const CANVAS_H = 500;
const CHAR_W   = 8;
const CHAR_H   = 13.5;
const FONT_SZ  = 10;
const COLS     = Math.floor(CANVAS_W / CHAR_W);   // ~57
const ROWS     = Math.floor(CANVAS_H / CHAR_H);   // ~37

// ── Dome silhouette density ────────────────────────────────────────────────
function density(col: number, row: number, expand = 1.0): number {
  const nx = col / COLS;
  const ny = row / ROWS;
  let hw: number;

  if      (ny < 0.08) hw = (ny / 0.08) * 0.10;
  else if (ny < 0.30) hw = 0.10 + Math.pow((ny - 0.08) / 0.22, 0.6) * 0.36;
  else if (ny < 0.62) hw = 0.46 + Math.pow((ny - 0.30) / 0.32, 0.8) * 0.04;
  else if (ny < 0.85) hw = 0.50 - ((ny - 0.62) / 0.23) * 0.12;
  else                hw = 0.38 - Math.pow((ny - 0.85) / 0.15, 0.7) * 0.18;

  hw *= expand;
  const dx = Math.abs(nx - 0.5);
  if (dx >= hw) return 0;

  return (1 - dx / hw) * (0.5 + 0.5 * Math.exp(-5 * Math.pow(ny - 0.42, 2)));
}

// ── Component ──────────────────────────────────────────────────────────────
const AsciiRobot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0.5, y: 0.45 });
  const tickRef   = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width  = CANVAS_W;
    canvas.height = CANVAS_H;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;


    const handleMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current.x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      mouseRef.current.y = Math.max(0, Math.min(1, (e.clientY - r.top)  / r.height));
    };
    window.addEventListener('mousemove', handleMouse);

    function drawFrame() {
      const t = tickRef.current;

      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      ctx.font = `bold ${FONT_SZ}px 'Courier New', monospace`;
      ctx.textBaseline = 'top';


      // ── 2. Robot body ───────────────────────────────────────────────────
      const eRow  = ROWS * 0.38;
      const eSep  = COLS * 0.09;
      const eOffX = (mouseRef.current.x - 0.5) * COLS * 0.10;
      const eOffY = (mouseRef.current.y - 0.5) * ROWS * 0.08;
      const e1c   = COLS * 0.5 - eSep + eOffX;
      const e1r   = eRow + eOffY;
      const e2c   = COLS * 0.5 + eSep + eOffX;
      const e2r   = eRow + eOffY;
      const eRad  = 3.0;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const d = density(col, row);
          if (d <= 0) continue;

          // Eyes
          if (Math.hypot(col - e1c, row - e1r) < eRad ||
              Math.hypot(col - e2c, row - e2r) < eRad) {
            ctx.fillStyle = '#ffffff';
            ctx.fillText('@', col * CHAR_W, row * CHAR_H);
            continue;
          }

          // Inner body characters (=-+)
          if (d > 0.28) {
            const ef      = (d - 0.28) / 0.72;
            const shimmer = Math.sin(col * 0.4 + t * 1.8) * 0.08 + Math.sin(row * 0.6 + t * 1.3) * 0.06;
            const zf      = Math.max(0, Math.min(1, ef + shimmer));
            const ch      = zf < 0.22 ? '-' : zf < 0.60 ? '=' : '+';
            ctx.fillStyle = `rgba(255,255,255,${(ef * 0.65 + 0.35).toFixed(2)})`;
            ctx.fillText(ch, col * CHAR_W, row * CHAR_H);
            continue;
          }

          // Outer body fringe (lower density shell)
          const fringeAlpha = (d / 0.28) * 0.55 + 0.30;
          ctx.fillStyle = `rgba(200,230,255,${fringeAlpha.toFixed(2)})`;
          ctx.fillText('.', col * CHAR_W, row * CHAR_H);
        }
      }


      tickRef.current += 0.22;
    }

    const id = setInterval(drawFrame, 125);   // 8 fps
    drawFrame();

    return () => {
      clearInterval(id);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <div className="ascii-robot-wrapper">
      <canvas ref={canvasRef} className="ascii-canvas" />

      <motion.div
        className="floating-label prevention-label"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        Prevention
      </motion.div>

      <motion.div
        className="floating-label consistency-label"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        Consistency
      </motion.div>

      <motion.div
        className="floating-label collaboration-label"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
      >
        Collaboration
      </motion.div>
    </div>
  );
};

// ── Hero layout ────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="about" className="section hero-section container">
    <div className="hero-content animate-fade-in">
      <div className="section-header">
        <h4 className="gradient-text section-subtitle">01 PROFILE</h4>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight-cyan">Harsh Dave</span>
        </h1>
      </div>
      <h2 className="hero-role">&lt;QA Engineer-ISTQB Certified/&gt;</h2>
      <p className="hero-description text-secondary">
        Quality Assurance Engineer with <span className="highlight-cyan">5+ years of experience</span> ensuring
        the delivery of high-quality web and mobile applications across SaaS, WordPress,
        Travel, and Real Estate domains. Building scalable Playwright automation frameworks
        and driving end-to-end quality across complex enterprise platforms.
      </p>
    </div>
    <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <AsciiRobot />
    </div>
  </section>
);

export default Hero;
