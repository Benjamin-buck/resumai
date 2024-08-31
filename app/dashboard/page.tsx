"use client";
import VerticalNav from "@/components/VerticalNav";
import { dashboardLinks } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";

const page = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <VerticalNav />
      <div className="absolute left-[250px] h-[20000px] w-[100%] text-black bg-lightpurple">
        <div className="w-[100vw] bg-white">
          <input
            type="text"
            className="py-2 px-5 my-2 border-[1px] border-lightpurple mx-5 rounded-xl"
            placeholder="Search..."
          />
        </div>
        <h3 className="text-2xl font-bold px-8 py-5">Dashboard</h3>
      </div>
    </>
  );
};

export default page;
