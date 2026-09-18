import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';
import travelData from "../../data/travel-data.json";
import type { TopbarData } from '../../types/travel';

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
};

export default function TopHeader() {
    const data: TopbarData = travelData.topbar;

    return (
        <header className="bg-[#0f171e] text-white w-full overflow-hidden text-sm">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Left Side: Contact Details */}
                <div className="flex items-center space-x-6 py-">
                    {/* Phone */}
                    <div className="flex items-center space-x-1">
                        <div className="p-1 rounded-full text-[#ff2e63]">
                            <Phone className="w-4 h-4 fill-current transform -rotate-12" />
                        </div>
                        <a
                            href={data.contactInfo.phone.href}
                            className="font-medium hover:text-gray-300 transition-colors"
                        >
                            {data.contactInfo.phone.number}
                        </a>
                    </div>

                    <span className="text-gray-600">|</span>

                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-white" />
                        <a
                            href={data.contactInfo.email.href}
                            className="font-medium hover:text-gray-300 transition-colors"
                        >
                            {data.contactInfo.email.address}
                        </a>
                    </div>
                </div>

                {/* Right Side: Links, Social Icons & CTA */}
                <div className="flex items-center space-x-6">

                    {/* Links */}
                    <nav className="hidden md:flex items-center space-x-6 text-gray-200">
                        {data.navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <span className="hidden md:block text-gray-600">|</span>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        {data.socialLinks.map((item) => {
                            const IconComponent = socialIconMap[item.icon];
                            return (
                                <a key={item.platform} href={item.href} className="hover:text-gray-400 transition-colors" aria-label={item.platform}>
                                    {IconComponent && <IconComponent className="w-4 h-4" />}
                                </a>
                            );
                        })}
                    </div>

                    {/* Skewed Gradient CTA Button */}
                    <div className="relative group cursor-pointer py-3.5 pl-8 pr-6 flex items-center">
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
                        <Link href={data.cta.href} className="relative flex items-center space-x-2 text-white font-medium text-sm z-10">
                            <span>{data.cta.text}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}