import React from "react";
import styled from "styled-components";
import Header from "../../../includes/Header";
import Footer from "../../../includes/Footer";
import SinglePage from "./SinglePage";

const SingleMainPage = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <SinglePage />
        <Footer />
      </MainContainer>
    </>
  );
};

export default SingleMainPage;

const MainContainer = styled.div``;
