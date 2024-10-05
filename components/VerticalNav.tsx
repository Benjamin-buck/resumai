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
    <section className="left_sidebar">
      <nav className="flex flex-col  h-[100%] border-gray-1 border-r ">
        <Link
          href="/"
          className="mt-6 ml-12 flex gap-1 pb-10 max-lg:justify-center cursor-pointer items-center"
        >
          <img src="/logo.png" className="h-[30px]" />
        </Link>

        {dashboardLinks.map(({ href, icon, label, id }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              href={href}
              key={id}
              className={`px-10 py-2 flex items-center gap-2 ${
                isActive && "gradient border-r-[6px] border-purple shadow-inner"
              }`}
            >
              <img src={icon} width={25} height={25} alt="icon" />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>

    // <section className="left_sidebar">
    //   <div className="">
    //     <div className="flex justify-center">
    //       <h1 className="text-2xl font-bold font-heebo pt-5">
    //         RESUM<span className="text-purple">AI</span>
    //       </h1>
    //     </div>
    //     <div className="flex flex-col mt-10">
    //       {dashboardLinks.map(({ href, label, id, icon }) => {
    //         const isActive =
    //           pathname === href || pathname.startsWith(`${href}/`);
    //         return (
    //
    //         );
    //       })}
    //     </div>
    //   </div>
  );
};

export default VerticalNav;
