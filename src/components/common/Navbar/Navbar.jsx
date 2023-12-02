import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import NavLinks2 from "./NavLink2";
import { styled } from "styled-components";


import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () =>{
    setOpen(false)
  }
 
  
  return (
    <NavWrapper>
      <nav className="z-50 py-2 navlink uppercase shadow-lg relative w-full">
        <div className="flex items-center font-medium justify-between px-10">
          <div className="z-50 md:w-auto w-full flex justify-between">
            <div className="flex items-center  bg-transparent">
              <Link to="/">
                Logo
              </Link>
            </div>
            {/* <div
              className="text-3xl md:hidden p-5"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div> */}
            <div
              className="text-3xl md:hidden mr-5 mt-2"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineMenu
                className="text-gray-300"
                name={`${open ? "close" : "menu"}`}
              />
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-3 tracking-widest">
            <li>
              <Link 
                to="/" 
                // className="py-7 px-3 inline-block text-black"
                className="relative text-black flex-between bg-transparent p-3 before:rounded transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
             
              >
                Home
              </Link>
            </li>


            <NavLinks2/>

            
            <li>
              <Link 
                to="/property" 
                // className="py-7 px-3 inline-block text-black"
                className="relative text-black flex-between bg-transparent p-3 before:rounded transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
             
              >
                Property
              </Link>
            </li>
            
            <NavLinks />
            <li>
              <Link 
                to="/" 
                // className="py-7 px-3 inline-block text-black"
                className="relative text-black flex-between bg-transparent p-3 before:rounded transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500  before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
             
              >
                Villa
              </Link>
            </li>
            <li>
              <Link
                to="/"
                // className="py-7 px-3 inline-block text-black"
                className="relative text-black flex-between bg-transparent p-3 before:rounded transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              >
                Featured
              </Link>
            </li>  
            <li>
              <Link
                to="/contact"
                // className="py-7 px-3 inline-block text-black"
                className="relative text-black flex-between bg-transparent p-3 before:rounded transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              >
                Contact Us
              </Link>
            </li>          
            
            
          </ul>
         
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto cursor-pointer bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link onClick={closeMenu} to="/" className="py-4 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks2 />
            <li>
              <Link onClick={closeMenu} to="/property" className="py-4 px-3 inline-block">
              Property
              </Link>
            </li>
            
            <NavLinks/>

            <li>
              <Link onClick={closeMenu} to="/" className="py-4 px-3 inline-block">
              Villa
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/" className="py-4 px-3 inline-block">
              Featured
              </Link>
            </li>



            <div className="py-5">
            
            </div>
          
          </ul>
        </div>
      </nav>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  .navlink {
    background: white ;
    opacity: 0.9;
  }
  @media screen and (max-width: 768px) {
    .navlink {
      background: white;

      // opacity: 0.9;
    }
  }
`;
export default Navbar;
