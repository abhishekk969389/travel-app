import SubBanner from "@/app/components/ui/subbanner";
import BlogDetailHero from "@/app/components/layout/blogdetails/blogdetailhero";
import BlogDetailContent from "@/app/components/layout/blogdetails/blogdetailcontent";
import Achievement from "@/app/components/ui/achievement";
import { site as travelData, createSlug } from "@/data/index";
import type { BlogPostItem } from "@/data/index";

interface BlogDetailsPageProps {
  searchParams?: Promise<{ id?: string; name?: string; slug?: string; title?: string }>;
}

export default async function BlogDetailsPage({ searchParams }: BlogDetailsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const query =
    resolvedSearchParams.name ||
    resolvedSearchParams.slug ||
    resolvedSearchParams.id ||
    resolvedSearchParams.title ||
    "1";

  const allPosts: BlogPostItem[] = travelData.blog?.posts || [];
  const querySlug = createSlug(query);

  const post =
    allPosts.find((p) => {
      if (p.id === query) return true;
      if ((p as any).slug === query) return true;
      if (createSlug(p.title) === querySlug) return true;
      if (p.title.toLowerCase().includes(query.toLowerCase())) return true;
      return false;
    }) || allPosts[0];

  return (
    <section className="min-h-screen bg-white">
      <SubBanner pageKey="blogdetails" />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-8">
        <BlogDetailHero post={post} details={post?.details} />
        <BlogDetailContent post={post} details={post?.details} />
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <Achievement />
      </div>
    </section>
  );
}
