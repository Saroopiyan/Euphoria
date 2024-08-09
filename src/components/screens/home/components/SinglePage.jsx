import React from "react";
import styled from "styled-components";

const SinglePage = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <LeftContainer>
            <LeftDiv>
              <ImgDiv>
                <SubImgContainer>
                  <SubImg
                    src={require("../../../../assets/images/img-25.jpg")}
                  />
                </SubImgContainer>
                <SubImgContainer>
                  <SubImg
                    src={require("../../../../assets/images/sub.svg").default}
                  />
                </SubImgContainer>
                <SubImgContainer>
                  <SubImg
                    src={require("../../../../assets/images/img-26.jpg")}
                  />
                </SubImgContainer>
              </ImgDiv>
            </LeftDiv>
            <RightDiv>
              <ImageContainer>
                <Image
                  src={
                    require("../../../../assets/images/Rectangle13.svg").default
                  }
                />
              </ImageContainer>
            </RightDiv>
          </LeftContainer>
          <RightContainer>
            <Categories>
              <CategoryContent>Shop</CategoryContent>
              <RightArrowContainer>
                <ArrowImage
                  src={
                    require("../../../../assets/images/right-arrow-light.svg")
                      .default
                  }
                />
              </RightArrowContainer>
              <CategoryContent>Women</CategoryContent>
              <RightArrowContainer>
                <ArrowImage
                  src={
                    require("../../../../assets/images/right-arrow-light.svg")
                      .default
                  }
                />
              </RightArrowContainer>
              <CategoryContent>Top</CategoryContent>
            </Categories>
            <Heading>Raven Hoodie With Black colored Design</Heading>
            <RatingDiv>
              <RatingImgContainer>
                <RatingImg
                  src={require("../../../../assets/images/review5.svg").default}
                />
              </RatingImgContainer>
              <RatingSpan>3.5</RatingSpan>
              <CommentImgContainer>
                <CommentImg
                  src={require("../../../../assets/images/message.svg").default}
                />
              </CommentImgContainer>
              <CommentSpan>120 comment</CommentSpan>
            </RatingDiv>
            <SizeContainer>
              <SizeSubDiv>
                <SelectSize>Select Size</SelectSize>
                <SelectGuide>SelectGuide</SelectGuide>
                <RightArrowDiv>
                  <RightArrow
                    src={
                      require("../../../../assets/images/arrow-right.svg")
                        .default
                    }
                  />
                </RightArrowDiv>
              </SizeSubDiv>
              <SelectionSize>
                <Sizes>
                  <Size>XS</Size>
                </Sizes>
                <Sizes>
                  <Size>S</Size>
                </Sizes>
                <Sizes>
                  <Size>M</Size>
                </Sizes>
                <Sizes>
                  <Size>L</Size>
                </Sizes>
                <Sizes>
                  <Size>XL</Size>
                </Sizes>
              </SelectionSize>
            </SizeContainer>
            <ColorsContainer>
              <ColorsAvailableText>Colours Available</ColorsAvailableText>
              <Colors>
                <BlackContainer>
                  <Black></Black>
                </BlackContainer>
                <BlackContainer>
                  <Yellow></Yellow>
                </BlackContainer>
                <BlackContainer>
                  <Pink></Pink>
                </BlackContainer>
                <BlackContainer>
                  <Brown></Brown>
                </BlackContainer>
              </Colors>
            </ColorsContainer>
            <BuyContainer>
              <AddCartDiv>
                <CartContainer>
                  <CartImgContainer>
                    <CartImg
                      src={
                        require("../../../../assets/images/cart-1.svg").default
                      }
                    />
                  </CartImgContainer>
                  <CartText>Add to cart</CartText>
                </CartContainer>
              </AddCartDiv>
              <PriceDiv>
                <Price>$63.00</Price>
              </PriceDiv>
            </BuyContainer>
          </RightContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default SinglePage;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
  display: flex;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const LeftDiv = styled.div`
  width: 20%;
`;
const ImgDiv = styled.div`
  width: 20%;
`;
const SubImgContainer = styled.div`
  width: 68px;
  height: 68px;
  margin-bottom: 22px;
`;
const SubImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
`;
const RightDiv = styled.div``;
const ImageContainer = styled.div`
  width: 520px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const RightContainer = styled.div`
  width: 45%;
  padding: 30px 70px 0;
  text-align: left;
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const CategoryContent = styled.span`
  color: #807d7e;
  font-size: 14px;
  font-family: "poppinsregular";
`;
const RightArrowContainer = styled.div``;
const ArrowImage = styled.img`
  display: block;
  width: 100%;
`;
const Heading = styled.h3`
  font-size: 34px;
  color: #3c4242;
  font-family: "poppinsmedium";
  line-height: 47px;
  width: 393px;
`;
const RatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const RatingImgContainer = styled.div`
  width: 30%;
`;
const RatingImg = styled.img`
  display: block;
  width: 100%;
`;
const RatingSpan = styled.span`
  font-family: "poppinsregular";
  font-size: 15px;
  color: #807d7e;
`;
const CommentImgContainer = styled.div`
  width: 18px;
`;
const CommentImg = styled.img`
  display: block;
  width: 100%;
`;
const CommentSpan = styled.span`
  font-family: "poppinsregular";
  font-size: 15px;
  color: #807d7e;
`;
const SizeContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 25px;
`;
const SizeSubDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
const SelectSize = styled.span`
  font: 15px;
  color: #807d7e;
  margin-right: 20px;
  font-family: "poppinsregular";
  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;
const SelectGuide = styled.span`
  font: 15px;
  color: #807d7e;
  margin-right: 15px;
  font-family: "poppinsregular";
  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;
const RightArrowDiv = styled.div`
  width: 14px;
`;
const RightArrow = styled.img`
  display: block;
  width: 100%;
`;
const SelectionSize = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Sizes = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1.5px solid #bebcbd;
  align-content: center;
  text-align: center;
  &:hover {
    background-color: #3c4242;
    color: #ffffff;
  }
`;
const Size = styled.span`
  font-size: 12px;
  font-family: "poppinsregular";
  color: #3c4242;
  padding: 8px 12px;
  &:hover {
    color: #ffffff;
  }
`;
const ColorsContainer = styled.div``;
const ColorsAvailableText = styled.p`
  font-family: "poppinsmedium";
  font-size: 16px;
  color: #3f4646;
`;
const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const BlackContainer = styled.div`
  padding: 3px 3px;
  border-radius: 50%;
  &:hover {
    border: 1px solid #3f4646;
  }
`;

const Black = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3f4646;
  border-radius: 50%;
`;
const Yellow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #edd146;
  border-radius: 50%;
`;
const Pink = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eb84b0;
  border-radius: 50%;
`;
const Brown = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9c1f35;
  border-radius: 50%;
`;
const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  gap: 40px;
`;
const AddCartDiv = styled.div`
  padding: 10px 50px;
  border-radius: 8px;
  background-color: #8a33fd;
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const CartImgContainer = styled.div`
  width: 15px;
`;
const CartImg = styled.img`
  display: block;
  width: 100%;
`;
const CartText = styled.p`
  color: #ffffff;
  font-family: "poppinsregular";
  margin: 0;
  font-size: 15px;
`;
const PriceDiv = styled.div`
  padding: 10px 50px;
  border: 1px solid #3c4242;
  border-radius: 8px;
`;
const Price = styled.p`
  font-family: "poppinsregular";
  font-size: 15px;
  font-weight: 700;
  margin: 0;
`;
