import React from 'react';
import Fab from '@material-ui/core/Fab'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './MapButtons.css'


export default function MapButtons(props){
    return (
    <div  className="map-buttons">
        <Fab  
            className="drawer-toggle-button"
            size="small"
            color ="primary" 
            style={{zIndex:500}}
            onClick={props.drawerToggle} >
            {props.open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Fab>
    </div>
    );
}