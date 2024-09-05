"use client";
import VerticalNav from "@/components/VerticalNav";
import { dashboardLinks } from "@/data";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { PiBellRinging } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import ProfileMenu from "@/components/ProfileMenu";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const page = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mx-8 my-5">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="w-[100px] h-[100px] bg-blue-500 rounded-xl flex items-center justify-center">
        <h1 className="text-white text-5xl">14</h1>
        {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </div>
    </div>
  );
};

export default page;
