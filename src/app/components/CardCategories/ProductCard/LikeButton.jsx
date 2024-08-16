"use client"
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";



const LikeButton = ({
  className = "",
  liked = Math.random() > 0.6,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <button
      className={`w-7 h-7 flex items-center justify-center rounded-full  dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg ${className} ${isLiked ? "bg-blue-100":"bg-white"}`}
      onClick={() => setIsLiked(!isLiked)}
    >
<AiFillLike className={`w-5 h-5 ${isLiked ? "text-blue-500" : "text-neutral-300"}`}/>

     
    </button>

  

);
};

export default LikeButton;
