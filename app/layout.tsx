import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/ui/topbar";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TripNexa — Travel Beyond Borders",
  description:
    "Discover breathtaking destinations, unforgettable experiences, and journeys that stay with you forever.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist-sans)]">
        <div className="sticky top-0 z-50 w-full shadow-md">
          <TopHeader />
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
