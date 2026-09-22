import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';
import { site as travelData } from "@/data/index";
import type { TravelTopbarData as TopbarData } from "@/data/index";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
};

export default function TopHeader() {
    const data: TopbarData = travelData.topbar;

    return (
        <header className="bg-[#0f171e] text-white w-full overflow-hidden text-xs sm:text-sm">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[40px] sm:min-h-[44px]">

                {/* Left Side: Contact Details (Mobile: Phone only; sm+: Phone | Email) */}
                <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 py-2 sm:py-0">
                    {/* Phone Number */}
                    <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0">
                        <div className="p-0.5 sm:p-1 rounded-full text-[#ff2e63]">
                            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transform -rotate-12" />
                        </div>
                        <a
                            href={data.contactInfo.phone.href}
                            className="font-medium text-xs sm:text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
                        >
                            {data.contactInfo.phone.number}
                        </a>
                    </div>

                    {/* Separator between Phone and Email (Hidden on mobile) */}
                    <span className="hidden sm:inline text-gray-600">|</span>

                    {/* Email Address (Hidden on mobile) */}
                    <div className="hidden sm:flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        <a
                            href={data.contactInfo.email.href}
                            className="font-medium text-xs sm:text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
                        >
                            {data.contactInfo.email.address}
                        </a>
                    </div>
                </div>

                {/* Right Side: Links, Social Icons & CTA */}
                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">

                    {/* Navigation Links (Hidden on mobile/sm/md, only shown on lg+ desktop) */}
                    <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 text-gray-200">
                        {data.navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-white transition-colors whitespace-nowrap">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Separator (Hidden on mobile/sm/md, only shown on lg+ desktop) */}
                    <span className="hidden lg:block text-gray-600">|</span>

                    {/* Social Icons (Always visible on mobile & desktop) */}
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 shrink-0">
                        {data.socialLinks.map((item) => {
                            const IconComponent = socialIconMap[item.icon];
                            return (
                                <a key={item.platform} href={item.href} className="hover:text-gray-400 transition-colors p-0.5 sm:p-1" aria-label={item.platform}>
                                    {IconComponent && <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                                </a>
                            );
                        })}
                    </div>

                    {/* Skewed Gradient CTA Button (Hidden on mobile, shown on sm+) */}
                    <div className="hidden sm:flex relative group cursor-pointer py-3.5 pl-5 sm:pl-6 pr-3 sm:pr-4 items-center shrink-0">
                        {/* Extension to right screen edge in solid end-gradient color */}
                        <div
                            className="absolute top-0 bottom-0 left-0 -right-[100vw] bg-[#a8004c]"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%)' }}
                        />

                        {/* Background shape with full vibrant gradient across the button */}
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] via-[#ff2e63] to-[#a8004c] transition-transform duration-300 group-hover:scale-[1.02] origin-left"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%)' }}
                        />

                        {/* Button Content */}
                        <Link href={data.cta.href} className="relative flex items-center space-x-2 text-white font-medium text-xs sm:text-sm z-10 whitespace-nowrap">
                            <span>{data.cta.text}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}