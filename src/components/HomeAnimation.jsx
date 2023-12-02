import React from "react";
import styled from "styled-components";

export const HomeAnimation = () => {
  return (
    <AnimationWrapper>
      <div className="container-fluid mt-3">
        <div className="image-slider"></div>
      </div>
    </AnimationWrapper>
  );
};

const AnimationWrapper = styled.div`
  .image-slider {
    width: 100%;
    height: 550px;
    background-image: url("./img/img1.jpg");
    background-size: 100% 100%;
    animation: imageSlide 15s linear infinite;
  }
  @keyframes imageSlide {
    0% {
      background-image: url("./Images/img1.jpg");
    }
    25% {
      background-image: url("./Images/img2.jpg");
    }
    50% {
      background-image: url("./Images/img3.jpg");
    }
    75% {
      background-image: url("./Images/img4.jpg");
    }
    100% {
      background-image: url("./Images/img5.jpg");
    }
  }

  @media screen and (max-width:768px){
    .image-slider {
      width: 100%;
      height: 350px;
    }
  }
`;
