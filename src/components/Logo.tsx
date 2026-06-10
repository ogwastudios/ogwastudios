import React from 'react';
import { motion } from 'motion/react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 font-display tracking-tight select-none cursor-pointer ${className}`}>
      {/* Animated Film Reel SVG Icon representing the 'O' in OGWA with Gold and Silver themes */}
      <div className="relative flex items-center justify-center">
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          className="text-[#EBC325] fill-current"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Reel Outer Ring */}
          <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="8" fill="none" />
          
          {/* Inner Core */}
          <circle cx="50" cy="50" r="14" fill="currentColor" />
          
          {/* Reel Holes (Film Reel Cutouts) using absolute black to punch through */}
          <circle cx="50" cy="24" r="8" fill="#000000" />
          <circle cx="50" cy="76" r="8" fill="#000000" />
          <circle cx="27" cy="37" r="8" fill="#000000" />
          <circle cx="73" cy="63" r="8" fill="#000000" />
          <circle cx="27" cy="63" r="8" fill="#000000" />
          <circle cx="73" cy="37" r="8" fill="#000000" />

          {/* Core Center Hole */}
          <circle cx="50" cy="50" r="5" fill="#000000" />
        </motion.svg>
        {/* Subtle Ambient circular halo behind the reel */}
        <div className="absolute inset-0 bg-[#EBC325]/10 rounded-full blur-xs pointer-events-none"></div>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="text-xl font-black tracking-tighter flex items-center gap-0.5">
          <span className="text-[#EBC325]">OGWA</span>
          <span className="text-white">STUDIOS</span>
        </div>
        <span className="text-[7.5px] tracking-[0.45em] font-semibold text-gray-400 uppercase">Authentic & Bold</span>
      </div>
    </div>
  );
};

