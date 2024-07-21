import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MenuContent from "@/components/MenuContent";
import ReviewContent from "@/components/ReviewContent";

export default function Home() {
  return (
    <main className="bg-c_black">
      <Hero />
      <MenuContent />
      <ReviewContent />
      <AboutUs />
    </main>
  );
}
