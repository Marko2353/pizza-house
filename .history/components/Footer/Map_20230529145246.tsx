"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Coordenadas iniciales del centro del mapa
      zoom={13} // Nivel de zoom inicial
      style={{ height: "400px", width: "100%"  }} // Estilo para el contenedor del mapa
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del proveedor de mapas (en este caso, OpenStreetMap)
      />
      <Marker position={[51.505, -0.09]} /> // Marcador en las mismas coordenadas del centro del mapa
    </MapContainer>
  );
};

export default Map;
