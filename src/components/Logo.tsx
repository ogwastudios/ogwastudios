import React from 'react';
import { motion } from 'motion/react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 font-display tracking-tight select-none ${className}`}>
      {/* Animated Film Reel SVG Icon representing the 'O' in OGWA */}
      <div className="relative flex items-center justify-center">
        <motion.svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          className="text-navy fill-current"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Reel Outer Ring */}
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="8" fill="none" />
          
          {/* Inner Core */}
          <circle cx="50" cy="50" r="14" fill="currentColor" />
          
          {/* Reel Holes (Film Reel Cutouts) */}
          <circle cx="50" cy="24" r="8" fill="var(--color-surface, #F9FAFB)" />
          <circle cx="50" cy="76" r="8" fill="var(--color-surface, #F9FAFB)" />
          <circle cx="27" cy="37" r="8" fill="var(--color-surface, #F9FAFB)" />
          <circle cx="73" cy="63" r="8" fill="var(--color-surface, #F9FAFB)" />
          <circle cx="27" cy="63" r="8" fill="var(--color-surface, #F9FAFB)" />
          <circle cx="73" cy="37" r="8" fill="var(--color-surface, #F9FAFB)" />

          {/* Core Center Hole */}
          <circle cx="50" cy="50" r="5" fill="var(--color-surface, #F9FAFB)" />
        </motion.svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="text-xl font-black tracking-tighter text-navy flex items-center gap-0.5">
          <span className="text-[#EBC325]">OGWA</span>
          <span className="text-navy">STUDIOS</span>
        </div>
        <span className="text-[8px] tracking-[0.45em] font-semibold text-slate uppercase">Authentic & Bold</span>
      </div>
    </div>
  );
};
