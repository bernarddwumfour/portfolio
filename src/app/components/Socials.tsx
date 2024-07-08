import React from "react";
import { FaFacebook, FaLinkedinIn ,FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex flex-col gap-4 fixed right-4 md:right-12 top-1/3 md:top-1/2 z-20 bg-[rgba(255,255,255,.8)] shadow-[0px_0px_4px_0px_rgba(0,0,0,.2)] scale-[80%] md:scale-100  p-3 -translate-y-1/2 rounded-lg dark:bg-[rgba(10,1,36,0.8)]">
      <FaFacebook className="text-[1.5rem] text-blue-500  hover:scale-125 ease-in-out duration-200"/>
      <FaLinkedinIn className="text-[1.5rem] text-blue-500  hover:scale-125 ease-in-out duration-200"/>
      <FaPinterest className="text-[1.5rem] text-red-600  hover:scale-125 ease-in-out duration-200"/>
      <FaXTwitter className="text-[1.5rem]  hover:scale-125 ease-in-out duration-200"/>
    </div>
  );
};

export default Socials;
