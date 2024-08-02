import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Image1 from "../../../../assets/images/bg-1.jpg";
import Image2 from "../../../../assets/images/bg-2.jpg";
import Image3 from "../../../../assets/images/bg-3.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Spotlight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <MainContainer bgImage={Image1}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </MainContainer>
        <MainContainer bgImage={Image2}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </MainContainer>
        <MainContainer bgImage={Image3}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </MainContainer>
      </Slider>
    </SliderContainer>
  );
};

export default Spotlight;

const SliderContainer = styled.div`
  .slick-prev:before, .slick-next:before {
    color: white; 
    font-size: 40px;
  }
`;

const MainContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 716px;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  padding: 100px 0;
  width: 40%;
  position: relative;
  left: 11%;
  text-align: left;
`;

const SubHeading = styled.h5`
  color: #ffffff;
  font-family: "poppinsregular";
  font-size: 32px;
  margin: 18px 0px 40px 0;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-family: "poppinsbold";
  font-size: 78px;
  line-height: 6rem;
  margin: 18px 0px 40px 0;
`;

const SubHeadings = styled.h5`
  color: #ffffff;
  font-family: "poppinsregular";
  font-size: 32px;
  margin: 18px 0px 40px 0;
`;

const ButtonContainer = styled.div`
  padding: 16px 72px;
  background: #ffffff;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = styled.span`
  font-size: 20px;
  font-family: "poppinsmedium";
  color: #3c4242;
  font-weight: 600;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 1;

  &.slick-prev {
    left: 25px;
  }

  &.slick-next {
    right: 25px;
  }
`;

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Arrow className={className}  onClick={onClick}>
      ◀
    </Arrow>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Arrow className={className}  onClick={onClick}>
      ▶
    </Arrow>
  );
};
