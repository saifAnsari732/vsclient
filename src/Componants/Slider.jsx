// import React, { useState } from "react";
// import { Carousel, IconButton } from "@material-tailwind/react";
// import Header from "../Componants/Header/Header";


// import incm from './slider-img/incm-girl.png'
// import aadhr from './slider-img/aadhar.png'
// import pan from './slider-img/pan.png'
// import photost from './slider-img/photo-st.png'
// import printer from './slider-img/printer.png'
// import schol from './slider-img/schol-girl.png'


//  const Slider = () => {
//   const images = [
//     incm,
//     aadhr,"saif",
//     pan,
//     photost,
//     printer,
//     schol





    
    
// ];

//  const [currentIndex, setCurrentIndex] = useState(0);
//  const [clr,setClr]=useState('#a6df79')
    

//   const prevSlide = () => {
    
//     setClr('#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    
//   };

//   const nextSlide = () => {
//     setClr('#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  
//   };
//   return (
//     <div className=" mx-auto lg:w-full relative bg-gradient-to-r from-[#0b201e]  to-[#000000] pb-10 lg:pb-0">
//   <h2 className=" bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text text-2xl font-serif ml-20 font-black py-3 ">Offer For You</h2>
//         <div style={{backgroundColor:clr}} className='h-[180px] flex justify-start text-white lg:justify-center ml-5'>
       
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="rounded-[50px] w-[180px]   md:w-[800px]  lg:h-[250px] "
//         />
//         <h2 className="text-black">INCOME CERTIFICATE OFFERS</h2>
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-37 top-3/3 transform -translate-y-1/2 bg-black bg-opacity-50   rounded-3xl text-white hover:bg-opacity-75"
//         aria-label="Previous Slide"
//       >
//        <FaArrowAltCircleLeft className="text-2xl bg-black "/>
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-37 top-3/3 transform -translate-y-1/2 bg-opacity-50 p-2 rounded-l text-white hover:bg-opacity-75"
//         aria-label="Next Slide"
//       >
//        <FaArrowAltCircleRight className="text-2xl bg-black "/>
//       </button>
//     </div>
//   )
// }

// export default Slider


import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import photost from './slider-img/photo-st.png';
import printer from './slider-img/printer.png';
import schol from './slider-img/schol-girl.png';
import offer from './Video/best-offer.mp4'
import dis10 from './Video/sales.mp4'
import dis2 from './Video/sale.mp4'

const slides = [
  {
    image: photost,
    title: "Click And Take Photo 2 Minut",
    video: offer
  },
  {
    image: printer,
    title: "PDF PRINT / PHOTO COPY....",
      video:dis2
  },
  {
    image: schol,
    title: "Technology Time    SCHOLARSHIP",
   
    video:dis10
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div style={{ maxWidth: 1550, margin: "0 auto", position: "relative" }}>
      <div className=" flex justify-between bg-gradient-to-br from-[#1a7e70]  to-[#967896] lg:h-[250px] ">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className=""
          style={{ width: "45%",objectFit:"contain",marginRight:20 }}
        />
        <h2 className="mt-4 mr-3 text-[23px] lg:text-4xl lg:mr-14">{slides[current].title}</h2>
        {/* <p className="mt-4 mr-6">{slides[current].text}</p> */}
        <button className="absolute top-22 right-30 sm:py-1 lg:top-36 lg:right-2/5  bg-orange-300 font-semibold text-[20px] px-5 rounded-4xl   ">
        Click
        </button>
        <video className="h-18 w-14 rounded-full lg:h-[160px] lg:mr-11 lg:top-32 lg:rounded-4xl"  autoPlay loop muted src={slides[current].video}></video>
      </div>
      <button
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)"
        }}
        onClick={prevSlide}
      >
      <FaArrowAltCircleLeft className="absolute lg:top-32 lg:left-96 top-17 left-39 text-2xl text-white"/>
      </button>
      <button
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)"
        }}
        onClick={nextSlide}
      >
       <FaArrowAltCircleRight className="absolute lg:top-32 top-17 lg:right-80 right-48 text-2xl text-white"/>
      </button>
    </div>
  );
};

export default Slider;


