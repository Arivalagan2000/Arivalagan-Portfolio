import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface RowProps {
  title: string;
  items: any[];
  isLarge?: boolean;
  onOpen: (item: any) => void;
  id?: string;
}

export const Row = ({ title, items, isLarge = false, onOpen, id }: RowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div id={id} className="mb-8 md:mb-12 px-4 md:px-12 group">
      <h2 className="text-gray-200 text-lg md:text-xl font-bold mb-4 hover:text-white cursor-pointer transition flex items-center gap-2">
        {title}
        <ChevronRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300" />
      </h2>
      
      <div className="relative group/slider">
        {/* Left Control */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-8 md:w-12 bg-black/50 z-30 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition cursor-pointer hover:bg-black/70 rounded-r-md"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-6 md:w-8 h-6 md:h-8 text-white" />
        </div>

        {/* Scroll Container */}
        <div 
          ref={rowRef}
          className="flex gap-2 md:gap-4 overflow-x-scroll scrollbar-hide py-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              onClick={() => onOpen(item)}
              className={`relative flex-none transition duration-300 ease-in-out cursor-pointer hover:z-20 hover:scale-[1.05]
                ${isLarge ? 'w-[160px] md:w-[220px] h-[240px] md:h-[320px]' : 'w-[240px] md:w-[300px] h-[135px] md:h-[168px]'}`}
            >
              {isLarge ? (
                // Portrait Card (Skills)
                <div className="w-full h-full bg-[#202020] rounded-md overflow-hidden relative group/card border border-transparent hover:border-gray-500 shadow-lg">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                    <img src={item.img} alt={item.title} className="w-16 h-16 md:w-20 md:h-20 mb-4 drop-shadow-lg" />
                    <h3 className="text-center font-bold text-lg md:text-xl">{item.title}</h3>
                    <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider">{item.category}</p>
                  </div>
                   {/* Top Badge imitation */}
                   <div className="absolute top-0 right-0 bg-[#E50914] text-xs font-bold px-2 py-1 rounded-bl-md z-20">TOP TIER</div>
                </div>
              ) : (
                // Landscape Card (Projects/Experience)
                <div className="w-full h-full bg-[#202020] rounded-md overflow-hidden relative group/card shadow-lg">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-100 transition-all">
                    <h3 className="font-bold text-sm md:text-base text-white truncate">{item.title}</h3>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-green-400 font-semibold mt-1">
                      <span>{item.match || "98% Match"}</span>
                      <span className="border border-gray-500 px-1 text-gray-300">HD</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                        {item.tech?.slice(0,3).map((t: string) => (
                            <span key={t} className="text-[10px] text-gray-300 flex items-center">
                                <span className="w-1 h-1 bg-[#E50914] rounded-full mr-1"></span>{t}
                            </span>
                        )) || item.tags?.slice(0,3).map((t: string) => (
                            <span key={t} className="text-[10px] text-gray-300 flex items-center">
                                <span className="w-1 h-1 bg-[#E50914] rounded-full mr-1"></span>{t}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Control */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-8 md:w-12 bg-black/50 z-30 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition cursor-pointer hover:bg-black/70 rounded-l-md"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-6 md:w-8 h-6 md:h-8 text-white" />
        </div>
      </div>
    </div>
  );
};
