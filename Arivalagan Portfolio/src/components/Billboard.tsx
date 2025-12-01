import React from 'react';
import { Play, Info, Monitor } from 'lucide-react';
import { PROFILE, SKILLS } from '../data/portfolio-data';

interface BillboardProps {
  openModal: (item: any) => void;
}

export const Billboard = ({ openModal }: BillboardProps) => (
  <div className="relative h-[85vh] w-full text-white">
    {/* Background Image / Video Placeholder */}
    <div className="absolute inset-0 w-full h-full">
      <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent absolute z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80" 
        className="w-full h-full object-cover object-center"
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10"></div>
    </div>

    {/* Content */}
    <div className="absolute top-[30%] left-4 md:left-12 z-20 max-w-2xl space-y-4 md:space-y-6">
      <div className="flex items-center gap-2 text-[#E50914] font-bold tracking-widest text-sm md:text-base">
        <Monitor className="w-5 h-5" />
        <span>FEATURED PRODUCT DEVELOPER</span>
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold leading-none drop-shadow-lg">
        {PROFILE.role}
      </h1>
      
      <p className="text-lg md:text-xl text-shadow-md drop-shadow-md line-clamp-3">
        {PROFILE.summary}
      </p>

      <div className="flex items-center gap-4 pt-4">
        <a 
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-opacity-90 transition"
        >
          <Play className="fill-black w-6 h-6" /> Connect
        </a>
        <button 
          onClick={() => openModal({ 
            title: `About ${PROFILE.name}`, 
            desc: PROFILE.objective, 
            details: PROFILE.summary,
            education: PROFILE.education,
            tech: [
                `Location: ${PROFILE.location}`,
                `Phone: ${PROFILE.phone}`,
                ...SKILLS.filter(s => s.category === 'Soft Skills').map(s => s.title)
            ],
            match: "100% Match",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
          })}
          className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition backdrop-blur-sm"
        >
          <Info className="w-6 h-6" /> More Info / Education
        </button>
      </div>
    </div>
  </div>
);
