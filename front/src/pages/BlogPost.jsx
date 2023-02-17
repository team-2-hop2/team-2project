import React from "react";
import {Blog} from '../components/blog'

export const BlogPost = () => {
  return (
  <div className=" w-screen h-auto flex flex-col items-center justify-center bg-[#F5F5F5]">
    <div className="h-auto w-10/12 flex  flex-col mt-44 ">
        <p className="text-black text-5xl font-Mulish">Blog posts</p>
        <p className="text-[#6D7D8B] text-lg font-Mulish ">Our late updates and blogs about managing your team</p>
        <div className="inline-grid grid-cols-3 gap-10">
            <Blog/>
            <Blog/>  
            <Blog/>
            <Blog/>
        </div>
        <div className="w-full flex justify-center"> 
          <button className="w-[165px] h-[45px] text-[#6D7D8B] bg-[#1E2742] flex justify-center items-center rounded-[4px]"  >Next</button>
        </div>
    </div>

  </div>
  
)};
