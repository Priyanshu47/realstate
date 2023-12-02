import React from 'react'
import {FooterCard} from "../components/FooterCard";
import Slider from "../components/Slider";


const Luxury = () => {
  
  return (
    <>
    <h1 className="lg:text-5xl text-xl font-bold py-8 lg:mt-10  bg-slate-300 items-center text-center">Luxury</h1>
    <div className="lg:my-8 lg:text-2xl text-lg py-4 items-center text-center"> Heading</div>
    
    <Slider />
    
    <FooterCard />
    </>
  )
}

export default Luxury