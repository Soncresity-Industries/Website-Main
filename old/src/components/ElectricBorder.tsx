// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import React, { useEffect, useRef } from 'react';

interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  style?: React.CSSProperties;
  className?: string;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = "#7df9ff",
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  style,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += speed * 0.016;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;

      // Get border radius from style or default
      const borderRadius = style?.borderRadius ? 
        (typeof style.borderRadius === 'number' ? style.borderRadius : 25) : 25;
      
      const points: [number, number][] = [];
      const segments = 120;
      const padding = thickness + 5;
      const width = canvas.width - 2 * padding;
      const height = canvas.height - 2 * padding;
      const radius = Math.min(borderRadius, Math.min(width, height) / 2);
      
      // Offset for centering the border with padding
      const offsetX = padding;
      const offsetY = padding;
      
      // Calculate the perimeter sections
      const straightWidth = width - 2 * radius;
      const straightHeight = height - 2 * radius;
      const cornerArcLength = (Math.PI / 2) * radius;
      const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArcLength;
      
      // Create points along the rounded rectangle perimeter
      for (let i = 0; i <= segments; i++) {
        const distance = (i / segments) * totalPerimeter;
        let x: number, y: number;
        
        if (distance <= straightWidth) {
          // Top edge
          x = radius + distance + offsetX;
          y = 0 + offsetY;
        } else if (distance <= straightWidth + cornerArcLength) {
          // Top-right corner
          const cornerProgress = (distance - straightWidth) / cornerArcLength;
          const angle = cornerProgress * (Math.PI / 2);
          x = width - radius + Math.sin(angle) * radius + offsetX;
          y = radius - Math.cos(angle) * radius + offsetY;
        } else if (distance <= straightWidth + cornerArcLength + straightHeight) {
          // Right edge
          const edgeProgress = distance - straightWidth - cornerArcLength;
          x = width + offsetX;
          y = radius + edgeProgress + offsetY;
        } else if (distance <= straightWidth + 2 * cornerArcLength + straightHeight) {
          // Bottom-right corner
          const cornerProgress = (distance - straightWidth - cornerArcLength - straightHeight) / cornerArcLength;
          const angle = cornerProgress * (Math.PI / 2);
          x = width - radius + Math.cos(angle) * radius + offsetX;
          y = height - radius + Math.sin(angle) * radius + offsetY;
        } else if (distance <= 2 * straightWidth + 2 * cornerArcLength + straightHeight) {
          // Bottom edge
          const edgeProgress = distance - straightWidth - 2 * cornerArcLength - straightHeight;
          x = width - radius - edgeProgress + offsetX;
          y = height + offsetY;
        } else if (distance <= 2 * straightWidth + 3 * cornerArcLength + straightHeight) {
          // Bottom-left corner
          const cornerProgress = (distance - 2 * straightWidth - 2 * cornerArcLength - straightHeight) / cornerArcLength;
          const angle = cornerProgress * (Math.PI / 2);
          x = radius - Math.sin(angle) * radius + offsetX;
          y = height - radius + Math.cos(angle) * radius + offsetY;
        } else if (distance <= 2 * straightWidth + 3 * cornerArcLength + 2 * straightHeight) {
          // Left edge
          const edgeProgress = distance - 2 * straightWidth - 3 * cornerArcLength - straightHeight;
          x = 0 + offsetX;
          y = height - radius - edgeProgress + offsetY;
        } else {
          // Top-left corner
          const cornerProgress = (distance - 2 * straightWidth - 3 * cornerArcLength - 2 * straightHeight) / cornerArcLength;
          const angle = cornerProgress * (Math.PI / 2);
          x = radius - Math.cos(angle) * radius + offsetX;
          y = radius - Math.sin(angle) * radius + offsetY;
        }
        
        // Add electric distortion perpendicular to the edge
        const electricOffset = Math.sin(time * 3 + i * 0.15) * chaos;
        
        // Calculate normal direction (perpendicular to edge)
        let normalX = 0, normalY = 0;
        const centerX = (canvas.width) / 2;
        const centerY = (canvas.height) / 2;
        
        // Calculate outward normal
        if (x < centerX) normalX = -1;
        else if (x > centerX) normalX = 1;
        
        if (y < centerY) normalY = -1;
        else if (y > centerY) normalY = 1;
        
        // Normalize the normal vector
        const normalLength = Math.sqrt(normalX * normalX + normalY * normalY);
        if (normalLength > 0) {
          normalX /= normalLength;
          normalY /= normalLength;
        }
        
        x += normalX * electricOffset;
        y += normalY * electricOffset;
        
        points.push([x, y]);
      }

      // Draw smooth path using curves
      ctx.beginPath();
      if (points.length > 0) {
        ctx.moveTo(points[0][0], points[0][1]);
        
        // Use quadratic curves for smoother lines
        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i][0] + points[i + 1][0]) / 2;
          const yc = (points[i][1] + points[i + 1][1]) / 2;
          ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
        }
        
        // Close the path smoothly
        ctx.quadraticCurveTo(
          points[points.length - 1][0], 
          points[points.length - 1][1], 
          points[0][0], 
          points[0][1]
        );
        
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [color, speed, chaos, thickness]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        padding: `${thickness + 5}px`, // Add padding for the border effect
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;