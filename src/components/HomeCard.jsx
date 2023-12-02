// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HomeCard = () => {
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
  return (
    <ServicesWrapper className="drop-shadow-md w-100">
      <div className="heading text-center  py-20 space-y-4">
        <h2 className="lg:text-4xl text-xl font-bold">Discover Our Best Deals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
          sollicitudin
        </p>
      </div>
      <article className="grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-sm:p-5">
        {data.map((val, index) => {
          return (
            <div className="card mb-4 md:mb-0" key={index}>
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
          );
        })}
      </article>
    </ServicesWrapper>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const ServicesWrapper = styled.section`
  color: var(--whiteColor);
  background-size: cover;
  background-position: center;

  article {
    .card {
      background: var(--grayColor);
      position: relative;
      border-radius: 5px;
      &::before {
        content: "";
        position: absolute;
        top: -5%;
        left: 3%;
        height: 100%;
        border: 1px solid var(--whiteColor);
        border-radius: 5px;
      }
      h3 {
        color: var(--primaryColor);
        font-weight: 600;
      }
    }
  }
`;

export default HomeCard;
