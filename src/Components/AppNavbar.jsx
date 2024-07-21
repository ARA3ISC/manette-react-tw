import React from 'react'
import logo from '../assets/logo.png'
import { LuShoppingCart } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";



function AppNavbar() {
  return (
    // <>
        <div className='flex justify-between items-center text-white'>
            <img src={logo} alt="" />
            <ul className='flex gap-[44px] text-[18px]'>
                <li className='cursor-pointer'><a>Home</a></li>
                <li className='cursor-pointer'><a>Pricing</a></li>
                <li className='cursor-pointer'><a>About</a></li>
                <li className='cursor-pointer'><a>Contact</a></li>
                <li className='cursor-pointer'><a>Gallery</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <a href="#"><LuShoppingCart className='size-7 bg-white text-black rounded-full px-[4px]' /></a>
                <a href="#"><FaUserCircle className='size-7 ' /></a>
            </div>
        </div>
    // </>
  )
}

export default AppNavbar
