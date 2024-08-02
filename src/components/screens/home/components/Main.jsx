import React from "react";
import styled from "styled-components";
import Header from "../../../helpers/Header";
import Spotlights from "./Spotlights";
import Related from "./Related";

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Spotlights />
        <Related />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div``;
