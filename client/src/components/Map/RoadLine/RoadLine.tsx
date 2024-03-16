import React from 'react';
import { Polyline, Popup } from 'react-leaflet';
import styles from '../Map.module.scss';

interface RoadProps {
  road: road;
}

const lineOptionsActive = { color: 'green', opacity: 1, weight: 5 };
const lineOptionsInactive = { color: 'green', opacity: 0.6, weight: 3 };

const RoadLine: React.FC<RoadProps> = ({ road }) => {
  const [popupActive, setPopupActive] = React.useState(false);
  return (
    <div>
      <Polyline
        pathOptions={popupActive ? lineOptionsActive : lineOptionsInactive}
        positions={road.coordinates[0].map(([lon, lat]) => [lat, lon])}
        eventHandlers={{
          popupopen: () => setPopupActive(true),
          popupclose: () => setPopupActive(false),
        }}
      >
        <Popup>
          <div className={styles.popupContent}>
            {Object.entries(road).map(
              ([key, value]) =>
                key != 'coordinates' && (
                  <div className={styles.field}>
                    <span className={styles.label}>{key}:</span>
                    <span className={styles.value}>{value}</span>
                  </div>
                ),
            )}
          </div>
        </Popup>
      </Polyline>
    </div>
  );
};

export default RoadLine;
