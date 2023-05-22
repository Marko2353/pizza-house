import React, { useEffect, useRef } from "react";

const MapContainer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 55.770549232855636, lng: 12.511607619033585 },
      zoom: 14,
    });

    new google.maps.Marker({
      position: { lat: 55.770549232855636, lng: 12.511607619033585 },
      map,
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }}></div>;
};

export default MapContainer;