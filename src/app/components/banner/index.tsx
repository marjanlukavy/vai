"use client";
import Image from "next/image";
import React from "react";
import BannerTitle from "./banner-title";
import BannerParagraph from "./banner-paragraph";
import AiListeningText from "./AiListeningText";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import SlashButton from "@/components/common/controllers/button/slash-button";

const Banner = () => {
  const controls = useAnimationControls();

  // useEffect(() => {
  //   const startAnimation = async () => {
  //     // Initial fade in for the icon
  //     await controls.start({
  //       opacity: [0, 1],
  //       transition: { duration: 0.1 },
  //     });

  //     // Start continuous up and down animation
  //     controls.start({
  //       y: [0, 100, 0, -100, 0],
  //       transition: {
  //         duration: 4, // Smooth duration for the entire up-down loop
  //         ease: "easeInOut",
  //         repeat: Infinity,
  //         repeatType: "loop",
  //         times: [0, 0.25, 0.5, 0.75, 1],
  //       },
  //     });
  //   };

  //   startAnimation();
  // }, [controls]);

  return (
    <div className="max-w-[1280px] w-full mx-auto">
      <div className="h-[600px] w-full flex justify-center relative">
        <img src="/test.png" alt="" />
        <AiListeningText />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <BannerTitle />
          <BannerParagraph />
        </div>
        <div className="w-full flex items-center justify-between">
          <motion.div
            animate={controls}
            className="w-8 h-12 main-shadow rounded-full grid place-content-center backdrop-blur-sm"
          >
            <Image
              src={"/icons/scroll-down.svg"}
              alt={"Scroll Down Arrow"}
              width={16}
              height={10}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 2.4,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SlashButton
              label="Press to start"
              className="gap-4 bg-[#94a7ed28] py-[19px] test"
              labelClassName="!tracking-[-0.2px]"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 2.4,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={"/life-copilot.svg"}
              alt={"Life Copilot"}
              width={72.976}
              height={48}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
