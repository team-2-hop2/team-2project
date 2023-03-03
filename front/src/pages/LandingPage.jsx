import React from "react";
import bg from "..//assets/background.jpg";
import imgOne from "..//assets/img1.png";
import imgTwo from "..//assets/img2.png";
import imgThree from "..//assets/img3.png";
import { Header } from "../components/header/Header";
export const LandingPage = () => {
  return (
    <div className="height-auto flex flex-col w-full">
      <img src={bg} className="h-screen w-screen z-[-10]" alt="hhh" />

      <div className=" w-full justify-center mt-[-70vh] pl-12 ">
        <p className="  font-sans text-5xl h-32 w-1/4 text-white z-50 text-start">
          Instant collaborations for remote teams
        </p>
        <p className="  font-mulish text-lg h-14 w-80 text-white z-50 text-start ">
          All in one for your remote team chats, collaboration and track
          projects
        </p>
        <div className="flex flex-row">
          <input
            className="h-14 w-80 z-50 rounded mt-[10vh]"
            placeHolder="Email"
          ></input>
          <button className="ml-3 h-14 w-auto z-50 px-6 bg-[#0BBEF2] text-white rounded mt-[10vh]">
            Get early access
          </button>
        </div>
      </div>

      <div className=" flex h-[100vh]  mt-[50vh] ml-[10vw] ">
    
        <div className=' font-sans flex flex-col text-start w-[30vw] mt-[30vh]'>
                <div className='font-sans text-5xl  text-black z-50'>Your Hub for teamwork</div>
                <div className=' flex mt-10'>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
                <div className='text-cyan-500 flex mt-10 text-xxl'>Learn more</div>
                </div>
        <div className=" flex justify-end items-center">
          <img src={imgOne} className=" h-[700px] w-[700px] ml-[550px] mb-[100px] " alt="boo" />
        </div>
      </div>

      <div className="  w-[100vw] h-[100vh]">
        <div className="flex justify-start items-center">
        <img src={imgTwo} alt="mm" className="h-[700px] w-[700px]"/>
        </div>
        <div  className='flex justify-end font-sans flex-col w-[30vw]  ml-[50vw] mt-[-50vh]'>
        <div  className='font-sans text-5xl  text-black z-50'>Simple task management</div>
        <div  className=' flex mt-10'>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
        <div className='text-cyan-500 flex mt-10 text-xxl'>Learn more</div>
        </div>
      </div>

        <div className="h-[100h] w-[100w">
          <div className="flex flex-column justify-center items-center">
            
          <div className="flex justify-start font-sans flex-col w-[30vw] mt-[-25vh]">
          <div className="font-sans text-5xl  text-black z-50">Scheduling that actually works</div>
          <div className=' flex mt-10'>Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
          <div className="text-cyan-500 flex mt-10 text-xxl">Learn more</div>
          </div>
          <div className="flex justify-end items-center mb-[20vh] ml-[20vw]">
          <img src={imgThree} alt='mm' className="h-[]"/>
          </div>
          </div>
      </div>
    </div>
  );
};
