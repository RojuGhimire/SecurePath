import React from "react";
import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

interface PlanProps {
  heading?: string;
  price: string;
  features: string[];
  additionalInfo?: string;
  buttonText: string;
  buttonBgColor: string; // New prop for button background color
}

const Plan: React.FC<PlanProps> = ({
  heading = "",
  price,
  features,
  buttonText,
  buttonBgColor,
}) => {
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const { ref } = useLinkInView("Pricing", 0.7);

  return (
    <motion.div
      ref={ref}
      className="bg-card p-6 lg:h-[550px] items-center justify-center rounded-lg shadow-2xl  w-[280px] md:w-[300px] lg:w-[420px] h-auto gap-8 border border-gray-200 mx-2 my-4"
      whileHover="hover"
      variants={hoverVariants}
    >
      {heading && (
        <h3 className="text-2xl font-bold text-center text-zinc-900 mt-2">
          {heading}
        </h3>
      )}
      {price && (
        <p className="font-poppins text-[24px] font-semibold leading-[24px] text-center text-secondary mt-4">
          {price}
        </p>
      )}
      <div className="items-center justify-center">
        <div className="bg-white h-[320px] w-full mt-12 p-3 rounded-lg shadow-inner flex flex-col items-center justify-between">
          <ul className="mb-2 h-[100%] ">
            {features.map((feature, index) => (
              <li key={index} >✔️ {feature}</li>
            ))}
          </ul>
          <button
            className={`text-white py-2 px-4 rounded  w-full ${buttonBgColor}`} // Use the buttonBgColor prop here
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Plan;
