import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import { truncateText } from "@/lib/utils";
import { Video } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoTitle,
} from "@/lib/constants";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: VideoCardProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(
    snippet?.thumbnails?.high?.url || demoThumbnailUrl
  );
  const maxLength = 40;
  const title = snippet?.title || demoVideoTitle;
  const truncatedTitle = truncateText(title, maxLength);
  const channelTitle = snippet?.channelTitle || demoChannelTitle;

  const handleError = () => {
    setThumbnailUrl(demoThumbnailUrl);
  };

  return (
    <Link href={`/video/${videoId}`}>
      <Card className="flex flex-col items-start gap-2 rounded-2xl p-2 relative cursor-pointer bg-transparent border-none text-foreground hover:bg-white/10 transform duration-200 aspect-square">
        <CardContent
          className="relative w-full p-0"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={thumbnailUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            onError={handleError}
          />
        </CardContent>
        <CardFooter className="p-0 w-full flex gap-2 items-start justify-between mt-1">
          <div>
            <div className="w-8 h-8 rounded-full bg-slate-400"></div>
          </div>
          <div className="w-full flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="">{truncatedTitle}</p>
              <span className="text-md text-white/35">{channelTitle}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VideoCard;
