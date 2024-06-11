"use client";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background w-full">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-white/10">
          <RxHamburgerMenu className="w-6 h-6 text-white cursor-pointer" />
        </div>
        <Link href="/" className="flex items-center gap-1 cursor-pointer">
          <FaYoutube className="w-8 h-8 text-red-600 " />
          <span className="font-bold text-lg tracking-tighter">YouTube</span>
        </Link>
      </div>
      <div className="flex flex-grow max-w-xl">
        <input
          type="text"
          className="w-full relative bg-transparent outline-none py-2 pl-4 border-r flex-1  border-[0.5px] border-border rounded-l-full focus:border-blue-600"
          placeholder="Search"
        />
        <div className="px-4 bg-border rounded-r-full flex items-center justify-center cursor-pointer">
          <CiSearch className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex items-center cursor-pointer gap-2">
        <Link href="/upload" className="p-2 rounded-full hover:bg-white/10">
          <MdVideoCall className="w-6 h-6 text-white" />
        </Link>
        <div className="p-2 rounded-full hover:bg-white/10">
          <IoIosNotificationsOutline className="w-6 h-6 text-white cursor-pointer" />
        </div>
        <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
