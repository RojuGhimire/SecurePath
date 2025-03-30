import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";
import { useState } from "react";
import { PopupModal } from "react-calendly";

const HeroSection = () => {
  const { ref } = useLinkInView("Home", 0.3);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#001C3D",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
      transition: {
        yoyo: Infinity,
        duration: 0.4,
      },
    },
  };

  const imgVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full h-[600px] md:h-[750px] lg:h-[890px] overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-[81px_0_78px_89px] gap-6 lg:gap-12 mx-auto"
      style={{
        backgroundImage: 'url("/mount.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "100%",
      }}
    >
      {/* Background Overlay with Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-30 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto items-center lg:items-start">
        <motion.div
          className="text-lg lg:text-3xl font-medium leading-relaxed sm:leading-normal text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container lg:mt-16 mt-60 font-poppins flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
            <motion.div
              className="w-full lg:w-1/2 space-y-6 text-white px-4 lg:px-0"
              variants={itemVariants}
            >
              <motion.div>
                <motion.span
                  className="block font-poppins text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-tight"
                  variants={itemVariants}
                >
                  NEXUS YOUR
                </motion.span>
                <motion.span
                  className="block font-poppins text-[#FFB600] text-[30px] md:text-[40px] lg:text-[48px] font-bold leading-tight"
                  variants={itemVariants}
                >
                  TRUSTED PARTNER IN
                </motion.span>
                <motion.span
                  className="block font-poppins text-[34px] md:text-[48px] lg:text-[54px] font-bold leading-tight"
                  variants={itemVariants}
                >
                  REMOTE BOOKKEEPING
                </motion.span>
              </motion.div>
              <motion.p
                className="text-base md:text-lg text-teal-400 font-poppins px-2 lg:px-0"
                variants={itemVariants}
              >
                Ready to streamline your bookkeeping? Book a consultation today!
              </motion.p>
              <motion.button
                onClick={() => setIsOpen(true)}

                className="mt-4 bg-secondary text-white font-poppins font-semibold py-2 px-4 md:py-2.5 md:px-6 rounded text-[16px] md:text-[18px] hover:bg-primary transition duration-500"
                whileHover="hover"
                variants={buttonVariants}
              >
                <a>Book Now</a>
              </motion.button>
            </motion.div>

            <PopupModal
              url="https://calendly.com/ghimireroju"
              onModalClose={() => setIsOpen(false)}
              open={isOpen}
              rootElement={document.getElementById("root")!}
            />
            <motion.div className="w-full lg:w-1/2 mt-60" variants={itemVariants}>
              <motion.img
                src="/Hero.png"
                alt="Illustration of remote bookkeeping"
                className="hidden lg:flex  w-full h-[250px] md:h-[350px] lg:h-[511px] max-w-[500px] lg:max-w-[638px] object-cover"
                variants={imgVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
