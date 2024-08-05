import React from "react";
import styled from "styled-components";

const Related = () => {
  const relatedProducts = [
    {
      id: 1,
      name: "High Coziness",
      type: "Low Price",
      img: require("../../../../assets/images/bg-2.jpg"),
    },
    {
      id: 2,
      name: "Breezy Summer Style",
      type: "Beyoung Presents",
      img: require("../../../../assets/images/bg-3.jpg"),
    },
  ];

  return (
    <Wrapper>
      <MainContainer>
        {relatedProducts.map((product) => (
          <Container
            key={product.id}
            style={{
              backgroundImage: `url(${product.img})`,
            }}
          >
            <ItemContainer>
              <Text>{product.type}</Text>
              <Heading>{product.name}</Heading>
              <Offer>UPTO 50% OFF</Offer>
              <Explore>Explore Items</Explore>
            </ItemContainer>
          </Container>
        ))}
      </MainContainer>
    </Wrapper>
  );
};

export default Related;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 48.5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 56rem;
  height: 328px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;
const ItemContainer = styled.div`
  padding: 0 30px;
  margin-top: 40px;
`;

const Text = styled.h5`
  font-family: "poppinsbold";
  font-size: 16px;
  color: #ffffff;
  margin: 29px 0 0 0;
`;

const Heading = styled.h3`
  font-family: "poppinsbold";
  font-size: 40px;
  color: #ffffff;
  width: 70%;
  margin: 15px 0 15px 0;
  line-height: 45.1px;
`;

const Offer = styled.span`
  font-family: "poppinsregular";
  color: #ffffff;
  font-size: 15px;
`;

const Explore = styled.h5`
  text-decoration: underline;
  font-family: "poppinsregular";
  color: #ffffff;
  font-size: 18px;
  margin: 20px 0 0 0;
  text-underline-offset: 5px;
  cursor: pointer;
`;
