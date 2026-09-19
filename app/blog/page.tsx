import SubBanner from "@/app/components/ui/subbanner";
import Blog from "../components/homelayout/blog";



export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="blog" />
      <Blog isPage={true} />
    </main>
  );
}
