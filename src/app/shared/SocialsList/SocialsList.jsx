import React, { FC } from "react";


import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";


const socialsDemo = [
  { name: "Facebook", Icon: FaFacebook, href: "/" },
  { name: "Twitter", Icon: FaSquareXTwitter, href: "/" },
  { name: "Youtube", Icon: FaYoutube, href: "/" },
  { name: "Telegram", Icon: FaTelegram, href: "/" },
];

const SocialsList = ({
  className ,
  itemClass = "block w-6 h-6",
}) => {

  return (
    <div
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socialsDemo.map((item, i,{Icon}) => (
        <Link
          key={i}
          className={`${itemClass}`}
          href={'/' }
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <Icon alt="" />
        </Link>
      ))}
    </div>
  );
};

export default SocialsList;
