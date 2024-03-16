import L from 'leaflet';
import React from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import MarkerIcon from './assets/marker.svg';
import styles from '../Map.module.scss';

interface MarkerProps {
  marker: marker;
}

const icon = L.icon({
  iconUrl: MarkerIcon,
  iconSize: [34, 34],
});

const Marker: React.FC<MarkerProps> = ({ marker }) => {
  return (
    <LeafletMarker position={[marker.lat, marker.lon]} icon={icon}>
      <Popup>
        <div className={styles.popupContent}>
          {Object.entries(marker).map(([key, value]) => (
            <div className={styles.field}>
              <span className={`${styles.label}`}>{key}:</span>
              <span className={`${styles.value}`}>{value}</span>
            </div>
          ))}
        </div>
      </Popup>
    </LeafletMarker>
  );
};

export default Marker;
