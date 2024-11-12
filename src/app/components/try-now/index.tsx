"use client";
import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const TryNow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const descriptionY = useTransform(scrollYProgress, [0.1, 0.6], [50, 0]);
  const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const buttonScale = useTransform(scrollYProgress, [0.2, 0.7], [0.8, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen md:min-h-[900px] grid place-content-center relative overflow-hidden"
    >
      <div className="flex flex-col gap-4 md:gap-6 items-center relative z-50">
        <motion.h2
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="font-nb text-[24px] leading-[28px] md:text-[48px] font-light md:leading-[60px] tracking-[-1.68px] text-white max-w-[185px] md:max-w-[715px] mx-auto text-center"
        >
          Take Control with{" "}
          <span className="bg-gradient-to-r from-[#94A8ED] to-[#FFFFFF] bg-clip-text text-transparent">
            VAI OS{" "}
          </span>
          Today
        </motion.h2>

        <motion.p
          style={{
            y: descriptionY,
            opacity: descriptionOpacity,
          }}
          className="font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] text-[#FFFFFF99] max-w-[283px] md:max-w-[351px] text-center tracking-[0.03rem] font-light"
        >
          Manage your life, health, and data effortlessly with VAI OS—all in one
          place.
        </motion.p>

        <motion.div
          style={{
            scale: buttonScale,
            opacity: buttonOpacity,
          }}
        >
          <SlashButton
            showIcon={false}
            label="Try now"
            className="gap-4 bg-[#94a7ed28] py-[19px] test mx-auto"
            labelClassName="!tracking-[-0.2px]"
          />
        </motion.div>
      </div>

      <img
        src="/Preloder-back.gif"
        alt="Preloder-back"
        className="absolute max-w-[1084px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default TryNow;
