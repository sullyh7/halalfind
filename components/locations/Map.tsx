"use client";

import { cn } from '@/lib/utils'
import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

interface MapProps {
    locations: {
        long: number,
        lat: number,
    }[],
    className?: string,
}

const Map = ({ locations, className }: MapProps) => {
    const libraries = useMemo(() => ['places'], []);

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
      libraries: libraries as any,
    });
    
    const mapCenter = useMemo(
        () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
        []
      );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
          disableDefaultUI: true,
          clickableIcons: true,
          scrollwheel: false,
        }),
        []
      );

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

  return <>
  <div className='hidden sm:block'>
    <GoogleMap
    options={mapOptions}
    zoom={14}
    center={mapCenter}
    mapTypeId={google.maps.MapTypeId.ROADMAP}
    mapContainerStyle={{ width: "100%", height: "50rem"}}
    onLoad={() => console.log('Map Component Loaded...')}
    />
  </div>
  <div className='sm:hidden'>
    <GoogleMap
    options={mapOptions}
    zoom={14}
    center={mapCenter}
    mapTypeId={google.maps.MapTypeId.ROADMAP}
    mapContainerStyle={{ width: "100%", height: "35rem"}}
    onLoad={() => console.log('Map Component Loaded...')}
    />
  </div>
  </>
}

export default Map