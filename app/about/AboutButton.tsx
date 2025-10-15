"use client"

import ElectricBorder from '@/components/ElectricBorder'
import Link from 'next/link'
import React from 'react'

const AboutButton = () => {
  return (
    <div>
      <Link href="/resume" className='hidden lg:flex'>
        <ElectricBorder
            color="#ff4040"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
            className='px-8 py-3 text-center mt-8 uppercase font-semibold'
          >
          Click to check my resume
        </ElectricBorder>
      </Link>
      <Link href="/resume" className='text-xs flex lg:hidden'>
        <ElectricBorder
          color="#ff4040"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
          className='px-8 py-3 text-center mt-8 uppercase'
        >
        Tap to check my resume
        </ElectricBorder>
      </Link>
    </div>
  )
}

export default AboutButton
