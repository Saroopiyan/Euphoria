import React from "react";
import styled from "styled-components";

const NewArrival = () => {
  const newArrivals = [
    {
      id: 1,
      img: require("../../../../assets/images/img-1.jpg"),
      description: "Knitted Joggers",
    },
    {
      id: 2,
      img: require("../../../../assets/images/img-3.jpg"),
      description: "Full Sleeve",
    },
    {
      id: 2,
      img: require("../../../../assets/images/img-4.jpg"),
      description: "Active T-Shirts",
    },
    {
      id: 2,
      img: require("../../../../assets/images/img-2.jpg"),
      description: "Urban Shirts",
    },
  ];
  return (
    <>
      <Wrapper>
        <MainContainer>
          <Container>
            <Bullet></Bullet>
            <Heading>New Arrival</Heading>
          </Container>
          <ArrivalsContainer>
            {newArrivals.map((item) => (
              <ContentContainer>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <Description>{item.description}</Description>
              </ContentContainer>
            ))}
          </ArrivalsContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default NewArrival;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  padding: 10px 0;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Bullet = styled.div`
  background-color: #8a33fd;
  width: 6px;
  height: 30px;
  border-radius: 10px;
  margin-right: 15px;
`;
const Heading = styled.h3`
  font-size: 32px;
  font-family: "poppinsregular";
  font-weight: 600;
  margin: 6px 0 0 0;
`;
const ArrivalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96.5%;
  margin: 0 auto;
  padding-top: 50px;
`;
const ContentContainer = styled.div``;
const ImgContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Description = styled.p`
  display: flex;
  align-items: flex-end;
  font-family: "poppinsregular";
  font-size: 16px;
  font-weight: 700;
`;
