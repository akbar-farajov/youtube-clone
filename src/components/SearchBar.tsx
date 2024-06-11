import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
