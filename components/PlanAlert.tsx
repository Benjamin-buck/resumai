import React from "react";

const PlanAlert = () => {
  return (
    <div className="w-full border rounded-lg my-4 bg-gradient-to-l from-gray-100">
      <div className="mx-8 my-4 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-lg">
            Your account is currently on the free plan.
          </h2>
          <p className="text-gray-500 text-sm">
            Paid plans offer higher usage limits and have been proved to land
            applicants in jobs 5x faster.
          </p>
        </div>
        <button className="bg-gradient-to-b from-[#7E76FF] to-[#4A3EFF] text-white font-semibold px-4 py-2 rounded-lg">
          View Plans
        </button>
      </div>
    </div>
  );
};

export default PlanAlert;
