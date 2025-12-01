/**
 * DATA LAYER
 * Separated for clean architecture
 */

export const PROFILE = {
  name: "Arivalagan S",
  role: "Software Product Developer | Associate – Product Development",
  location: "Theni, Tamil Nadu, India",
  email: "arivalagansakthi360@gmail.com",
  phone: "+91 9384371122",
  linkedin: "https://www.linkedin.com/in/arivalagan-s",
  github: "#",
  summary: "A Product Developer focused on building dynamic, scalable frontend applications using React and integrating robust RESTful APIs. Expertise in developing reusable components and streamlining codebases for maintainability.",
  languages: ["Tamil", "English"],
  objective: "To secure a challenging position in a reputable organization to expand my learnings, knowledge and skills.",
  education: [
    { title: "MCA - 78%", institution: "Dr. KGISL Institute of Information Management, Coimbatore", duration: "2023" },
    { title: "B.Sc Computer Science - 70%", institution: "CPA College, Bodinayakanur", duration: "2021" },
  ],
  highlights: [
    "Reusable Component Architecture",
    "Full-Stack Integration (React & Node.js)",
    "API Development (REST/WebSocket)",
    "Scalable & Responsive UI Design"
  ]
};

export const SKILLS = [
  // Frontend
  { id: 's1', title: "React", category: "Frontend", match: "99%", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { id: 's2', title: "TypeScript", category: "Language", match: "95%", img: "https://cdn.simpleicons.org/typescript/3178C6" },
  { id: 's3', title: "Tailwind CSS", category: "Styling", match: "97%", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { id: 's4', title: "Redux", category: "State", match: "96%", img: "https://cdn.simpleicons.org/redux/764ABC" },
  // Backend/DB/Tools
  { id: 's5', title: "Node.js/Express", category: "Backend", match: "90%", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { id: 's6', title: "REST APIs/WS", category: "Concepts", match: "94%", img: "https://cdn.simpleicons.org/apachesolr/007399" }, 
  { id: 's7', title: "MySQL/MongoDB", category: "Database", match: "85%", img: "https://cdn.simpleicons.org/mysql/4479A1" }, 
  { id: 's8', title: "Docker/AWS", category: "DevOps/Cloud", match: "88%", img: "https://cdn.simpleicons.org/docker/2496ED" },
  // Soft Skills
  { id: 's9', title: "Problem Solving", category: "Soft Skills", match: "100%", img: "https://cdn.simpleicons.org/visualstudio/0078D4" }, 
  { id: 's10', title: "Quick Learning", category: "Soft Skills", match: "100%", img: "https://cdn.simpleicons.org/googlecolab/F9AB00" },
];

export const EXPERIENCE = [
  {
    id: 'exp1',
    title: "Associate – Product Development",
    company: "DevOpsLabs India Private Limited",
    duration: "Sep 2024 – Present",
    desc: "Developed and maintained frontend applications using React for dynamic and responsive UI. Built and integrated RESTful APIs using Node.js to improve scalability and performance.",
    tags: ["React", "Node.js", "REST APIs", "Scalability"],
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80" 
  },
  {
    id: 'exp2',
    title: "Trainee – Product Development",
    company: "DevOpsLabs India Private Limited",
    duration: "Sep 2023 – Sep 2024",
    desc: "Collaborated with teams to ensure seamless integration between frontend and backend. Developed reusable components to eliminate code redundancy and improve maintainability.",
    tags: ["Collaboration", "Reusable Components", "Maintainability"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80" 
  },
  {
    id: 'exp3',
    title: "Intern – Product Development",
    company: "DevOpsLabs India Private Limited",
    duration: "Jun 2023 – Aug 2023",
    desc: "Gained hands-on development experience in frontend and backend integration. Designed and implemented interactive interfaces using React.",
    tags: ["Integration", "React UI", "Hands-on"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" 
  }
];

export const PROJECTS = [
  {
    id: 'p1',
    title: "FinFlow Dashboard",
    match: "98% Match",
    duration: "WebSockets",
    genre: ["Finance", "Real-time"],
    desc: "Real-time financial analytics dashboard using WebSocket live updates and interactive UI.",
    details: "Implemented robust WebSocket connections for instantaneous data flow. Built dynamic charts and tables to visualize complex financial metrics. Tech: React, Node.js, Redux, Tailwind.",
    tech: ["React", "Node.js", "Redux", "Tailwind"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 'p2',
    title: "Configuration Filter & Admin Panel",
    match: "95% Match",
    duration: "TypeScript",
    genre: ["Admin Tool", "UI/UX"],
    desc: "Dynamic grouped checkbox filtering system and reusable UI components with full backend integration.",
    details: "Leveraged TypeScript for strict typing and robust component prop validation. Designed a powerful, scalable filter logic for complex configuration data. Tech: React, TypeScript, Redux, Bootstrap.",
    tech: ["React", "TypeScript", "Redux", "Bootstrap"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
  },
  {
    id: 'p3',
    title: "Policy Privilege Manager",
    match: "94% Match",
    duration: "UI/UX",
    genre: ["Internal Tool", "Drag-n-Drop"],
    desc: "Intuitive drag-and-drop interface for policy classification and privilege management.",
    details: "Engineered a seamless, accessible drag-and-drop solution using React Hooks. Integrated tightly with the backend to ensure immediate persistence of policy changes. Tech: React, Node.js, Express.js.",
    tech: ["React", "Node.js", "Express.js"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  {
    id: 'p4',
    title: "Audit Planning System",
    match: "99% Match",
    duration: "Workflow",
    genre: ["Enterprise", "Validation"],
    desc: "Multi-step audit workflow application with comprehensive form validation and create/update support.",
    details: "Built a state machine using Redux to manage the complex, multi-stage workflow. Implemented advanced field validation to ensure data integrity during the audit creation process. Tech: React, Redux.",
    tech: ["React", "Redux", "Validation Utils"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  }
];
