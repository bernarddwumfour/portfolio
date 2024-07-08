import React from 'react'
import Button from './Button'
import Link from 'next/link'
import ThemeSwitch from './Themeswitch'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-20 w-full backdrop-blur'>
        <div className="flex relative justify-between dark:bg-darkerbg bg-white items-center px-4 py-[0.6rem] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] rounded-xl md:m-8 m-3  md:mb-0 mb-0">
            <Link href="/" className="logo text-lg font-black text-indigo-500 tracking-[.45rem]">BKD</Link>
            <menu className='hidden md:flex gap-5 justify-between '>
                <Link href="/" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Home</Link>
                <Link href="/about" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>About</Link>
                <Link href="/projects" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Projects</Link>
                <Link href="/blogs" className='dark:text-gray-300 dark:hover:text-indigo-600 text-gray-600 text-[0.85rem] hover:text-indigo-600'>Blogs</Link>
            </menu>

           <div className="flex gap-8 items-center">
            <ThemeSwitch/>
           <Button>
                Hire Me
            </Button>
           </div>
        </div>
    </header>
  )
}

export default Header