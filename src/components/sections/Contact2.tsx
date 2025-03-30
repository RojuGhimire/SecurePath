import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { BiLoaderCircle } from "react-icons/bi";
import { useLinkInView } from "@/hooks/useLinkInView";
import { useViewport } from "@/hooks/userViewPort";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection: React.FC = () => {
  const { ref } = useLinkInView("Contact", 0.8);
  const [isLoading] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  };

  const [contactForm, setContactForm] = useState(initialState);
  useViewport();

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true, 
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeInOut" },
    },
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="bg-[#F4ECE6] lg:h-[857px] justify-center items-center p-6 w-full"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Send Your Message</h2>


        <p className="font-poppins text-center text-gray-500  mt-2">
          Don’t hesitate to ask us something. Our customer support team <br />{" "}
          is always ready to help you, 24/7.
        </p>
        
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10">
        {/* Contact Form */}

        <motion.div
          ref={formRef}
          className="bg-white shadow-lg p-8 w-full lg:w-[511.47px] lg:h-[500.5px] mt-6 lg:mt-0 lg:top-[60px] lg:left-[117.68px] rounded-lg"
          variants={fadeInVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"} // Auto animate on scroll
        >
          <h2 className="text-2xl lg:text-3xl font-semibold font-overpass mb-2">
            Get In Touch
          </h2>

          <form className="w-full space-y-3" >
            <Input
              label="First Name"
              required
              placeholder="Enter your first name"
              value={contactForm.firstName}
              onChange={(e) =>
                setContactForm({ ...contactForm, firstName: e.target.value })
              }
            />
            <Input
              label="Last Name"
              required
              placeholder="Enter your last name"
              value={contactForm.lastName}
              onChange={(e) =>
                setContactForm({ ...contactForm, lastName: e.target.value })
              }
            />
            <Input
              label="Email"
              type="email"
              required
              placeholder="Enter your email"
              value={contactForm.email}
            />
            <Input
              label="Mobile"
              required
              placeholder="Enter your mobile"
              value={contactForm.mobile}

            />
          </form>

          <button
            type="submit"
            className="inline-flex mt-7 w-[120px] h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#001C3D,45%,#F6F5F2,48%,#001C3D)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-lg"
          >
            {isLoading ? (
              <BiLoaderCircle
                className="animate-spin"
                color="#ffffff"
                size={25}
              />
            ) : (
              <div className="flex gap-2 items-center ">
                <span>Submit</span>
                <IoIosSend size={24} />
              </div>
            )}
          </button>
        </motion.div>

        {/* Office Information Box */}
        <motion.div
          className="bg-primary text-white p-8 w-full lg:w-[365.69px] lg:h-[434.27px] mt-6 lg:mt-0 lg:top-[90.65px] lg:right-[100.31px] rounded-2xl ml-0 lg:ml-10 relative"
          variants={fadeInVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            LET'S HAVE A
            <br /> TALK
          </h3>
          <p className="text-white font-semibold mb-1">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the...
          </p>

          <div className="space-y-8 mt-9">
            <div className="flex items-center ">
              <FaLocationDot className="text-secondary mr-5 h-6 w-4" />
              <p className="font-semibold ">Jorpati, Kathmandu</p>
            </div>
            <div className="flex items-center ">
              <IoCall className="text-secondary h-8 w-5 mr-5 " />
              <p className="font-semibold ">+977 940031548</p>
            </div>
            <div className="flex items-center ">
              <IoMdMail className="text-secondary h-8  mr-5 w-6" />
              <p className="font-semibold ">nexusacc@gmail.com</p>
            </div>
          </div>

          <div className="flex space-x-8 items-center justify-center mt-6">
            <FaInstagram className="h-5 w-5" />
            <FaFacebookF className="h-5 w-5" />
            <FaTwitter className="h-5 w-5" />
            <IoLogoWhatsapp className="h-5 w-5" />
            <FaLinkedin className="h-5 w-5" />
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mt-6 lg:ml-10"
          variants={fadeInVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
        >
          <img
            src="/contact.png"
            alt="Support Person"
            className="w-full lg:w-[404px] lg:h-[381px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
