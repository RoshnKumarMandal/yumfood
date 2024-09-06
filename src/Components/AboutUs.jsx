import React from 'react'

const AboutUs = () => {
  return (
    <div className='mt-[100px]'>
          <div>
         <p className='text-3xl font-semibold py-2 mx-3 mt-3 '> Driving the force of <span className='text-[#e23744] font-semibold'>assortment</span>
         </p>
         <p className='text-1xl font-semibold py-4 mx-3  w-[70%]'>
          
         For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.
         </p>
                <div className='flex w-full'>
              <div className=' w-[40%]'>
                <p className='text-3xl font-semibold py-2 mx-3 mt-3' >
                Who are we ?
                </p>
                <p className='text-1xl font-semibold py-4 mx-3  '>
                Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
                </p>
                
              </div>
              <div className='w-[500px] rounded- py-5'>
                <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" 
                
                className=' object-cover object-center rounded'
                />
              </div>
              
              </div>
          </div>
    </div>
  )
}

export default AboutUs
