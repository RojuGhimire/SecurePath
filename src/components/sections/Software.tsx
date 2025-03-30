import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLinkInView } from "@/hooks/useLinkInView";

const Software: React.FC = () => {
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

  const { ref } = useLinkInView("Software", 1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      id="software"
      className="max-w-[1440px] font-poppins overflow-hidden w-full mx-auto px-4 lg:px-12 mt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          variants={childVariants}
        >
          Our Software Expertise
        </motion.h2>
        <motion.p className="text-gray-600 mt-4" variants={childVariants}>
          We are proficient in various bookkeeping tools:
        </motion.p>
        <motion.div
          className="border-b-2 border-primary w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
        <motion.div
          className="border-b-2 border-primary w-16 mx-auto my-4"
          variants={childVariants}
        ></motion.div>
      </div>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="flex flex-col items-center justify-center text-center px-6">
          <motion.img
            className="mx-auto h-24 w-24"
            src="/quick.png"
            alt="QuickBooks Online"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-primary">
            QuickBooks Online
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Efficient bookkeeping with QuickBooks Online.
          </p>
        </div>

        {/* Slide 2 */}
        <div className="flex flex-col items-center justify-center text-center px-6">
          <motion.img
            className="mx-auto h-24 w-24"
            src="/xero.png"
            alt="Xero"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-primary">Xero</h3>
          <p className="mt-4 text-sm text-gray-600">
            Seamless financial management with Xero.
          </p>
        </div>

        {/* Slide 3 */}
        <div className="flex flex-col items-center justify-center text-center px-6">
          <motion.img
            className="mx-auto h-24 w-24"
            src="/fb.png"
            alt="FreshBooks"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-primary">
            FreshBooks
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Simplified invoicing and expense tracking with FreshBooks.
          </p>
        </div>

        {/* Slide 4 */}
        <div className="flex flex-col items-center justify-center text-center px-6">
          <motion.img
            className="mx-auto h-24 w-24"
            src="/fb.png"
            alt="Stripe"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h3 className="mt-8 text-2xl font-extrabold text-primary">Stripe</h3>
          <p className="mt-4 text-sm text-gray-600">
            Secure payment processing with Stripe.
          </p>
        </div>
      </Slider>
    </motion.div>
  );
};

export default Software;
