import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=' bg-black text-white w-full '>
      <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6 '>
        <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[30px]'>Yumi<span className='text-[#fbc531]'>Food </span>
            </h2>
            <p className='text-[15px] md:text-[20px] text-[gray]'>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        

        <div >
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
           <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>About</p>
           <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Careers</p>
           <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Swiggy one</p>
        </div>


        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Help & Support</h2>

           <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Company </p>
           <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'> Partner With Us </p>
           <p className='text-[15px] md:text-[20px] mb-2 text-[gray] '>Ride with Us</p>
        </div>


        <div>
            <h2 className=" font-bold mb-3 text-[20px] md:text-[25px] " > We deliver to:</h2>
            <p className=' text-[15px] md:text-[20px] mb-2 text-[gray] '> Banglor </p>
            <p className=' text-[15px] md:text-[20px] mb-2 text-[gray]' > Gurgaon</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray] '>delhi</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]' > Mumbai</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Pune</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
