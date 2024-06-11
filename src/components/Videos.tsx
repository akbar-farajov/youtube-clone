import React from "react";

interface VideosProps {
  videos: String[];
}

const Videos = ({ videos }: VideosProps) => {
  console.log(videos);
  return <div>Videos</div>;
};

export default Videos;
