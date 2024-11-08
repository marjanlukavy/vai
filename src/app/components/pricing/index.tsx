"use client";
import AnimatedTabs from "@/components/common/animations/animated-tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PricingContent from "./pricing-content";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section className="left-0 right-0 pt-[120px] pb-[137px] bg-black z-20 rounded-t-[24px] overflow-hidden grid place-content-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full ellipse"></div>

      <div className="relative z-10 max-w-[825px] w-full mx-auto flex flex-col gap-8">
        <h2 className="font-nb text-[56px] font-light leading-[60px] tracking-[-1.68px] text-white max-w-[547px] mx-auto text-center">
          Tailored Plans for Your{" "}
          <span className="bg-gradient-to-r from-[#94A8ED] to-[#FFFFFF] bg-clip-text text-transparent">
            Life CoPilot
          </span>
        </h2>

        <div className="flex flex-col gap-[63px] justify-center items-center w-full">
          <AnimatedTabs activeTab={activeTab} onChange={setActiveTab} />
          <PricingContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
