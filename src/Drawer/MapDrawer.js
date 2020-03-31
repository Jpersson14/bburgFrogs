import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AreaSelector from './AreaSelector/AreaSelector';
import TransportMenu from './Transportation/TransportMenu';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  }
}));

const MapDrawer = (props) => {
  const [drawerState, setDrawerState] = useState({
    transportType: "driving-car"
  })

  const handleTransportChange = (event, id) =>{
    setDrawerState({
      transportType: id,
      start: null,
      end: null,
      waypoints: []
    })
  }

  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <TransportMenu
          active={drawerState.transportType}
          changeHandler={handleTransportChange}
        />
        <Divider />
        <AreaSelector text={drawerState.transportType} ></AreaSelector>
      </Drawer>
    </React.Fragment>
  );
}

export default MapDrawer;