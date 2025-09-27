import React, { useState } from 'react';
import imglogo from '../Image/logo copy.png'
import { useNavigate } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti"
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
export default function VsDigitalLogin() {
    // NAVIGATION
const navigate=useNavigate()
// STATE
const [name, setName] = useState('')
const handlelogin=()=>{
    localStorage.setItem("name",name)
    navigate('/dashboard')
}
// submit Code
// const handlesubmit=()=>{
//     alert("sakd")
// }
  return (
    <>     <div className="min-h-screen flex flex-col lg:flex-row lg:justify-center  items-center justify-between bg-gradient-to-b from-[#1f1263] to-[#000000]">
      {/* Top Section */}
      <div className="  items-center mt-5 lg:ml-28 ">
        {/* Logo */}
        <img
          src={imglogo}
          alt="VS Digital Solution Logo"
          className="drop-shadow-lg h-[350px] lg:h-[500px] lg:w-[700px]"
        />
      </div>
      <div className="w-full md:w-[420px] bg-[#19A779] lg:bg-gradient-to-r from-teal-900  to-black lg:h-screen lg:w-[800px] lg: lg:justify-end lg:ml-80  rounded-t-3xl py-16 px-5 flex flex-col items-center">
        
        <div className="text-3xl font-bold text-white mb-6">Welcome!</div>
        
        <div  className="w-full flex flex-col items-center mb-5">
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            className="w-full px-5 py-4 text-3xl lg:text-5xl lg:py-3 rounded-lg border outline-none  bg-blue-200 text-black shadow"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <button onClick={handlelogin} className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-semibold flex items-center justify-center text-lg mb-8 transition hover:brightness-105">
          Continue <span className="ml-2 ">&rarr;</span>
        </button>
        <div className="text-white my-2">Connect with us</div>
        <div className="flex gap-6 mt-2 mb-4">
          <a href="#"><IoLogoInstagram className='text-4xl rounded-4xl text-red-600 bg-amber-100 p-1'/></a>
          <a href="#"><TiSocialFacebookCircular className='text-4xl rounded-4xl text-blue-200 bg-[#0084ff] p-1'/></a>
          <a href="#"><CiTwitter className='text-4xl rounded-4xl bg-[#00ACEE]  p-1'/></a>
          <a href="https://www.instagram.com/vikas_yaduvanshi_96/"><CiLinkedin className='text-4xl rounded-4xl text-[#02afff] bg-[#284fa3] p-1'/></a>
        </div>
      </div>
      </div>
      
    </>

    
  );
}

 