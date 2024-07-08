import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"click w-fit px-4 py-[0.65rem] md:px-5 md:py-[.85rem] rounded-lg text-sm text-white bg-indigo-500 "}>
      {children}
    </div>
  );
};

export default Button;
