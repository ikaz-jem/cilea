"use client"
import React, { useEffect, useId } from "react";
import Heading from "../../shared/Heading/Heading";
import img1 from "../../images/collections/1.png";
import img2 from "../../images/collections/5.png";
import img3 from "../../images/collections/4.png";
import img4 from "../../images/collections/3.png";
import CardCategory3 from "../CardCategories/CardCategory3";

import Glide from '@glidejs/glide'
import Image from "next/image";

export const CATS_DISCOVER = [
  {
    name: "Explore new arrivals",
    desc: "Shop the latest <br /> from top brands",
    featuredImage: img1,
    color: "bg-yellow-50",
  },
  {
    name: "Digital gift cards",
    desc: "Give the gift <br /> of choice",
    featuredImage: img2,
    color: "bg-red-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: img3,
    color: "bg-blue-50",
  },
  {
    name: "Sale collection",
    desc: "Up to <br /> 80% off retail",
    featuredImage: img4,
    color: "bg-green-50",
  },
];

const DiscoverMoreSlider = () => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS = {
      type: 'carousel',
      startAt: 0,

      perView: 3,
      gap: 32,
      bound: true,
      autoplay: 0,
      direction: 'ltr',
      animationDuration: 2000,
      hoverpause:true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  return (
    <div className={`nc-DiscoverMoreSlider  ${UNIQUE_CLASS} `}>
      <Heading
        desc=""
        rightdesctext="Good things are waiting for you"
        hasNextPrev
      >
        Discover more
      </Heading>
      <div className="overflow-hidden w-full" data-glide-el="track">
        <ul className="glide__slides">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`glide__slide`}>
              <CardCategory3
                name={item.name}
                desc={item.desc}
                featuredImage={item.featuredImage}
                color={item.color}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscoverMoreSlider;
