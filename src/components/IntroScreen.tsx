import React from 'react';
import { PROFILE } from '../data/portfolio-data';

interface IntroScreenProps {
  onSelect: () => void;
}

export const IntroScreen = ({ onSelect }: IntroScreenProps) => (
  <div className="fixed inset-0 bg-[#141414] z-[100] flex flex-col items-center justify-center animate-fade-in">
    <h1 className="text-3xl md:text-5xl text-white font-medium mb-8">Who's viewing the portfolio?</h1>
    <div className="group cursor-pointer flex flex-col items-center gap-4" onClick={onSelect}>
      <div className="w-32 h-32 md:w-40 md:h-40 rounded bg-red-600 flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-white transition-all">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arivalagan&backgroundColor=e6b6f4" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors">
        {PROFILE.name}
      </span>
    </div>
    <button className="mt-12 px-6 py-2 text-gray-400 border border-gray-400 uppercase tracking-widest hover:text-white hover:border-white transition-all text-sm">
      Discover More
    </button>
  </div>
);
