import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PopupModal } from "react-calendly";
import { useLinkInView } from "@/hooks/useLinkInView";
import { useInView } from "react-intersection-observer";

const Meeting: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 100,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 100,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useLinkInView("Meeting", 1);

  const [currentMonth, setCurrentMonth] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([]);
  const [today] = useState<number>(new Date().getDate());

  const { ref: calendarRef, inView: calendarInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    setCurrentMonth(month);
    setCurrentYear(year);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setDaysOfWeek(days);
  }, []);

  const generateCalendar = () => {
    const weeks = [];
    const date = new Date(currentYear, new Date().getMonth(), 1);
    const startDay = date.getDay();
    const daysInMonth = new Date(currentYear, new Date().getMonth() + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      weeks.push(week);
    }
    return weeks;
  };

  const calendar = generateCalendar();

  return (
    <motion.div
      ref={ref}
      id="appointment"
      className="flex flex-col font-poppins overflow-hidden justify-center items-center gap-8 p-4 max-w-[1440px] w-full mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mt-10  ">
        <motion.h2 className="text-4xl font-bold text-zinc-900" variants={childVariants}>
          Meeting
        </motion.h2>
        <motion.p className="font-poppins text-center text-gray-500  mt-2" variants={childVariants}>
          Schedule a consultation with one of our experts
        </motion.p>
        <motion.div className="border-b-2 border-zinc-600 w-16 mx-auto my-4" variants={childVariants}></motion.div>
        <motion.div className="border-b-2 border-zinc-600 w-16 mx-auto" variants={childVariants}></motion.div>
      </div>

      <div className="flex  flex-col lg:flex-row w-full  items-center justify-center gap-8 p-4">
        <div className=" flex  flex-col gap-10 ">
        <motion.div
          className="bg-teal-50  p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center w-full  h-auto md:h-[219px]"
          variants={itemVariants}
          whileHover={hoverVariants.hover}
        >
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <div className="w-[22px] h-[14px] bg-red-600 rounded-full mr-5"></div>
            <h2 className="text-lg font-bold">Existing Client</h2>
          </div>
          <div className="flex-grow">
            <p className="text-zinc-700 font-bold text-center md:text-left">
              We are doing all virtual meetings through Zoom. Please join with us over Zoom.
            </p>
          </div>
          <div className="ml-2">
            <img alt="arrow" src="/Polygon.png" className="w-[40px] h-[27px]" />
          </div>
        </motion.div>
        <div>
        <motion.div
          className="bg-teal-50  p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center w-full  h-auto md:h-[219px]"
          variants={itemVariants}
          whileHover={hoverVariants.hover}
        >
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <div className="w-[22px] h-[14px] bg-primary rounded-full mr-5"></div>
            <h2 className="text-lg font-bold">New Client</h2>
          </div>
          <div className="flex-grow">
            <p className="text-zinc-700 font-bold text-center md:text-left">
              We are doing all virtual meetings through Zoom. Please join with us over Zoom.
            </p>
          </div>
          <div className="ml-2  md:ml-5">
            <img alt="arrow" src="/Polygon2.png" className="w-[40px] h-[27px]" />
          </div>
        </motion.div>
        </div>
        </div>

        <motion.div
          ref={calendarRef}
          initial="hidden"
          animate={calendarInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-white  p-4 flex flex-col items-center w-full lg:w-[70%]  h-auto  text-center"
          whileHover={hoverVariants.hover}
        >
          <h3 className="text-zinc-600 font-bold">Calendar</h3>
          <h2 className="text-2xl font-extrabold text-secondary">
            {currentMonth}, {currentYear}
          </h2>
          <div className="grid grid-cols-7  gap-4 my-2 w-[80%] h-auto ">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="text-center font-semibold text-zinc-700">
                {day}
              </div>
            ))}
            {calendar.map((week, weekIndex) => (
              <React.Fragment key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`text-center p-1 border border-gray-300 rounded ${
                      day === today ? "bg-[#14124e] text-white" : "text-zinc-700"
                    }`}
                  >
                    {day || ""}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="inline-flex w-[130px] h-12 py-2 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#001C3D,45%,#F6F5F2,48%,#001C3D)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Book Now
          </button>
        </motion.div>

       
      </div>
      <PopupModal
        url="https://calendly.com/ghimireroju"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")!}
      />
    </motion.div>
  );
};

export default Meeting;
