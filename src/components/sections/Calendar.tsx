import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLinkInView } from "@/hooks/useLinkInView";

const Meeting: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const { ref } = useLinkInView("Meeting", 1);

  const [currentMonth, setCurrentMonth] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([]);
  const [, setDatesOfWeek] = useState<number[]>([]);
  const [today] = useState<number>(new Date().getDate());

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    setCurrentMonth(month);
    setCurrentYear(year);

    const days = [ "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysArray = [];
    const datesArray = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(date);
      currentDate.setDate(date.getDate() + i);
      daysArray.push(days[currentDate.getDay()]);
      datesArray.push(currentDate.getDate());
    }

    setDaysOfWeek(daysArray);
    setDatesOfWeek(datesArray);
  }, []);

  const generateCalendar = () => {
    const weeks = [];
    const date = new Date(currentYear, new Date().getMonth(), 1);
    const startDay = date.getDay();
    const daysInMonth = new Date(currentYear, new Date().getMonth() + 1, 0).getDate();

    let day = 1 - startDay;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (day > 0 && day <= daysInMonth) {
          week.push(day);
        } else {
          week.push(null);
        }
        day++;
      }
      weeks.push(week);
    }
    return weeks;
  };

  const calendar = generateCalendar();

  const generateGoogleCalendarLink = () => {
    const baseUrl = "https://calendar.google.com/calendar/r/eventedit";
    const params = new URLSearchParams({
      text: "Consultation with Expert",
      dates: "20230707T090000Z/20230707T100000Z", // Example dates in the format YYYYMMDDTHHMMSSZ
      details: "Schedule a consultation with one of our experts",
      location: "Zoom",
    });

    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <motion.div
      ref={ref}
      id="appointment"
      className="flex flex-col overflow-hidden mb-20 justify-center items-center gap-8 p-4 max-w-[1440px] w-full mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center lg:mt-28">
        <motion.h2 className="text-4xl font-bold text-gray-900" variants={childVariants}>
          Meeting
        </motion.h2>
        <motion.p className="text-zinc-600 mt-2" variants={childVariants}>
          Schedule a consultation with one of our experts
        </motion.p>
        <motion.div className="border-b-2 border-zinc-600 w-16 mx-auto my-4" variants={childVariants}></motion.div>
        <motion.div className="border-b-2 border-zinc-600 w-16 mx-auto my-4" variants={childVariants}></motion.div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-8 p-4">
        <motion.div
          className="bg-teal-50  p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center w-full lg:w-[30%] h-auto md:h-[219px]"
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

        <motion.div
          className="bg-white p-4 rounded shadow-md flex flex-col items-center w-full lg:w-[30%] h-auto md:h-[450px] text-center"
          variants={itemVariants}
          whileHover={hoverVariants.hover}
        >
          <h3 className="text-zinc-600 font-bold">Calendar</h3>
          <h2 className="text-2xl font-extrabold text-primary">
            {currentMonth}, {currentYear}
          </h2>
          <div className="grid grid-cols-7 gap-2 my-2">
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
                      day === today ? "bg-[#4d99ae]" : ""
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <a
            href={generateGoogleCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-[130px] h-12 py-2 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#6c2b4c,45%,#F6F5F2,48%,#6c2b4c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Book Now
          </a>
        </motion.div>

        <motion.div
          className="bg-teal-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center w-full lg:w-[30%] h-auto md:h-[219px]"
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
          <div className="ml-2 md:ml-5">
            <img alt="arrow" src="/Polygon2.png" className="w-[40px] h-[27px]" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Meeting;
