import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Hero2(): JSX.Element {
  const { ref: leftContentRef, inView: leftContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-6  sm:p-8 lg:px-20 lg:h-auto lg:p-16">
      <div className="flex flex-col lg:flex-row lg:-mt-8">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: leftContentInView ? 1 : 0,
            x: leftContentInView ? 0 : -50,
          }}
          transition={{ duration: 3 }}
          ref={leftContentRef}
        >
          <div className="w-full  h-auto lg:h-[80px] lg:mt-20 gap-[8px]">
            <h2 className="text-secondary leading-[22px]   w-full text-lg sm:text-4xl font-bold">
              Welcome to Nexus
            </h2>

          </div>
          <div className="mx-auto">

            <p className="text-[#6C757D] text-[15px] sm:text-[17px] font-semibold leading-[25px] sm:leading-[28px] text-left lg:mb-8">
              Nexus Accounting Firm was founded with a mission to provide businesses with flexible and reliable bookkeeping solutions. Our team brings years of industry experience and expertise to every client partnership. With a team of seasoned professionals, we bring expertise across various industries, providing comprehensive support in accounting, bookkeeping, payroll, taxation, and financial advisory services. Whether you're a startup navigating rapid growth or an established enterprise seeking optimization, we offer scalable solutions to drive your success. Lorem ipsum dolor sit amet consectetur. Quis molestie lorem bibendum diam feugiat morbi volutpat. Sed bibendum proin felis in tristique aliquam sit aliquet. Et fringilla ut euismod potenti integer turpis. Consequat morbi leo mi adipiscing sapien ut
            </p>
            <p className="text-[#6C757D] text-[15px] sm:text-[17px] font-semibold leading-[25px] sm:leading-[28px] text-left">
              We understand that each individual's journey is unique. That's
              why we're committed to providing personalized guidance and
              support every step of the way. Whether you're aiming to advance
              in your career or embark on a new educational path, we're here
              to empower you. Join us on this transformative journey and let
              Skill Spot Australia be your guide to achieving your
              aspirations.
            </p>
          </div>

        </motion.div>

        {/* Right Content - Image and Call to Action */}
        <motion.div
          className="lg:w-1/2 sm:ml-5 flex flex-col items-center lg:items-end mt-12 sm:mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: rightContentInView ? 1 : 0,
            x: rightContentInView ? 0 : 100,
          }}
          transition={{ duration: 4, delay: 0.5 }}
          ref={rightContentRef}
        >
          <img
            src="/Audit.png"
            alt="Who Are We"
            className="hidden md:flex w-full sm:w-[900px] lg:w-[700px] mt-0 lg:mt-20 h-auto sm:h-[400px] lg:h-[543px] object-cover"
          />

        </motion.div>
      </div>
    </section>

  );
}
