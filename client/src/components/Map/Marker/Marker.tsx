import React from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import MarkerIcon from './assets/marker.svg';
import L from 'leaflet';

interface MarkerProps {
  marker: marker;
}

const icon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [38, 38],
});

const Marker: React.FC<MarkerProps> = ({ marker }) => {
  return (
    <LeafletMarker position={[marker.lat, marker.lon]} icon={icon}>
      <Popup>
        <div>
          <p>Name: {marker.name}</p>
          <p>Type: {marker.type}</p>
          <p>Status: {marker.status}</p>
          <p>Latitude: {marker.lat}</p>
          <p>Longitude: {marker.lon}</p>
          <p>IMEI: {marker.imei}</p>
          <p>Location: {marker.location}</p>
          <p>Text: {marker.text}</p>
          <p>Video Camera ID: {marker.videocamera_id}</p>
        </div>
      </Popup>
    </LeafletMarker>
  );
};

export default Marker;
