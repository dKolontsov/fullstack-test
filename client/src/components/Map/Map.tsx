import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';
import MarkerIcon from '@mui/icons-material/RoomOutlined';

const markers: marker[] = [
  {
    id: '2',
    name: 'c. Дядьково',
    type: 'board',
    status: 'active',
    lat: 54.6134237163782,
    lon: 39.8500728607178,
    imei: '1b702643-972d-428a-b499-9d41db519a9e',
    location:
      'Рязанская обл., Рязанский р-н, село Дядьково ул. Центральная в районе дома 157Б (Дядьковская школа)',
    text: '-',
    videocamera_id: 0,
  },
  {
    id: '3',
    name: 'рп. Пронск',
    type: 'board',
    status: 'active',
    lat: 54.1242115223263,
    lon: 39.5976233482361,
    imei: 'ab46878c-125e-45ba-9395-2fd2ba9a2d5c',
    location:
      'Рязанская обл., Пронский р-н.. рп.Пронск на а/д 61К-005 в районе ул. Березовая.',
    text: '-',
    videocamera_id: 0,
  },
  {
    id: '4',
    name: 'с. Тырново',
    type: 'board',
    status: 'active',
    lat: 54.2747598351987,
    lon: 39.5826888084412,
    imei: '9bd2a849-fda3-42f4-b067-735f320e174c',
    location:
      'Рязанская обл., Пронский р-н., с. Тырново на а/д 61К-005 в районе пересечения с ул. Новая.',
    text: '-',
    videocamera_id: 0,
  },
];

const Map = () => {
  // const [markers, setMarkers] = React.useState([]);

  return (
    <MapContainer
      className={styles['leaflet-map']}
      center={[54.2747598351987, 39.5826888084412]}
      zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((mark: marker) => (
        <Marker position={[mark.lat, mark.lon]}>
          <Popup>
            <div>{mark.location}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
