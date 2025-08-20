import React from 'react'
import TypeWriter from './components/typewriter'
import Navbar from "./components/navbar";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavLink from './components/nav-link';

const Home = () => {
  return (
    <>
      <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/hero-bg.png")' }}>
        <nav className='sticky top-0 w-full z-50 bg-black'>
          <div className='flex flex-row justify-between items-center px-12 py-2 border-b space-x-2 uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            <span></span>
            <Link href={'/'} className='text-white hover:text-primary transition-all duration-200'>
              <span className=''>Anthony </span>
              <span className='text-primary'>Philip</span>
            </Link>
            <span></span>
          </div>
          <ul className="flex flex-row space-x-8 justify-center items-center px-4 py-2 md:text-lg text-white">
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/resume">Resume</NavLink>
            </li>
          </ul>
        </nav>
        <div className='absolute bottom-24 left-12'>
          <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Hi, I'm <span className='text-primary'>Anthony </span>Philip</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TypeWriter />  
          </span>
          <Button size={'lg'} className='hidden lg:flex mt-8 rounded-none cursor-pointer uppercase animate-pulse hover:-translate-y-0.5 transform transition' asChild>
            <Link href="/about">
                Click to know more about me
            </Link>
          </Button>
          <Button className='flex lg:hidden mt-8 rounded-none cursor-pointer uppercase animate-pulse hover:-translate-y-0.5 transform transition' asChild>
            <Link href="/about" className='text-xs'>
                Tap to know more about me
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Home