"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegFolder, FaArrowRight } from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { BlogPostItem } from "@/data/index";

interface BlogDetailRelatedProps {
  currentPostId?: string;
}

export default function BlogDetailRelated({ currentPostId }: BlogDetailRelatedProps) {
  const allPosts = travelData.blog?.posts || [];

  // Filter out current post and take 3 related posts
  const relatedPosts = allPosts
    .filter((p) => p.id !== currentPostId)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="pt-10 border-t border-slate-100 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2.5px] bg-[#ff2e63] rounded-full" />
            <span className="text-xs font-extrabold text-[#ff2e63] uppercase tracking-wider">
              Recent Articles
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1724] tracking-tight">
            Explore More Travel Stories
          </h2>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ff2e63] hover:underline"
        >
          <span>View All Blogs</span>
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* 3 Related Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post: BlogPostItem) => (
          <div
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative w-full h-[200px] overflow-hidden bg-slate-100">
              <Link href={`/blogdetails?id=${post.id}`} className="block relative w-full h-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                />
              </Link>
              <div
                className={`absolute top-3 left-3 bg-gradient-to-b ${post.dateBadgeGradient} text-white px-3 py-1.5 rounded-xl text-center shadow-md`}
              >
                <span className="block text-lg font-black leading-none">
                  {post.day}
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-wider mt-0.5 opacity-90">
                  {post.monthYear}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center text-xs font-medium text-slate-500 gap-2 mb-2.5">
                  <span className="flex items-center gap-1">
                    <FaRegClock className="text-slate-400 text-xs" />
                    {post.readTime}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1">
                    <FaRegFolder className="text-slate-400 text-xs" />
                    {post.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#1b2534] leading-snug group-hover:text-[#ff2e63] transition-colors duration-200 line-clamp-2 mb-4">
                  <Link href={`/blogdetails?id=${post.id}`}>{post.title}</Link>
                </h3>
              </div>

              <div>
                <Link
                  href={`/blogdetails?id=${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff2e63] hover:underline"
                >
                  <span>Read Article</span>
                  <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
