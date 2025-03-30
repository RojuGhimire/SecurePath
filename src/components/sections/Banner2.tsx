import React from "react";
import { motion } from "framer-motion";

const Banner2: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-primary font-poppins h-auto md:h-[367px]  text-white flex flex-col md:flex-row items-center justify-between p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:gap-[228px] w-full text-center md:text-left mb-4 md:mb-0 md:mr-8">
        <div className="w-full md:w-[503px]  leading-[1.25] md:leading-[57px] mb-4 md:mb-0">
          <p className="font-poppins text-[36px] font-extrabold leading-[57px] tracking-[0.0025em] text-left">
            "Where Every Number
          </p>
          <p className="font-poppins text-[36px] font-extrabold leading-[57px] tracking-[0.0025em] text-left">
            Tells A Story Of Growth."
          </p>
        </div>
        <motion.div
          className="flex-shrink-0"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          <motion.img
            src="/banner2.png"
            alt="Image 1"
            className="w-full md:w-[429px] h-auto md:h-[269px] object-contain"
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner2;
