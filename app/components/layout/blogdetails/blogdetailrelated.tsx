"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site, BlogPostItem, createSlug } from "@/data/index";
import { FaRegClock, FaRegFolder, FaArrowRight } from "react-icons/fa6";
import { FadeIn, StaggerContainer, MotionCard } from "@/app/components/ui/animations";

interface BlogDetailRelatedProps {
  currentPostId?: string;
}

export default function BlogDetailRelated({ currentPostId }: BlogDetailRelatedProps) {
  const allPosts: BlogPostItem[] = site.blog?.posts || [];
  const relatedPosts = allPosts.filter((p) => p.id !== currentPostId).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="relative w-full py-10 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-extrabold tracking-widest text-[#ff2e63] uppercase block mb-1">
            CONTINUE READING
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b2534] tracking-tight">
            Related Blog Articles
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => {
            const blogSlug = createSlug(post.title);
            return (
            <MotionCard
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden bg-slate-100">
                <Link href={`/blogdetails?name=${blogSlug}`} className="block relative w-full h-full">
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
                    <Link href={`/blogdetails?name=${blogSlug}`}>{post.title}</Link>
                  </h3>
                </div>

                <div>
                  <Link
                    href={`/blogdetails?name=${blogSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff2e63] hover:underline"
                  >
                    <span>Read Article</span>
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            </MotionCard>
          );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
