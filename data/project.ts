export interface ProjectType {
  id: number;
  title: string;
  imageUrl: string;
  desc: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjList = [
  {
    id: 1,
    imageUrl: "/images/image2.gif",
    title: "Chat Application",
    desc: "A real-time full-stack chat application with user authentication, file sharing, and Socket.IO-powered messaging",
    technologies: ["React", "Node.js", "Express.js", "MongoDB","Socket.io" ],
    githubUrl: "https://github.com/manikdutt157/mern-chat-app",
    liveUrl: "https://github.com/manikdutt157/mern-chat-app",
  },
  {
    id: 2,
    imageUrl: "/images/image2.gif",
    title: "Landing Page (Skincare Website)",
    desc: "A responsive skincare landing page built with React, featuring smooth navigation, modern UI, and product showcase sections.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/manikdutt157/landing_page_react",
    liveUrl: "https://skincare-product-site.netlify.app/",
  },
  {
    id: 3,
    imageUrl: "/images/image2.gif",
    title: "Portfolio Website",
    desc: "A modern portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.com",
  },
  {
    id: 4,
    imageUrl: "/images/image2.gif",
    title: "Portfolio Website",
    desc: "A modern portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.com",
  },
  
];
