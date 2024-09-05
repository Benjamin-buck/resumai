"use client";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      {
        x: "-100px",
        opacity: 0,
      },
      {
        x: "0px",
        opacity: 1,
        duration: 2,
      }
    );

    gsap.fromTo(
      "#buttons",
      {
        y: "50px",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );
  });
  return (
    <div className="flex justify-center h-[90vh] md:px-5">
      <div className="mt-[15rem]">
        <div className="font-heebo text-center lg:w-[45rem] max-md:px-5">
          <h2 id="header" className="text-[50px] leading-[60px] font-bold ">
            Boost Resume Performance with the Power of{" "}
            <span className="text-purple">AI</span>.
          </h2>
          <div id="buttons">
            <p className="mt-4">
              Employers are using AI tools in their hiring process, why aren't
              you? Resum<span className="text-purple">AI</span> is a tool
              designed to help you beat the employer's AI systems using your
              real job qualificiations.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button label="Get started" href="/signup" />
              <Button label="Learn more" href="/signup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
