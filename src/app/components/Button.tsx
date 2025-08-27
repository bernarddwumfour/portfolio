import React, { ReactNode } from "react";

const Button = ({ children,onClick }: { children: ReactNode,onClick?:()=>void }) => {
  return (
    <button onClick={onClick} className={"click w-fit px-4 py-[0.65rem] md:px-5 md:py-[.85rem] rounded-lg text-sm text-white bg-indigo-500 "}>
      {children}
    </button>
  );
};

export default Button;
