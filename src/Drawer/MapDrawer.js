import React from 'react';
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

export default function MapDrawer(props) {
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
        <TransportMenu/>
        <Divider />
        <AreaSelector></AreaSelector>
      </Drawer>
    </React.Fragment>
  );
}