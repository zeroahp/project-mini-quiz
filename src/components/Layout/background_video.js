import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="background-video">

    <video 
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
    >
        <source src='../../asset/video/video-backgroun.mp4'/>
    </video>
      {/* <ReactPlayer
        url=""
        
      /> */}
    </div>
  );
};

export default BackgroundVideo;
