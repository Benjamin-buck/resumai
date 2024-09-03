"use client";
import VerticalNav from "@/components/VerticalNav";
import { dashboardLinks } from "@/data";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { PiBellRinging } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import ProfileMenu from "@/components/ProfileMenu";

const page = () => {
  return (
    <>
      <VerticalNav />
      <div className="relative left-[15%] w-[85%]">
        <ProfileMenu />
      </div>
    </>
  );
};

export default page;
