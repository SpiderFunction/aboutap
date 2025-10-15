"use client"
import React from 'react'
import TypeWriter from './components/typewriter'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NavLink from './components/nav-link';
import ThunderEffect from './ThunderEffect';
import ElectricBorder from '@/components/ElectricBorder';

const Home = () => {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/hero-bg.png")' }}>
        <nav className='absolute top-0 w-full z-50 bg-black'>
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
        <ThunderEffect />
        <div className='absolute bottom-48 left-8 hidden lg:block'>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>Hi, I'm <span className='text-primary'>Anthony </span>Philip</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TypeWriter />  
          </span>
        </div>
        <div className='absolute top-30 left-8 block lg:hidden'>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>Hi, I'm <span className='text-primary'>Anthony </span>Philip</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TypeWriter />  
          </span>
        </div>
        <div className='absolute bottom-24 left-8 hidden lg:block'>
          <Link href="/about" className='text-md uppercase tracking-wide'>
            <ElectricBorder
              color="#ff4040"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className='px-8 py-3 text-center mt-8'
            >
              <div>
                  Click to know more about me
              </div>
            </ElectricBorder>
          </Link>
        </div>
        <div className='absolute top-1/2 left-0 right-0 mx-12 xs:mx-24 sm:mx-32 md:mx-48 block lg:hidden'>
          <Link href="/about" className='text-sm uppercase tracking-wide'>
            <ElectricBorder
              color="#ff4040"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className='px-4 py-3 text-center mt-8'
            >
              <div>
                  Tap to know more about me
              </div>
            </ElectricBorder>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home