import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import NavLink from './nav-link'

type Props = {
  addedClass?: string,
}

const Navbar = ({ addedClass }: Props) => {
  return (
    <nav className={`sticky top-0 w-full z-50 ${addedClass}`}>
      <div className='flex flex-row justify-between items-center px-8 py-2 border-b space-x-2 uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
        <span></span>
        <Link href={'/'} className='hover:text-primary transition-all duration-200'>
          <span className=''>Anthony </span>
          <span className='text-primary'>Philip</span>
        </Link>
        <ThemeToggle />
      </div>
      <div className='lg:hidden text-xs uppercase tracking-wider text-center py-2'>Made with love by <Link href={'https://spiderfunction.com'} className='text-primary'>Spider Function</Link></div>
      <div className='flex flex-row justify-between items-center w-full px-8'>
        <div className='hidden lg:block w-[33%]'></div>
        <ul className="w-full lg:w-[33%] flex flex-row space-x-8 justify-center items-center px-4 py-2 md:text-lg">
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
        <div className='hidden lg:block w-[33%] text-sm uppercase tracking-wider text-right'>Made with love by <Link href={'https://spiderfunction.com'} className='text-primary'>Spider Function</Link></div>
      </div>
    </nav>
  )
}

export default Navbar