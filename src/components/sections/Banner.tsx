import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative lg:mt-12 py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('/laptop.jpeg')" }}
      ></div>
      <div className="relative w-full max-w-[1440px] overflow-hidden h-auto py-16 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white md:w-1/2">
          <h1 className="text-4xl font-bold">
            <span className="text-secondary">Helping</span> business <br />{" "}
            reinvent itself
          </h1>
          <p className="mt-4 text-lg">We promise hard work and dedication</p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-2 gap-8 text-white">
          <div className="flex items-center  space-x-4">
            <img alt="bookkeeping-expert" src="/book.png" className="bg-#FFB600 " />
            <div>
              <p className="text-4xl font-bold">6</p>
              <p className="text-xl">Bookkeeping Expert</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img alt="total-client" src="/client.png " className="bg-#FFB600  " />
            <div>
              <p className="text-4xl font-bold">2</p>
              <p className="text-xl">Total Client</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img alt="bookings-flow" src="/flow.png" />
            <div>
              <p className="text-4xl font-bold">4</p>
              <p className="text-xl">Bookings flow / Week</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img alt="payments" src="/payment.png" />
            <div>
              <p className="text-4xl font-bold">1,926,436</p>
              <p className="text-xl">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
