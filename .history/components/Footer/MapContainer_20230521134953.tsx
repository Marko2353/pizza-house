import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const mapStyles = {
    width: "100%",
    height: "300px",
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 55.770549232855636,
        lng: 12.511607619033585,
      }}
    >
      <Marker position={{ lat: 55.770549232855636, lng: 12.511607619033585 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAJo2JODiQ6DbWhnpVEiJJbjBWaMtVacG0KEY",
})(MapContainer);