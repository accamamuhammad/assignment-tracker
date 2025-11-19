"use client"

import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen font-mono flex flex-col gap-8 items-center justify-center'>
      <div>
        <h1 className='text-3xl font-bold font-mono'>Add Assessment ✍🏾</h1>
      </div>
      <div className='w-full flex flex-col gap-5 items-center justify-center'>
        {/* Title */}
       <div className='w-[70%] h-14 p-2 rounded-lg bg-neutral-100 flex flex-row'>
        <div className='h-full text-2xl aspect-square bg-white rounded-md flex items-center justify-center'>
          📕
        </div>
        <input type="text" name='title' className='w-full h-full border-none outline-0 pl-4 placeholder-neutral-700 text-[0.9rem]' placeholder='Enter Title'/>
       </div>
       {/* Description */}
       <div className='w-[70%] h-14 p-2 rounded-lg bg-neutral-100 flex flex-row'>
        <div className='h-full text-2xl aspect-square bg-white rounded-md flex items-center justify-center'>
          📇
        </div>
        <input type="text" name='description' className='w-full h-full border-none outline-0 pl-4 placeholder-neutral-700 text-[0.9rem]' placeholder='Enter Description'/>
       </div>
       {/* Degree */}
       <div className='w-[70%] h-14 px-1.5 py-1.5 rounded-lg bg-neutral-100 flex flex-row items-center justify-around'>
        <span className='bg-red-600 hover:bg-red-400 cursor-pointer w-[27%] text-[0.85rem] text-center py-1 font-mono rounded-md text-white'>Hard</span>
        <span className='bg-blue-600 hover:bg-blue-500 cursor-pointer w-[27%] text-[0.85rem] text-center py-1 font-mono rounded-md text-white'>Medium</span>
        <span className='bg-green-600 hover:bg-green-500 cursor-pointer w-[27%] text-[0.85rem] text-center py-1 font-mono rounded-md text-white'>Easy</span>
       </div>
      {/* Date */}
      <div className='w-[70%] px-4 py-3 rounded-lg bg-neutral-100 flex flex-row items-start justify-between'>
        <h2 className='font-bold font-mono text-black-600 text-[0.9rem]'>Select Data</h2>
        <input type="date" name="date" className='text-[0.9rem]'/>
       </div>
      </div>
    </div>
  )
}

export default page
