export interface Contact {
  email?: string;
}

export interface AboutContents {
  name: string;
  initials: string;
  desc: string;
  summary: string;
  avatarUrl?: string;
  contact: Contact;
  tryhackmeProfile?: string;
}

export const ABOUT_ME: AboutContents = {
  name: "Manik Chandra Dutt",
  initials: "YN",
  desc: "Your Title, Building something amazing",
  summary:
    "I'm driven by a hacker's curiosity and a professional's discipline, working hands-on in cybersecurity and digital forensics to understand how attacks happen and how they can be stopped, with a focus on VAPT, malware analysis, and OSINT, applying responsible practices to strengthen digital security and support real-world cyber investigations.",
  avatarUrl: "/images/img_new.jpg",
  contact: {
    email: "manikdutt157@gmail.com",
  },
  tryhackmeProfile: "https://tryhackme.com/genius157",
};
