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
                image: mdiCar
            },
            {
                name: "heavy_vehicle",
                image: mdiDumpTruck
            },
            {
                name: "bicycle",
                image: mdiBike
            },
            {
                name: "pedestrian",
                image: mdiWalk
            }
        ]
    })

    return (
        <div>
            <Grid container spacing={3}>
                {transportState.transport.map(transport => {
                    return( 
                        <Grid item xs={3}>
                            <IconButton id={transport.name}>
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