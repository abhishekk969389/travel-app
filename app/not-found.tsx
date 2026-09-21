import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    return (
        <section className="relative w-full min-h-[calc(100vh-140px)] bg-white flex items-center justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                    {/* Left Column: 404 Illustration, Headings & Action Button (Centered) */}
                    <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
                        {/* 404 Pin Graphic with Dashed Flight Path & Flying Plane */}
                        <div className="relative inline-flex items-center justify-center select-none mb-3 sm:mb-5">
                            {/* Flight Path SVG */}
                            <svg
                                viewBox="0 0 460 250"
                                className="absolute -top-6 -left-4 w-[128%] h-[140%] pointer-events-none overflow-visible z-10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Dashed Red Flight Line */}
                                <path
                                    d="M 128 160 C 88 172, 75 132, 132 106 C 188 80, 276 112, 316 46 C 336 14, 352 2, 372 -18"
                                    stroke="#FF2552"
                                    strokeWidth="2.2"
                                    strokeDasharray="5 5"
                                    strokeLinecap="round"
                                    opacity="0.9"
                                />

                                {/* Flying Red Airplane at the end of the trail */}
                                <g transform="translate(372, -34) rotate(22)">
                                    <path
                                        d="M 22 2 C 23.5 2, 24.5 3, 24.5 4.5 L 24.5 15 L 42 26 L 42 30 L 24.5 24.5 L 24.5 36 L 29 39.5 L 29 43 L 22 41 L 15 43 L 15 39.5 L 19.5 36 L 19.5 24.5 L 2 30 L 2 26 L 19.5 15 L 19.5 4.5 C 19.5 3, 20.5 2, 22 2 Z"
                                        fill="#FF2552"
                                        transform="scale(0.85)"
                                    />
                                </g>
                            </svg>

                            {/* Left Digit 4 */}
                            <span className="text-[110px] sm:text-[145px] md:text-[170px] lg:text-[190px] font-black text-[#101828] leading-none tracking-tighter">
                                4
                            </span>

                            {/* Center Map Pin with White Airplane inside */}
                            <div className="relative mx-1 sm:mx-2 w-20 h-28 sm:w-28 sm:h-36 md:w-34 md:h-44 lg:w-38 lg:h-48 flex items-center justify-center shrink-0 z-0">
                                <svg
                                    viewBox="0 0 100 130"
                                    className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,37,82,0.25)]"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#FF3366" />
                                            <stop offset="60%" stopColor="#FF2552" />
                                            <stop offset="100%" stopColor="#E6103C" />
                                        </linearGradient>
                                    </defs>

                                    {/* Pin Teardrop Body */}
                                    <path
                                        d="M 50 126 C 50 126, 95 76, 95 48 C 95 21.49, 74.85 0, 50 0 C 25.15 0, 5 21.49, 5 48 C 5 76, 50 126, 50 126 Z"
                                        fill="url(#pinGradient)"
                                    />

                                    {/* White Airplane inside the Pin */}
                                    <g transform="translate(50, 48) rotate(-42) translate(-22, -22)">
                                        <path
                                            d="M 22 2 C 23.5 2, 24.5 3, 24.5 4.5 L 24.5 15 L 42 26 L 42 30 L 24.5 24.5 L 24.5 36 L 29 39.5 L 29 43 L 22 41 L 15 43 L 15 39.5 L 19.5 36 L 19.5 24.5 L 2 30 L 2 26 L 19.5 15 L 19.5 4.5 C 19.5 3, 20.5 2, 22 2 Z"
                                            fill="#FFFFFF"
                                        />
                                    </g>
                                </svg>
                            </div>

                            {/* Right Digit 4 */}
                            <span className="text-[110px] sm:text-[145px] md:text-[170px] lg:text-[190px] font-black text-[#101828] leading-none tracking-tighter">
                                4
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-extrabold tracking-tight leading-tight mb-3">
                            <span className="text-[#101828]">Oops! </span>
                            <span className="text-[#FF2552]">Page Not Found</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 text-sm sm:text-base md:text-[17px] max-w-md mx-auto mb-7 sm:mb-8 leading-relaxed font-normal">
                            The page you are looking for might have been moved, removed or doesn&apos;t exist anymore.
                        </p>

                        {/* Back to Home Button */}
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#B50036] via-[#FF2052] to-[#FF6B35] hover:from-[#9E002E] hover:to-[#F4511E] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF2052]/30 hover:shadow-xl hover:shadow-[#FF2052]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                        >
                            <FaArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span>Back to Home</span>
                        </Link>
                    </div>

                    {/* Right Column: 404 Artwork Image */}
                    <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px]">
                            <Image
                                src="/404img.png"
                                alt="404 Page Not Found - Explore More Worry Less"
                                width={800}
                                height={700}
                                priority
                                unoptimized
                                className="w-full h-auto object-contain select-none pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
