import { BeefIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 mt-[20rem] inset-x-0 z-[10] py-5 border-t-2 border-zinc-200'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
            <BeefIcon/>
          <p className='text-xl md:block font-bold'>Halal<span className='text-accent'>Find</span></p>
        </Link>
        <Link href={"https://twitter.com/"}>
            <TwitterIcon size={20}/>
            </Link>
      </div>
    </div>
  )
}

export default Footer