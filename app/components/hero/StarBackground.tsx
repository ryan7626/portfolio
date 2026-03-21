"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

class StarNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
  baseVx: number;
  baseVy: number;
  opacityBase: number;
  opacitySpeed: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.originalX = this.x;
    this.originalY = this.y;
    
    // Very slow drift
    this.vx = (Math.random() - 0.5) * 0.1;
    this.vy = (Math.random() - 0.5) * 0.1;
    this.baseVx = (Math.random() - 0.5) * 0.05;
    this.baseVy = (Math.random() - 0.5) * 0.05;
    
    // Tiny stars
    this.radius = Math.random() * 1.2 + 0.3;
    
    // Twinkle randomness
    this.opacityBase = Math.random();
    this.opacitySpeed = Math.random() * 0.002 + 0.0005;
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

    // Bounce base position
    if (this.originalX < 0 || this.originalX > width) this.baseVx *= -1;
    if (this.originalY < 0 || this.originalY > height) this.baseVy *= -1;

    // Gentle ambient drift
    const driftX = Math.sin(time * 0.0002 + this.originalY) * 0.1;
    const driftY = Math.cos(time * 0.0002 + this.originalX) * 0.1;

    // Subtle cursor attraction
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Stars within 300px are slightly pulled towards cursor
      if (distance > 0 && distance < 300) {
        const force = (300 - distance) / 300;
        const gravity = 0.015; // very gentle pull
        this.vx += (dx / distance) * force * gravity;
        this.vy += (dy / distance) * force * gravity;
      }
    }

    // Drift back to original position to avoid clumping
    const targetX = this.originalX + driftX * 15;
    const targetY = this.originalY + driftY * 15;

    const returnForce = 0.002;
    this.vx += (targetX - this.x) * returnForce;
    this.vy += (targetY - this.y) * returnForce;

    // Friction to slow them down
    this.vx *= 0.96;
    this.vy *= 0.96;

    this.x += this.vx;
    this.y += this.vy;

    // Screen wrapping for a continuous universe
    if (this.x < 0) { this.x = width; this.originalX = width; }
    if (this.x > width) { this.x = 0; this.originalX = 0; }
    if (this.y < 0) { this.y = height; this.originalY = height; }
    if (this.y > height) { this.y = 0; this.originalY = 0; }
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean, time: number) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    
    // Calculate twinkling opacity
    const twinkle = (Math.sin(time * this.opacitySpeed + this.opacityBase * 100) + 1) / 2; // 0 to 1
    const finalOpacity = twinkle * 0.6 + 0.1; // 0.1 to 0.7
    
    ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${finalOpacity})` : `rgba(0, 0, 0, ${finalOpacity})`;
    ctx.fill();
  }
}

class ShootingStarNode {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;

  constructor() {
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.length = 0;
    this.speed = 0;
    this.opacity = 0;
  }

  spawn(width: number, height: number) {
    this.active = true;
    this.length = Math.random() * 80 + 30; // 30 to 110 px length
    this.speed = Math.random() * 10 + 5; // 5 to 15 px frame speed
    this.opacity = Math.random() * 0.4 + 0.1;

    // Spawn across top or left edge
    if (Math.random() > 0.5) {
      this.x = Math.random() * width;
      this.y = -this.length;
    } else {
      this.x = -this.length;
      this.y = Math.random() * height;
    }
  }

  update(width: number, height: number) {
    if (!this.active) {
      // Very small chance to spawn each frame per star (subtle effect)
      if (Math.random() < 0.002) {
        this.spawn(width, height);
      }
      return;
    }

    this.x += this.speed;
    this.y += this.speed; // Move down-right

    // Deactivate when completely off screen
    if (this.x > width + this.length || this.y > height + this.length) {
      this.active = false;
    }
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
    if (!this.active) return;
    
    const color = isDark ? "255, 255, 255" : "0, 0, 0";
    const gradient = ctx.createLinearGradient(this.x, this.y, this.x - this.length, this.y - this.length);
    gradient.addColorStop(0, `rgba(${color}, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(${color}, 0)`);
    
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.length, this.y - this.length);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export function StarBackground() {
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
    let nodes: StarNode[] = [];
    let shootingStars: ShootingStarNode[] = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const area = canvas.width * canvas.height;
      // Many more stars than neural nodes for a starry effect
      const count = Math.min(Math.floor(area / 3000), 400);

      nodes = Array.from(
        { length: count },
        () => new StarNode(canvas.width, canvas.height),
      );
      
      shootingStars = [new ShootingStarNode(), new ShootingStarNode()];
    };

    const animate = () => {
      // Pause drawing if scrolled past Hero
      if (window.scrollY > window.innerHeight) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = performance.now();
      
      shootingStars.forEach((star) => {
        star.update(canvas.width, canvas.height);
        star.draw(ctx, isDarkRef.current);
      });

      nodes.forEach((node) => {
        node.update(
          canvas.width,
          canvas.height,
          mouseRef.current.x,
          mouseRef.current.y,
          currentTime,
        );
        node.draw(ctx, isDarkRef.current, currentTime);
      });

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
    </div>
  );
}
