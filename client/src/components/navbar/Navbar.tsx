import React from "react";
import {
  ElementProps,
  LayoutProps,
} from "../../interfaces/LayoutProps.interface";
import { HiHome } from "react-icons/hi";
import {
  IoIosSend,
  IoIosNotifications,
  IoIosBookmark,
  IoIosSearch,
} from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import "./style.css";

const Navbar = ({ className }: ElementProps) => {
  return (
    <nav
      className={`${className} flex flex-col justify-between py-4 px-4
    border-r-2 border-separator overflow-visible`}
    >
      <img
        src="/avatar.jpg"
        alt="avatar.jpg"
        className="rounded-full aspect-square w-12 flex self-center"
      />
      <div className="flex flex-col self-center gap-24 relative overflow-visible">
        <div className="flex flex-col gap-5">
          <HiHome size={30} className="text-current nav-selected" />
          <IoIosSend size={30} className="text-current" />
        </div>

        <div id="search-icon" className="absolute top-1/2 -translate-y-1/2 left-7 rounded-full overflow-visible">
          <div className="bg-gradient p-3 rounded-full">
            <IoIosSearch size={30} className="text-current" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <IoIosNotifications size={30} className="text-current" />
          <IoIosBookmark size={30} className="text-current" />
        </div>
      </div>
      <IoSettingsSharp size={30} className="text-current flex self-center" />
    </nav>
  );
};

export default Navbar;