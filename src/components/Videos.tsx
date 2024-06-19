import React from "react";
import VideoCard from "./VideoCard";
import { Video } from "@/lib/types";

interface VideosProps {
  videos: Video[];
}

const Videos = ({ videos }: VideosProps) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 px-2">
      {videos?.map((video, index) => (
        <div key={index}>{video.id.videoId && <VideoCard video={video} />}</div>
      ))}
    </div>
  );
};

export default Videos;
