"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaChevronRight,
  FaEnvelope,
  FaArrowRight,
  FaHeadset,
  FaShieldAlt,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";
import { site as travelData } from "@/data/index";
import type { TravelFooterData as FooterData, LinkItem } from "@/data/index";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
};

const trustBadgeIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaHeadset,
  FaShieldAlt,
  FaPaperPlane,
};

function FooterLinkList({
  title,
  items = [],
}: {
  title: string;
  items?: LinkItem[];
}) {
  return (
    <div>
      <h3 className="text-[1.05rem] font-bold text-white">{title}</h3>
      <span className="mt-2.5 mb-4 block h-[3px] w-11 rounded-full bg-[#ff5a5f]" />
      <ul className="space-y-3">
        {(items || []).map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="group flex items-center gap-2 text-[0.92rem] text-white/90 transition-colors hover:text-[#ff5a5f]"
            >
              <FaChevronRight className="h-2.5 w-2.5 shrink-0 text-[#ff5a5f] transition-transform duration-200 group-hover:translate-x-0.5" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const data: FooterData = travelData.footer;
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-[#031926] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 ">
      {/* Mountain background */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={data.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/85 via-[#0a0f18]/92 to-[#0a0f18]" />
      </div>

      {/* Curve image — screen right, next to Stay Updated */}
      <div
        aria-hidden="true"
        className="footer-curve-mask pointer-events-none absolute top-38 right-0 z-[1] hidden h-[280px] w-[min(28vw,180px)] lg:block"
      >
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 pt-14 lg:pt-16">
        {/* Brand | Links | Destinations | Services | Stay Updated */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5 xl:gap-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <Link href="/" className="inline-block">
              <Image
                src={data.brand.logo.src}
                alt={data.brand.logo.alt}
                width={data.brand.logo.width}
                height={data.brand.logo.height}
                className="h-auto w-[240px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-[280px] text-[0.9rem] leading-relaxed text-white/85">
              {data.brand.description}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {data.socialLinks.map(({ platform, href, icon }) => {
                const IconComponent = socialIconMap[icon];
                return (
                  <a
                    key={platform}
                    href={href}
                    aria-label={platform}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#ff5a5f]"
                  >
                    {IconComponent && <IconComponent className="h-3.5 w-3.5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <FooterLinkList title="Quick Links" items={data.quickLinks} />
          </div>

          {/* Our Services */}
          <div className="col-span-1 lg:col-span-2">
            <FooterLinkList title="Our Services" items={data.services} />
          </div>

          {/* Help & Support */}
          <div className="col-span-1 lg:col-span-2">
            <FooterLinkList
              title={data["Help & Support"] ? "Help & Support" : "Popular Destinations"}
              items={data["Help & Support"] || (data as any).destinations || []}
            />
          </div>

          {/* Stay Updated — right of Our Services */}
          <div className="relative z-[2] col-span-2 sm:col-span-2 lg:col-span-3">
            <h3 className="text-[1.05rem] font-bold text-white">{data.newsletter.title}</h3>
            <span className="mt-2.5 mb-4 block h-[3px] w-11 rounded-full bg-[#ff5a5f]" />

            <p className="max-w-[290px] text-[0.88rem] leading-relaxed text-white/85">
              {data.newsletter.description}
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex max-w-[310px] items-stretch rounded-md bg-white shadow-lg"
            >
              <div className="flex min-w-0 flex-1 items-center px-3 gap-1">
                <FaEnvelope className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={data.newsletter.placeholder}
                  className="w-full min-w-0 border-0 bg-transparent py-2 text-[0.8rem] text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
              <button
                type="submit"
                className="flex shrink-0 items-center gap-1.5 rounded-md bg-[#ff5a5f] px-3.5 py-3 text-[0.78rem] font-semibold text-white transition-colors hover:bg-[#e84a50]"
              >
                {data.newsletter.buttonText}
                <FaArrowRight className="h-3 w-3" />
              </button>
            </form>

            <div className="mt-5 flex max-w-[360px] flex-wrap items-center gap-y-2 text-[0.7rem] text-white sm:flex-nowrap">
              {data.trustBadges.map((badge, idx) => {
                const IconComponent = trustBadgeIconMap[badge.icon];
                const isLast = idx === data.trustBadges.length - 1;
                return (
                  <div
                    key={badge.label}
                    className={`flex items-center gap-2 ${!isLast
                      ? "border-white/25 pr-2.5 sm:border-r"
                      : "pl-0 sm:pl-2.5"
                      } ${idx > 0 && !isLast ? "px-2.5" : ""}`}
                  >
                    {IconComponent && <IconComponent className="h-[20px] w-[16px] shrink-0 text-white" />}
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/15 pt-6 pb-2">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[0.85rem] text-white/80">
              {data.bottomBar.copyright}
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.85rem] text-white/80">
                {data.bottomBar.links.map((link, idx) => (
                  <span key={link.name} className="flex items-center gap-3">
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#ff5a5f]"
                    >
                      {link.name}
                    </Link>
                    {idx < data.bottomBar.links.length - 1 && (
                      <span className="text-white/30">|</span>
                    )}
                  </span>
                ))}
              </nav>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-9 w-9 cursor-pointer shrink-0 items-center justify-center rounded-full bg-[#ff5a5f] text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#e84a50]"
              >
                <FaArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
