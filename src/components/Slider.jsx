import { Link}  from "react-router-dom";
import {useState } from "react";


export default function Slider() {
  const [show, setShow] = useState(3);
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

  
  const Moredata = () => {
    setShow(show+3)
  }
  
 

  return (
    <>
    <div className="px-5">
     
        
         <article className="grid grid-cols-3  max-sm:grid-cols-1 lg:px-24 gap-5 sm:gap-0 max-sm:p-2">
        {data.slice(0, show).map((val, index) => {
          return (
            <div key={index} className="card mb-4 md:mb-0" >
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
                  <p>
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
           
     
          );
        })}   
      </article>
   
      <div className="text-sm text-center ">
    <button onClick={Moredata} className="   p-2.5 bg-sky-400 rounded mt-2 text-white hover:bg-sky-600">
      Show More 
    </button>
    </div>
    
      </div>
    </>
  );
}