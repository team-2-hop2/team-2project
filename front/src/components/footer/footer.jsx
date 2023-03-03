/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import inst from './Instagram.png'
import face from "./Facebook.png"
import twit from "./Twitter.png"
 const Footer = () => {
  return (
      <div className='h-[336px] w-full bg-[#252B3B]'>
          <div>
            <div className="font-extrabold text-white h-fit font-Mulish text-mt ">
             team <div className="text-[#0BBEF2] inline-block">.</div>
            </div  >
            <div >
                  <img src={inst}></img>
                  <div>Instagram</div>
            </div> 
            <div>
                  <img src={face}></img>
                  <div>Facebook</div>
              </div> 
              <div>
                  <img src={twit}></img>
                  <div>Twitter</div>
              </div> 
              
          </div>

      </div>
      
  )
}
export default Footer;