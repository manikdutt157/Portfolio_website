import { Photos } from "@/components/photos";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  return (
    <main className="max-w-4xl mx-auto w-full space-y-6 py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      <Photos title="Gallery" sectionId="gallery" />
    </main>
  );
}

