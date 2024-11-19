"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlashIcon } from "../../svg";
import Image from "next/image";
import SlashButton from "../controllers/button/slash-button";
import { navLinks } from "@/constants/navlinks";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("/", "");
    const element = document.querySelector(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState({}, "", href);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header className="max-w-[1280px] px-4 md:px-0 mx-auto w-full pt-5 md:pt-8 flex items-center justify-between relative z-[101]">
        <motion.div
          className="relative max-w-[82px] md:max-w-[124.459px] w-full h-[28.394px]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 2.4,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
          }}
        >
          <Image src={"/logo.svg"} alt={"Logo.svg"} fill priority />
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center w-full max-w-[470px]"
          initial={{ y: -20, opacity: 0, gap: "10px" }}
          animate={{ y: 0, opacity: 1, gap: "16px" }}
          transition={{
            delay: 0.6,
            duration: 2.4,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
          }}
        >
          <div className="size-10 rounded-[12px] bg-[#94a8ed0a] backdrop-blur-[10px] main-shadow grid place-content-center">
            <SlashIcon />
          </div>
          <nav className="px-[30px] py-3 main-shadow max-w-[414px] w-full flex justify-between rounded-[16px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm transition-colors hover:text-gray-100 font-nb ${
                  pathname === link.href.replace("#", "")
                    ? "text-white font-medium"
                    : "text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 2.4,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
          }}
          className="lg:block hidden"
        >
          <div className="relative">
            <button
              type="button"
              onClick={toggleModal}
              className={`relative z-10 px-[30px] rounded-[12px] hover:rounded-[16px] bg-[#77A9E829] backdrop-blur-[10px] main-shadow flex items-center gap-2 py-[15px]`}
            >
              <span
                className={`text-[16px] leading-[18px] tracking-[-0.16px] text-white`}
              >
                Menu
              </span>
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <motion.div
                  className="w-full h-[2px] bg-white rounded-full"
                  animate={{
                    rotate: isModalOpen ? 45 : 0,
                    y: isModalOpen ? 1 : -4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-full h-[2px] bg-white rounded-full"
                  animate={{
                    rotate: isModalOpen ? -45 : 0,
                    y: isModalOpen ? -2 : 4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
            <div className="glow-effect"></div>
          </div>
        </motion.div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-transparent focus:bg-transparent z-50 w-10 h-10 flex lg:hidden flex-col justify-center items-center gap-1.5"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            className="w-6 h-0.5 bg-white block"
          />
        </button>
      </header>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] top-[96px] flex items-start justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="max-w-[955px] menu-styles w-full p-8 pb-[120px] pr-[87px]">
              <motion.div
                className="flex justify-between gap-12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {navigationData.map((section, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-6"
                    variants={{
                      hidden: { opacity: 0, y: -20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <span className="text-[12px] leading-[18px] shrink-0 text-white/60 tracking-[-0.12px] uppercase">
                      {section.section}
                    </span>
                    <div className="flex flex-col gap-3">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="text-[14px] font-light leading-[18px] text-white hover:text-gray-300 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[100] pt-24"
          >
            <div className="max-w-7xl mx-auto px-4">
              <nav className="flex flex-col items-center gap-8 pt-12">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white text-3xl font-light hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                >
                  Log in
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

const navigationData = [
  {
    section: "VAI OS",
    items: [
      { title: "VAI OS", href: "#" },
      { title: "Tokenomics Roadmap", href: "#" },
      { title: "Getting Started", href: "#" },
      { title: "Using Agents", href: "#" },
    ],
  },
  {
    section: "VYVO SMART CHAIN",
    items: [{ title: "Vyvo Smart Chain", href: "#" }],
  },
  {
    section: "VYVO TECH",
    items: [
      { title: "Overview", href: "#" },
      { title: "BioSense Ring", href: "#" },
      { title: "BioSense Band", href: "#" },
      { title: "BioSense Watch", href: "#" },
    ],
  },
  {
    section: "SOCIALFI",
    items: [{ title: "SocialFI", href: "#" }],
  },
  {
    section: "ABOUT US",
    items: [
      { title: "About Us", href: "#" },
      { title: "News", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
  {
    section: "STORE",
    items: [
      { title: "Store", href: "#" },
      { title: "Item", href: "#" },
      { title: "Item", href: "#" },
      { title: "Item", href: "#" },
    ],
  },
];

const menuItems = [
  { title: "About", href: "#about" },
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "How it works", href: "#how-it-works" },
];
