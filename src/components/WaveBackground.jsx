import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

const WaveBackground = () => {
  const canvasRef = useRef(null);
  const noise3D = createNoise3D();
  let animationFrameId;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Config
    const spacing = 45; // Space between grid lines
    let cols, rows;
    let width, height;
    let time = 0;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Calculate columns and rows to fill the screen (+2 for buffer)
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
    };
    
    window.addEventListener('resize', setSize);
    setSize();

    const getWaveOffset = (c, r, t) => {
        const x = c * spacing;
        const y = r * spacing;
        
        // Circular time for the 4D morphing effect
        const t1 = Math.sin(t * 0.2); 
        const t2 = Math.cos(t * 0.2);

        // --- Dynamic Constants ---
        // Amplitude oscillates between 30 and 60
        let amplitude = 45 + Math.sin(t * 0.1) * 15;   
        
        // Frequency (detail) breathes between 0.002 and 0.006
        let frequency = 0.004 + Math.cos(t * 0.05) * 0.002; 
        
        // Persistence (jaggedness) shifts between 0.4 and 0.7
        let persistence = 0.55 + Math.sin(t * 0.08) * 0.15; 
        
        let noiseValue = 0;
        
        // 4 Octaves for a richer "Perlin" feel (added one more layer)
        for (let i = 0; i < 4; i++) {
            // Injecting circular time for the "faux-4D" morph
            noiseValue += noise3D(
                x * frequency, 
                y * frequency + t1, 
                t2
            ) * amplitude;
            
            // Each octave gets smaller but more detailed
            amplitude *= persistence;
            frequency *= 2.0; // Standard Perlin lacunarity
        }
        
        return noiseValue;
    };

    const render = () => {
      time += 0.02; // Animation speed
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(100, 100, 255, 0.72)'; // Subtle Blue/Purple
      ctx.lineWidth = 2;

      // We loop through the grid and draw connections
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Calculate the "base" position of this point
          // We shift everything left/up slightly (- spacing) to hide edges
          const xBase = c * spacing - spacing;
          const yBase = r * spacing - spacing;

          // Calculate distortion
          const offset = getWaveOffset(c, r, time);
          
          // Current Point Position
          const x = xBase; 
          const y = yBase + offset; // Only move up/down for a "water surface" look

          // 1. Draw Horizontal Connection (to the point on the RIGHT)
          if (c < cols - 1) {
            const nextOffset = getWaveOffset(c + 1, r, time);
            const nextX = (c + 1) * spacing - spacing;
            const nextY = yBase + nextOffset;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
          }

          // 2. Draw Vertical Connection (to the point BELOW)
          // This creates the "Mesh/Net" look. Comment this block out for just lines.
        //   if (r < rows - 1) {
        //     const bottomOffset = getWaveOffset(c, r + 1, time);
        //     const bottomX = xBase;
        //     const bottomY = ((r + 1) * spacing - spacing) + bottomOffset;

        //     ctx.beginPath();
        //     ctx.moveTo(x, y);
        //     ctx.lineTo(bottomX, bottomY);
        //     ctx.stroke();
        //   }
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        // Optional: Vignette to soften edges
        maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', 
        WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)' 
      }}
    />
  );
};

export default WaveBackground;