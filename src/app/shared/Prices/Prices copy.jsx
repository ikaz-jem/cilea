import React, { FC } from "react";
import { Alegreya } from "next/font/google";

const abril = Alegreya({
    subsets: ['latin'],
    weight: ["700"],


})


const Prices = ({
  className = "",
  price = 33,
  contentClass = "py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium",
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center border-2 border-green-500 rounded ${contentClass}`}
      >
        <span className={` ${abril.className} text-black !leading-none text-lg`}>
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Prices;
