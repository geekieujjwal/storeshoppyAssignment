import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const QuickFilters = () => {
  const [selectedRadio, setSelectedRadio] = useState("p1");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#111739] text-sm max-[835px]:flex-wrap max-[835px]:justify-center max-[835px]:gap-4 max-[540px]:text-[10px]">
      <div className="flex gap-4 text-[#C0BCB5] items-center max-[460px]:flex-wrap max-[460px]:justify-center">
        <span>Quick Filters :</span>
        <label
          htmlFor="p1"
          className={`relative flex items-center gap-2 py-2 rounded px-4 cursor-pointer ${
            selectedRadio === "p1" ? "bg-[#052f73]" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            id="p1"
            className="hidden"
            checked={selectedRadio === "p1"}
            onChange={handleRadioChange}
          />
          <div
            className={`absolute top-1/2  translate-y-[-50%] left-0 h-3 border-l-2  ${
              selectedRadio === "p1" ? "border-l-white" : "border-l-orange-400"
            }`}
          ></div>
          {selectedRadio === "p1" ? (
            <FaCheckCircle color="#2A86F1" className="bg-white rounded-full" />
          ) : (
            <FaRegCircle />
          )}
          <span> All Payouts</span>
        </label>{" "}
        <label
          htmlFor="p2"
          className={`relative flex items-center gap-2 py-2 rounded px-4 cursor-pointer ${
            selectedRadio === "p2" ? "bg-[#052f73]" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            id="p2"
            className="hidden"
            checked={selectedRadio === "p2"}
            onChange={handleRadioChange}
          />
          <div
            className={`absolute top-1/2  translate-y-[-50%] left-0 h-3 border-l-2  ${
              selectedRadio === "p2" ? "border-l-white" : "border-l-orange-400"
            }`}
          ></div>
          {selectedRadio === "p2" ? (
            <FaCheckCircle color="#2A86F1" className="bg-white rounded-full" />
          ) : (
            <FaRegCircle />
          )}
          <span>Scheduled for next 2 days</span>
        </label>{" "}
        <label
          htmlFor="p3"
          className={`relative flex items-center gap-2 py-2 rounded px-4 cursor-pointer ${
            selectedRadio === "p3" ? "bg-[#052f73]" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            id="p3"
            className="hidden"
            checked={selectedRadio === "p3"}
            onChange={handleRadioChange}
          />
          <div
            className={`absolute top-1/2  translate-y-[-50%] left-0 h-3 border-l-2  ${
              selectedRadio === "p3" ? "border-l-white" : "border-l-orange-400"
            }`}
          ></div>
          {selectedRadio === "p3" ? (
            <FaCheckCircle color="#2A86F1" className="bg-white rounded-full" />
          ) : (
            <FaRegCircle />
          )}
          <span>Queued (RazorpayXA/c)</span>
          <span className="text-white"> 1</span>
        </label>
      </div>
      <div>
        <select className="text-[#6C97D6] bg-[#111739] outline-none">
          <option value="filters">View more filters</option>
          <option value="filter1">Filter 1</option>
          <option value="filter2">Filter 2</option>
          <option value="filter3">Filter 3</option>
        </select>
      </div>
    </div>
  );
};

export default QuickFilters;
