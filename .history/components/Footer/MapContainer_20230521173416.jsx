import React, { useEffect, useRef } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const map = new props.google.maps.Map(mapRef.current, {
        center: { lat: 55.770549232855636, lng: 12.511607619033585 },
        zoom: 14,
      });

      new props.google.maps.Marker({
        position: { lat: 55.770549232855636, lng: 12.511607619033585 },
        map,
      });
    };

    if (props.google && props.google.maps) {
      // Si la API de Google Maps ya se ha cargado, llamamos a loadMap directamente
      loadMap();
    } else {
      // Si la API de Google Maps aún no se ha cargado, esperamos hasta que se cargue
      window.onGoogleMapLoad = loadMap;
    }
  }, [props.google]);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAJo2JODiQ6DbWhnpVEiJJbjBWaMtVacG0",
})(MapContainer);
