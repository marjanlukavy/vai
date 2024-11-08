"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlashIcon } from "../../svg";
import Image from "next/image";
import SlashButton from "../controllers/button/slash-button";
import { navLinks } from "@/constants/navlinks";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

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

  return (
    <header className="max-w-[1280px] mx-auto w-full pt-8 flex items-center justify-between">
      <motion.div
        className="relative max-w-[124.459px] w-full h-[28.394px]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        <Image src={"/logo.svg"} alt={"Logo.svg"} fill priority />
      </motion.div>

      <motion.div
        className="flex items-center w-full max-w-[470px]"
        initial={{ y: -20, opacity: 0, gap: "10px" }}
        animate={{ y: 0, opacity: 1, gap: "16px" }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1] },
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
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        <SlashButton label="Log in" className="py-[15px]" />
      </motion.div>
    </header>
  );
};

export default Header;
