{/*
    Create stateless Video component which takes a src attribute and displays chosen video from Menu component.     
*/}

import React from 'react';

export default function VideoPlayer({src}) {
    return (
        <>
            <video controls autostart autoPlay muted src={src} />
        </>
    )
}