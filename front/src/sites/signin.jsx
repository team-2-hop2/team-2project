import React from 'react'

const signin = () => {
  return (
      <div>
          <div className=' flex justify-center'>
                <div className="font-extrabold text-black h-fit font-Mulish text-mt mt-[200px]">
                Login <div className="text-[#0BBEF2] inline-block">.</div>
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
          <div className='flex mt-[50px] space-x-[11rem] justify-center  '>
              <label className=''>Remember me
                    <input type="checkbox" className='text-blue mr-[10px] '></input>
              </label>
              <div>
                  <button className='text-black decoration-solid underline decoration-auto'>Forgot password</button>
              </div>
          </div>
          <div className='mt-[50px] flex justify-center'>
                  <button className='w-[383px] h-[43px] text-white bg-[#0BBEF2] rounded-lg'>ENTER</button>
          </div>
          <div className='mt-[50px] flex justify-center'>
              <button className='text-blue text-[#0BBEF2] underline decoration-auto'>New user? Enter here.</button>
          </div>
    </div>
  )
}
export default signin