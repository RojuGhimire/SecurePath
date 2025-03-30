import React from "react";
import { motion } from "framer-motion";
import Plan from "../plan";

const Price: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.3,
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

  const plans = [
    {
      heading: "Basic Plan",
      price: "$50/ Month",
      features: [
        "Daily 2 hour processing",
        "Quickbooks Setup",
        "Monthly Reconcile",
        "2 meetings a month",
        "PL and Balance Sheet",
        "Light A/R & A/P",
        "Manage only one company",
      ],
      buttonText: "Get Started",
      buttonBgColor: "bg-secondary", // Background color for Basic Plan button
    },
    {
      heading: "Premium Plan",
      price: "$150/ Month",
      features: [
        "Quickbooks Setup",
        "Daily 6 Hour Processing",
        "Monthly Reconcile",
        "1 Meeting a Week",
        "PL and Balance Sheet",
        "A/R & A/P",
        "Dedicated Accountant",
        "Financial Statement Analysis",
        "Payroll for up to 25 employees",
      ],
      buttonText: "Upgrade Now",
      buttonBgColor: "bg-primary", // Background color for Premium Plan button
    },
  ];

  return (
    <motion.div
      id="pricing"
      className="max-w-[1440px] font-poppins h-auto overflow-hidden mx-auto px-4 lg:py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mt-16">
        <motion.h2
          className="text-4xl font-bold text-zinc-900"
          variants={childVariants}
        >
          Pricing
        </motion.h2>
        <motion.p className="font-poppins text-center text-gray-500  mt-2" variants={childVariants}>
          Our pricing is tailored to your business size and specific needs:
        </motion.p>
        <motion.div
          className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <div className="border-b-2 border-zinc-600 w-16 mx-auto my-4"></div>

      </div>
      <h1 className="font-poppins text-[18px] italic font-normal leading-[27px] text-center mb-7">
        Choose the perfect plan for you
      </h1>
      <div className="flex gap-[1.7px] items-center justify-center mb-7">
        <button className="bg-primary text-white w-[153px] h-[40.66px] p-[10.7px]">
          Monthly
        </button>
        <button className="bg-secondary text-white w-[153px] h-[40.66px] p-[10.7px]">
          Yearly
        </button>
      </div>

      <div className="flex flex-wrap items-center  justify-center gap-4 lg:gap-8 p-4">
        {plans.map((plan, index) => (
          <Plan
            key={index}
            heading={plan.heading}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            buttonBgColor={plan.buttonBgColor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Price;
