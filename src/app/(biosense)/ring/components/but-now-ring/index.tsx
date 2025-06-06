"use client";

import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const ButNowRing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const floatUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[315px] md:min-h-[600px] lg:min-h-[700px] w-full relative bg-black flex sm:items-start sm:justify-center"
    >
      {/* Background animation */}
      <div className="absolute w-full h-full left-0">
        <motion.img
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          src="/banner/squares_gifs/Preloder-back.gif"
          alt="Background GIF"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ring image animation */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 max-w-[450px] xs:max-w-[550px] md:max-w-[700px] lg:max-w-[1360px] w-full z-[5]">
        <motion.img
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={floatUp}
          src="/biosense-products/ring/buy-now.webp"
          alt="BioSense Ring Collection"
          className="w-full h-auto"
        />
      </div>

      {/* Content animation */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex items-start sm:items-center sm:justify-center gap-4 sm:gap-6 max-w-[610px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-20"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] sm:text-center tracking-[-3%]"
        >
          Are you ready to find your perfect fit?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] sm:text-center tracking-[-3%]"
        >
          Make sure to use our "find your size" feature during your purchase for
          a tailored wellness experience.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <SlashButton
            showIcon={false}
            label="Buy Now"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ButNowRing;
