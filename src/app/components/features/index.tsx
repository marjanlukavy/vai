"use client";
import {
  AtomicPowerIcon,
  ChartIcon,
  SlashIcon,
  WorkoutIcon,
} from "@/components/svg";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tabsData = [
  {
    id: 1,
    icon: AtomicPowerIcon,
    label: "VAI OS",
    sections: [
      {
        title: "Personalized Life Management",
        items: [
          "Proactive Life CoPilot, not just an AI assistant.",
          "Manages emails, calendars, and restaurant bookings.",
          "Adapts to your daily routines for personalized support.",
          "Helps across multiple areas of your life.",
        ],
      },
      {
        title: "Adaptive AI Technology",
        items: [
          "Continuously learns from your interactions and data.",
          "Initiates conversations and reminds you of tasks.",
          "Provides personalized recommendations.",
          "Monitors real-time health data and manages appointments.",
        ],
      },
      {
        title: "Data Privacy & Ownership",
        items: [
          "Continuously learns from your interactions and data.",
          "Initiates conversations and reminds you of tasks.",
          "Provides personalized recommendations.",
          "Monitors real-time health data and manages appointments.",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: WorkoutIcon,
    label: "Proactive Outreach",
    sections: [
      {
        title: "Health Monitoring",
        items: [
          "Integrates with Vyvo devices, like the BioSense Ring.",
          "Tracks and analyzes real-time health data.",
          "Sends alerts for urgent health issues.",
        ],
      },
      {
        title: "Personalized Suggestions",
        items: [
          "Analyzes your habits and data.",
          "Provides suggestions to improve daily life.",
        ],
      },
      {
        title: "Timely Reminders",
        items: [
          "Reminds you of important tasks based on your schedule.",
          "Prompts you to take vitamins and get daily steps.",
          "Follows up on emails at the right time.",
        ],
      },
    ],
  },
  {
    id: 3,
    icon: ChartIcon,
    label: "Your Data, Your Control",
    sections: [
      {
        title: "Blockchain Security",
        items: [
          "Built on Vyvo Smart Chain for enhanced privacy and security.",
          "Enables decentralized data management.",
          "Keeps your personal and health information safe.",
        ],
      },
      {
        title: "Ownership of Data",
        items: [
          "Ensures your data remains yours and under your control.",
          "Does not share your interactions or data with others.",
          "Provides peace of mind with private and secure management.",
        ],
      },
    ],
  },
];

const Features = () => {
  const firstTabRef = useRef(null);
  const secondTabRef = useRef(null);
  const thirdTabRef = useRef(null);

  const firstTabInView = useInView(firstTabRef, {
    once: false,
    margin: "-45% 0px -45% 0px",
  });
  const secondTabInView = useInView(secondTabRef, {
    once: false,
    margin: "-45% 0px -45% 0px",
  });
  const thirdTabInView = useInView(thirdTabRef, {
    once: false,
    margin: "-45% 0px -45% 0px",
  });

  return (
    <section className="sticky top-0 rounded-[24px] bg-white w-full flex items-start justify-between px-[100px] h-screen overflow-hidden relative">
      {/* Left sidebar remains the same */}
      <div className="flex flex-col gap-[50px] sticky top-24 h-full pt-[120px]">
        <span className="text-black font-nb text-[16px] leading-[20px] tracking-[-0.48px]">
          Features of VAI
        </span>
        <div className="flex flex-col gap-6">
          {tabsData.map((tab, index) => {
            const isVisible =
              (index === 0 && firstTabInView) ||
              (index === 1 && secondTabInView) ||
              (index === 2 && thirdTabInView);

            return (
              <motion.div
                key={tab.id}
                // initial={{ opacity: 0.3 }}
                // animate={{ opacity: isVisible ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 items-center"
              >
                <div className="size-12 rounded-full bg-[#FCFCFE] grid place-content-center">
                  <tab.icon />
                </div>
                <span className="text-[16px] leading-[20px] font-nb text-[#94A8ED]">
                  {tab.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right content */}
      <div className="h-screen max-w-[900px] w-full overflow-y-auto py-[120px] scrollbar-hide">
        <div className="flex flex-col gap-[124px]">
          <h2 className="text-[64px] leading-[68px] font-light tracking-[-1.92px] text-black max-w-[649px] font-nb">
            <span className="text-[#94A8ED]">A Companion That</span> Anticipates
            Your Needs
          </h2>

          <div className="max-w-[770px] w-full flex flex-col gap-6">
            {" "}
            {/* Increased gap */}
            <motion.div
              ref={firstTabRef}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: firstTabInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-14"
            >
              {tabsData[0].sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="w-full flex items-start justify-between"
                >
                  <span className="max-w-[186px] w-full font-nb text-[24px] leading-[28px] font-normal text-black">
                    {section.title}
                  </span>
                  <div className="flex flex-col w-full gap-[10px] max-w-[443px]">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="w-full flex items-center gap-8"
                      >
                        <SlashIcon />
                        <span className="text-[#9DA2B3] font-nb text-[16px] leading-[20px] font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              ref={secondTabRef}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: secondTabInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-14"
            >
              {tabsData[1].sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="w-full flex items-start justify-between"
                >
                  <span className="max-w-[186px] w-full font-nb text-[24px] leading-[28px] font-normal text-black">
                    {section.title}
                  </span>
                  <div className="flex flex-col w-full gap-[10px] max-w-[443px]">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="w-full flex items-center gap-8"
                      >
                        <SlashIcon />
                        <span className="text-[#9DA2B3] font-nb text-[16px] leading-[20px] font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              ref={thirdTabRef}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: thirdTabInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-14"
            >
              {tabsData[2].sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="w-full flex items-start justify-between"
                >
                  <span className="max-w-[186px] w-full font-nb text-[24px] leading-[28px] font-normal text-black">
                    {section.title}
                  </span>
                  <div className="flex flex-col w-full gap-[10px] max-w-[443px]">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="w-full flex items-center gap-8"
                      >
                        <SlashIcon />
                        <span className="text-[#9DA2B3] font-nb text-[16px] leading-[20px] font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
