import React from "react";

export const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "rgb(36, 123, 211)" }}
        className="container-fluid text-white p-10 mt-5"
      >
        <div className="row">
          <div className="col col-lg-3 col-md-3 col-12">
            <h1 className="font-bold text-3xl">Discover</h1>
            <ul className="mt-8">
              <li className="py-2">
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#ffffff" }}
                ></i>
                Miami
              </li>
              <li className="py-2">
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#ffffff" }}
                ></i>
                Los Angeles
              </li>
              <li className="py-2">
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#ffffff" }}
                ></i>
                Chicago
              </li>
              <li className="py-2">
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#ffffff" }}
                ></i>
                New York
              </li>
            </ul>
          </div>
          <div className="col col-lg-3 col-md-3 col-12 max-sm:mt-10">
            <h1 className="font-bold text-2xl">Contact Us</h1>
            <ul className="mt-8">
              <li className="my-3">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "#ffffff" }}
                ></i>
                &nbsp;&nbsp;774 NE 84th St Miami, FL 33879
              </li>
              <li className="my-3">
                <i
                  className="fa-solid fa-phone"
                  style={{ color: "#ffffff" }}
                ></i>
                &nbsp;&nbsp;9999999999
              </li>
              <li className="my-3">
                <i
                  className="fa-solid fa-envelope"
                  style={{ color: "#ffffff" }}
                ></i>
                &nbsp;&nbsp;wirewings@gamil.com
              </li>
            </ul>
          </div>
          <div className="col col-lg-6 col-md-6 col-12">
            <h1 className="font-bold text-2xl max-sm:mt-6">News letter</h1>
            <p className="flex mt-2">
              <input
                type="email"
                className="w-18 form-control mt-3 w-50"
                placeholder="Enter your email"
              />
              <button className="py-2 mx-10 mt-3 rounded px-4 bg-sky-500 hover:bg-sky-600">
                Submit
              </button>
            </p>
            <p className="mt-4">
              Houzez is a premium WordPress theme for Designers & Real Estate
              Agents.
            </p>

            <div className="flex space-x-4 justify-center mt-16 max-sm:mt-10">
              <div className=" px-3 py-2 rounded-lg border-1 hover:cursor-pointer border-white hover:bg-white hover:text-black hover:duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="px-3 py-2 rounded-lg border-1 hover:cursor-pointer border-white hover:bg-white hover:text-black hover:duration-300">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="px-3 py-2 rounded-lg border-1 hover:cursor-pointer border-white hover:bg-white hover:text-black hover:duration-300">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(1, 31, 62)" }}
        className="py-3 w-full text-center text-white"
      >
        Copyright © 2023. Design By Wire Wings Pvt Ltd
      </div>
    </div>
  );
};
