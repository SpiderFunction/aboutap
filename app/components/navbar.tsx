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
      <div className='flex flex-row justify-between items-center px-12 py-2 border-b space-x-2 uppercase tracking-wider text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
        <span></span>
        <Link href={'/'} className='hover:text-primary transition-all duration-200'>
          <span className=''>Anthony </span>
          <span className='text-primary'>Philip</span>
        </Link>
        <ThemeToggle />
      </div>
      <ul className="flex flex-row space-x-8 justify-center items-center px-4 py-2 md:text-lg">
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
  )
}

export default Navbar