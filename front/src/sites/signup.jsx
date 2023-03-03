import React from 'react'

const signup = () => {
  return (
      <div>
          <div className=' flex justify-center'>
                <div className="font-extrabold text-black h-fit font-Mulish text-mt mt-[200px]">
                Sign up<div className="text-[#0BBEF2] inline-block">.</div>
                </div>
          </div>
          <div className='mt-[50px] flex justify-center'>
              <div>Email:</div>
              <input className=' ml-[21px] shadow-lg shadow-indigo-[500/40] rounded-xl w-[381px] h-[44px]' placeholder="   name@mail.domain"></input>
          </div>
          <div className='mt-[50px] flex justify-center '>
              <div>Password:</div>
              <input className="shadow-lg shadow-indigo-[500/40] rounded-xl w-[381px] h-[44px]" placeholder="      **********"></input>
          </div>
          <div className='mt-[50px] flex justify-center '>
              <div>Repeat password:</div>
              <input className="shadow-lg shadow-indigo-[500/40] rounded-xl w-[381px] h-[44px]" placeholder="      **********"></input>
          </div>
          <div className='mt-[50px] flex justify-center'>
                  <button className='w-[383px] h-[43px] text-white bg-[#0BBEF2] rounded-lg'>SIGN UP   </button>
          </div>
    </div>
  )
}
export default signup