import React from 'react'

const Signin = () => {
  return (
    <>
      <div className='text-gray-600 body-font w-[90%] sm:w-[80%] mx-auto '>
            <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
              <div className=''>
              <h1 className=' title-font font-medium text-3xl text-gray-900 '>
                Get Started With your Account
              </h1>
              <p className=' leading-relaxed mt-4 '>
                Find your Favourite food on our platform
              </p>
            </div>

            <div className='lg:w-2/6 md:1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full  mt-10 md:mt-0'>
              <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
                Sign Up
              </h2>
              <div className=' relative mb-4'>
                <label htmlFor=" full-mame " className=' leading-7 text-md text-gray-600  ' >
                  Full name
                </label>
                <input 
                type="text"
                id="full-name"
                name="full-name"
                className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-lg '
                />
              </div>
                <div>
                <label htmlFor="">
                  Email
                </label>
                <input 
                type="text"
                id="full-name"
                name="full-name"
                className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-lg'
                />
                </div>
                <div>
                <label htmlFor="">
                  Mobile
                </label>
                <input 
                type="text"
                id="full-name"
                name="full-name"
                className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-lg'
                />
                </div>
                <div>
                <label htmlFor="">
                  Password
                </label>
                <input 
                type="text"
                id="full-name"
                name="full-name"
                className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-lg '
                />
                </div>
                <button className='text-white bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 text-lg'>
                  Sign Up
                </button>

            </div>
            </div>
        </div>    

    </>
  )
}

export default Signin
