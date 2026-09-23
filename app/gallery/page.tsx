import SubBanner from "@/app/components/ui/subbanner";
import ImageGallery from "@/app/components/layout/gallery/imagegallery";
import VideosGallery from "@/app/components/layout/gallery/videosgallery";
import Achievement from "@/app/components/ui/achievement";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="gallery" />
      <ImageGallery />
      <VideosGallery />
      <Achievement />
    </main>
  );
}
