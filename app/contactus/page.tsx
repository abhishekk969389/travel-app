import SubBanner from "@/app/components/ui/subbanner";
import MainContact from "@/app/components/layout/contactus/maincontact";
import ContactMessage from "@/app/components/layout/contactus/message";
import ContactLocation from "@/app/components/layout/contactus/location";
import Achievement from "@/app/components/ui/achievement";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SubBanner pageKey="contactus" />
      <MainContact />
      <ContactMessage />
      <ContactLocation />
      <Achievement />
    </main>
  );
}
