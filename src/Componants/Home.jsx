import React from 'react';
// import img from '../Image/csc.png'
import imglogo from '../Image/logo.png'
import { useNavigate } from 'react-router-dom';
import Footer from './Header/Footer';
import Header from './Header/Header';
export default function HomePage() {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header/>
      {/* <header className="flex justify-between items-center px-8 py-5">
        <div className="flex items-center gap-2">
         
          <div className="h-8 w-8 bg-gradient-to-r from-purple-400 to-green-400 rounded"></div>
          <span className="text-xl font-bold">vsStart</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="hover:text-green-400 transition">Home</a>
          <a href="#" className="hover:text-green-400 transition">About</a>
          <a href="#" className="hover:text-green-400 transition">Pages</a>
          <a href="#" className="hover:text-green-400 transition">Shop</a>
          <a href="#" className="hover:text-green-400 transition">Blog</a>
          <a href="#" className="hover:text-green-400 transition">Contact</a>
        </nav>
        <button className="bg-purple-400 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-500 transition">
          SUPPORT
        </button>
      </header> */}

      {/* Hero Section */}
      
      <section className="flex flex-col md:flex-row items-center justify-between lg:px-18   px-9 mt-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold font-serif mb-6 leading-tight">HOW CAN WE HELP YOU</h1>
          <p className="text-gray-300 mb-8">
            Government to Citizen (G2C) Services – PAN card, Aadhaar services, voter ID, driving license, birth/death certificate, domicile, caste certificate, income certificate.

              Banking & Financial Services – Account opening, money transfer, insurance, pension schemes, loans.
          </p>
          <button onClick={() => navigate('/Login')} className="bg-green-500 px-7 py-3 rounded-lg font-bold shadow hover:bg-green-600 transition">
            GET STARTED
          </button>
        </div>
        <div className="mt-14 md:mt-10 md:ml-12 w-full md:w-[500px]  flex-shrink-0  ">
          <img src={imglogo} alt="Team" className="rounded-lg  object-cover lg:h-[600px] " />
        </div>
        {/* Side Image */}
      </section>

      {/* Features */}
      <section className="flex flex-col md:flex-row gap-6 px-8 ">
        <div className="flex-1 bg-gray-800 rounded-lg p-8 flex flex-col items-center">
          <div className="bg-green-400 rounded-full p-3 mb-4">
            {/* Icon (Example) */}
            <svg width="24" height="24" fill="none" stroke="currentColor" className="text-white">
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h3 className="font-bold mb-2">Analyze Your Data</h3>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet elit, adipiscing sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 rounded-lg p-8 flex flex-col items-center">
          <div className="bg-pink-400 rounded-full p-3 mb-4">
            <svg width="24" height="24" fill="none" stroke="currentColor" className="text-white">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
            </svg>
          </div>
          <h3 className="font-bold mb-2">Customized Plan</h3>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet elit, adipiscing sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 rounded-lg p-8 flex flex-col items-center">
          <div className="bg-purple-400 rounded-full p-3 mb-4">
            <svg width="24" height="24" fill="none" stroke="currentColor" className="text-white">
              <path d="M12 2v20M2 12h20"/>
            </svg>
          </div>
          <h3 className="font-bold mb-2">Implement Solution</h3>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet elit, adipiscing sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}
