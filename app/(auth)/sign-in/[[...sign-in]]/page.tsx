import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full items-center justify-center">
      <SignIn />
    </div>
  );
};

export default page;
