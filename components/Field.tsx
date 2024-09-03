import React from "react";

interface Props {
  placeholder: string;
  label: string;
  type: string;
}

const Field = ({ placeholder, label, type }: Props) => {
  return (
    <>
      <label htmlFor="" className="text-gray font-semibold text-lg">
        {label}
      </label>
      <input
        type={type}
        className="border border-lightgray py-2 rounded-lg px-4"
        placeholder={placeholder}
        id=""
      />
    </>
  );
};

export default Field;
