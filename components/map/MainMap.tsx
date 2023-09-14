import React from 'react'
import Map from './Map'
import { InputCard } from '../hero/InputCard'

interface MainMapProps {
  cuisine?: string,
  location?: string,
}

const MainMap = ({ }: MainMapProps) => {
  
  // fetch locations
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start'>
      <InputCard className='h-full flex-1'/>
      <Map className='flex-1' locations={[]}/>
    </div>
  )
}

export default MainMap