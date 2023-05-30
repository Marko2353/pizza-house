"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customMarkerIcon = new Icon({
  iconUrl: '/img/location.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Map = () => {
  return (
    
    <MapContainer
      center={[55.6830888756627, 12.571898796390165]}
      zoom={13}
      style={{ height: '250px', width: '20%' }} 
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[55.6830888756627, 12.571898796390165]} icon={customMarkerIcon} />
    </MapContainer>
   
  );
};

export default Map;
