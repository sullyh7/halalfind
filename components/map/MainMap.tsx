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
    <div className='flex flex-col sm:flex-row justify-between'>
      <InputCard className='flex-1'/>
      <Map className='flex-1' locations={[]}/>
    </div>
  )
}

export default MainMap