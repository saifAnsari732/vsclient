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
          
           <div>
      
            <div className="bg-gradient-to-tr from-[#692948]  to-[#1c53ac] rounded-4xl text-white   justify-center h-auto  py-5 ">
              <h2 onClick={handlePay} className='text-3xl ml-10 mb-2'>PayMent Manage</h2>
             {
             pay==true?
              <div className='h-[250px]'>
                 <img src={qr} alt="" className='h-[260px] ml-10 w-[250px]' />
              </div>
              :""
             }
            </div>
            
           </div>
        </div>
      </div>
    </>
  )
}

export default Upscholar