"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({title,containerStyles,textStyles,rightIcon,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn hover:scale-[1.08] transition duration-300 easy-in-out ${containerStyles} ${textStyles}`}
    >
      <span className={`flex-1 `}>
        {title}
      </span>
      {
        rightIcon ?
          <Image src={rightIcon}
        alt='right icon'
        className=""
        width={20}
        height={20}
        /> :
        ''
      }
      
    </button>
  )
}

export default CustomButton
