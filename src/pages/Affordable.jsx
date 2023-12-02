import React, { useRef, useState } from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';


import { Link}  from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';




// import required modules
import {   Autoplay, FreeMode, Pagination,} from 'swiper/modules';



export default function Affordable() {
  const data = [
    {
      image: "./Images/img2.jpg",
      heading: "Light And Modern Apartment",
      dollar: "$34533",
      paths: { path: "/" },
    },

    {
      image: "./Images/img3.jpg",
      heading: "Light And Modern Apartment",
      dollar: "$15533",
      paths: { path: "/" },
    },

    {
      image: "./Images/img4.jpg",
      heading: "Complex",
      dollar: "$43533",
      paths: { path: "/" },
    },
    {
      image: "./Images/img1.jpg",
      heading: "Light And Modern Apartment",
      dollar: "$23456",
      paths: { path: "/" },
    },

    {
      image: "./Images/img5.jpg",
      heading: "Design Apartment",
      dollar: "$32156",
      paths: { path: "/" },
    },

    {
      image: "./Images/img6.jpg",
      heading: "Complex",
      dollar: "$43256",
      paths: { path: "/" },
    },
  ];
  const breakpoint = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
    
  return (
    <>
    <h1 className="lg:text-5xl font-bold text-xl py-8 lg:mt-10  bg-slate-300 items-center text-center">Affordable</h1>
          <h2 className="lg:my-8 lg:text-2xl text-lg py-4 items-center text-center">Sub heading</h2>

          <div className="px-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination]}
        breakpoints={breakpoint}
        className="mySwiper"
      >
        
         <article className="grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-sm:p-5">
        {data.map((val, index) => {
          return (
            <SwiperSlide key={index}>
            <div className="card mb-4 md:mb-0" >
              <span className="absolute text-white bg-lime-500 rounded my-3 mx-3 border-2">
                <label className="px-1">FEATURES</label>
              </span>
              <span className="absolute end-3 rounded my-3 bg-zinc-500 text-white">
                <label className="px-1">FOR SALES</label>
              </span>
              <Link to="">
                <img src={val.image} alt="" />
              </Link>
              <div className="card-body space-y-2 p-3">
                <h3 className="text-2xl">{val.heading}</h3>
                <span className="flex">
                  <p className="text-cyan-500 text-1xl">{val.dollar}</p>
                  <p style={{ marginLeft: "160px" }}>
                    <i className="fa-solid fa-chair ml-5"></i> 4
                    <span>
                      <i className="fa-solid fa-shower ml-5"></i> 4
                    </span>
                    <span>
                      <i className="fa-solid fa-ruler-triangle ml-5"></i> 3000
                    </span>
                  </p>
                </span>
              </div>
            </div>
            </SwiperSlide>
     
          );
        })}
      </article>
   
    
      </Swiper>
     </div>

      <div className="container-fluid py-24 text-center">
    <center>
    <div className="row">
      <div className="col col-lg-1 col-md-1 col-12 max-sm:mt-2"></div>       
      <div className="col col-lg-2 col-md-2 col-12 max-sm:mt-2">       
        <img src="./Images/footer-card.jpg" alt="" />
      </div>
      <div className="col col-lg-2 col-md-2 col-12 max-sm:mt-5">
        <img src="./Images/footer-card3.jpg" alt="" />
      </div>
      <div className="col col-lg-2 col-md-2 col-12 max-sm:mt-5">
      <img src="./Images/footer-card4.jpg" alt="" />
      </div>
      <div className="col col-lg-2 col-md-2 col-12 max-sm:mt-5">
      <img src="./Images/footer-card5.jpg" alt="" />
      </div>
      <div className="col col-lg-2 col-md-2 col-12 max-sm:mt-5">
      <img src="./Images/footer-card5.jpg" alt="" />
      </div>
    </div>
    </center>
  </div>
    </>
  );
}



    
