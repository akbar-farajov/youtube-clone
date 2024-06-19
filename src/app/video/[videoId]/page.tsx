"use client";
import { fetchFromAPI } from "@/lib/fetchFromApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoDetail {
  snippet: {
    title: string;
    description: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

const VideoPage = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetail | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!videoDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="video-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          height="500px"
          controls
        />
      </div>
      <div className="video-details mt-4">
        <h1 className="text-2xl font-bold">
          {videoDetail.snippet?.title || "Title not available"}
        </h1>
        <p>{videoDetail.snippet.description}</p>
        <div className="mt-2">
          <span className="font-semibold">Views:</span>{" "}
          {videoDetail.statistics.viewCount}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Likes:</span>{" "}
          {videoDetail.statistics.likeCount}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
