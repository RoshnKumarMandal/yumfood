import React from 'react'

const Feedback = () => {
  return (
    <>
    <div className='text-gray-600 body-font w-[90%] sm:w-[80%] mx-auto mt-2 '>
          <div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
            <div className=''>
            <h1 className=' title-font font-medium text-4xl text-indigo-500  '>
              Put Your Valuable 
            </h1>
            <p className=' leading-relaxed mt-4 title-font font-medium text-5xl text-yellow-300 font-serif '>
              Feedback
            </p>
          </div>

          <div className='lg:w-2/6 md:1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full  mt-10 md:mt-0'>
            <h2 className='text-gray-900 text-3xl text-center font-medium title-font mb-5'>
            <p className=' title-font font-medium text-4xl text-indigo-500  '>Feedback Form</p>
            </h2>
            <div className=' relative mb-4'>
              <label htmlFor=" full-mame " className=' leading-7 text-md text-gray-600  ' >
                <b>Full name</b>
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
                <b>Email</b>
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
                
                <b>Mobile</b>
              </label>
              <input 
              type="text"
              id="full-name"
              name="full-name"
              className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-lg'
              />
               <label htmlFor="">
                
                <b>Age</b>
              </label>
              <input 
              type="number"
              id="full-name"
              name="full-name"
              placeholder="Enter your Age"
              className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-lg'
              />
              </div>
              <div>
              <label htmlFor="">
               <b> Feedback </b>
                <br />
                <textarea 
                type="text"
                placeholder="Enter your feedback"
                id="full-name"
                name="full-name"
                className=' w-full bg-white border-gray-300 focus:border-indigo-500 focus:ring-2  focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-lg '></textarea>
              </label>
             
              </div>
              
              <input 
                
               type="submit"
               value="Submit"
               name="submit"
               className='text-white cursor-pointer bg-indigo-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-indigo-600 text-lg'

              />

             
              
                  
          </div>
          </div>
      </div>    

  </>
  )
}

export default Feedback
