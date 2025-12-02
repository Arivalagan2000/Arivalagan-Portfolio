import React, { useState, useEffect } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { Billboard } from './components/Billboard';
import { Modal } from './components/Modal';
import { Row } from './components/Row';
import { Footer } from './components/Footer';
import { SKILLS, PROJECTS, EXPERIENCE, PROFILE } from './data/portfolio-data';

/**
 * MAIN APP COMPONENT
 */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [profileSelected, setProfileSelected] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalItem, setModalItem] = useState<any | null>(null);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial Load Simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  const handleProfileSelect = () => {
    setProfileSelected(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-4xl font-bold text-[#E50914] animate-pulse">PORTFOLIO</div>
      </div>
    );
  }

  if (!profileSelected) {
    return <IntroScreen onSelect={handleProfileSelect} />;
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white overflow-x-hidden font-sans selection:bg-[#E50914] selection:text-white pb-10">
      
      {/* Navigation */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <Billboard openModal={setModalItem} />

      {/* Content Rows */}
      <div className="-mt-24 md:-mt-48 relative z-20 pl-0 pb-8 space-y-4">
        
        {/* Row 1: Skills (Vertical Poster style) */}
        <Row 
          id="skills"
          title="Technical Skills (Frontend, Backend, Database)" 
          items={SKILLS} 
          isLarge={true} 
          onOpen={(item) => setModalItem({
            ...item, 
            desc: `Expertise: ${item.match}. Specialized in ${item.category}.`,
            details: `Focusing on ${item.title} for building scalable architectures and optimizing performance.`
          })} 
        />

        {/* Row 2: Projects (Landscape) */}
        <Row 
          id="projects"
          title="Key Projects & Case Studies" 
          items={PROJECTS} 
          onOpen={setModalItem} 
        />

        {/* Row 3: Experience (Landscape) */}
        <Row 
          id="experience"
          title="Career Timeline: Experience Episodes" 
          items={EXPERIENCE} 
          onOpen={(item) => setModalItem({...item, tech: item.tags})} 
        />
        
        {/* Contact CTA Placeholder - Netflix style row */}
        <Row 
          title="Ready to Connect?" 
          items={[
            { 
              id: 'c1', 
              title: "Get in Touch via Email", 
              img: "https://images.unsplash.com/photo-1543286386-713bdd5b5f84?w=500", 
              desc: "Send an email for immediate contact.", 
              match: "100%", 
              tech: ["Email", PROFILE.email] 
            },
            { 
              id: 'c2', 
              title: "LinkedIn Profile", 
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500", 
              desc: "View full professional history.", 
              match: "100%", 
              tech: ["Professional", "Network"] 
            },
            { 
              id: 'c3', 
              title: "Code Repository (GitHub)", 
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500", 
              desc: "See recent code contributions.", 
              match: "100%", 
              tech: ["Code", "DevOps"] 
            },
          ]} 
          onOpen={setModalItem} 
        />

      </div>

      <Footer />

      {/* Detail Modal */}
      {modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} />}

    </div>
  );
}
