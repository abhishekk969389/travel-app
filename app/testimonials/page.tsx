import SubBanner from "@/app/components/ui/subbanner";
import TestimonialsSection from "@/app/components/layout/testimonials/testsec";
import Achievement from "@/app/components/ui/achievement";


export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="testimonials" />
      <TestimonialsSection />
      <Achievement />
    </main>
  );
}
