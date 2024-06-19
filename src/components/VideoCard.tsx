import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import { truncateText } from "@/lib/utils";
import { Video } from "@/lib/types";
import Image from "next/image";
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
  const maxLength = 40;
  const title = snippet?.title || demoVideoTitle;
  const truncatedTitle = truncateText(title, maxLength);
  const thumbnailUrl = snippet?.thumbnails?.high?.url || demoThumbnailUrl;
  const channelTitle = snippet?.channelTitle || demoChannelTitle;

  return (
    <Link href={`/video/${videoId}`}>
      <Card className="flex flex-col items-start gap-2 rounded-2xl p-2 relative cursor-pointer bg-transparent border-none text-foreground hover:bg-white/10 transform duration-200 aspect-square">
        <CardContent
          className="relative w-full p-0"
          style={{ aspectRatio: "16/9" }}
        >
          {/* <Image
            src={thumbnailUrl}
            fill
            sizes="80vw"
            alt="img"
            className="rounded-2xl"
            priority
            onError={(e) => e.target. = '/path/to/fallback-image.jpg'}
          /> */}
          <img
            src={thumbnailUrl}
            alt="img"
            className="rounded-2xl w-full h-full object-cover"
            style={{ aspectRatio: "16/9" }}
            onError={(e) => {
              e.currentTarget.onerror = null; // Prevent looping
              e.currentTarget.src = demoThumbnailUrl;
            }}
          />
        </CardContent>
        <CardFooter className="p-0 w-full flex gap-2  items-start justify-between mt-1">
          <div>
            <div className="w-8 h-8  rounded-full bg-slate-400"></div>
          </div>
          <div className="w-full flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="">{truncatedTitle}</p>
              <span className="text-md text-white/35">{channelTitle}</span>
              {/* <p className="flex items-center text-md text-white/35 font-extralight">
              {view} views <LuDot /> <span>{year} year ago</span>
            </p> */}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VideoCard;
