import { motion } from "framer-motion";

const BannerParagraph = () => {
  return (
    <motion.p
      className=" text-center max-w-[266px] md:max-w-[350px] mx-auto text-white/60 text-[16px] leading-[20px] tracking-[-0.40px] font-[300] mt-[12px] md:mt-[10px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, transition: { delay: 0, duration: 0.6 } }} // Exit animation
      transition={{
        duration: 1.8,
        delay: 0.8,
        ease: "easeOut",
      }}
    >
      An Intelligence that listens, thinks, and responds with unparalleled
      precision.
    </motion.p>
  );
};

export default BannerParagraph;