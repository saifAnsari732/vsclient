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
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import photost from './slider-img/photo-st.png';
import printer from './slider-img/printer.png';
import schol from './slider-img/schol-girl.png';
import offer from './Video/best-offer.mp4'
import dis10 from './Video/sales.mp4'
import dis2 from './Video/sale.mp4'
import '../assets/Slider.css';

const slides = [
  {
    image: photost,
    title: "Click And Take Photo 2 Minut",
    video: offer
  },
  {
    image: printer,
    title: "PDF PRINT / PHOTO COPY....",
    video: dis2
  },
  {
    image: schol,
    title: "Technology Time SCHOLARSHIP",
    video: dis10
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
    <div className="slider-container">
      <div className="slider-content">
        
        {/* Image Section - Left Side */}
        <div className="image-section ">
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="slider-image"
          />
        </div>

        {/* Content Section - Middle */}
        <div className="content-section">
          <h2 className="slider-titl    mt-2.5 text-2xl">{slides[current].title}</h2>
          <button className="action-butto bg-amber-500  py-1 px-6 rounded-4xl">
            Click
          </button>
        </div>

        {/* Video Section - Right Side */}
        <div className="video-section">
          <video 
            className="video-element" 
            autoPlay 
            loop 
            muted 
            src={slides[current].video}
          ></video>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button className="nav-button prev-button" onClick={prevSlide}>
        <FaArrowAltCircleLeft className="nav-icon" />
      </button>
      <button className="nav-button next-button" onClick={nextSlide}>
        <FaArrowAltCircleRight className="nav-icon" />
      </button>
    </div>
  );
};

export default Slider;