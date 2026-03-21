"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class CanvasNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
  baseVx: number;
  baseVy: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.originalX = this.x;
    this.originalY = this.y;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.baseVx = (Math.random() - 0.5) * 0.1;
    this.baseVy = (Math.random() - 0.5) * 0.1;
    this.radius = Math.random() * 1.2 + 0.3;
  }

  update(
    width: number,
    height: number,
    mouseX: number | null,
    mouseY: number | null,
    time: number,
  ) {
    this.originalX += this.baseVx;
    this.originalY += this.baseVy;

    if (this.originalX < 0 || this.originalX > width) this.baseVx *= -1;
    if (this.originalY < 0 || this.originalY > height) this.baseVy *= -1;

    // Gentle ambient drift
    const driftX = Math.sin(time * 0.0003 + this.originalY) * 0.15;
    const driftY = Math.cos(time * 0.0002 + this.originalX) * 0.15;

    // Subtle cursor gravity — professional, not flashy
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < 250) {
        const force = (250 - distance) / 250;
        const gravity = 0.08;
        this.vx += (dx / distance) * force * gravity;
        this.vy += (dy / distance) * force * gravity;
      }
    }

    // Drift back to original position
    const targetX = this.originalX + driftX * 25;
    const targetY = this.originalY + driftY * 25;

    const returnForce = 0.004;
    this.vx += (targetX - this.x) * returnForce;
    this.vy += (targetY - this.y) * returnForce;

    // Smooth damping
    this.vx *= 0.93;
    this.vy *= 0.93;

    this.x += this.vx;
    this.y += this.vy;

    // Soft boundary containment
    if (this.x < 0) { this.x = 0; this.vx *= 0.5; }
    if (this.x > width) { this.x = width; this.vx *= 0.5; }
    if (this.y < 0) { this.y = 0; this.vy *= 0.5; }
    if (this.y > height) { this.y = height; this.vy *= 0.5; }
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? "rgba(200, 200, 200, 0.45)" : "rgba(90, 90, 90, 0.45)";
    ctx.fill();
  }
}

export function NeuralBackground() {
  const { resolvedTheme } = useTheme();
  const isDarkRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    isDarkRef.current = resolvedTheme === "dark";
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: CanvasNode[] = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const area = canvas.width * canvas.height;
      const count = Math.min(Math.floor(area / 8000), 160);

      nodes = Array.from(
        { length: count },
        () => new CanvasNode(canvas.width, canvas.height),
      );
    };

    const animate = () => {
      // Pause drawing and physics calculations if scrolled past Hero
      if (window.scrollY > window.innerHeight) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.update(
          canvas.width,
          canvas.height,
          mouseRef.current.x,
          mouseRef.current.y,
          performance.now(),
        );
        node.draw(ctx, isDarkRef.current);
      });

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (1 - distance / 120) * 0.25;
            ctx.strokeStyle = isDarkRef.current 
              ? `rgba(200, 200, 200, ${opacity})`
              : `rgba(100, 100, 100, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    init();
    animate();

    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-linear-to-b from-white/20 dark:from-transparent to-transparent pointer-events-none" />
    </div>
  );
}
