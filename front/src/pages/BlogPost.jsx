import React from "react";
import {Blog} from '../components/blog'

export const BlogPost = () => {
  return (
  <div className=" w-screen h-auto flex flex-col items-center justify-center bg-[#F5F5F5]">
    <div className="h-auto w-10/12 flex flex-col mt-44 gap-10 items-center">
        <p className="text-black text-5xl font-Mulish w-full flex justify-start">Blog posts</p>
        <p className="text-[#6D7D8B] text-lg font-Mulish  w-full flex justify-start">Our late updates and blogs about managing your team</p>
        <div className="flex flex-wrap w-10/12 justify-center gap-10">
            <Blog title={'10 secret tips for managing a team remotely'} comment={"There are times when our work impacts us deepl"} firstname={"Bessie"} lastname={"Cooper"} date={"2nd January,2022"}/>
            <Blog/>  
            <Blog/>
            <Blog/>
            <Blog/>
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
