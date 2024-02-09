import logo from "../../Assets/logo.png";

import { IoHomeOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { LiaBookSolid } from "react-icons/lia";
import { IoMdMailOpen } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { FaChessPawn } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen bg-[#171B2F] text-white w-10">
      <a
        href="/"
        className="flex justify-center items-center pt-3 cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-8" />
      </a>
      <div className="flex flex-col gap-8 pt-10 items-center pb-10">
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <IoHomeOutline />
        </span>
        <span className="border-l w-full flex items-center justify-center ">
          <GoArrowUpRight fontSize="1.3em" className="rounded bg-[#252c59]" />
        </span>
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <GrNotes />
        </span>
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <FiUser />
        </span>
      </div>
      <hr className="w-full border-[0.1px] border-gray-400/20" />
      <div className="flex flex-col gap-8 pt-10 items-center">
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <CgNotes />
        </span>
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <FaChessPawn />
        </span>
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <IoIosSend />
        </span>
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <IoMdMailOpen />
        </span>
        <span className="cursor-pointer text-gray-400 hover:text-white">
          <LiaBookSolid />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
