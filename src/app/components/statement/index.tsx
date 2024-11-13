"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Statement = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const text =
    "Vyvo AI reshapes technology with adaptive responses that enhance decision-making.".split(
      ""
    );

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: [0, 1, 1, 0],
      y: [100, 0, -50, -100],
    },
  };

  const getTransition = (delay: number) => ({
    duration: 4,
    delay: isInView ? 1 + delay : 0, // Added 1 second base delay
    ease: [0.16, 1, 0.3, 1],
    times: [0, 0.3, 0.7, 1],
  });

  return (
    <section
      ref={sectionRef}
      className="h-screen grid place-content-center relative"
      id={"statement-section"}
    >
      <div className="relative">
        {/* SVG Images Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }} // Added delay here too
          className="absolute w-full flex justify-between items-center mx-auto -top-[70px] left-0 right-0 max-w-[500px]"
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={getTransition(0.2)}
          >
            <Image
              src="/statement/first.svg"
              alt="First Icon"
              width={48}
              height={48}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={getTransition(text.length * 0.08 * 0.33)}
          >
            <Image
              src="/statement/second.svg"
              alt="Second Icon"
              width={48}
              height={48}
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={getTransition(text.length * 0.08 * 0.56)}
          >
            <Image
              src="/statement/third.svg"
              alt="Third Icon"
              width={48}
              height={48}
            />
          </motion.div>

          {/* Last image that takes position of third image */}
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={getTransition(text.length * 0.08 * 0.95)}
            className="absolute right-0"
          >
            <Image
              src="/statement/last.svg"
              alt="Last Icon"
              width={48}
              height={48}
            />
          </motion.div>
        </motion.div>
        <p className="text-[40px] leading-[48px] tracking-[-1.2px] font-light max-w-[735px] text-center relative font-nb">
          {/* Text Content */}
          {text.map((char, i) => (
            <motion.span
              key={i}
              initial={{
                color: "#262626",
              }}
              animate={
                isInView
                  ? {
                      background: "linear-gradient(to right, #94A8ED, #FFFFFF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }
                  : {
                      color: "#262626",
                    }
              }
              transition={{
                duration: 0.5,
                delay: isInView ? 1 + i * 0.08 : 0, // Added 1 second delay here too
                ease: "easeInOut",
              }}
              className="inline-block bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Statement;
