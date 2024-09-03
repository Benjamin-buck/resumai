"use client";
import { dashboardLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdSpaceDashboard } from "react-icons/md";

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const VerticalNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="h-[100vh] w-[15%] fixed border-x-[1px] border-borderGray shadow-inner">
      <TbLayoutSidebarLeftCollapseFilled className="absolute top-[0.2rem] right-[0.4rem] text-[24px] text-gray" />

      <div className="flex justify-center">
        <h1 className="text-2xl font-bold font-heebo pt-5">
          RESUM<span className="text-purple">AI</span>
        </h1>
      </div>
      <div className="flex flex-col mt-10">
        {dashboardLinks.map(({ href, label, id, icon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              href={href}
              key={id}
              className={`px-10 py-5 flex items-center gap-2 ${
                isActive && "gradient border-r-[6px] border-purple shadow-inner"
              }`}
            >
              <img src={icon} width={25} height={25} alt="icon" />
              <p>{label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalNav;
