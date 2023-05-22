import React, { useEffect, useRef } from "react";

const MapContainer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        zoom: 14,
      });

      new google.maps.Marker({
        position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
        map,
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJo2JODiQ6DbWhnpVEiJJbjBWaMtVacG0`;
      script.onload = loadMap;
      document.head.append(script);
    } else {
      loadMap();
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default MapContainer;
