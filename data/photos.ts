export type PhotoItem = {
  id: string;
  title: string;
  imageUrl: string; // put images in /public and reference like "/images/..."
  postUrl?: string; // LinkedIn post URL (optional)
  date?: string; // e.g. "2026-03-18" (optional)
  description?: string; // optional short caption
};

export const PHOTO_ITEMS: PhotoItem[] = [
  {
    id: "p1",
    title: "Recent work highlight",
    imageUrl: "/images/pic.jpg",
    postUrl: "https://www.linkedin.com/",
    description: "Replace this with your LinkedIn post link + caption.",
  },
  {
    id: "p2",
    title: "Event / talk",
    imageUrl: "/images/image.png",
    postUrl: "https://www.linkedin.com/",
    description: "Add more items in data/photos.ts anytime.",
  },
];

