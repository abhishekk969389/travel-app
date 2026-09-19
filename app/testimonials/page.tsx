import SubBanner from "@/app/components/ui/subbanner";
import TestimonialsSection from "@/app/components/layout/testimonials/testsec";
import Achievement from "@/app/components/ui/achievement";

export const metadata = {
  title: "Traveler Testimonials | TripNexa",
  description: "Read genuine feedback and reviews from travelers who explored the world with TripNexa.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="testimonials" />
      <TestimonialsSection />
      <Achievement />
    </main>
  );
}
