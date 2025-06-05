import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet"

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png"
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
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[-23.50138, -46.5416]} eventHandlers={{click: () => {transformCard("tiete")}}}>
              <Popup>
                <p className="text-center">Rio Tietê <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.7025, -46.6805]} eventHandlers={{click: () => {transformCard("pinheiros")}}}>
              <Popup>
                <p className="text-center">Rio Pinheiros <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.76917, -46.53305]} eventHandlers={{click: () => {transformCard("bllings")}}}>
              <Popup>
                <p className="text-center">Reservatorio Billings <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.682855129251784, -46.730845959253145]} eventHandlers={{click: () => {transformCard("guarapiranga")}}}>
              <Popup>
                <p className="text-center">Reservatorio Guarapiranga <br /> Selecionado</p>
              </Popup>
            </Marker>
          </MapContainer>
          : ""
        }
    </>
  );
}

export default DynamicMap;