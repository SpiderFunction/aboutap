"use client"

import Lightning from '@/components/Lightning'
import React from 'react'

const ThunderEffect = () => {
  return (
    <div className='w-full h-full'>
      <Lightning
        hue={0}
        xOffset={-0.2}
        speed={1.2}
        intensity={0.8}
        size={2}
      />
    </div>
  )
}

export default ThunderEffect
