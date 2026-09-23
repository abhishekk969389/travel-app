import SubBanner from "@/app/components/ui/subbanner";
import EnquirySec from "@/app/components/layout/enquiry/enquirysec";
import Achievement from "@/app/components/ui/achievement";


export default function EnquiryPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="enquiry" />
      <EnquirySec />
      <Achievement />
    </main>
  );
}
