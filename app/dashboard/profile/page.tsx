import Button from "@/components/Button";
import Field from "@/components/Field";
import ProfileMenu from "@/components/ProfileMenu";
import VerticalNav from "@/components/VerticalNav";
import React from "react";

const page = () => {
  return (
    <>
      <VerticalNav />

      <div className="absolute left-[250px] h-[20000px] w-[86vw] text-black bg-lightpurple">
        <ProfileMenu />
        <div className="px-[350px] py-10">
          <h1 className="text-3xl font-bold">
            My <span className="text-purple">Profile</span>
          </h1>
          <p className="text-gray">
            Enter your profile details. The details you enter here will be used
            when generating resume templates.
          </p>
        </div>

        <form action="Submit" className="px-[350px]">
          {/* Personal Information */}
          <h2 className="text-2xl font-bold pb-2 border-b-[1px] border-lightgray">
            Personal Information
          </h2>
          <div className="flex flex-row gap-4 my-5 ">
            <div className="basis-1/2 flex-col flex gap-2">
              <Field placeholder="Doe" label="First Name" type="input" />
            </div>
            <div className="basis-1/2 flex-col flex gap-2">
              <Field placeholder="John" label="Last Name" type="input" />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="basis-1/2 flex-col flex gap-2">
              <Field
                placeholder="johndoe@gmail.com"
                label="Email"
                type="email"
              />
            </div>
            <div className="basis-1/2 flex-col flex gap-2 mb-5">
              <Field
                placeholder="+1 (111) 273-2934"
                label="Phone Number"
                type="input"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="basis-1/2 flex-col flex gap-2">
              <Field
                placeholder="100 Main St."
                label="Address 1"
                type="input"
              />
            </div>
            <div className="basis-1/2 flex-col flex gap-2 mb-5">
              <Field placeholder="Unit 5" label="Address 2" type="input" />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="basis-1/2 flex-col flex gap-2">
              <Field placeholder="Kingston" label="City" type="input" />
            </div>
            <div className="basis-1/2 flex-col flex gap-2 mb-5">
              <Field placeholder="Ontario" label="Province" type="input" />
            </div>
          </div>

          {/* <Button label="Save" href="/save" color="bg-black" /> */}
        </form>
      </div>
    </>
  );
};

export default page;
