import SubBanner from "@/app/components/ui/subbanner";
import EnquirySec from "@/app/components/layout/enquiry/enquirysec";
import Achievement from "@/app/components/ui/achievement";

export const metadata = {
  title: "Travel Enquiry | TripNexa",
  description:
    "Share your travel plans with us and our experts will get back to you with personalized options.",
};

export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="enquiry" />
      <EnquirySec />
      <Achievement />
    </main>
  );
}
