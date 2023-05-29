"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker,SVGOverlay } from 'react-leaflet';
import customMarkerImage from '../../public/img/arrow.svg';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13} 
      style={{ height: '250px', width: '20%' }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del proveedor de mapas (en este caso, OpenStreetMap)
      />
      <Marker position={[51.505, -0.09]}/> 
      <SVGOverlay >
      <rect x="0" y="0" width="100%" height="100%" fill="blue" />
      <circle r="5" cx="10" cy="10" fill="red" />
      <text x="50%" y="50%" stroke="white">
        text
      </text>
    </SVGOverlay>
    </MapContainer>
  );
};

export default Map;
