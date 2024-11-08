import { motion } from "framer-motion";

const words = "Experience the Vyvo AI".split(" ");

const BannerTitle = () => {
  return (
    <motion.h1
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{
        duration: 3.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-[72px] font-light text-center leading-[74px] tracking-[-2.16px] bg-gradient-to-r text-white font-nb flex justify-center flex-wrap"
    >
      {words.map((word, i) => (
        <motion.span
          style={{
            marginRight: i === words.length - 1 ? "0" : "0.3em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.35,
            delay: i * 0.3,
          }}
          key={i}
          className="bg-gradient-to-r from-[#94A8ED] to-[#FFFFFF] bg-clip-text text-transparent"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BannerTitle;
