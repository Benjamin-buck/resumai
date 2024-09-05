import Field from "@/components/Field";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="border-b border-gray h-[150px] flex flex-1 items-center justify-center flex-col">
        <h1 className="text-2xl font-bold mb-4">Find your dream job!</h1>
        <div className="border border-gray-1 rounded-xl h-12 flex items-center">
          <img src="/icons/search.png" className="w-5 mx-4" alt="" />
          <input
            type="text"
            placeholder="Job, field, or Company"
            className="border-r"
          />
          <div className="flex items-center mx-3 ">
            <img
              src="/icons/location.png"
              alt="location icon"
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="City"
              className="mx-2 focus:border-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div>Left Search</div>

        <div className="sticky right-0 top-0 w-[50%] border-red-500 border">
          <div className="top-0 sticky right-0 w-[40%]">Right Sidebar</div>
        </div>
      </div>
    </div>
  );
};

export default page;
