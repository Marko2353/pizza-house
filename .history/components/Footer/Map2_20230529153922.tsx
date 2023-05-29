import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = () => {
    const mapContainerStyle = {
      width: '100%',
      height: '400px',
    };
  
    const center = {
      lat: 51.505,
      lng: -0.09,
    };
  
    return (
      <LoadScript googleMapsApiKey="TU_CLAVE_DE_API_AQUÍ">
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
  
  export default Map;