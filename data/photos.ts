export type PhotoItem = {
  id: string;
  title: string;
  imageUrl: string;
  postUrl?: string;
  embedUrl?: string;
  position?: string;
};

export const PHOTO_ITEMS: PhotoItem[] = [
  {
    id: "p1",
    title: "National Cyber Security Awareness Month - 2025",
    imageUrl: "/images/image.png",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7411878757826748416?collapsed=1",
    position: "Featured Post",
  },
  {
    id: "p2",
    title: "Advent of Cyber 2025",
    imageUrl: "/images/image.png",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7410059335231410176?collapsed=1",
    position: "Featured Post",
  },
  {
    id: "p3",
    title: "ASTRA Attack Arena 1.0",
    imageUrl: "/images/image.png",
    postUrl:
      "https://www.linkedin.com/posts/manik-chandra-dutt-92b9ab250_ctf-cybersecurity-hackathon-activity-7400505880355651585-bB04?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4VZXMBDbCnZISdfwVxwdHQmQUxy21oiZ4",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7400505879177113600?collapsed=1",
    position: "3rd Place",
  },
  {
    id: "p4",
    title: "Cyber Awareness Drawing Competition",
    imageUrl: "/images/image.png",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383901291179196417?collapsed=1",
    position: "Featured Post",
  },
  {
    id: "p5",
    title: "Educational Visit to UP Police Cyber Cell",
    imageUrl: "/images/image.png",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383593167478169601?collapsed=1",
    position: "Featured Post",
  },
  {
    id: "p6",
    title: "Cybersecurity Hackathon",
    imageUrl: "/images/image.png",
    postUrl:
      "https://www.linkedin.com/posts/manik-chandra-dutt-92b9ab250_hackathon-cybersecurity-networking-activity-7271932535838793728-6Mby?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4VZXMBDbCnZISdfwVxwdHQmQUxy21oiZ4",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7271932534173659136?collapsed=1",
    position: "Participant",
  },
];
