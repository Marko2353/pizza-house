
"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map2 = () => {
    const mapContainerStyle = {
      width: '100%',
      height: '400px',
    };
  
    const center = {
      lat: 51.505,
      lng: -0.09,
    };
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyAJo2JODiQ6DbWhnpVEiJJbjBWaMtVacG0">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default Map2;