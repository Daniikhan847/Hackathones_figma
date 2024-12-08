import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { VscVerified } from "react-icons/vsc";
import { AiFillCreditCard } from "react-icons/ai";
import { LuSprout } from "react-icons/lu";

const Box = () => {
  return (
   <div className='w-full h-[355px] bg-white'>
    <div className='w-[366px] h-[34px] text-xl ml-[850px] mt-4'>
        <h1 className='text-xl font-bold'>What makes our brand different</h1>
    </div>
    <div className='flex justify-between items-center mt-14 ml-5'>
        <div className='w-[270px] h-[124px] bg-white'>
            <FaTruckFast className='size-5'/>
            <h1 className=' text-xl font-bold'>Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className='w-[270px] h-[124px] bg-white'>
            <VscVerified className='size-5'/>
            <h1 className='text-xl font-bold'>Made by true artisans</h1>
            <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        <div className='w-[270px] h-[124px] bg-white'>
            <AiFillCreditCard className='size-5'/>
            <h1 className='text-xl font-bold'>Unbeatable prices</h1>
            <p>For our materials and quality you won’t find better prices anywhere</p>
        </div>
        <div className='w-[270px] h-[124px] bg-white'>
            <LuSprout className='size-5'/>
            <h1 className='text-xl font-bold'>Recycled packaging</h1>
            <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
    </div>
   </div>
  )
}

export default Box
