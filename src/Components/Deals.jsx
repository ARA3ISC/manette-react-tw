import React from 'react'
import deal1 from '../assets/deal1.png'
import deal2 from '../assets/deal2.png'
import deal4 from '../assets/deal4.png'
import deal5 from '../assets/deal5.png'
import deal6 from '../assets/deal6.png'

function Deals() {
  return (
    <>
        <div className='flex justify-around items-center text-white my-10'>
            <h3 className='font-medium text-[20px]'>Hot Deals </h3>
        </div>
        <div className='flex justify-center gap-8'>
            <img src={deal1} alt="" />
            <img src={deal2} alt="" />
            <img src={deal4} alt="" />
            <img src={deal5} alt="" />
            <img src={deal6} alt="" />
        </div>
    </>
  )
}

export default Deals
