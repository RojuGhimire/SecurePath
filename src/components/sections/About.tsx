import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";
// import { fadeInAnimationVariants } from "@/constants";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref } = useLinkInView("Our Team", 1);

  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  

  return (
    <section ref={ref} id="about" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:px-20 lg:h-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* Right Content - Image and Call to Action */}
          <motion.div
            className="lg:w-[35%]  flex flex-col items-center lg:items-start mt-12 sm:mt-16 lg:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: rightContentInView ? 1 : 0,
              x: rightContentInView ? 0 : -100,
            }}
            transition={{ duration: 1.2, delay: 0.2 }}
            ref={rightContentRef}
          >
            <img
              src="/ram.png"
              alt="Who Are We"
              className="w-full  px-2 lg:w-auto sm:h-[350px] lg:h-[450px] object-cover"
            />
            <motion.div
              className="-mt-8 sm:-mt-16 bg-white rounded-xl shadow-lg items-center justify-center p-4 border-l-4 sm:w-[320px] md:w-[364px] h-[75px] sm:h-[85px] sm:top-[350px] lg:left-[35px] text-secondary hover:bg-primary hover:text-white border-secondary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full">
                <h2 className="font-overpass text-sm sm:text-lg font-semibold">
                  RamSharan Rijal
                </h2>
                <p className="font-overpass font-bold text-base sm:text-lg">
                  CEO / Founder
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="lg:w-[90%] mt-8 lg:mt-0 lg:pl-12 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: leftContentInView ? 1 : 0,
              x: leftContentInView ? 0 : 50,
            }}
            transition={{ duration: 1.5 }}
            ref={leftContentRef}
          >
            <div className="w-full px-4 space-y-2 lg:space-y-4">
              <h2 className="text-secondary text-lg sm:text-xl font-bold">
                CEO/Founder
              </h2>
              <p className="font-overpass text-2xl sm:text-3xl font-semibold">
                Ramsharan Rijal
              </p>
            </div>
            <div className="text-[#6C757D] px-4 space-y-5 text-[15px] sm:text-[17px] font-semibold leading-[25px] sm:leading-[28px] text-left lg:mb-8">
              <p>
                Ram Sharan Rijal is a seasoned registered auditor with a
                background in accounting and finance. With a commitment to
                integrity and professionalism, he brings extensive experience in
                auditing and financial management to ensure compliance and
                accuracy in financial reporting.
              </p>
              <p>
                In addition to his core auditing expertise, Ram Sharan Rijal has
                a strong background in financial advisory services, helping
                clients navigate complex financial landscapes. His strategic
                insight and proficiency in risk management make him a trusted
                advisor.
              </p>
              <p>
                Beyond his technical capabilities, Ram Sharan Rijal is committed
                to continuous professional development, staying updated on the
                latest auditing standards. His dedication to excellence and
                client-first approach have earned him a strong reputation in the
                industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="mt-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our Team
          </motion.h2>
          <motion.p className="font-poppins text-center text-gray-500  mt-2" variants={itemVariants}>
            Meet Our Professional Team
          </motion.p>
          <motion.div
            className="border-b-2 border-zinc-600 w-16 mx-auto my-4"
            variants={itemVariants}
          ></motion.div>
          <motion.div
            className="border-b-2 border-zinc-600 w-16 mx-auto "
            variants={itemVariants}
          ></motion.div>

          {/* <motion.div className="flex flex-wrap justify-center  gap-8 md:gap-40  px-4 lg:px-20 items-center  mt-10  lg:w-full">
            {teamMembers.map((member, id) => (
              <motion.div
                key={id}
                className="flex flex-col items-center w-[58%] sm:w-[30%] md:w-[19%] lg:w-auto"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={id}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="rounded-full overflow-hidden w-36 h-36 sm:w-48 sm:h-48">
                    <motion.img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-full h-full  object-cover"
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
                <motion.h3
                  className="text-primary mt-4  text-base sm:text-xl font-extrabold "
                  variants={itemVariants}
                >
                  {member.name}
                </motion.h3>
                <motion.p className="text-zinc-600 text-lg font-semibold " variants={itemVariants}>
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </motion.div> */}
        {/* </motion.div> */}
      {/* </div> */}
    </section>
  );
}
