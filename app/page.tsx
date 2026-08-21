import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import SaveTheDate from "@/components/SaveTheDate";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <Hero />
        <SaveTheDate />
        <LocationSection />
      </main>
    </>
  );
}
