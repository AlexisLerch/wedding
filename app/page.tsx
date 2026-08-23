import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPsection";
import RSVPSecond from "@/components/RSVPsecond";
import GiftSection from "@/components/GiftSection";
import GiftSection2 from "@/components/GiftSection2";
import DressCodeSection from "@/components/DressCodeSection";
import ThankYouSection from "@/components/ThankYouSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SaveTheDate />
        <LocationSection />
        <RSVPSection />
        <RSVPSecond />
        <GiftSection />
        <GiftSection2 />
        <DressCodeSection />
        <ThankYouSection />
      </main>
    </>
  );
}
