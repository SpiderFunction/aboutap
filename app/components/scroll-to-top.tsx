"use client"
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 rounded-full bg-primary cursor-pointer hover:animate-bounce'
        >
          <ArrowUp />
        </Button>
      )}
    </>
  )
}

export default ScrollToTopButton