import React from 'react';
import { motion } from "motion-react";
import logo from "../assets/images/logo.svg";

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-3 font-display tracking-tight select-none cursor-pointer ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-10 h-10"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtle Ambient circular halo behind the logo */}
        <div className="absolute inset-0 bg-[#EBC325]/10 rounded-full blur-xs pointer-events-none"></div>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="text-xl font-black tracking-tighter flex items-center gap-0.5">
          <span className="text-[#EBC325]">OGWA</span>
          <span className="text-white">STUDIOS</span>
        </div>

        <span className="text-[7.5px] tracking-[0.45em] font-semibold text-gray-400 uppercase">
          Authentic & Bold
        </span>
      </div>
    </div>
  );
};
