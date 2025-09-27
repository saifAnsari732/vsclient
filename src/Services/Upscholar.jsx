import React, { useState } from 'react'
import Header from '../Componants/Header/Header'
import qr from '../Image/QR.jpg'
const Upscholar = () => {
  const [pay, setPay] = useState(false)
  const handlePay = () => {
    setPay(true)
  }
  return (
    <>
      <Header />
      <div className='bg-gradient-to-bl from-[#0f172a] via-[#17144d] to-[#09132a] h-screen'>
        <h1 className='text-white text-center text-4xl py-4 font-semibold'>UP SCHOLARSHIP </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
          <div className="bg-gradient-to-tr from-[#22c55e] via-[#0e7490] to-[#3b82f6] rounded-4xl text-white items-center flex justify-center h-[250px]  ">
            <ul className=''>
              <h2 className='text-3xl '>Required Documents</h2>
              <li className=''>👉High School Marksheet</li>
              <li>👉Inter Marksheet</li>
              <li>👉Photo</li>
              <li>👉Aadhar Card</li>
              <li>👉Income Certificate</li>
              <li>👉Caste Certificate</li>
              <li>👉Live Certificate</li>
            </ul>
          </div>
          {/* 2 */}
          
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 '>
      
            <div onClick={handlePay} className="cursor-pointer bg-gradient-to-tr from-[#692948]  to-[#1c53ac] rounded-4xl text-white   py-5 lg:w-[400px] ">
              <h2  className='text-3xl ml-10 mb-2 '>PayMent Manage</h2>
             {
             pay==true?
              <div className='h-[250px] '>
                 <img src={qr} alt="" className='h-[260px] ml-10 w-[250px] lg:w-[300px]' />
              </div>
              :""
             }
            </div> <br/>

           </div>
           <div className='h-[130px] bg-gradient-to-tr from-[#26393e]  to-[#0b3373]  rounded-4xl text-white'>
               <h1 className='px-7 py-2.5 text-3xl'>Registration Fees : <span className='text-pink-600'>50<small className='font-serif'>Rs</small></span></h1>
               <h1 className='px-7 py-2.5 text-3xl'>Form Apply : <span className='text-pink-600'>130<small className='font-serif'>Rs</small></span></h1>
           </div>
           <br />
           <div>

           <h1 className='text-white text-3xl font-semibold font-serif'>📌#ATTENTION</h1>
           <p className='text-white'>All Photo Copy Which is Required To Apply Your Form That Photo Copy pay Extra Fees  d'not Include Your Application Form </p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Upscholar