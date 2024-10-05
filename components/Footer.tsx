import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" w-full border-t border-gray-1">
      <div className=" flex flex-row mx-[100px] justify-between my-6">
        <div className="w-[20%]">
          <Image src="/logo.png" width={150} height={30} alt="logo" />
          <p className="mt-3">
            Resumai has maintained its stance of getting you hired, without the
            hassle of drafting hundreds of resumes and cover letters.
          </p>
        </div>
        <div className="flex justify-around w-[60%]">
          <div className="flex flex-col">
            <h3 className="font-bold text-xl">Support</h3>
            {navLinks.map(({ href, label, id }) => (
              <Link href={href} id={id} className="py-1 ">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-xl">Legal</h3>
            {navLinks.map(({ href, label, id }) => (
              <Link href={href} id={id} className="py-1 ">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-xl">Navigation</h3>
            {navLinks.map(({ href, label, id }) => (
              <Link href={href} id={id} className="py-1 ">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-xl">Navigation</h3>
            {navLinks.map(({ href, label, id }) => (
              <Link href={href} id={id} className="py-1 ">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 text-white  text-sm bg-purple w-full">
        <h1 className="mx-[100px]">2024 resumai.net | All Rights Reserved </h1>
      </div>
    </section>
  );
};

export default Footer;
