import React from "react";
import styled from "styled-components";
import Header from "../../../includes/Header";
import Spotlights from "./Spotlights";
import Related from "./Related";
import NewArrival from "./NewArrival";
import Fashion from "./Fashion";
import MensCategory from "./MensCategory";
import WomensCategory from "./WomensCategory";
import Brands from "./Brands";

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Spotlights />
        <Related />
        <NewArrival />
        <Fashion />
        <MensCategory />
        <WomensCategory />
        <Brands />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div``;
