import React, {useState} from 'react';
import { mdiCar } from '@mdi/js';
import { mdiDumpTruck } from '@mdi/js';
import { mdiBike } from '@mdi/js';
import { mdiWalk } from '@mdi/js';
import SvgIcon from '@material-ui/core/SvgIcon';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function TransportMenu(props) {
    const [transportState, setTranportState] = useState({
        transport : [
            {
                name: "car",
                id: "driving-car",
                image: mdiCar
            },
            {
                name: "heavy_vehicle",
                id: "driving-hgv",
                image: mdiDumpTruck
            },
            {
                name: "bicycle",
                id: "cycling-regular",
                image: mdiBike
            },
            {
                name: "pedestrian",
                id: "foot-walking",
                image: mdiWalk
            }
        ]
    })

    return (
        <div>
            <Grid container spacing={3}>
                {transportState.transport.map(transport => {
                    return( 
                        <Grid 
                            key={transport.id}
                            item xs={3}>
                            <IconButton 
                                id={transport.name}
                                color = {transport.id === props.active ? "primary" : "white"}
                                onClick={(event) => props.changeHandler(event, transport.id)}>
                                <SvgIcon>
                                    <path d={transport.image}/>
                                </SvgIcon>
                            </IconButton>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    )
}