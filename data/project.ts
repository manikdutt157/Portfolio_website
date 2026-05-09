export interface ProjectType {
  id: number;
  name: string;
  imageUrl: string;
  bio: string;
  githubUrl: string;
}

export const ProjList: ProjectType[] = [
  {
    id: 1,
    imageUrl: "/images/image2.gif",
    name: "Registry Forensics Tool",
    bio: "A Python-based Windows Registry forensics tool that extracts and visualizes key artifacts from live systems and offline hive files through an admin-enabled interactive UI.",
    githubUrl: "https://github.com/manikdutt157/registry-forensics-tool",
  },
  {
    id: 2,
    imageUrl: "/images/image2.gif",
    name: "Chat Application",
    bio: "A full-stack real-time chat application with secure user authentication, file sharing, and Socket.IO-powered messaging for instant conversations.",
    githubUrl: "https://github.com/manikdutt157/mern-chat-app",
  },
  {
    id: 3,
    imageUrl: "/images/image2.gif",
    name: "Landing Page (Skincare Website)",
    bio: "A responsive skincare product landing page with polished navigation, clean product sections, and a modern interface designed for smooth browsing.",
    githubUrl: "https://github.com/manikdutt157/landing_page_react",
  },
  {
    id: 4,
    imageUrl: "/images/image2.gif",
    name: "Portfolio Website",
    bio: "A personal portfolio website built to present projects, skills, and contact details through a clean layout with subtle interactive motion.",
    githubUrl: "https://github.com/yourusername/project3",
  },
  
];
