"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { fetchFromAPI } from "@/lib/fetchFromApi";
import { Video, VideoDetail } from "@/lib/types";
import React, { useState, useEffect } from "react";

const VideoPage = ({ params }: { params: { videoId: string } }) => {
  const [videoDetail, setVideoDetail] = useState<VideoDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI(
          `videos?part=snippet,statistics&id=${params.videoId}`
        );
        const video = data.items[0] as VideoDetail;
        setVideoDetail(video);
      } catch (error) {
        console.error(error);
        setError("Video not found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.videoId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !videoDetail) {
    return <div>{error || "Video not found"}</div>;
  }

  return (
    <div className="w-full p-4">
      <div>
        <div className="w-full">
          <VideoPlayer id={params.videoId} />
        </div>
        <div className="video-details mt-4">
          <h1 className="text-2xl font-bold">
            {videoDetail.snippet.title || "Title not available"}
          </h1>
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
      <div className="flex flex-col">
        
      </div>
    </div>
  );
};

export default VideoPage;
