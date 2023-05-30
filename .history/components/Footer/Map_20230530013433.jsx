import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customMarkerIcon = new Icon({
  iconUrl: '/img/location.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Map = () => {
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setShowMap(false); // Oculta el mapa al cambiar de página
  }, [router.pathname]);

  useEffect(() => {
    setShowMap(true); // Muestra el mapa una vez que se haya cargado
  }, []);

  return (
    <>
      {showMap && (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '250px', width: '20%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]} icon={customMarkerIcon} />
        </MapContainer>
      )}
    </>
  );
};

export default Map;
