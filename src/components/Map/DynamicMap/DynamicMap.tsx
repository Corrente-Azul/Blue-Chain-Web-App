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
          <MapContainer className="w-full h-full" center={[-23.2089, -46.8388]} zoom={9} scrollWheelZoom>
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
            <Marker position={[-23.3981, -46.6586]} eventHandlers={{click: () => {transformCard("claras")}}}>
              <Popup>
                <p className="text-center">Reservatório Águas Claras <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.5764, -46.2894]} eventHandlers={{click: () => {transformCard("taiacup")}}}>
              <Popup>
                <p className="text-center">Reservatório Taiaçupeba <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.1500, -47.0572]} eventHandlers={{click: () => {transformCard("itupeva")}}}>
              <Popup>
                <p className="text-center">Rio Jundiaí <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.3678, -45.8783]} eventHandlers={{click: () => {transformCard("branca")}}}>
              <Popup>
                <p className="text-center">Rio Paraíba do Sul <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.4133, -47.4617]} eventHandlers={{click: () => {transformCard("sorocaba")}}}>
              <Popup>
                <p className="text-center">Rio Sorocaba <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-22.9056, -46.5425]} eventHandlers={{click: () => {transformCard("jaguari")}}}>
              <Popup>
                <p className="text-center">Rio Jaguari <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-23.1039, -46.5456]} eventHandlers={{click: () => {transformCard("atibaia")}}}>
              <Popup>
                <p className="text-center">Rio Atibaia <br /> Selecionado</p>
              </Popup>
            </Marker>
            <Marker position={[-22.7033, -47.6006]} eventHandlers={{click: () => {transformCard("piracicaba")}}}>
              <Popup>
                <p className="text-center">Rio Piracicaba <br /> Selecionado</p>
              </Popup>
            </Marker>
          </MapContainer>
          : ""
        }
    </>
  );
}

export default DynamicMap;