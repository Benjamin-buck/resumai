import { dashboardLinks } from "@/data";
import Link from "next/link";
import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const VerticalNav = () => {
  return (
    <div className="h-[100vh] w-[250px] fixed border-x-[1px] border-borderGray shadow-inner">
      <TbLayoutSidebarLeftCollapseFilled className="absolute top-[0.2rem] right-[0.4rem] text-[24px] text-gray" />

      <div className="flex justify-center">
        <h1 className="text-2xl font-bold font-heebo pt-5">
          RESUM<span className="text-purple">AI</span>
        </h1>
      </div>

      <div>
        <ul className="flex flex-col w-[250px] gap-2 mt-6">
          {dashboardLinks.map(({ id, label, href }) => (
            <div key={id}>
              <Link
                href={href}
                key={id}
                className={`py-2 mx-5 flex items-center gap-2 px-8 hover:text-purple text-gray font-semibold `}
              >
                <MdSpaceDashboard className="text-[22px]" /> {label}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalNav;
