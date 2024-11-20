import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OSMMapComponent = () => {
  // Center of the map (e.g., Guindy, Chennai)
  const position = [13.0108, 80.2205];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: '100%', height: '400px' }}
    >
      {/* TileLayer for OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker at the specified position */}
      <Marker position={position}>
        <Popup>Westayclose, Guindy, Chennai</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OSMMapComponent;
