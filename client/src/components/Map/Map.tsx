import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';
import Marker from './Marker/Marker';
import RoadLine from './RoadLine/RoadLine';

const Map = () => {
  const [markers, setMarkers] = React.useState<marker[]>([]);
  const [roads, setRoads] = React.useState<road[]>([]);

  React.useEffect(() => {
    axios
      .get('/markers')
      .then((res) => setMarkers(res.data))
      .catch((err) => console.log(err));

    axios
      .get('/roads')
      .then((res) => setRoads(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MapContainer
      className={styles['leaflet-map']}
      center={[54.612902, 39.830028]}
      zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((mark) => (
        <Marker key={mark.id} marker={mark} />
      ))}
      {roads.map(
        (road) =>
          road.coordinates[0] &&
          road.coordinates[0].length > 0 && (
            <RoadLine key={road.id} road={road} />
          ),
      )}
    </MapContainer>
  );
};

export default Map;
