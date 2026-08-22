import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPsection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SaveTheDate />
        <LocationSection />
        <RSVPSection />
      </main>
    </>
  );
}
