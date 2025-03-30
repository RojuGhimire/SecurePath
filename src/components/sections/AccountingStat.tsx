import React from "react";
import { FaMoneyBillWave, FaChartLine, FaUserTie, FaBalanceScale } from "react-icons/fa"; // Import accounting-related icons

const AccountingStats: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#F4ECE6] py-10 lg:py-20 font-overpass">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
        {/* Stat 1: Total Revenue */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <FaMoneyBillWave className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-3xl lg:text-4xl font-rose font-extrabold leading-snug">
            $120K<sup className="font-bold">+</sup>
          </h3>
          <p className="text-primary text-base lg:text-lg font-bold">Total Revenue</p>
        </div>

        {/* Stat 2: Total Expenses */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <FaChartLine className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-3xl lg:text-4xl font-rose font-extrabold leading-snug">
            $45K<sup>+</sup>
          </h3>
          <p className="text-primary text-base lg:text-lg font-bold">Total Expenses</p>
        </div>

        {/* Stat 3: Total Clients */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <FaUserTie className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-3xl lg:text-4xl font-rose font-extrabold leading-snug">
            150<sup>+</sup>
          </h3>
          <p className="text-primary text-base lg:text-lg font-bold">Total Clients</p>
        </div>

        {/* Stat 4: Profit Margin */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <FaBalanceScale className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-3xl lg:text-4xl font-rose font-extrabold leading-snug">
            25<sup>%</sup>
          </h3>
          <p className="text-primary text-base lg:text-lg font-bold">Profit Margin</p>
        </div>
      </div>
    </div>
  );
};

export default AccountingStats;
