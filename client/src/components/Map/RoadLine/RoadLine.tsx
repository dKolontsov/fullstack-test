import React from 'react';
import { Polyline } from 'react-leaflet';

interface RoadProps {
  road: road;
}

const lineOptions = { color: 'green' };

const RoadLine: React.FC<RoadProps> = ({ road }) => {
  return (
    <div>
      <Polyline
        pathOptions={lineOptions}
        positions={road.coordinates[0].map(([lon, lat]) => [lat, lon])}
      />
    </div>
  );
};

export default RoadLine;
