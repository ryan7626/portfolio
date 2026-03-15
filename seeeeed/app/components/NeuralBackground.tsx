import React, { useEffect, useRef } from 'react';

class CanvasNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.originalX = this.x;
    this.originalY = this.y;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 0.5;
  }

  update(width: number, height: number, mouseX: number | null, mouseY: number | null, time: number) {
    // Add gentle ambient drift
    const driftX = Math.sin(time * 0.0003 + this.originalY) * 0.2;
    const driftY = Math.cos(time * 0.0002 + this.originalX) * 0.2;
    
    // Apply cursor gravity if mouse is present
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Apply gravitational force (inversely proportional to distance)
      if (distance > 0 && distance < 300) {
        const force = (300 - distance) / 300;
        const gravity = 0.12; // Reduced for slower reaction
        this.vx += (dx / distance) * force * gravity;
        this.vy += (dy / distance) * force * gravity;
      }
    }

    // Apply gentle drift back to original position (with drift offset)
    const targetX = this.originalX + driftX * 30;
    const targetY = this.originalY + driftY * 30;
    
    const returnForce = 0.005;
    this.vx += (targetX - this.x) * returnForce;
    this.vy += (targetY - this.y) * returnForce;

    // Apply smooth damping for flowy movement
    this.vx *= 0.92;
    this.vy *= 0.92;

    this.x += this.vx;
    this.y += this.vy;

    // Soft boundary containment without bouncing
    if (this.x < 0) {
      this.x = 0;
      this.vx *= 0.5;
    }
    if (this.x > width) {
      this.x = width;
      this.vx *= 0.5;
    }
    if (this.y < 0) {
      this.y = 0;
      this.vy *= 0.5;
    }
    if (this.y > height) {
      this.y = height;
      this.vy *= 0.5;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(150, 150, 150, 0.4)';
    ctx.fill();
  }
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const trailRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: CanvasNode[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const area = canvas.width * canvas.height;
      const count = Math.min(Math.floor(area / 10000), 150); // Increased density and cap
      
      nodes = Array.from({ length: count }, () => new CanvasNode(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cursor trail with smooth curves
      if (trailRef.current.length > 1) {
        for (let i = 0; i < trailRef.current.length - 1; i++) {
          const current = trailRef.current[i];
          const next = trailRef.current[i + 1];
          
          // Calculate opacity for fade-out effect (older points fade more)
          const progress = i / (trailRef.current.length - 1);
          const opacity = progress * 0.6;
          
          ctx.beginPath();
          ctx.moveTo(current.x, current.y);
          
          // Use quadratic curve for smooth line
          if (i < trailRef.current.length - 2) {
            const nextNext = trailRef.current[i + 2];
            const cpx = next.x;
            const cpy = next.y;
            const endx = (next.x + nextNext.x) / 2;
            const endy = (next.y + nextNext.y) / 2;
            ctx.quadraticCurveTo(cpx, cpy, endx, endy);
          } else {
            ctx.lineTo(next.x, next.y);
          }
          
          ctx.strokeStyle = `rgba(150, 150, 150, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      nodes.forEach(node => {
        node.update(canvas.width, canvas.height, mouseRef.current.x, mouseRef.current.y, performance.now());
        node.draw(ctx);
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (1 - (distance / 140)) * 0.25;
            ctx.strokeStyle = `rgba(180, 180, 180, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Keep trail short (about 1 word length)
      if (trailRef.current.length > 6) {
        trailRef.current = trailRef.current.slice(-6);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Add to trail
      trailRef.current.push({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
      trailRef.current = [];
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#fbfbfb]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    </div>
  );
}