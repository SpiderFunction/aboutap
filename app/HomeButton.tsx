"use client"

import ElectricBorder from '@/components/ElectricBorder'
import Link from 'next/link'
import React from 'react'

const HomeButton = () => {
  return (
    <div>
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
  )
}

export default HomeButton
