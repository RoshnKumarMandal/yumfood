import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';



const Header = ( {count} ) => {

   const [slideNav,setSlideNav]=useState( false);

  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-white'>
   <div className=' flex justify-between py-[20px] px-[25px] text-[18px]  font-semibold border-b relative border-20px z-10'>
     <div>
      <Link to="/">
      <p >Yumi<span className='text-[#fbc531]'>Food </span></p>
      </Link>
      </div>
      <div >
      

        <ul  className=' sm:flex gap-4  cursor-pointer hidden   ' >
            
          <Link to='/'>
            <li className='hover:text-[#fbc531]'>Home</li>
            </Link>
            <Link to='/aboutus'>
            <li className='hover:text-[#fbc531]' > About Us </li>
            </Link>
            <Link to='/ourfood'>
            <li className='hover:text-[#fbc531]' > Our Food</li>
            </Link>
            <Link to='/sigin'>
            <li className='hover:text-[#fbc531]' >Sign In</li>
            </Link>
            <Link to='/Feedback'>
            <li className='hover:text-[#fbc531]' >Feedback</li>
            </Link>
            
        </ul>
      </div>
      {
        slideNav ? (<div className='bg-[#f5f6fa] text-center h-[100vh]   w-[300px]  right-0 top-[0px] absolute flex items-center justify-center' > 
        <RxCross1  size={30} className=' absolute top-3 cursor-pointer right-3 ' onClick={()=>setSlideNav(!slideNav)}/>
  
          <ul  className=' flex gap-12  cursor-pointer flex-col  ' >

          <Link to='/'>
            <li className='hover:text-[#fbc531]' onClick={()=>setSlideNav(!slideNav)} >Home</li>
            </Link>
            <Link to='/aboutus'>
            <li className='hover:text-[#fbc531]'  onClick={()=>setSlideNav(!slideNav)} > About Us </li>
            </Link>
            <Link to='/ourfood'>
            <li className='hover:text-[#fbc531]'  onClick={()=>setSlideNav(!slideNav)} > Our Food</li>
            </Link>
            <Link to='/sigin'>
            <li className='hover:text-[#fbc531]' onClick={()=>setSlideNav(!slideNav)}  >Sign In</li>
            </Link>
            <Link to='/Feedback'>
            <li className='hover:text-[#fbc531]'onClick={()=>setSlideNav(!slideNav)}  >Feedback</li>
            </Link>

          </ul>
        </div> ): (" ")
      }
      <div className='flex gap-5'>
       
        
        <p ><FaHamburger size={30} className='cursor-pointer block sm:hidden' onClick={()=>setSlideNav(!slideNav)} />

        
        </p>

        <p>
          {count}
          <FaCartShopping  size={30}className='cursor-pointer ' />
        </p>
      </div>
   </div>
   </div>
  )
}

export default Header




