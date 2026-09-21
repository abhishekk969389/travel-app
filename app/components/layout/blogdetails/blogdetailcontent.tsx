"use client";

import Image from "next/image";
import { FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import type { BlogDetailsData, BlogPostItem } from "@/data/index";

interface BlogDetailContentProps {
  post?: BlogPostItem;
  details?: BlogDetailsData;
}

export default function BlogDetailContent({ post, details: propDetails }: BlogDetailContentProps) {
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
    <div className="space-y-10 sm:space-y-12">
      {/* SECTION 1: Why Visit Bali? */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-[4px] h-6 sm:h-7 bg-[#ff2e63] rounded-full inline-block" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d1724] tracking-tight">
            {details.section1?.title || "Why Visit Bali?"}
          </h2>
        </div>
        <p className="text-slate-600 text-sm sm:text-base md:text-[1.02rem] leading-relaxed font-normal">
          {details.section1?.content}
        </p>
      </div>

      {/* SECTION 2: Top Places to Explore in Bali */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-[4px] h-6 sm:h-7 bg-[#ff2e63] rounded-full inline-block" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d1724] tracking-tight">
            {details.section2?.title || "Top Places to Explore in Bali"}
          </h2>
        </div>

        {/* 4 Places Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {details.section2?.places?.map((place, idx) => (
            <div
              key={place.id || idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative w-full h-[180px] sm:h-[190px] overflow-hidden bg-slate-100">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text Info */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-start">
                <h3 className="text-base font-extrabold text-[#0d1724] group-hover:text-[#ff2e63] transition-colors leading-snug mb-1">
                  {place.name}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE CARD BANNER */}
      <div className="bg-[#fff2f5] rounded-[24px] p-6 sm:p-8 border border-[#ffe0e6] shadow-xs flex items-center gap-4 sm:gap-5">
        {/* Quote Icon Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ffe0e8] text-[#ff2e63] flex items-center justify-center shrink-0 shadow-xs">
          <FaQuoteLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        {/* Quote Text */}
        <p className="text-sm sm:text-base md:text-lg font-bold text-[#0d1724] italic leading-relaxed">
          &ldquo;{details.quote?.text || "Bali is not just a destination, it's a feeling. A place where nature, culture, and happiness come together to create unforgettable memories."}&rdquo;
        </p>
      </div>

      {/* SECTION 3: Travel Tips for Bali */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-[4px] h-6 sm:h-7 bg-[#ff2e63] rounded-full inline-block" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0d1724] tracking-tight">
            {details.section3?.title || "Travel Tips for Bali"}
          </h2>
        </div>

        {/* 2-Column Checkmark Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1">
          {details.section3?.tips?.map((tip, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-[#f8fafc] p-3.5 sm:p-4 rounded-xl border border-slate-100">
              <FaCheckCircle className="w-5 h-5 text-[#ff2e63] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                {tip}
              </span>
            </div>
          ))}
        </div>

        {/* Conclusion Paragraph */}
        <p className="text-slate-600 text-sm sm:text-base md:text-[1.02rem] leading-relaxed font-normal pt-3">
          {details.section3?.conclusion}
        </p>
      </div>
    </div>
  );
}
