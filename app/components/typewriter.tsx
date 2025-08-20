"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'


const TypeWriter = () => {
  return (
    <>
      <div className='flex flex-row gap-x-1'>
        <span className='text-white'>I am a </span>
        <span className='underline text-primary'>
          <Typewriter
            options={{
              strings: ['Developer', 'Programmer', 'Software Engineer'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </span>
      </div>
    </>
  )
}

export default TypeWriter