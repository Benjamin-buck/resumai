import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { PiBellRinging } from "react-icons/pi";

interface Props {
  logo?: boolean;
}

const ProfileMenu = ({ logo }: Props) => {
  return (
    <div
      className={`bg-white flex ${logo ? "justify-between" : "justify-end"} items-center`}
    >
      {/* <input
        type="text"
        className="py-2 px-5 my-2 border-[1px] border-lightpurple mx-5 rounded-xl"
        placeholder="Search..."
      /> */}
      {logo && (
        <div>
          <Link href="/home">
            <Image
              src="/logo.png"
              height={40}
              width={120}
              alt="Logo"
              className="mx-4"
            />
          </Link>
        </div>
      )}

      <div className="px-4 flex py-3 gap-4 flex-row-reverse items-center">
        <BsChevronDown className="cursor-pointer" />
        <Link href="/profile" className="font-semibold cursor-pointer">
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
