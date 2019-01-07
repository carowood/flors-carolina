import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 41.382327,
      lng: 2.172215,
      zoom: 17
    };
  }

  render() {
    const redIcon = new L.Icon({
      iconUrl: "/icons/map/marker-icon-2x-red.png",
      shadowUrl: "/icons/map/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="">
        <Map className="map-container" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={redIcon}>
            <Popup>
              Flors Carolina <br /> La Rambla 93
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
