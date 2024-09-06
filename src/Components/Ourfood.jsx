import React from 'react'
import { mealData } from "../Data/Data"
const Ourfood = () => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-[100px]'>
        <div>
            <h2 className='text-center text-4xl font-bold text-[#fbc531] py-5' >
                Our Food
            </h2>
        </div>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 gap-4' >
            {
                mealData.map((meal)=>(
                    <div className='flex  justify-center flex-col items-center '>
                        <img 
                        src={meal.img} 
                        alt="" 
                        className='w-[250px] h-[200px] rounded-lg object-cover'
                        />
                      <div className=' flex justify-center py-2 px-4 flex-col items-center '>
                      <p className='text-xl font-semibold uppercase'>{meal.name}</p>
                        <button className=' bg-black w-[150px]   text-[#ffffff]  rounded-md my-6 py-[11px] text-[15px] hover:text-[#fbc531] hover:font-semibold'>
                    Add to Cart
                </button>
                      </div>
                    </div>
                ))
            }
        </div>
    </div>
    
    </>
  )
}

export default Ourfood
