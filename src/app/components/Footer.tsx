import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
   <footer className="w-full dark:bg-darkbg">
     <div className="py-12 max-w-[1600px] flex gap-8 flex-col justify-between dark:bg-darkerbg bg-white items-center px-12 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]  rounded-2xl  m-3 mb-6 md:mx-auto ">
      <menu className="flex gap-5 justify-between">
        <Link
          href="/"
          className="dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem]  hover:text-indigo-600"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem]  hover:text-indigo-600"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem]  hover:text-indigo-600"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem]  hover:text-indigo-600"
        >
          Blogs
        </Link>
      </menu>

      <div className="flex  gap-4 ">
        <FaFacebook className="text-[1.2rem] text-blue-500 hover:scale-125 ease-in-out duration-200" />
        <FaLinkedinIn className="text-[1.2rem] text-blue-500 hover:scale-125 ease-in-out duration-200" />
        <FaPinterest className="text-[1.2rem] text-red-600 hover:scale-125 ease-in-out duration-200" />
        <FaXTwitter className="text-[1.2rem] hover:scale-125 ease-in-out duration-200" />
      </div>

      <p className="copy dark:text-gray-400 text-sm text-gray-500 text-center w-fit">
        Copyriht Bernard Dwumfour 2024
      </p>
    </div>
   </footer>
  );
};

export default Footer;
