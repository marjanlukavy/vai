import Banner from "./components/banner";
import Features from "./components/features";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Statement from "./components/statement";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <Banner />
      <Statement />
      <div className="w-full relative">
        <Features />
        <div className="relative h-screen">
          <Pricing />
          <Hero />
        </div>
      </div>
    </main>
  );
}
