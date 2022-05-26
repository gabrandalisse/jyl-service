import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CompanyData from "../../assets/data";

const Map = () => {
  const {
    map: { city, province, street, coordinatesArray },
  } = CompanyData;

  return (
    <section className="bg-light pt-5 border-bottom" id="map">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">Dirección</h2>
          <p className="lead mb-0">
            Nuestro taller se encuentra en {street}, {city}, {province}
          </p>
        </div>
      </div>

      <div>
        <MapContainer
          center={coordinatesArray}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker className="something" position={coordinatesArray}>
            <Popup>
              {street} <br /> {city} <br /> {province}.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
