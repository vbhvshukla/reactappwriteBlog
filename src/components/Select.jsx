import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  //Options is a array
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {
          options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          )) //? is for if there is element in option then only loop if there is no element without ? it will crash
        }
      </select>
    </div>
  );
}

export default React.forwardRef(Select); //Easy use of using Ref
