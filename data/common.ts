import { Box, Github, Linkedin, Shield, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { myContact } from "./contact";
import { NavLinks } from "./constant";
import { myHero } from "./hero";
import { PHOTO_ITEMS } from "./photos";
import { ProjList } from "./project";
import { ABOUT_ME } from "./about";
import { allSkills } from "./skills";
import { personalConfig } from "@/config/Personal";

export type CommonSocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export const siteProfile = {
  name: myHero.name || ABOUT_ME.name,
  initials: ABOUT_ME.initials,
  about: ABOUT_ME.desc,
  tagline: myHero.desc,
  summary: ABOUT_ME.summary,
  avatarUrl: ABOUT_ME.avatarUrl || myHero.pic,
  heroImage: "/images/image2.gif",
  resumeUrl: myHero.resume,
  email: ABOUT_ME.contact.email,
  tryhackmeProfile: ABOUT_ME.tryhackmeProfile || myContact.tryhackme_url,
};

export const socialLinks: CommonSocialLink[] = [
  {
    name: "GitHub",
    url: myContact.github_url,
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: myContact.linkedin_url,
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: myContact.twitter_url,
    icon: Twitter,
  },
  {
    name: "TryHackMe",
    url: siteProfile.tryhackmeProfile,
    icon: Shield,
  },
];

export const navLinks = NavLinks;
export const projectList = ProjList;
export const skills = allSkills;
export const photoItems = PHOTO_ITEMS;
export const siteConfig = personalConfig;
