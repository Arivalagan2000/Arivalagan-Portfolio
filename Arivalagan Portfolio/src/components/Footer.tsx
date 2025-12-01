import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import { PROFILE } from '../data/portfolio-data';

export const Footer = () => (
  <footer className="w-full max-w-5xl mx-auto px-4 py-12 text-gray-500 text-sm">
    <div className="flex items-center gap-4 mb-8">
      <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-gray-300">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href={`mailto:${PROFILE.email}`} className="text-white hover:text-gray-300">
        <Mail className="w-6 h-6" />
      </a>
      <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-white hover:text-gray-300">
        <Github className="w-6 h-6" />
      </a>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Audio Description</li>
        <li className="hover:underline cursor-pointer">Investor Relations</li>
        <li className="hover:underline cursor-pointer">Legal Notices</li>
      </ul>
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Help Centre</li>
        <li className="hover:underline cursor-pointer">Jobs</li>
        <li className="hover:underline cursor-pointer">Cookie Preferences</li>
      </ul>
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Gift Cards</li>
        <li className="hover:underline cursor-pointer">Terms of Use</li>
        <li className="hover:underline cursor-pointer">Corporate Information</li>
      </ul>
      <ul className="space-y-3">
        <li className="hover:underline cursor-pointer">Media Centre</li>
        <li className="hover:underline cursor-pointer">Privacy</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
      </ul>
    </div>

    <button className="border border-gray-500 px-4 py-1 hover:text-white transition mb-4">
      Download Resume (PDF)
    </button>
    
    <p>&copy; 2025 Arivalagan S Portfolio. Built with React & Tailwind.</p>
  </footer>
);
