"use client";

import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  id: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ id }) => {
  return (
    <div className="w-[400px]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        width="100%"
        height="500px"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
