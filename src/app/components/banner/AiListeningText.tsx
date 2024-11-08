"use client";
import { motion } from "framer-motion";
import React from "react";

const AiListeningText = () => {
  const text = "Ai Listening..".split("");

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-[#94A8ED] text-[24px] leading-[120%] tracking-[-0.72px] font-light  font-nb flex"
      >
        {text.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.2 + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default AiListeningText;
