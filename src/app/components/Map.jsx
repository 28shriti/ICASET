"use client";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default function Map() {
  // Create a custom icon for the marker
  const redIcon = new L.Icon({
    iconUrl: 'https://png.pngtree.com/png-clipart/20220521/ourmid/pngtree-red-location-icon-sign-png-image_4644037.png',
    iconSize: [25, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  return (
    <div className='md:h-[550px] md:w-[800px] h-[300px] w-[380px] m-[30px]'>
      <MapContainer center={[21.095251139535513, 78.97828261748066]} zoom={17} scrollWheelZoom={true} className="h-full w-full" >
        <TileLayer
          attribution='&copy; ycce'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[21.095251139535513, 78.97828261748066]} icon={redIcon}>
          <Popup>
            Ycce Nagpur
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
