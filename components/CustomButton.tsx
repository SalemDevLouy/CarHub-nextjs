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
      className={`custom-btn ${containerStyles} ${textStyles}`}
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
