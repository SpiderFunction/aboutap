"use client"
import React from 'react'
import DecryptedText from '@/components/DecryptedText'

type Props = {
  text: string,
  addedClass?: string
}
const DecryptedTextEffect = ({ text, addedClass }: Props) => {
  return (
    <div className={`${addedClass}`}>
      <DecryptedText
        text={text} 
        speed={80}
        sequential={true}
        animateOn="view"
        />
    </div>
  )
}

export default DecryptedTextEffect
