import React from 'react';

export default function TransportType(props) {
    return (
        <div>
            <IconButton id={props.id}>{props.image}</IconButton>
        </div>
    )
}