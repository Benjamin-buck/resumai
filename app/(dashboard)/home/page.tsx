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
  return <div className="mx-8 my-5"></div>;
};

export default page;
