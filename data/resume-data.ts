import { Mail, Github, Linkedin, Twitter, Download } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Contact {
  email?: string;
  social: SocialLink[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  codeUrl: string;
  image?: string;
  status?: "Live" | "In Progress" | "Archived";
}

export interface TechItem {
  name: string;
  icon?: string; // URL to image
}

export interface TechCategory {
  title: string;
  items: (string | TechItem)[];
}

export interface Blog {
  title: string;
  description: string;
  url: string;
  date?: string;
}

export interface ResumeData {
  name: string;
  initials: string;
  about: string;
  summary: string;
  avatarUrl?: string;
  contact: Contact;
  cvUrl?: string;
  tryhackmeBadge?: string;
  tryhackmeProfile?: string
}


export const RESUME_DATA: ResumeData = {
  name: "Manik Chandra Dutt",
  initials: "YN",
  about: "Your Title, Building something amazing",
  summary: "Building AI that actually works! Currently deep into Vision-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products. Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone.",
  avatarUrl: "/images/img_new.jpg", // Optional: path to your profile image
  contact: {
    email: "your.email@example.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: Linkedin,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/yourhandle",
        icon: Twitter,
      },
    ],
  },

  tryhackmeBadge: "https://tryhackme-badges.s3.amazonaws.com/genius157.png",
  tryhackmeProfile: "https://tryhackme.com/genius157",

  
};

