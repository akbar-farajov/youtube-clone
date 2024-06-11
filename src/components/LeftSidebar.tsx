"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const NAV_ITEMS = [
  {
    title: "Home",
    path: "/",
    icon: GoHomeFill,
  },
  {
    title: "Shorts",
    icon: SiYoutubeshorts,
  },
  {
    title: "Subscriptions",
    icon: MdOutlineSubscriptions,
  },
  { title: "You", icon: AiOutlinePlaySquare },
];

const LeftSidebar = () => {
  return (
    <aside className="hidden sm:flex fixed top-[66px] w-[72px] h-full flex-col items-center px-1">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.title}
          href={item.path ? item.path.toLowerCase() : item.title.toLowerCase()}
          className="flex flex-col items-center gap-1 py-4 hover:bg-white/10 w-full rounded-lg cursor-pointer"
        >
          <item.icon className="text-2xl" />
          <span className="text-[10px] font-extralight tracking-tighter">
            {item.title}
          </span>
        </Link>
      ))}
    </aside>
  );
};

export default LeftSidebar;
