import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { PROFILE } from '../data/portfolio-data';

interface ModalProps {
  item: any;
  onClose: () => void;
}

export const Modal = ({ item, onClose }: ModalProps) => {
  if (!item) return null;

  const isAboutMe = item.title.includes(PROFILE.name);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl bg-[#181818] rounded-lg overflow-hidden shadow-2xl animate-scale-in text-white">
        
        {/* Modal Header/Hero */}
        <div className="relative h-64 md:h-96 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10"></div>
          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-[#181818] rounded-full p-2 hover:bg-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-8 left-8 z-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h2>
            <div className="flex items-center gap-4">
              <a href={`mailto:${PROFILE.email}`} className="bg-white text-black px-8 py-2 rounded font-bold flex items-center gap-2 hover:bg-gray-200">
                <Play className="fill-black w-4 h-4" /> Contact
              </a>
              <button className="border border-gray-500 rounded-full p-2 hover:border-white">
                <Plus className="w-5 h-5" />
              </button>
              <button className="border border-gray-500 rounded-full p-2 hover:border-white">
                <ThumbsUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-green-400 font-bold">{item.match || "98% Match"}</span>
              <span className="text-gray-400">{item.duration || "2024"}</span>
              <span className="border border-gray-500 px-1 text-xs text-[#E50914] border-[#E50914]">HD</span>
            </div>
            
            {isAboutMe ? (
                <>
                    <h3 className="text-xl font-bold text-[#E50914]">Career Objective</h3>
                    <p className="text-lg leading-relaxed text-gray-200">
                        "{item.desc}"
                    </p>
                    <h3 className="text-xl font-bold text-[#E50914]">Education</h3>
                    <div className="space-y-3">
                        {item.education.map((edu: any, index: number) => (
                            <div key={index} className="bg-[#2a2a2a] p-3 rounded border-l-4 border-gray-500">
                                <p className="font-bold text-gray-100">{edu.title}</p>
                                <p className="text-gray-300 text-sm">{edu.institution} ({edu.duration})</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <p className="text-lg leading-relaxed text-gray-200">
                        {item.desc}
                    </p>
                    {item.details && (
                        <div className="bg-[#2a2a2a] p-4 rounded border-l-4 border-[#E50914]">
                            <h3 className="font-bold mb-2 text-gray-100">Key Details</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
                        </div>
                    )}
                </>
            )}
          </div>

          <div className="space-y-4">
            <div className="text-sm">
              <span className="text-gray-500">Tech/Soft Skills:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                 {item.tech?.map((t: string) => (
                   <span key={t} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700 hover:border-gray-500 transition cursor-default">
                     {t}
                   </span>
                 )) || item.tags?.map((t: string) => (
                   <span key={t} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700">
                     {t}
                   </span>
                 ))}
              </div>
            </div>
            {!isAboutMe && (
                <div className="text-sm">
                    <span className="text-gray-500">Genre:</span>
                    <span className="text-gray-300 ml-2">{item.genre?.join(', ') || 'Product Development'}</span>
                </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
