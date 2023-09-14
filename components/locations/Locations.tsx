import React from 'react'
import Map from './Map'
import { InputCard } from '../hero/InputCard'
import List from './List'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import Filter from './Filter'

interface MainMapProps {
  cuisine?: string,
  location?: string,
}

const Locations = ({ }: MainMapProps) => {
  
  // fetch locations
  return (
    <div className='flex flex-col gap-y-10 justify-center items-center sm:items-start'>
      {/* <InputCard className='h-full flex-1'/> */}
      {/* <Map className='flex-1' locations={[]}/> */}
      {/* <List/>
       */}
       <Filter/>
      <Tabs defaultValue="list" className="w-full flex flex-col">
        <TabsList>
          <TabsTrigger value="list">Location List</TabsTrigger>
          <TabsTrigger value="map">Location Map</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <List/>
        </TabsContent>
        <TabsContent value="map">
          <Map locations={[]}/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Locations;