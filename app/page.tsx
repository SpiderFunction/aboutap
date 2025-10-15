import React from 'react'
import TypeWriter from './components/typewriter'
import Link from 'next/link';
import NavLink from './components/nav-link';
import ThunderEffect from './ThunderEffect';
import HomeButton from './HomeButton';

const Home = () => {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/hero-bg.png")' }}>
        <nav className='absolute top-0 w-full z-50 bg-black'>
          <div className='flex flex-row justify-between items-center px-8 py-2 border-b space-x-2 uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            <span></span>
            <Link href={'/'} className='text-white hover:text-primary transition-all duration-200'>
              <span className=''>Anthony </span>
              <span className='text-primary'>Philip</span>
            </Link>
            <span></span>
          </div>
          <div className='lg:hidden text-xs uppercase tracking-wider text-center py-2 text-white'>Made with love by <Link href={'https://spiderfunction.com'} target='_blank' rel='noopener noreferrer' className='text-primary'>Spider Function</Link></div>
          <div className='flex flex-row justify-between items-center w-full px-8'>
            <div className='hidden lg:block w-[33%]'></div>
            <ul className="w-full lg:w-[33%] flex flex-row space-x-8 justify-center items-center px-4 py-2 md:text-lg text-white">
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
            <div className='hidden lg:block w-[33%] text-sm uppercase tracking-wider text-right text-white'>Made with love by <Link href={'https://spiderfunction.com'} target='_blank' rel='noopener noreferrer' className='text-primary'>Spider Function</Link></div>
          </div>
        </nav>
        <ThunderEffect />
        <div className='absolute bottom-48 left-8 hidden lg:block'>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>Hi, I'm <span className='text-primary'>Anthony </span>Philip</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TypeWriter />  
          </span>
        </div>
        <div className='absolute top-36 left-8 block lg:hidden'>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>Hi, I'm <span className='text-primary'>Anthony </span>Philip</span>
          <span className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <TypeWriter />  
          </span>
        </div>
        <HomeButton />
      </div>
    </>
  )
}

export default Home