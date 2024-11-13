"use client";
import Image from "next/image";
import React, { useState } from "react";
import BannerTitle from "./dynamic-content-section/stages/start/banner-title/banner-title";
import BannerParagraph from "./dynamic-content-section/stages/start/banner-paragraph/banner-paragraph";
import AiListeningText from "./ai-listening-text/AiListeningText";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import SlashButton from "@/components/common/controllers/button/slash-button";
import { SlashIcon } from "@/components/svg";
import clsx from "clsx";
import ScrollLogoSection from "@/app/components/banner/scroll-logo-section/ScrollLogoSection";
import DynamicContentSection from "@/app/components/banner/dynamic-content-section/DynamicContentSection";
import useStageStore from "@/store/useStageStore";

// Step 1  Loading
// Step 2 Press to start
// Step 3 Submit
// Step 4 Thinking
// Step 5 Audio

const Banner = () => {
  const currentStage = useStageStore((state) => state.currentStage);

  // Determine the image source based on the current stage
  let imgSrc = "/banner/center_circle_gifs/23.gif"; // Default image for start and submit stages
  switch (currentStage) {
    case "start":
    case "submit":
      imgSrc = "/banner/center_circle_gifs/23.gif";
      break;
    case "thinking":
      imgSrc = "/banner/center_circle_gifs/21.gif";
      break;
    case "audio":
      imgSrc = "/banner/center_circle_gifs/22.gif";
      break;
    default:
      imgSrc = "/banner/center_circle_gifs/23.gif";
      break;
  }

  return (
    <div className="max-w-[1280px] w-full mx-auto px-[16px]">
      <div className="h-[600px] w-full flex justify-center relative">
        <AnimatePresence>
          <motion.img
            className={"absolute w-fit h-full "}
            key={imgSrc} // Make sure the image changes when stage changes
            src={imgSrc}
            alt="Dynamic GIF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 5.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { delay: 0, duration: 4.6 },
            }} // Exit animation
          />
        </AnimatePresence>
        <motion.img
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          className={"absolute z-[-1] w-full h-full left-0 object-cover"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 2.0,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        {/*<img src="/banner/squares_gifs/1.gif" alt="" className={"absolute"} />*/}
        <AiListeningText />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center relative">
          <DynamicContentSection />
          <ScrollLogoSection />
        </div>
      </div>
    </div>
  );
};

export default Banner;
