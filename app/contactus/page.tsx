import SubBanner from "@/app/components/ui/subbanner";
import MainContact from "@/app/components/layout/contactus/maincontact";
import ContactMessage from "@/app/components/layout/contactus/message";
import ContactLocation from "@/app/components/layout/contactus/location";
import Achievement from "@/app/components/ui/achievement";

export const metadata = {
  title: "Contact Us | TripNexa",
  description:
    "Have a question, need a quote, or ready to plan your next adventure? Get in touch with our travel team today.",
};

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
