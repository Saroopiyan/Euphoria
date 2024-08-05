import React from "react";
import styled from "styled-components";

const Brands = () => {
  const brands = [
    {
      id: 1,
      img: "../../../../assets/images/nike.jpg",
    },
    {
      id: 2,
      img: "../../../../assets/images/hm.jpg",
    },
    {
      id: 3,
      img: "../../../../assets/images/levis.jpg",
    },
    {
      id: 4,
      img: "../../../../assets/images/USPA.jpg",
    },
    {
      id: 5,
      img: "../../../../assets/images/puma.jpg",
    },
  ];
  return (
    <>
      <Wrapper>
        <MainContainer>
          <Heading>Top Brands Deal</Heading>
          <SubHeading>
            Up To <Spans>60% </Spans>off on brands
          </SubHeading>
          <BrandContainer>
            {brands.map((item) => (
              <ImageContainer key={item.id}>
                <Image src={item.img} alt="" />
              </ImageContainer>
            ))}
          </BrandContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Brands;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  background-color: #3c4242;
  border-radius: 12px;
  padding: 43px 0;
`;
const Heading = styled.h3`
  font-size: 40px;
  font-family: "poppinsbold";
  color: #ffffff;
  margin: 0;
`;
const SubHeading = styled.p`
  color: #ffffff;
  font-family: "poppinsregular";
  margin-bottom: 60px;
  font-size: 16px;
`;
const Spans = styled.span`
  color: #fbd103;
  font-family: "poppinsbold";
`;
const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;
const ImageContainer = styled.div`
  width: 180px;
  height: 85px;
  padding: 8px 10px;
  background-color: white;
  border-radius: 12px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
