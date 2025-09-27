import React, { useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Header from "../Componants/Header/Header";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import cast from '../Image/cst-crtf.png'
import upscl from '../Image/schol-slid.webp'
import demcl from '../Image/dmcil-crtf.png'
import incm from '../Image/incm.jpg'

export const Banking = () => {
  const images = [
   
    cast,
    upscl,
    demcl,
    incm
  
    
];

 const [currentIndex, setCurrentIndex] = useState(0);
 const [clr,setClr]=useState('#a6df79')
    

  const prevSlide = () => {
    
    setClr('#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
     console.log(clr);
  };

  const nextSlide = () => {
    setClr('#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  console.log(clr);
  };
  return (
    
<div className="max-w-lg mx-auto relative bg-gradient-to-r from-[#27786e]  to-[#024133]">
  {/* <Header/> */}
  <h2 className=" bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text text-2xl font-serif ml-20 font-black ">Offer For You</h2>
      <div className="overflow-hidden rounded-lg ">
        <div style={{backgroundColor:clr}} className='h-[160px]'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="rounded-[50px] w-full h-[159px]"
        />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-37 top-3/3 transform -translate-y-1/2 bg-black bg-opacity-50   rounded-3xl text-white hover:bg-opacity-75"
        aria-label="Previous Slide"
      >
       <FaArrowAltCircleLeft className="text-2xl bg-black "/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-37 top-3/3 transform -translate-y-1/2 bg-opacity-50 p-2 rounded-l text-white hover:bg-opacity-75"
        aria-label="Next Slide"
      >
       <FaArrowAltCircleRight className="text-2xl bg-black "/>
      </button>
    </div>

  );
};



