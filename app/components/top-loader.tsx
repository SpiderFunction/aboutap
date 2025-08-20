'use client';

import NextTopLoader from 'nextjs-toploader';
import React from 'react'

const TopLoader = () => {
  return (
    <>
      <NextTopLoader
        color="#fb2c36"
        height={2}
        crawlSpeed={200}
        crawl={true}
        easing="ease"
        speed={1000}
        zIndex={50}
        showAtBottom={false}
        showSpinner={false}
      />
    </>
  )
}

export default TopLoader