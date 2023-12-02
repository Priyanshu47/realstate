import React from "react";
import { HomeAnimation } from "./HomeAnimation";
import HomeCard from "./HomeCard";
import { EnquiryForm } from "./EnquiryForm";
import { ExploreProperty } from "./ExploreProperty";
import { PerfectChoice } from "./PerfectChoice";
import { FooterCard } from "./FooterCard";


export const Home = () => {
  return (
    <>
      <HomeAnimation />
      <HomeCard />
      <EnquiryForm />
      <ExploreProperty />
      <PerfectChoice />
      <FooterCard />
    </>
  );
};
