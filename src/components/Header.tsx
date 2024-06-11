"use client";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background w-full">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-white/10">
          <RxHamburgerMenu className="w-6 h-6 text-white cursor-pointer" />
        </div>
        <Link
          href="/"
          className="hidden sm:flex items-center gap-1 cursor-pointer"
        >
          <FaYoutube className="w-8 h-8 text-red-600 " />
          <span className="font-bold text-lg tracking-tighter">YouTube</span>
        </Link>
      </div>
      <SearchBar />
      <div className="hidden sm:flex items-center cursor-pointer gap-2">
        <Link href="/upload" className="p-2 rounded-full hover:bg-white/10">
          <MdVideoCall className="w-6 h-6 text-white" />
        </Link>
        <div className="hidden p-2 rounded-full hover:bg-white/10">
          <IoIosNotificationsOutline className="w-6 h-6 text-white cursor-pointer" />
        </div>
        <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
