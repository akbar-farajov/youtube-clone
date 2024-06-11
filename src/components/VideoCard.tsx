import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxDotsVertical } from "react-icons/rx";
import { truncateText } from "@/lib/utils";
import { LuDot } from "react-icons/lu";

interface VideoCardProps {
  title: string;
  author: string;
  view: string;
  year: number;
  image: string;
}

const VideoCard = ({ title, author, view, year, image }: VideoCardProps) => {
  const maxLength = 60;
  const truncatedTitle = truncateText(title, maxLength);
  return (
    <Card
      className="flex flex-col items-start gap-2 rounded-2xl p-2 relative cursor-pointer bg-transparent border-none text-foreground hover:bg-white/10 transform duration-200"
      style={{ aspectRatio: "1/1" }}
    >
      <CardContent className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image src={image} layout="fill" alt="img" className="rounded-2xl" />
      </CardContent>
      <CardFooter className="p-0 w-full flex gap-2  items-start justify-between mt-1">
        <div>
          <div className="w-8 h-8  rounded-full bg-slate-400"></div>
        </div>
        <div className="w-full flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="">{truncatedTitle}</p>
            <span className="text-md text-white/35">{author}</span>
            <p className="flex items-center text-md text-white/35 font-extralight">
              {view} views <LuDot /> <span>{year} year ago</span>
            </p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full active:bg-slate-400 active:border treansform duration-200">
                  <RxDotsVertical className="text-xl" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                side="right"
                className="w-64 bg-neutral-800 border-none rounded-xl text-foreground px-0 py-2"
              >
                <DropdownMenuItem className="cursor-pointer rounded-none hover:bg-black">
                  Save to watch later
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Subscription
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
