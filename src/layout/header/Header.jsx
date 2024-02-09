import { GoArrowUpRight } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { FaExternalLinkAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#080E29] flex flex-col items-center gap-3 pb-3 pr-4 pl-12">
      <a
        href="/"
        className="bg-[#D4AC0D] flex gap-3 text-[10px] items-center justify-center w-fit px-6 py-1 rounded-b-lg cursor-pointer"
      >
        <p>Go Back to ONBOARDING</p>
        <FaExternalLinkAlt />
      </a>
      <div className="flex w-full justify-between text-[#C0BCB5] max-[835px]:flex-wrap max-[835px]:justify-center max-[835px]:gap-4">
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <GoArrowUpRight fontSize="1.3em" className="rounded bg-[#252c59]" />
            <span className="text-lg">Payouts</span>
          </div>
          <p className="text-xl">/</p>
          <div className="flex gap-7 items-center text-sm max-[480px]:flex-wrap">
            <a
              href="#"
              className="font-semibold bg-[#0C1A3E] text-[#3D6FD0] px-2 py-2 rounded-lg cursor-pointer"
            >
              Single
            </a>
            <a href="#" className="flex gap-2 items-center cursor-pointer">
              <span>Bulk</span>
              <span className="bg-[#028558] text-white text-[10px] rounded-lg py-[1px] px-2 font-extrabold">
                NEW
              </span>
            </a>
            <a href="#" className="cursor-pointer">
              Tally
            </a>
            <a href="#" className="cursor-pointer">
              Payout Links
            </a>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex items-center relative text-sm">
            <TiPlus color="#4A82D2" className="absolute left-3 top-3" />
            <select className="text-[#4A82D2] bg-[#080E29] border-[1px] border-[#4A82D2] pr-6 pl-6 py-2 rounded-sm font-bold outline-none">
              <option value="payout">PAYOUT</option>
              <option value="deposit">DEPOSIT</option>
            </select>
            <span className="absolute right-6 top-0 font-thin text-2xl text-[#333c72]">
              |
            </span>
          </div>
          <FaSearch
            fontSize="1.2em"
            color="#4A82D2"
            className="cursor-pointer"
          />
          <HiOutlineSpeakerphone
            fontSize="1.4em"
            color="#8F5E10"
            className="cursor-pointer"
          />
          <FaUserPlus
            fontSize="1.2em"
            color="#4A82D2"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
