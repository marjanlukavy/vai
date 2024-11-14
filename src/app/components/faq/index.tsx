"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import SlashButton from "@/components/common/controllers/button/slash-button";

interface FAQItem {
  id: number;
  question: string;
  description: string;
}

const FAQCard = ({
  item,
  index,
  progress,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  index: number;
  progress: MotionValue<number>;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="flex items-center gap-4 md:gap-6 relative w-full cursor-pointer"
      onClick={onClick}
      animate={{ marginBottom: isOpen ? "20px" : "0px" }}
      transition={{ duration: 0.3 }}
    >
      {/* Line */}
      <motion.div
        className="w-[3px] md:w-[4px] bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8] rounded-full absolute left-0"
        animate={{
          height: isOpen ? "100%" : "64px",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="w-full bg-gradient-to-b from-[#2A5FDD] to-[#77A9E8]" />
      </motion.div>

      <div className="flex gap-4 md:gap-6 pl-6 md:pl-12 items-center justify-between w-full">
        <div className="flex flex-col">
          <motion.div
            className="flex flex-col"
            animate={{
              y: isOpen ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-nb text-white text-[16px] leading-[20px] md:text-[20px] lg:text-[32px] lg:leading-[36px] md:leading-[24px] ">
              {item.question}
            </h3>
          </motion.div>

          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-[#FFFFFF99] max-w-[619px] text-[12px] md:text-[16px] leading-[18px] md:leading-[20px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isOpen ? 0 : 20,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        </div>
        {/* Image */}
        {/* <div className="w-[60px] h-[34px] md:w-[197px] md:h-[112px] bg-[#77A9E829] rounded-lg shrink-0" /> */}
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  const handleCardClick = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section
      className="p-6 md:p-12 lg:p-20 bg-black relative z-50"
      ref={containerRef}
    >
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center justify-center gap-5 md:gap-[44px]">
        <div className="flex flex-col sm:gap-6 md:gap-8 lg:gap-12 items-center lg:items-start lg:max-w-[406px] ">
          <h2 className="font-nb font-light text-[24px] md:text-[44px] max-w-[266px] md:max-w-[406px] text-center lg:text-[56px] leading-[28px] md:leading-[48px] lg:leading-[60px] tracking-[-0.03em] text-white ">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-[56px] w-full items-center justify-center max-w-[766px]">
          {faqItems.map((item, index) => (
            <FAQCard
              key={item.id}
              item={item}
              index={index}
              progress={smoothProgress}
              isOpen={openCardId === item.id}
              onClick={() => handleCardClick(item.id)}
            />
          ))}
        </div>
        <div className="">
          <SlashButton
            showIcon={false}
            label="Vyvo Support"
            className="gap-4 bg-[#94a7ed28] py-4 md:py-[19px] test"
            labelClassName="!tracking-[-0.2px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is Vyvo OS?",
    description:
      "Vyvo OS is an innovative operating system with AI elements, functioning as your personal assistant and tool for managing daily tasks, health, and data.",
  },
  {
    id: 2,
    question: "What are the main functions of Vyvo OS?",
    description:
      "The main functions include AI-powered assistance, health tracking, data management, and personalized task organization.",
  },
  {
    id: 3,
    question: "How does Vyvo OS use data for personalization?",
    description:
      "Vyvo OS utilizes advanced AI algorithms to analyze user data and provide personalized recommendations and insights.",
  },
  {
    id: 4,
    question: "Is it safe to use Vyvo OS in terms of data privacy?",
    description:
      "We implement robust security measures and encryption to ensure your data remains private and protected.",
  },
  // {
  //   id: 5,
  //   question: "Can I connect Vyvo devices to Vyvo OS?",
  //   description:
  //     "Yes, Vyvo OS seamlessly integrates with all Vyvo devices for enhanced functionality and data synchronization.",
  // },
];
