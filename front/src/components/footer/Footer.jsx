import React from "react";
import team from "../../assets/team.png";
import ig from "../../assets/insta.png";
import fb from "../../assets/fb.png";
import twit from "../../assets/twit.png";

export const Footer = () => {
  return (
    <div>
      <div className="w-full h-[336px] bg-[#252B3B]">
        <div className="flex flex-row">
        <div className="ml-[140px] pt-[20px] font-Karia">
          <img src={team} alt="" />
          <div className="w-full flex  text-[white] pt-[20px]">
            <img src={ig} alt="" className="h-[18px] w-[16px]" />
            <div className="pl-[10px]">Instagram</div>
          </div>
          <div className="w-full flex text-[white] pt-[20px]">
            <img src={fb} alt="" className="h-[18px] w-[16px]" />
            <div className="pl-[10px]">Facebook</div>
          </div>
          <div className="w-full flex text-[white] pt-[20px]">
            <img src={twit} alt="" className="h-[18px] w-[16px]" />
            <div className="pl-[10px]">Twitter</div>
          </div>
          <div className="w-full flex  text-[white] pt-[20px]">
            <img src={ig} alt="" className="h-[18px] w-[16px]" />
            <div className="pl-[10px]">Instagram</div>
          </div>
          <div className="w-full flex text-[white] pt-[20px]">
            <img src={fb} alt="" className="h-[18px] w-[16px]" />
            <div className="pl-[10px]">Facebook</div>
          </div>
          <div className="w-full flex  text-[white] pt-[20px]">
            <img src={twit} alt="" className="h-[18px] w-[16px]" />
            <div className="pl-[10px]">Twitter</div>
          </div>
         </div>
         <div className="ml-[300px] text-[white] pt-[20px]">
          <div className="font-Mulish">
          <div className="text-xl">Use cases</div>
         <div className="pt-[20px]">UI Design</div>
         <div className="pt-[20px]">UX Design</div>
         <div className="pt-[20px]">Phototyping</div>
         <div className="pt-[20px]">UI Design</div>
         <div className="pt-[20px]">UX Design</div>
         <div className="pt-[20px]">Phototyping</div>
          </div>
         </div>
         <div className="ml-[300px] text-[white] pt-[20px]">
          <div className="font-Mulish">
          <div className="text-xl">Explore</div>
         <div className="pt-[20px]">Figma</div>
         <div className="pt-[20px]">Customers</div>
         <div className="pt-[20px]">Why I love figma</div>
         <div className="pt-[20px]">Figma</div>
         <div className="pt-[20px]">Customers</div>
         <div className="pt-[20px]">Why I love figma</div>
          </div>
         </div>
         <div className="ml-[300px] text-[white] pt-[20px]">
          <div className="font-Mulish">
          <div className="text-xl">Resources</div>
         <div className="pt-[20px]">Commnunity rescources hub</div>
         <div className="pt-[20px]">Support</div>
         <div className="pt-[20px]">Education</div>
         <div className="pt-[20px]">Commnunity rescources hub</div>
         <div className="pt-[20px]">Support</div>
         <div className="pt-[20px]">Education</div>
          </div>
         </div>
         <div className="font-Mulish">
         <div className='ml-[200px] pt-[10px] text-2xl text-[white]'>Subscirbe to our newsletter</div>
         <input className="h-[56px] w-[296px] ml-[200px] mt-[40px] pl-[10px] placeholder-[#4DA0FD]" placeholder="email"/>
         </div>
        </div>
      </div>
    </div>
  );
};
