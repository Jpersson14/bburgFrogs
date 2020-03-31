import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MapDrawer from '../Drawer/MapDrawer'
import MapButtons from './MapButtons'
import "./ReactMap.css"
import omnivore from "@mapbox/leaflet-omnivore"

const styles = theme => ({

})

export default class ReactMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 37.2296,
      lng: -80.4139,
      zoom: 13,
      open: false
    }
    this.mapRef = React.createRef();
  }

  componentDidMount(){
    omnivore.kml('FrogLocations.kml').addTo(this.mapRef.current.leafletElement)
    .on('error', function(error) {
      console.log(error);
    });
  }

  handleDrawerToggle = () => {
    this.setState( prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const open = this.state.open;
    return (
      <React.Fragment>
        <MapDrawer open={open}>
        </MapDrawer>
        <div className={open ?  "shift-map-right" : "shift-map-left"}>
          <Map ref={this.mapRef} center={position} zoomControl={false} zoom={this.state.zoom}>
            <MapButtons 
              drawerToggle={this.handleDrawerToggle}
              open={open}
            />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </Map>
        </div>
      </React.Fragment>
    );
  }
}