import { useState } from "react";
import data from "../../../data";

import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

const Payout = () => {
  const [arrOfData, setArrOfData] = useState(data);

  console.log(arrOfData);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs">
            <tr>
              <th scope="col" className="px-6 py-3">
                CREATED AT
              </th>
              <th scope="col" className="px-6 py-3">
                AMOUNT
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                CONTACT
              </th>
              <th scope="col" className="px-6 py-3">
                CREATED BY
              </th>
              <th scope="col" className="px-6 py-3 flex items-center gap-1">
                <span>UTR</span>
                <HiMiniQuestionMarkCircle />
              </th>
            </tr>
          </thead>
          <tbody>
            {arrOfData.map(
              ({ createdAt, amount, status, contact, createdBy, utr }, i) => (
                <tr className="text-[12px]" key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 text-white/80 font-normal"
                  >
                    {createdAt}
                  </th>
                  <td className="px-6 py-4">
                    <span className="text-[10px]">₹</span>
                    <span className="text-white">{amount}</span>
                    <span className="text-[10px]">.00</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-[#403439] px-2 rounded-xl py-1 text-orange-400 text-[11px]">
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">{contact}</td>
                  <td className="px-6 py-4 text-[#C0BCB5]">{createdBy}</td>
                  <td className="px-6 py-4">{utr}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="flex gap-3 justify-end items-center px-6 text-[#C0BCB5] mt-3">
        <select className="bg-[#080E29]/70 py-1 pl-2 pr-4 border-b-[1px] border-b-gray-600 outline-none">
          <option value="">10</option>
          <option value="">9</option>
          <option value="">8</option>
          <option value="">7</option>
          <option value="">6</option>
          <option value="">5</option>
          <option value="">4</option>
          <option value="">3</option>
          <option value="">2</option>
          <option value="">1</option>
        </select>
        <span>rows/page</span>
      </div>
    </div>
  );
};

export default Payout;
