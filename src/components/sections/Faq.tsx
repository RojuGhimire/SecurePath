import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useLinkInView } from '@/hooks/useLinkInView';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What services does Nexus Accounting provide?',
    answer: 'Nexus Accounting offers comprehensive bookkeeping, payroll management, tax preparation, and financial reporting services. We help businesses of all sizes stay compliant, manage cash flow, and make informed financial decisions.',
  },
  {
    question: 'Why should I choose Nexus Accounting over other firms?',
    answer: 'At Nexus Accounting, we prioritize personalized service, accuracy, and timely financial reporting. Our team is committed to understanding your unique business needs, offering tailored solutions, and ensuring your financial records are always up to date.',
  },
  {
    question: 'Can Nexus Accounting handle my business’s taxes?',
    answer: 'Yes, we offer tax preparation services, ensuring that all your financial records are accurately compiled to minimize errors and maximize deductions. We also provide year-round support to help you stay compliant with tax regulations.',
  },
  {
    question: 'How does Nexus Accounting ensure data security?',
    answer: 'We use industry-standard encryption and security protocols to protect your sensitive financial data. Our cloud-based solutions offer secure access to your financial records, ensuring confidentiality and data integrity at all times.',
  },
  {
    question: 'Do you offer services for small businesses and startups?',
    answer: 'Absolutely! Nexus Accounting specializes in providing affordable and scalable bookkeeping and accounting solutions tailored for small businesses and startups, helping you focus on growth while we handle your financials.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref } = useLinkInView("FAQ", 1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref}
    id="faq"
    className="container mx-auto font-overpass lg:mt-8 p-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
      <h3 className="font-poppins text-center text-gray-500 mb-10">
        Our pricing is <span className="font-semibold">tailored</span> to your <span className="font-semibold">business</span> size and specific needs:
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Image Section */}
        <div className="hidden lg:flex w-[378px] flex-col space-y-2">
          <img
            src="/faq1.jpg"
            alt="FAQ illustration"
            className="w-full h-[247px] rounded-lg shadow-lg"
          />
          <img
            src="/faq2.jpg"
            alt="FAQ illustration"
            className="w-full h-[267px] rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col space-y-10 lg:w-2/3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-primary">
                  {openIndex === index ? (
                    <FiMinus size={20} className="bg-primary rounded-full text-white" />
                  ) : (
                    <FiPlus size={20} className="bg-primary rounded-full text-white" />
                  )}
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
