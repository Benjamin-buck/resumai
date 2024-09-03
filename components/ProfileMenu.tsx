import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { PiBellRinging } from "react-icons/pi";

const ProfileMenu = () => {
  return (
    <div className=" bg-white flex justify-between items-center">
      <input
        type="text"
        className="py-2 px-5 my-2 border-[1px] border-lightpurple mx-5 rounded-xl"
        placeholder="Search..."
      />
      <div className="px-4 flex gap-4 flex-row-reverse items-center">
        <BsChevronDown className="cursor-pointer" />
        <Link
          href="/dashboard/profile"
          className="font-semibold cursor-pointer"
        >
          Benjamin Buck
        </Link>
        <img src="/profile.jpg" className="rounded-full h-10" alt="Profile" />
        <div className="border border-[#e6e6e6] p-2 rounded-xl shadow-sm">
          <PiBellRinging className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
