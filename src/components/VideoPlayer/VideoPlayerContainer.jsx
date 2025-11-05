{/* Stateful Component acting as container for Video Player. Creates state for src, sets src state in function from chosen menu item, then passes src state to video. */}

import React, {useState} from 'react';
import VideoPlayer from './VideoPlayer';
import VideoPlayerMenu from './VideoPlayerMenu';

export default function VideoPlayerContainer() {
const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

const [src, setSrc] = useState(VIDEOS.slow);

function onSelectVideoHandler(name = "") {
    const newChosenVideo = VIDEOS[name];
    console.log("Video Picked " + newChosenVideo);
    setSrc(newChosenVideo);
}

return (
    <>
        <VideoPlayerMenu onSelectVideo={onSelectVideoHandler} />
        <VideoPlayer src={src} />
    </>
);

}