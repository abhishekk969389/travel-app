import SubBanner from "@/app/components/ui/subbanner";
import BlogDetailHero from "@/app/components/layout/blogdetails/blogdetailhero";
import BlogDetailContent from "@/app/components/layout/blogdetails/blogdetailcontent";
import Achievement from "@/app/components/ui/achievement";
import { site as travelData } from "@/data/index";
import type { BlogPostItem } from "@/data/index";

interface BlogDetailsPageProps {
  searchParams?: Promise<{ id?: string }>;
}

export default async function BlogDetailsPage({ searchParams }: BlogDetailsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const blogId = resolvedSearchParams.id || "1";

  const allPosts: BlogPostItem[] = travelData.blog?.posts || [];
  const post = allPosts.find((p) => p.id === blogId) || allPosts[0];

  return (
    <section className="min-h-screen bg-white">
      {/* SubBanner matching screenshot (Home > Our Blogs > Blog Detail) */}
      <SubBanner pageKey="blogdetails" />

      {/* Main Content Area */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-12 sm:space-y-16">
        {/* 1. Hero Component */}
        <BlogDetailHero post={post} />

        {/* 2. Main Content Component */}
        <BlogDetailContent post={post} />
      </div>

      {/* Bottom Achievements Banner */}
      <div className="mt-14 sm:mt-20">
        <Achievement />
      </div>
    </section>
  );
}
