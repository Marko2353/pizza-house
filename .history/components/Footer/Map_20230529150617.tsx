"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import customMarkerImage from '../../public/img/arrow.svg';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13} 
      style={{ height: '250px', width: '20%' }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      <Marker position={[51.505, -0.09]}/> 
    </MapContainer>
  );
};

export default Map;
