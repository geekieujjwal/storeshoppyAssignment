import React from "react";
import { TbReload } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";

const PayoutFilter = () => {
  return (
    <section className="text-[12px] flex justify-between text-[#C0BCB5] px-6">
      <div className="flex gap-3 py-5">
        <div className="flex gap-2">
          <input type="checkbox" id="payouts" />
          <label htmlFor="payouts">Showing 1-5 payouts</label>
        </div>
        <div className="flex gap-2">
          <input type="radio" id="sortBy" />
          <label htmlFor="sortBy" className="flex gap-1">
            <span>Sort by</span>
            <select className="text-[#4795d9] bg-[#1D2345]">
              <option value="latestCreationDate">latest creation date</option>
              <option value="newest additions">newest addtions</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <TbReload fontSize="1.5em" color="#4795d9" className="cursor-pointer" />
        <CiMenuKebab
          fontSize="1.5em"
          color="#4795d9"
          className="cursor-pointer"
        />
        <div className="flex gap-1 items-center border-[1px] border-[#4795d9] rounded text-[#4795d9] px-3 py-1 cursor-pointer">
          <FiDownload fontSize="1.5em" />
          <span className="text-[16px]">Export</span>
        </div>
        <div className="flex items-center relative">
          <TiPlus color="white" className="absolute left-3 top-3" />
          <select className="text-white bg-[#2A86F2] border-[1px] border-[#4A82D2] px-6 py-2 rounded-sm font-bold outline-none">
            <option value="payout">PAYOUT</option>
            <option value="deposit">DEPOSIT</option>
          </select>
          <span className="absolute right-6 top-[-3px] font-thin text-3xl text-gray-500">
            |
          </span>
        </div>
      </div>
    </section>
  );
};

export default PayoutFilter;
