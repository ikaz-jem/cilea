import React, { FC } from "react";
import { Alegreya } from "next/font/google";

const abril = Alegreya({
    subsets: ['latin'],
    weight: ["700"],


})


const Prices = ({
  className = "",
  price = 33,
  contentClass = " text-sm font-medium",
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={`flex gap-1 items-center   ${contentClass}`}
      >
        <span className={` ${abril.className}  !leading-none text-xl `}>
          {price.toFixed(2) } 
        </span>
          <span className="text-xs ">DHs</span>
      </div>
    </div>
  );
};

export default Prices;
