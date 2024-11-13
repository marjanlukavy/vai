"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import {
  AtomicPowerIcon,
  ChartIcon,
  WorkoutIcon,
  SlashIcon,
} from "@/components/svg";
import MobileFeatures from "./mobile-features";
import useBreakpoint from "@/hooks/useBreakpoint";

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
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = tabsData.map(() => useRef(null));
  const isMobile = useBreakpoint("lg");

  const sectionInViews = sectionRefs.map((ref) =>
    useInView(ref, {
      once: false,
      margin: "-45% 0px 35% 0px",
    })
  );

  useEffect(() => {
    const newActiveTab = sectionInViews.findIndex((isInView) => isInView);
    if (newActiveTab !== -1) {
      setActiveTab(newActiveTab);
    }
  }, [sectionInViews]);

  if (isMobile) {
    return <MobileFeatures />;
  }
  return (
    <section className="sticky top-0 rounded-[24px] bg-white w-full flex items-start justify-between px-6 md:px-[100px] max-h-[900px] overflow-hidden">
      {/* Left sidebar */}
      <div className="flex flex-col gap-[50px] sticky top-24 h-full pt-[120px]">
        <span className="text-black font-nb text-[16px] leading-[20px] tracking-[-0.48px]">
          Features of VAI
        </span>
        <div className="flex flex-col gap-6">
          {tabsData.map((tab, index) => (
            <motion.div
              key={tab.id}
              animate={{
                opacity: activeTab === index ? 1 : 0.3,
                scale: activeTab === index ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex gap-3 items-center"
            >
              <div
                className={`size-12 rounded-full ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#2A5FDD] to-[#77A9E8]"
                    : "bg-[#FCFCFE]"
                } grid place-content-center transition-colors duration-300`}
              >
                <tab.icon
                  className={
                    activeTab === index ? "text-[#94A8ED]" : "text-black"
                  }
                />
              </div>
              <span
                className={`text-[16px] leading-[20px] font-nb ${
                  activeTab === index ? "text-[#94A8ED]" : "text-black"
                } transition-colors duration-300`}
              >
                {tab.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right content */}
      <div className="h-screen max-w-[900px] w-full overflow-y-auto py-[120px] scrollbar-hide pb-[500px]">
        <div className="flex flex-col gap-[124px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[40px] md:text-[64px] leading-[44px] md:leading-[68px] font-light tracking-[-1.92px] text-black max-w-[649px] font-nb"
          >
            <span className="text-[#94A8ED]">A Companion That</span> Anticipates
            Your Needs
          </motion.h2>

          <div className="max-w-[770px] w-full flex flex-col gap-[100px]">
            {tabsData.map((tab, tabIndex) => (
              <motion.div
                key={tab.id}
                ref={sectionRefs[tabIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: sectionInViews[tabIndex] ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-14"
              >
                {tab.sections.map((section, sectionIndex) => (
                  <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: sectionInViews[tabIndex] ? 1 : 0,
                      y: sectionInViews[tabIndex] ? 0 : 30,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.2,
                    }}
                    className="w-full flex flex-col md:flex-row items-start justify-between"
                  >
                    <span className="max-w-[186px] w-full font-nb text-[24px] leading-[28px] font-normal text-black mb-4 md:mb-0">
                      {section.title}
                    </span>
                    <div className="flex flex-col w-full gap-[10px] max-w-[443px]">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: sectionInViews[tabIndex] ? 1 : 0,
                            x: sectionInViews[tabIndex] ? 0 : -20,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: sectionIndex * 0.2 + itemIndex * 0.1,
                          }}
                          className="w-full flex items-center gap-8"
                        >
                          {/* <SlashIcon /> */}
                          <span className="text-[#9DA2B3] font-nb text-[16px] leading-[20px] font-light">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
