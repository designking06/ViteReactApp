{/* A menu component that provides a choosable list for the user to display and watch a video. Chosen value is sent to Video component as src */}

import React from 'react';

export default function VideoPlayerMenu({onSelectVideo}) {
    function clickHandler(event) {
        const name = event.target.value;
        console.log(name);
        onSelectVideo(name);
    }

    return (
        <form onClick={clickHandler}>
            <input type="radio" name="src" value="fast"/> fast
			<input type="radio" name="src" value="slow" /> slow
			<input type="radio" name="src" value="cute" /> cute
			<input type="radio" name="src" value="eek" /> eek
        </form>
    )
}