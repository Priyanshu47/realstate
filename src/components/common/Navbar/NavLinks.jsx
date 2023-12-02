import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const [count, setcount] = useState(0);

  const [type, setType] = useState(false);

  const typeClick = () =>{
    if (count === 0)
    {
      setType(true);
      count+1;
    }else if (count===1) {
      setType(false);
      count-1;
    }

  }

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="z-50 text-left md:cursor-pointer group">
            <h1
              // className="relative flex-between bg-transparent p-3 before:rounded transition-colors py-7 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:transition-transform before:duration-300 before:content-['']  before:hover:scale-x-100 flex justify-between items-center text-black md:pr-0 pr-5 group"
              className="relative hover:text-white text-black flex-between bg-transparent p-3 before:rounded transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100 "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading(""); 
              
              }}
            >
              {link.name}
              <span className="md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                 
                ></ion-icon>
              </span>
              <span className="md:ml-2  md:block hidden group-hover:rotate-180">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white rounded w-52 shadow-lg p-5 grid grid-cols-1 gap-10">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                     
                        
                        {mysublinks.sublink.map((slink, index) => (
                          <li key={index} className="text-sm text-gray-600 my-2.5">
                            <Link 
                              className="hover:bg-blue-500 rounded hover:px-10 hover:text-white transition-all duration-300 p-2"
                              to={slink.link} 
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      <div className="dropdown inline-block relative text-sm text-gray-600 w-full ">
    <span className="rounded w-40 inline-flex hover:bg-blue-500 hover:px-12 hover:text-white transition-all duration-300 p-2">
      Type+ 
    </span>
    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 ml-40 -mt-10">
      <li className=""><Link className="rounded-t py-2 px-4 block whitespace-no-wrap hover:bg-blue-500 hover:px-10 hover:text-white transition-all duration-300 p-2"
      to="/">
        3BHK
      </Link></li>
      <li className=""><Link className="  py-2 px-4 block whitespace-no-wrap hover:bg-blue-500 hover:px-10 hover:text-white transition-all duration-300 p-2"
      To="/" >
        4BHK
        </Link></li>
    </ul>
  </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => ( 
              <div key={index} className="" > 
                <div>
                  {slinks.sublink.map((slink, ind) => (
                    <li key={ind} className="py-3 pl-14">
                      <Link  to={slink.link}>{slink.name}</Link>
                    </li>
                   
                  ))}
                </div>
                <div className="py-3 pl-14 " onClick={typeClick}>Type +
                {/* <span className={`${type==="true"}`}> */}
                  {
                    type===true ? (
                      <>
                  <li className="py-3 pl-14"><Link  to="/">3BHK</Link></li>
                  <li className="py-3 pl-14"><Link  to="/">4BHK</Link></li>
                  </>
                  ) :null
                  }
                  {/* </span> */}
                </div>
              </div>
            ))}
            
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
