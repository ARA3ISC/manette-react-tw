import React from 'react'
import manette from '../assets/manette2.png'
import { FaFacebook, FaInstagram, FaYoutube ,FaLinkedin, FaPinterest } from "react-icons/fa";


function Hero() {
  return (
    <>
        <div className='w-[85%] mx-auto grid grid-cols-2 text-white'>
            <div className='items-center'>
                <h1 className='pt-16 text-[36px] font-medium'>Unlock Your Potential, Techniques for Improving Your Gaming Performance</h1>
                <p className='pt-[20px] text-[#CECDCD]'>
                    From mastering advanced gameplay mechanics to sharpening reflexes and decision-making abilities, this book offers invaluable insights and strategies for gamers of all levels.
                </p>
                <div className='my-9'>
                    <button className='mr-4 rounded-[5px] bg-white text-[#3A0909] font-medium py-[10px] px-[20px]'>Shop now</button>
                    <button className='ml-4 rounded-[5px] bg-white text-[#3A0909] font-medium py-[10px] px-[20px]'>Discover</button>
                </div>
            </div>
            <div className=''>
                <img className='mx-auto' src={manette} alt="" />
            </div>
            
        </div>
        <div className='flex justify-around items-center text-white my-3'>
            <h3 className='font-medium text-[20px]'>Share Your Social Experience </h3>
        </div>
        <div className='flex gap-8 justify-center text-white'>
            <a href="#"><FaFacebook className='size-8 hover:text-blue-600' /></a>
            <a href="#"><FaInstagram className='size-8 hover:text-[#FB16D7]' /></a>
            <a href="#"><FaYoutube className='size-8 hover:text-red-700' /></a>
            <a href="#"><FaLinkedin className='size-8 hover:text-blue-600' /></a>
            <a href="#"><FaPinterest className='size-8 hover:text-[#E60018]' /></a>

        </div>
    </>
  )
}

export default Hero
