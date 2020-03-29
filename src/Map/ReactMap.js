import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MapDrawer from '../Drawer/MapDrawer'
import MapButtons from './MapButtons'
import "./ReactMap.css"

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
          <Map center={position} zoomControl={false} zoom={this.state.zoom}>
            <MapButtons 
              drawerToggle={this.handleDrawerToggle}
              open={open}
            />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </div>
      </React.Fragment>
    );
  }
}