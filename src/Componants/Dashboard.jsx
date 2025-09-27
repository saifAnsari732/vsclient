import React from 'react'
import Header from './Header/Header'
import Footer from './Header/Footer'
import sch from '../Image/schol.jpg'
import bank from '../Image/bank.jpg'
import aadhr from '../Image/aadhar.jpg'
import pan from '../Image/pan2.jpg'
import print from '../Image/print.jpg'
import camera from '../Image/camera.jpg'
import gov from '../Image/gov.jpg'
import income from '../Image/income.jpeg'
import live from '../Image/live.jpg'
import cast from '../Image/cast.png'
import { useNavigate } from 'react-router-dom'
import Slider from './Slider'
import { Customheader } from './Header/Customheader'
const Dashboard = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <Customheader/>
      {/* <div className='flex items-center justify-center rounded-b-4xl w-full'>
        <div className='bg-gradient-to-tl py-6 items-center flex flex-col text-teal-500 rounded-bl-4xl rounded-br-4xl from-cyan-300 h-24 w-full'>
          <img
            alt="Profile"
            className="absolute left-3.5 w-16 h-16 top-24 rounded-full bg-[#3b5998] p-2"
            src={img}
          />
          <h2 className='text-black font-semibold text-2xl ml-5'> Hello And Welcome  </h2>
          <h1 className=' font-semibold text-black font-serif py-1.5 flex '>{name} 💕</h1>
        </div>
      </div> */}
           <Slider/>
           
      {/* Card up schol*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:items-center justify-center gap-4 pt-12 p-4 overflow-x-auto bg-gradient-to-tl from-[#a2a4a3]  to-[#000000] ">
        <div onClick={() => navigate('/Upscholar')}
         className="bg-gradient-to-t from-[#1d5464] via-[#207e82] to-[#298f9b] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={sch} className=' w-24 h-24  rounded-full bg-[#3b5998]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>UP Scholarship </h2>
        </div>

        {/* BANK FINANNCE */}
        <div onClick={() => navigate('/Banking')} className="bg-gradient-to-br from-[#2dd4bf]  to-[#1f2937] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={bank} className=' w-24 h-24  rounded-full bg-[#020607]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Banking / Finance Loan ... </h2>
        </div>

        {/* Aadhar  */}
        <div className="bg-gradient-to-t from-[#b3fdfd]  to-[#015b47] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={aadhr} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Aadhar Card</h2>
        </div>
        {/* Pan card */}
        <div className="bg-gradient-to-tl from-[#81abed]  to-[#2f0449] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={pan} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Pan Card</h2>
        </div>
        {/* photoshoot card */}
        <div className="bg-gradient-to-tr from-[#86ffb2]  to-[#563d26] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={camera} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Photo Shoot</h2>
        </div>
        {/* PrintOut card */}
        <div className="bg-gradient-to-b from-[#ffffff]  to-[#8889c5] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={print} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>PrintOut / Photo Copy</h2>
        </div>
        {/* PGoverment form */}
        <div className="bg-gradient-to-t from-[#c260d8]  to-[#7f1d1d45] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={gov} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Goverment Form</h2>
        </div>
        {/* cast certificat */}
        <div className="bg-gradient-to-l from-[#06b6d4]  to-[#ebfff2] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={cast} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>caste Certificate</h2>
        </div>
        {/* income certificat */}
        <div className="bg-gradient-to-b from-[#818cf8]  to-[#ffffff] rounded-4xl text-white h-[120px] p-4 flex items-center">
          <img src={income} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Income Certificate</h2>
        </div>
        {/* Living certificat */}
        <div className="bg-gradient-to-l from-[#5d5d87]  to-[#320f1d] rounded-4xl text-white h-[120px] p-4 flex  items-center">
          <img src={live} className=' w-24 h-24  rounded-full bg-[#205866]  p-2' />
          <h2 className='text-black font-sans text-2xl ml-2 font-semibold'>Live Certificate</h2>
        </div>
      </div>






      <Footer />
    </>
  )
}

export default Dashboard

