import React, { useEffect, useRef } from "react";

const MapContainer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 55.770549232855636, lng: 12.511607619033585 },
        zoom: 14,
      });

      new google.maps.Marker({
        position: { lat: 55.770549232855636, lng: 12.511607619033585 },
        map,
      });
    };

    if (window.google && window.google.maps) {
      // Si la API de Google Maps ya se ha cargado, llamamos a loadMap directamente
      loadMap();
    } else {
      // Si la API de Google Maps aún no se ha cargado, esperamos hasta que se cargue
      window.onGoogleMapLoad = loadMap;
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default MapContainer;
