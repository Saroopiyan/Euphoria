import React from "react";
import styled from "styled-components";
import image1 from "../../../../assets/images/bg-4.jpg";
import image2 from "../../../../assets/images/bg-5.jpg";

const Fashion = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <LeftContainer>
            <ContentContainer>
              <Heading>WE MADE YOUR EVERYDAY FASHION BETTER!</Heading>
              <Para>
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </Para>
              <ButtonContainer>
                <Button>shop Now</Button>
              </ButtonContainer>
            </ContentContainer>
          </LeftContainer>
          <RightContainer></RightContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Fashion;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  display: flex;
  padding: 50px 0;
  margin-top: 30px;
  margin-top: 20px;
`;

const LeftContainer = styled.div`
  width: 50%;
  background-image: url(${image1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  height: 639px;

`;
const RightContainer = styled.div`
  width: 50%;
  background-image: url(${image2});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 639px;
`;
const ContentContainer = styled.div`
  padding: 100px 85px 0;
  text-align: left;
`;
const Heading = styled.h3`
  font-size: 34px;
  color: #ffffff;
  font-family: "poppinsregular";
  font-weight: 800;
  line-height: 50px;
  margin: 70px 0 27px 0;
`;
const Para = styled.p`
  font-size: 16px;
  color: #ffffff;
  width: 78%;
  font-family: "poppinsregular";
  line-height: 24px;
  margin-bottom: 45px;
`;
const ButtonContainer = styled.div`
  padding: 12px 44px;
  border-radius: 8px;
  background-color: #ffffff;
  display: inline-block;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;
const Button = styled.span`
  font-size: 14px;
  font-family: "poppinsmedium";
  color: #3c4242;
`;
