import React from "react";

export const Header = () => {
  return (
    <div className="fixed flex flex-row items-center justify-between py-5 px-10 top-0 w-full h-[90px] ">
      <div className="font-extrabold text-white h-fit font-Mulish text-mt">
        team <div className="text-[#0BBEF2] inline-block">.</div>
      </div>
      <div className="flex flex-row items-center gap-6 font-bold text-white font-Mulish text-ht">
        <div className="underline cursor-pointer decoration-[#6D7D8B]">Blogs</div>
        <div className="underline cursor-pointer decoration-[#6D7D8B]">Services</div>
        <div className="underline cursor-pointer decoration-[#6D7D8B]">Contact</div>
        <div className="underline cursor-pointer decoration-[#6D7D8B]">Log in</div>
        <div className="h-full px-5 py-2 border-[2px] opacity-70 cursor-pointer border-white rounded w-fit text-bt">Get Access</div>
      </div>
    </div>
  );
};
