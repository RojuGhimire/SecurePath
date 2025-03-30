import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
// import { useLinkInView } from "@/hooks/useLinkInView";


const services = [
  { icon: "/1.png" },
  { icon: "/2.png" },
  { icon: "/3.png" },
  { icon: "/4.png" },
  { icon: "/5.png" },
];

const benefits = [
  { icon: "🎧", text: "24/7 Customer Support" },
  { icon: "🔄", text: "Business Process Streamlining" },
  { icon: "⚙️", text: "Efficiency Maximization" },
  { icon: "👨‍💼", text: "Access Expert Talent" },
];
const ServicesComponent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const ref = useRef(null);  // Create a ref
  const controls = useAnimation();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}  // Pass the ref here
      id="services"
      className="w-full overflow-hidden max-w-[1440px] mx-auto px-12 sm:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container text-center">
        <motion.h2
          className="text-4xl lg:mt-16 font-bold text-zinc-900"
          variants={childVariants}
        >
          Our Services
        </motion.h2>
        <motion.p className="font-poppins text-center text-gray-500  mt-2" variants={childVariants}>
          See What We Provide.
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        >
          <motion.div
            className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
            variants={childVariants}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[195px]">
          <div className="flex flex-row justify-center items-center">
            <img
              src="/vice.png"
              alt=""
              className="w-[331.07px] h-[401px]  md:w-[410px] lg:h-[401px]"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center"
                  variants={childVariants}
                >
                  <img src={service.icon} className="w-full lg:w-[375px]" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col font-poppins justify-center items-center p-4 bg-[#00326B] rounded-3xl w-full lg:w-[320px] lg:h-[330px] gap-y-[26px]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-10 w-full"
                variants={childVariants}
                initial="hidden"
                animate={controls}
              >
                <div className="text-4xl text-white items-start justify-start">
                  {benefit.icon}
                </div>
                <span className="w-full text-left text-white">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesComponent;
