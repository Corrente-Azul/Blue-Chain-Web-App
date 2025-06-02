import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet"

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

type TDynamicMap = {
  transformCard:Function
}

function DynamicMap({transformCard}:TDynamicMap) {  
  return (
    <>
        {
          typeof window !== 'undefined' ?
          <MapContainer className="w-full h-full" center={[-23.6089, -46.6388]} zoom={10} scrollWheelZoom>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[-23.50138, -46.5416]} eventHandlers={{click: () => {transformCard("tiete")}}}/>
            <Marker position={[-23.7025, -46.6805]} eventHandlers={{click: () => {transformCard("pinheiros")}}}/>
            <Marker position={[-23.76917, -46.53305]} eventHandlers={{click: () => {transformCard("bllings")}}}/>
            <Marker position={[-23.682855129251784, -46.730845959253145]} eventHandlers={{click: () => {transformCard("guarapiranga")}}}/>
          </MapContainer>
          : ""
        }
    </>
  );
}

export default DynamicMap;