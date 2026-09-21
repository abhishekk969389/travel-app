"use client";

import Image from "next/image";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import type { BlogDetailsData, BlogPostItem } from "@/data/index";

interface BlogDetailHeroProps {
  post?: BlogPostItem;
  details?: BlogDetailsData;
}

export default function BlogDetailHero({ post, details: propDetails }: BlogDetailHeroProps) {
  const defaultDetails: BlogDetailsData = {
    category: post?.category || "Travel Guide",
    title: post?.title || "A Complete Travel Guide to Bali: Beaches, Culture and Unforgettable Experiences",
    subtitle:
      "Discover the beauty of Bali with this detailed travel guide. From stunning beaches and ancient temples to local food and travel tips, plan your perfect getaway to the Island of Gods.",
    date: post?.monthYear ? `${post.day} ${post.monthYear}` : "15 Aug 2025",
    author: "By Rohan Mehta",
    featuredImage:
      post?.image ||
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    brushImage: "/brush.png",
    brushText: "Good Places\nBrighter Memories",
    locationTag: {
      title: "Uluwatu Temple, Bali",
      subtitle: "A breathtaking view of culture and nature",
    },
    introParagraph:
      "Bali, often called the Island of Gods, is one of the most loved travel destinations in the world. With its breathtaking beaches, rich culture, lush landscapes, and warm hospitality, Bali offers the perfect mix of relaxation and adventure. Whether you are a nature lover, a culture enthusiast, or someone looking for a peaceful escape, Bali has something special for everyone.",
    section1: {
      title: "Why Visit Bali?",
      content:
        "Bali is more than just a beach destination. It's a place where ancient traditions blend beautifully with modern travel experiences. From stunning rice terraces and majestic temples to vibrant nightlife and delicious local cuisine, every moment in Bali feels unique. The island's peaceful vibe, friendly locals, and natural beauty make it an ideal destination for honeymooners, families, and solo travelers alike.",
    },
    section2: {
      title: "Top Places to Explore in Bali",
      places: [
        {
          id: "p1",
          name: "Kelingking Beach",
          description: "Crystal clear waters and dramatic cliffs make it a must-visit.",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "p2",
          name: "Tanah Lot Temple",
          description: "A famous sea temple with breathtaking sunset views.",
          image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "p3",
          name: "Tegalalang Rice Terrace",
          description: "Experience the beauty of Bali's lush landscapes.",
          image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "p4",
          name: "Tegenungan Waterfall",
          description: "A perfect spot for nature lovers and adventure seekers.",
          image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    quote: {
      text: "Bali is not just a destination, it's a feeling. A place where nature, culture, and happiness come together to create unforgettable memories.",
      brushText: "Travel More\nWorry Less",
    },
    section3: {
      title: "Travel Tips for Bali",
      tips: [
        "Best time to visit: April to October (dry season)",
        "Try local cuisine like Nasi Goreng and Satay",
        "Carry light and comfortable clothing",
        "Rent a scooter for easy travel around the island",
        "Respect local customs and temple rules",
        "Keep your travel documents and cash safe",
      ],
      conclusion:
        "Bali is a destination that leaves a lasting impression on every traveler. Its natural beauty, rich traditions, and warm people make it a place you'll want to visit again and again. Start planning your Bali trip today and create memories that will last a lifetime.",
    },
  };

  const details = propDetails || defaultDetails;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category Pill Badge */}
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff2e63] text-white font-bold text-xs sm:text-sm shadow-sm tracking-wide">
          {details.category}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-black text-[#0d1724] tracking-tight leading-tight">
        {details.title}
      </h1>

      {/* Subtitle */}
      <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal max-w-4xl">
        {details.subtitle}
      </p>

      {/* Meta Bar: Date & Author */}
      <div className="flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-500 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#ff2e63] w-4 h-4" />
          <span>{details.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-[#ff2e63] w-4 h-4" />
          <span>{details.author}</span>
        </div>
      </div>

      {/* Hero Featured Image Container */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-[24px] group">
        <Image
          src={details.featuredImage}
          alt={details.title}
          fill
          priority
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="object-cover"
        />

        {/* Gradient Overlay for bottom text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Top-Right Brush Badge Accent using public/brush.png */}
        <div className="absolute top-4 right-4 sm:-top-12 sm:-right-18 z-20 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] h-[75px] sm:h-[100px] md:h-[125px] lg:h-[200px] pointer-events-none drop-shadow-sm">
          <Image
            src={details.brushImage || "/brush.png"}
            alt="Brush Accent"
            fill
            className="object-fill"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 py-2 text-center rotate-[-3deg]">
            <span className="font-[family-name:var(--font-script)] text-xs text-white sm:text-sm md:text-2xl whitespace-pre-line">
              {details.brushText || "Good Places\nBrighter Memories"}
            </span>
          </div>
        </div>

        {/* Bottom-Left Location Tag Badge */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl text-white max-w-sm flex items-start gap-3 shadow-lg">
          <div className="w-8 h-8 rounded-full bg-[#ff2e63] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <FaMapMarkerAlt className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
              {details.locationTag?.title || "Uluwatu Temple, Bali"}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-300 font-normal mt-0.5 line-clamp-1">
              {details.locationTag?.subtitle || "A breathtaking view of culture and nature"}
            </p>
          </div>
        </div>
      </div>

      {/* Intro Paragraph */}
      <p className="text-slate-600 text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-normal pt-2">
        {details.introParagraph}
      </p>
    </div>
  );
}
