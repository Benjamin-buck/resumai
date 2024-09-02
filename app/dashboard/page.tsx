"use client";
import VerticalNav from "@/components/VerticalNav";
import { dashboardLinks } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { PiBellRinging } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";

const page = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <VerticalNav />
      <div className="absolute left-[250px] h-[20000px] w-[86vw] text-black bg-lightpurple">
        <div className=" bg-white flex justify-between items-center">
          <input
            type="text"
            className="py-2 px-5 my-2 border-[1px] border-lightpurple mx-5 rounded-xl"
            placeholder="Search..."
          />
          <div className="px-4 flex gap-4 flex-row-reverse items-center">
            <BsChevronDown className="cursor-pointer" />
            <p className="font-semibold cursor-pointer">Benjamin Buck</p>
            <img
              src="/profile.jpg"
              className="rounded-full h-10"
              alt="Profile"
            />
            <div className="border border-[#e6e6e6] p-2 rounded-xl shadow-sm">
              <PiBellRinging className="text-xl" />
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold px-8 py-5">Dashboard</h3>
      </div>
    </>
  );
};

export default page;
