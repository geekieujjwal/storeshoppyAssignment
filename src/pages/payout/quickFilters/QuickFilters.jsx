import React, { useState } from "react";

const QuickFilters = () => {
  const [selectedRadio, setSelectedRadio] = useState("p1");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#111739]">
      <div className="flex gap-4 text-[#C0BCB5] items-center">
        <span>Quick Filters :</span>
        <label
          htmlFor="p1"
          className={`relative flex items-center gap-2 py-2 rounded px-4 cursor-pointer bg-${
            selectedRadio === "p1" ? "white" : "#21397c"
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
            className="absolute top-1/2 translate-y-[-50%]  left-0  h-3 border-l-2 border-l-orange-400  
       
       "
          ></div>
          <span className="h-3 w-3 rounded-full bg-white "> </span>
          <span> All Payouts</span>
        </label>{" "}
        <label
          htmlFor="p2"
          className={`relative flex items-center gap-2 py-2 rounded px-4 cursor-pointer bg-${
            selectedRadio === "p2" ? "white" : "#21397c"
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
            className="absolute top-1/2 translate-y-[-50%]  left-0  h-3 border-l-2 border-l-orange-400  
       
       "
          ></div>
          <span className="h-3 w-3 rounded-full bg-white "> </span>
          <span> All Payouts</span>
        </label>{" "}
        <label
          htmlFor="p3"
          className={`relative flex items-center gap-2 py-2 rounded px-4 cursor-pointer bg-${
            selectedRadio === "p3" ? "white" : "#21397c"
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
            className="absolute top-1/2 translate-y-[-50%]  left-0  h-3 border-l-2 border-l-orange-400  
       
       "
          ></div>
          <span className="h-3 w-3 rounded-full bg-white "> </span>
          <span> All Payouts</span>
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
