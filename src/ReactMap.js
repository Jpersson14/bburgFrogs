import React from 'react';
import './App/App.css';
import { Map, TileLayer } from 'react-leaflet'
import omnivore from "@mapbox/leaflet-omnivore"

export default class ReactMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 37.2296,
      lng: -80.4139,
      zoom: 13
    }
    this.mapRef = React.createRef();
  }

  componentDidMount(){
    omnivore.kml('FrogLocations.kml').addTo(this.mapRef.current.leafletElement)
    .on('error', function(error) {
      console.log(error);
    });
}

  render() {
    let position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
      <Map ref={this.mapRef} zoomControl={false} center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          </Map>
      </React.Fragment>
    );
  }
}
