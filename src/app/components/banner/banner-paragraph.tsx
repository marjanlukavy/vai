import { motion } from "framer-motion";

const BannerParagraph = () => {
  return (
    <motion.p
      className="text-center max-w-[323px] mx-auto text-white/60 text-[16px] leading-[20px] tracking-[-0.40px] font-light"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2.2,
        delay: 0.5,
        ease: "easeOut",
      }}
    >
      An Intelligence that listens, thinks, and responds with unparalleled
      precision.
    </motion.p>
  );
};

export default BannerParagraph;
