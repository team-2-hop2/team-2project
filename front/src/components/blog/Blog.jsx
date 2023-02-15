import React from 'react'
import blog from '../../assets/blog.png'
import prof from '../../assets/Ellipse.png'

export const Blog = () => {
  return (
    <div className='h-[440px] w-[370px] bg-white rounded-[30px] overflow-hidden flex flex-col items-center gap-4'>
      <img src={blog} alt='' />
      <div className='flex flex-col w-10/12 gap-10'>
        <p className='text-black text-2xl text-start' >10 secret tips for managing a team remotely</p>
        <p className='text-black text-sm text-start' >There are times when our work impacts us deeply - sometimes in ways we neither acknowledge nor understand</p>
        <div className='flex flex-row items-center w-full justify-center justify-around'>
          <img src={prof} alt=''/>
          <p className='text-black text-xs'>Bessie Cooper</p>
          <p className='text-black text-xs'>|</p>
          <p className='text-black text-xs'>2nd January,2022</p>
        </div>
      </div>
    </div>
  )
}
