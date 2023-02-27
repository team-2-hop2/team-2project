/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import mg from "./Rectangle.png"
import mg2 from "./Ellipse.png"
 const Tablet = () => {
  return (
      <div className='ml-[100px] h-[440px] w-[363px] border-black border-2 rounded-xl'>
           <img src={mg} className="h-[147px] w-[370px] rounded-t-xl"></img>
          <div className='ml-[24px]'>
          
           <div className='font-[cabin] font-medium text-2xl leading-[2]'>Data-Driven Design is Killing Our Instincts</div>
           <div className='font-[mulish] font-semibold text-lg leading-[2]'>Our latest updates and blogs about managing your team
              Our latest updates and blogs about managing your team</div>
           <div className='flex space-x-2 pt-[20px]'>
                  <img className="h-[45px] w-[44px]" src={mg2}></img>
                  <div className='decoration-[gray] '>Jane Cooper</div>
                  <div className='decoration-[gray]'>|</div>
                  <div className='decoration-[gray] '>2nd January,2022</div>
           </div>
           </div>

          
    </div>
  )
}
export default Tablet