import React from "react";
import { styled } from "styled-components";

export const ExploreProperty = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row text-center">
        <h1 className="lg:text-4xl text-lg font-bold p-4">Explore Our Properties</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
          sollicitudin
        </p>
      </div>
      <PropertyWrapper>
        <div className="row mt-4">
          <div className="col col-lg-3 col-md-2 col-12 property-one text-white px-10">
            <p className="mt-4">12 Propertry</p>
            <h2>Apartment</h2>
            <button style={{ marginTop: "260px" }} className="">
              More Details
            </button>
          </div>
          <div className="col col-lg-3 col-md-2 col-12 text-white px-10 property-two">
            <p className="mt-4">12 Propertry</p>
            <h2>Apartment</h2>
            <button style={{ marginTop: "260px" }} className="">
              More Details
            </button>
          </div>
          <div className="col col-lg-3 col-md-2 col-12 text-white px-10 property-three">
            <p className="mt-4">12 Propertry</p>
            <h2>Apartment</h2>
            <button style={{ marginTop: "260px" }} className="">
              More Details
            </button>
          </div>
          <div className="col col-lg-3 col-md-2 col-12 text-white px-10 property-four">
            <p className="mt-4">12 Propertry</p>
            <h2>Apartment</h2>
            <button style={{ marginTop: "260px" }} className="">
              More Details
            </button>
          </div>
        </div>
      </PropertyWrapper>
    </div>
  );
};

const PropertyWrapper = styled.div`
  .property-one {
    height: 400px;
    background-image: url("/Images/perp1.jpg");
    background-size: 100% 100%;
    border: 10px solid #ffffff;
    overflow: hidden;
    opacity: 0.8;
    transition: 0.3s all;
  }
  .property-one:hover {
    opacity: 1;
    transition: 0.3s all;
    cursor: pointer;
  }
  .property-two {
    height: 400px;
    background-image: url("/Images/prop2.jpg");
    border: 10px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.8;
    transition: 0.3s all;
  }
  .property-two:hover {
    opacity: 1;
    transition: 0.3s all;
    cursor: pointer;
  }
  .property-three {
    height: 400px;
    background-image: url("/Images/prop3.jpg");
    border: 10px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.8;
    transition: 0.3s all;
  }
  .property-three:hover {
    opacity: 1;
    transition: 0.3s all;
    cursor: pointer;
  }
  .property-four {
    background-image: url("/Images/prop4.jpg");
    border: 10px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.8;
    transition: 0.3s all;
  }
  .property-four:hover {
    opacity: 1;
    transition: 0.3s all;
    cursor: pointer;
  }
  .property-five {
    height: 400px;
    background-image: url("/Images/prop5.jpg");
    border: 10px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.8;
    transition: 0.3s all;
  }
  .property-five:hover {
    opacity: 1;
    transition: 0.3s all;
    cursor: pointer;
  }
  .property-six {
    height: 400px;
    background-image: url("/Images/prop6.jpg");
    border: 10px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.8;
    transition: 0.3s all;
  }
  .property-six:hover {
    opacity: 1;
    transition: 0.3s all;
    cursor: pointer;
  }
`;
