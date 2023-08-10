import React from "react";
import { MdNotifications, MdMessage } from "react-icons/md";

function TopNavbar() {
  return (
    <div className="flex justify-between p-6 bg-white">
      <div className=" flex justify-between gap-6 items-center">
        <span>
          <h1 className="text-4xl text-teal-400 font-bold">SocioPlace</h1>
        </span>
        <span>
          <input type="text" name="search" placeholder="Search..." className="bg-slate-50 p-2 placeholder:italic placeholder:text-slate-400 block border border-teal-400 rounded-md focus:outline-none focus:border-teal-500" />
        </span>
      </div>
      <div className=" flex gap-4 items-center">
        <span>
          <MdNotifications className="text-teal-400 text-2xl"/>
        </span>
        <span>
          <MdMessage className="text-teal-400 text-2xl" />
        </span>
      </div>
    
    </div>
  );
}

export default TopNavbar;
