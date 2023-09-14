import React from 'react'
import { InputCard } from './InputCard'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex 
    sm:flex-row flex-col 
    justify-center 
    items-center
    sm:justify-between gap-x-10 gap-y-10'>
        <div className='flex-2 flex flex-col gap-y-10'>
        <h1 className='sm:text-[5rem] text-5xl font-extrabold'>
            Find the best <span className='text-primary'>Halal</span>  food options for you.
        </h1>
        <p className='sm:text-3xl text-2xl'>
            View all reviews from around the web along with dish reccomendations all in one place!</p>
        </div>
        
    <Image className='hidden sm:flex flex-1 rounded-lg' src={"/images/food-blue.svg"} width={650} height={200} alt='food'/>
    </div>
  )
}

export default Hero