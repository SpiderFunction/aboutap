"use client"

import ElectricBorder from '@/components/ElectricBorder'
import Link from 'next/link'
import React from 'react'

const ResumeButton = () => {
  return (
    <div>
      <Link href="/about" className='hidden lg:flex'>
        <ElectricBorder
            color="#ff4040"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
            className='px-8 py-3 text-center mt-8 uppercase font-semibold'
          >
          Click to know more about me
        </ElectricBorder>
      </Link>
      <Link href="/about" className='text-xs flex lg:hidden'>
        <ElectricBorder
          color="#ff4040"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
          className='px-8 py-3 text-center mt-8 uppercase'
        >
        Tap to know more about me
        </ElectricBorder>
      </Link>
    </div>
  )
}

export default ResumeButton
