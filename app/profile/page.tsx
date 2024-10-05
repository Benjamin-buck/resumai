import Button from "@/components/Button";
import Field from "@/components/Field";
import PlanAlert from "@/components/PlanAlert";
import ProfileMenu from "@/components/ProfileMenu";
import VerticalNav from "@/components/VerticalNav";
import React from "react";

const page = () => {
  return (
    <>
      <ProfileMenu logo={true} />
      <div className="grid grid-cols-12">
        <div className="col-span-2 mt-8"></div>

        <div className="col-span-10 mt-8 mr-10">
          <div className="border-b border-gray-1 pb-3">
            <h2 className="text-2xl font-semibold">Account</h2>
            <p className="text-sm">
              Settings and options for your personal account.
            </p>
          </div>
          <PlanAlert />

          <div className="mt-5 flex border-b pb-5">
            <div>
              <h3 className="text-xl font-bold">Personal Information</h3>
              <p className="text-gray-500 text-sm">
                Information about yourself.
              </p>
            </div>
            <div className="ml-[20em] flex-1">
              <div className="flex gap-6">
                <div className="flex flex-col flex-1">
                  <label htmlFor="firstName" className="font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Benjamin"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="firstName" className="font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Benjamin"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="my-4">
                <div className="flex flex-col flex-1">
                  <label htmlFor="firstName" className="font-bold">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="name@organization.com"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex border-b pb-5">
            <div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-gray-500 text-sm">
                Information about your address.
              </p>
            </div>
            <div className="ml-[20em] flex-1">
              <div className="flex gap-6">
                <div className="flex flex-col flex-1">
                  <label htmlFor="address2" className="font-bold">
                    Address 1
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="100 Main St."
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="address2" className="font-bold">
                    Address 2
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="5"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-6 mt-5">
                <div className="flex flex-col flex-1">
                  <label htmlFor="address2" className="font-bold">
                    City
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Ottawa"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="address2" className="font-bold">
                    Province
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Ontario"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-6 mt-5">
                <div className="flex flex-col flex-1">
                  <label htmlFor="address2" className="font-bold">
                    Postal / ZIP Code
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="K7K 4M9"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="address2" className="font-bold">
                    Country
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Canada"
                    className="border rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
