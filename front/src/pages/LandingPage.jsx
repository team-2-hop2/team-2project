import React from 'react';
import bg from '..//assets/background.jpg';
import { Header } from '../components/header/Header';
export const LandingPage = () => {
    return(
    <div>
        <Header/>
            <img src={bg} className="h-screen w-screen z-10 absolute" alt='hhh'/>
            <div className="flex flex-col  h-full w-full justify-center border">
            <p className="  font-sans text-5xl h-32 w-1/4 text-white z-50 text-start">Instant collaborations for remote teams</p>
            <p className="  font-mulish text-lg h-14 w-80 text-white z-50 text-start">All in one for your remote team chats, collaboration and track projects</p>
            <div className="flex flex-row">
            <input className='h-14 w-80 z-50 rounded ' placeHolder="Email"></input>
            <button className='ml-3 h-14 w-auto z-50 px-6 bg-[#0BBEF2] text-white rounded'>Get early access</button>
            </div>
            </div>
    </div>
    )
} 
