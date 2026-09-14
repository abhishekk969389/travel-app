import React from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';

export default function TopHeader() {
    return (
        <header className="bg-[#0f171e] text-white w-full overflow-hidden text-sm">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between pl-4 sm:pl-6 pr-0">

                {/* Left Side: Contact Details */}
                <div className="flex items-center space-x-6 py-">
                    {/* Phone */}
                    <div className="flex items-center space-x-1">
                        <div className="p-1 rounded-full text-[#ff2e63]">
                            <Phone className="w-4 h-4 fill-current transform -rotate-12" />
                        </div>
                        <a
                            href="tel:+11234567890"
                            className="font-medium hover:text-gray-300 transition-colors"
                        >
                            +1 123 456 7890
                        </a>
                    </div>

                    <span className="text-gray-600">|</span>

                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-white" />
                        <a
                            href="mailto:support@tripnexa.com"
                            className="font-medium hover:text-gray-300 transition-colors"
                        >
                            support@tripnexa.com
                        </a>
                    </div>
                </div>

                {/* Right Side: Links, Social Icons & CTA */}
                <div className="flex items-center space-x-6">

                    {/* Links */}
                    <nav className="hidden md:flex items-center space-x-6 text-gray-200">
                        <Link href="/awards" className="hover:text-white transition-colors">
                            Awards & Recognition
                        </Link>
                        <Link href="/partners" className="hover:text-white transition-colors">
                            Partners
                        </Link>
                        <Link href="/testimonials" className="hover:text-white transition-colors">
                            Testimonials
                        </Link>
                    </nav>

                    <span className="hidden md:block text-gray-600">|</span>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Facebook">
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="Instagram">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="YouTube">
                            <FaYoutube className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors" aria-label="LinkedIn">
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>
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
                        <Link href="/plan" className="relative flex items-center space-x-2 text-white font-medium text-sm z-10">
                            <span>Plan Your Next Journey</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}