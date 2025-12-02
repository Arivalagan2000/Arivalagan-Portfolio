import React from 'react';
import { Search, Bell } from 'lucide-react';
import { PROFILE } from '../data/portfolio-data';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => (
  <nav className={`fixed top-0 w-full z-40 transition-all duration-500 px-4 md:px-12 py-4 flex items-center justify-between ${scrolled ? 'bg-[#000000]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
    <div className="flex items-center gap-8">
      <h1 className="text-[#E50914] text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer">PORTFOLIO</h1>
      <ul className="hidden md:flex items-center gap-6 text-sm text-gray-200">
        <li className="font-medium cursor-pointer hover:text-gray-400 transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
        <li className="cursor-pointer hover:text-gray-400 transition" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</li>
        <li className="cursor-pointer hover:text-gray-400 transition" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
        <li className="cursor-pointer hover:text-gray-400 transition" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</li>
      </ul>
    </div>
    <div className="flex items-center gap-4 text-white">
      <Search className="w-6 h-6 cursor-pointer hover:text-gray-400" />
      <span className="hidden md:block text-sm">Languages: {PROFILE.languages.join(', ')}</span>
      <Bell className="w-6 h-6 cursor-pointer hover:text-gray-400" />
      <div className="w-8 h-8 rounded bg-[#E50914] overflow-hidden cursor-pointer">
         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arivalagan&backgroundColor=e6b6f4" alt="User" />
      </div>
    </div>
  </nav>
);
