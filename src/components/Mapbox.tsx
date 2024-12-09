import * as React from 'react';
import {Map,Marker} from 'react-map-gl';

export default function Mapbox() {
  return (
    <div className=' flex flex-grow h-full p-4 bg-white shadow-md rounded-md space-y-4 text-black'>
    <Map
      mapboxAccessToken= {process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -79.99,
        latitude: 40.44,
        zoom: 10
      }}
      // style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/ahmadhawamdah/cm4g9ldnm008m01ra7osc4t0w"
    />
    </div>
  );
}