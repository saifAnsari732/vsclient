import React from 'react'
import vs from '../../Image/vs.jpg'
export const Customheader = () => {
     // GET LOCALSTORAGE
      const name = localStorage.getItem("name")
  return (
    <header className="bg-gradient-to-tr from-[#000000] via-[#150050] to-[#3f0071]  text-white px-8 py-5 flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center gap-2">
             <img src={vs} className='h-10 rounded-full' />
            <span className="text-xl font-bold">vsStart</span>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-green-400 transition">Home</a>
            <a href="#" className="hover:text-green-400 transition">About</a>
            <a href="#" className="hover:text-green-400 transition">Pages</a>
            <a href="#" className="hover:text-green-400 transition">Shop</a>
            <a href="#" className="hover:text-green-400 transition">Blog</a>
            <a href="#" className="hover:text-green-400 transition">Contact</a>
          </nav>
          {/* Support Button */}
           <h2 className='text-2xl font-semibold font-serif'>🙆🏻{name}</h2>
        </header>
  )
}
