import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen bg-black text-white w-10">
      <div>logo</div>
      <div className="flex flex-col gap-8 pt-10 items-center">
        <span>
          <IoHomeOutline />
        </span>{" "}
        <span className="border-l w-full flex items-center justify-center ">
          <IoHomeOutline />
        </span>{" "}
        <span>
          <IoHomeOutline />
        </span>{" "}
        <span>
          <IoHomeOutline />
        </span>
      </div>
      <div className="flex flex-col gap-8 pt-16 items-center">
        <span>
          <IoHomeOutline />
        </span>{" "}
        <span>
          <IoHomeOutline />
        </span>{" "}
        <span>
          <IoHomeOutline />
        </span>{" "}
        <span>
          <IoHomeOutline />
        </span>{" "}
        <span>
          <IoHomeOutline />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
