//@ts-nocheck

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [activeCard, setActiveCard] = useState("ring");

  // Mapping card types to images
  const images = {
    ring: "/vyvo-tech/watch-1.png",
    band: "/vyvo-tech/watch-2.png",
    watch: "/vyvo-tech/watch-3.png",
  };

  // Click handler for cards
  const handleCardClick = (card: string) => {
    setActiveCard(card);
  };
  const handleScroll = () => {
    const targetSection = document.getElementById("statement-section");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // aligns the element at the top of the view
      });
    }
  };
  return (
    <div className="bg-black rounded-b-[24px] relative">
      <motion.img
        src="/try-now.gif"
        alt="Background GIF"
        className="absolute  w-full h-full left-0 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 2.0,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <section className="min-h-[568px] md:min-h-[900px] max-w-[1280px] mx-auto w-full flex flex-col justify-start pt-[126px] md:pt-0 md:justify-center items-center md:gap-[154px] 2xl:px-0 px-4 overflow-hidden">
        <div className="relative">
          <h1 className="text-white font-light font-nb text-[48px] md:text-[120px] leading-[52px] md:leading-[124px] text-center mx-auto max-w-[550px]">
            <span className="vyvo-tech-gradient-text">BioSense</span>
            <br /> Ring
          </h1>

          {/* Animated Image */}
          <motion.img
            key={activeCard} // Framer Motion will detect changes
            src={images[activeCard]}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[-55%] right-[-28%] md:max-w-full max-w-[128px]"
          />
        </div>

        <div className="w-full mt-auto md:mt-0 pb-6 md:pb-0 flex md:flex-row flex-col gap-8 md:gap-0 items-center justify-between">
          {/* Scroll Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              y: [20, 0, 0, 20], // Bounce motion from top to bottom
              scale: 1,
              opacity: 1,
            }}
            transition={{
              opacity: { duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }, // Fade-in duration
              scale: { duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }, // Fade-in duration
              repeat: Infinity, // Repeat animation infinitely
              repeatDelay: 0.2, // 0.5 seconds delay between each loop

              repeatType: "loop", // Continuous loop
              duration: 2.1, // Duration of one cycle
              ease: "easeInOut", // Smooth easing
            }}
            className="w-[16px] h-[24px] md:w-8 md:h-12 rounded-full grid place-content-center backdrop-blur-sm cursor-pointer bg-[rgba(148,168,237,0.04)]"
            onClick={handleScroll}
            style={{
              boxShadow:
                "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset,0px -1px 1px 0px rgba(148, 168, 237, 0.2) inset,0px 1px 1px 0px rgba(148, 168, 237, 0.2) inset",
            }}
          >
            <img
              src={"/icons/scroll-down.svg"}
              alt={"Scroll Down Arrow"}
              className={"w-[5px] md:w-[10px] h-[8px] md:h-[16px]"}
            />
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <span className="font-light text-[16px] leading-[20px] text-white">
              Explore
            </span>
            <div className="flex gap-2 md:gap-4 md:max-w-[494px] w-full">
              {["ring", "band", "watch"].map((card) => (
                <div
                  key={card}
                  className={`vyvo-tech-bg-banner-tag p-[1px] rounded-[8px] md:rounded-[16px] cursor-pointer transition-all duration-300 ${
                    activeCard === card ? "bg-[#161d29]" : ""
                  } hover:bg-[#202938]`}
                  onClick={() => handleCardClick(card)}
                >
                  <motion.div
                    initial={{ opacity: 0.7 }}
                    animate={
                      activeCard === card ? { opacity: 1 } : { opacity: 1 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`p-[5px] h-[26px] md:h-auto md:py-[14px] md:px-6 grid place-content-center rounded-[8px] md:rounded-[16px] transition-all duration-300 ${
                      activeCard === card ? "bg-[#161d29]" : "!bg-black"
                    } hover:!bg-[#2a3648]`}
                  >
                    <span className="vyvo-tech-gradient-text font-nb text-[12px] leading-[16px] md:text-[16px] md:leading-[20px] tracking-[-0.03em] capitalize">
                      BioSense {card}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between w-full md:hidden">
            <div
              onClick={handleScroll}
              className="w-[16px] h-[24px] md:w-8 md:h-12 rounded-full grid place-content-center backdrop-blur-sm cursor-pointer bg-[rgba(148,168,237,0.04)]"
              style={{
                boxShadow:
                  "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset,0px -1px 1px 0px rgba(148, 168, 237, 0.2) inset,0px 1px 1px 0px rgba(148, 168, 237, 0.2) inset",
              }}
            >
              <img
                src={"/icons/scroll-down.svg"}
                alt={"Scroll Down Arrow"}
                className={"w-[5px] md:w-[10px] h-[8px] md:h-[16px]"}
              />
            </div>
            <img
              src={"/logo-pilot.svg"}
              alt={"Life Copilot"}
              width={72.976}
              height={48}
              className={"w-[36px] md:w-[73px] h-[24px] md:h-[48px] block"}
            />
          </div>
          {/* Logo */}
          <img
            src={"/logo-pilot.svg"}
            alt={"Life Copilot"}
            width={72.976}
            height={48}
            className={
              "w-[36px] md:w-[73px] h-[24px] md:h-[48px] hidden md:block"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;