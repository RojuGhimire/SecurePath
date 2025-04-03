import React from "react";

const AccountingHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#001C3D] to-[#728698CF] p-10">
      <div className="max-w-[1440px] w-full grid grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-white  w-[481px]">
          <h2 className="text-secondary text-2xl font-bold">ACCOUNTING</h2>
          <h1 className="text-5xl font-extrabold mt-2">MADE SIMPLE</h1>
          <p className="text-lg mt-4 max-w-md">
            We provide a full range of accounting, tax, and business advisory services to small to medium-sized businesses and individuals.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img src="/women.png" alt="Woman working on laptop" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AccountingHero;