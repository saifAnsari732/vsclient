import React, { useState } from 'react';
import imglogo from '../Image/logo copy.png'
import { useNavigate } from 'react-router-dom';
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
          className="drop-shadow-lg h-[500px] lg:w-[700px]"
        />
      </div>
      <div className="w-full md:w-[420px] bg-[#19A779] lg:bg-gradient-to-r from-teal-900  to-black lg:h-screen lg:w-[800px] lg: lg:justify-end lg:ml-80  rounded-t-3xl py-16 px-5 flex flex-col items-center">
        
        <div className="text-3xl font-bold text-white mb-6">Welcome!</div>
        
        <div  className="w-full flex flex-col items-center mb-5">
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            className="w-full px-5 py-4 rounded-lg border outline-none text-gray-700 bg-white placeholder-gray-400 shadow"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <button onClick={handlelogin} className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-semibold flex items-center justify-center text-lg mb-8 transition hover:brightness-105">
          Continue <span className="ml-2 ">&rarr;</span>
        </button>
        <div className="text-white my-2">Connect with us</div>
        <div className="flex gap-6 mt-2 mb-4">
          <a href="#"><img alt="Facebook" className="w-10 h-10 rounded-full bg-[#3b5998] p-2" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg" /></a>
          <a href="#"><img alt="Twitter" className="w-10 h-10 rounded-full bg-[#1DA1F2] p-2" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/twitter.svg" /></a>
          <a href="#"><img alt="Instagram" className="w-10 h-10 rounded-full bg-[#C13584] p-2" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg" /></a>
          <a href="#"><img alt="LinkedIn" className="w-10 h-10 rounded-full bg-[#0077B5] p-2" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg" /></a>
        </div>
      </div>
      </div>
      
    </>

    
  );
}

 