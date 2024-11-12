"use client";

import SmoothScroll from "@/components/common/animations/smooth-scroll";
import Banner from "./components/banner";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Statement from "./components/statement";
import TryNow from "./components/try-now";
import { ScrollerMotion, ScrollerMotionRef } from "scroller-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <ScrollerMotion spring={{ mass: 1.25, stiffness: 200, damping: 50 }}>
        {/* <Banner /> */}
        <Statement />
        <div className="w-full relative">
          <Features />
          <div className="relative 2xl:h-screen">
            <Pricing />
            <FAQ />
            <TryNow />
          </div>
        </div>
      </ScrollerMotion>
    </main>
  );
}
