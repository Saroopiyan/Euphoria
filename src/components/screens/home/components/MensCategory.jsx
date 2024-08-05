import React from "react";
import styled from "styled-components";
import products from "../../../helpers/Products.json";

const MensCategory = () => {
  const menProducts = products.products?.Men;
  return (
    <>
      <Wrapper>
        <MainContainer>
          <Container>
            <Bullet></Bullet>
            <Heading>Categories For Men</Heading>
          </Container>
          <ProductsContainer>
            {menProducts.map((item) => (
              <Products key={item.id}>
                <ImageContainer>
                  <Image src={item.image} />
                </ImageContainer>
                <Contents>
                  <Right>
                    <Category>{item.category}</Category>
                    <Text>Explore Now!</Text>
                  </Right>
                  <ArrowContainer>
                    <Arrow
                      src={
                        require("../../../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
                </Contents>
              </Products>
            ))}
          </ProductsContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default MensCategory;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div``;
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
  color: #3c4242;
  margin-top: 38px;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  padding: 30px 0;
`;
const Products = styled.div`
  cursor: pointer;
`;
const ImageContainer = styled.div`
  margin-bottom: 10px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Contents = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div``;
const ArrowContainer = styled.div`
  width: 15px;
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
`;

const Category = styled.p`
  font-size: 15px;
  font-family: "poppinsmedium";
  font-weight: 700;
  color: #2a2f2f;
  margin: 0;
  margin-bottom: 3px;
`;
const Text = styled.p`
  font-family: "poppinsregular";
  font-size: 12px;
  color: #7f7f7f;
  margin: 0;
`;
