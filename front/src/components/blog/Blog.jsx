import React from 'react'
import blog from '../../assets/blog.png'
import prof from '../../assets/Ellipse.png'

export const Blog = ({firstname, lastname, date, title, comment}) => {
  return (
    <div className='h-[440px] w-[370px] bg-white rounded-[30px] overflow-hidden flex flex-col items-center gap-4'>
      <img src={blog} alt='' />
      <div className='flex flex-col w-10/12 gap-10'>
        <p className='text-black text-2xl text-start' >{title}</p>
        <p className='text-black text-sm text-start' >{comment}</p>
        <div className='flex flex-row items-center w-full justify-center justify-around'>
          <img src={prof} alt=''/>
          <p className='text-black text-xs'>{firstname}{lastname}</p>
          <p className='text-black text-xs'>|</p>
          <p className='text-black text-xs'>{date}</p>
        </div>
      </div>
    </div>
  )
}
