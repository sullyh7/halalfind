import React from 'react'
import { ThemeToggler } from './ThemeToggler'
import Link from 'next/link'
import { BeefIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='mb-5 py-5 border-b-2 bg-background border-zinc-200'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
            <BeefIcon/>
          <p className='text-xl md:block font-bold'>Halal<span className='text-primary'>Find</span></p>
        </Link>
        <ThemeToggler/>
      </div>
    </div>
  )
}

export default Navbar