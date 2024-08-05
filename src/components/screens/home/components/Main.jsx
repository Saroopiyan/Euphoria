import React from "react";
import styled from "styled-components";
import Header from "../../../helpers/Header";
import Spotlights from "./Spotlights";
import Related from "./Related";
import NewArrival from "./NewArrival";
import Fashion from "./Fashion";

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Spotlights />
        <Related />
        <NewArrival />
        <Fashion />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div``;
