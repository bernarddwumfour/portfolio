'use client'
import React, { useState } from 'react'
import Button from './Button'
import Link from 'next/link'
import ThemeSwitch from './Themeswitch'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const [navopen,setnavopen] = useState(false)
  const handleHireMeClick = (): void => {
    const subject = encodeURIComponent("Hiring Inquiry - Let's Build Something Great");
    const body = encodeURIComponent(
      `Hello Bernard,\n\nI'm interested in hiring you for a project.\n\n` +
      `Project Details:\n[Please describe your project here]\n\n` +
      `My Contact Information: \n\n` +
      `Looking forward to your response!`
    );
  
    window.location.href = `mailto:bernarddwumfour25@gmail.com?subject=${subject}&body=${body}`;
  };
  

  return (
    <header className='fixed top-0 left-0 z-20 w-full backdrop-blur'>
      <div className="flex relative  max-w-[1600px] justify-between dark:bg-darkerbg bg-opacity-20 dark:bg-opacity-40  backdrop-blur bg-white items-center px-4 py-[0.6rem] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] rounded-xl  m-3  md:mb-0 mb-0 md:mx-auto ">
        <div className="block md:invisible absolute mr-6 top-6 left-4 text-indigo-500" onClick={()=>setnavopen(prev=>!prev)}>
          <FaBars />
        </div>
        <Link href="/" className="logo text-lg font-black text-indigo-500 tracking-[.45rem] ps-10 md:ps-0">BKD</Link>
        <menu className='hidden md:flex gap-5 justify-between '>
          <Link href="/" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Home</Link>
          <Link href="/about" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>About</Link>
          <Link href="/projects" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Projects</Link>
          <Link href="/blogs" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Blogs</Link>
        </menu>

        <div className="flex gap-8 items-center">
          <ThemeSwitch />
          <Button  onClick={handleHireMeClick}>
            Hire Me
          </Button>
        </div>

        <menu className={`absolute dark:bg-darkerbg bg-white left-0 w-[calc(100%-0rem)] flex-col p-6 rounded-xl  shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] top-20 md:hidden gap-7 ${navopen ? "flex" : "hidden"} z-10`}>
          <Link onClick={()=>setnavopen(false)} href="/" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Home</Link>
          <Link onClick={()=>setnavopen(false)} href="/about" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>About</Link>
          <Link onClick={()=>setnavopen(false)} href="/projects" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Projects</Link>
          <Link onClick={()=>setnavopen(false)} href="/blogs" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Blogs</Link>
          <a href="/Bernard Dwumfour - Frontend Development (Web and mobile).pdf" download>
            <Button>Download CV</Button>
          </a>
        </menu>
      </div>


    </header>
  )
}

export default Header