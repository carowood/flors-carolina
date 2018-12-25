import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 41.382367,
      lng: 2.172289,
      zoom: 17
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="">
        <Map className="map-container" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}
