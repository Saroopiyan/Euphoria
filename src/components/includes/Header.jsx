import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Headers>
          <LogoContainer>
            <Logo
              src={require("../../assets/images/Logo.svg").default}
              alt="logo"
            />
          </LogoContainer>
          <Categories>
            <Category>Shop</Category>
            <Category>Men</Category>
            <Category>Women</Category>
            <Category>Combos</Category>
            <Category>Joggers</Category>
          </Categories>
          <Form>
            <SearchContainer>
              <SearchImgContainer>
                <SearchImage
                  src={require("../../assets/images/search.svg").default}
                />
              </SearchImgContainer>
              <StyledInput type="text" placeholder="Search" />
            </SearchContainer>
          </Form>
          <RightContainer>
            <ImageContainer>
              <Wishlist
                src={require("../../assets/images/wishlist.svg").default}
              />
            </ImageContainer>
            <ImageContainer>
              <Account
                src={require("../../assets/images/account.svg").default}
              />
            </ImageContainer>
            <ImageContainer>
              <Cart src={require("../../assets/images/cart.svg").default} />
            </ImageContainer>
          </RightContainer>
        </Headers>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Headers = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 91px;
  cursor: pointer;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
`;
const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const Category = styled.span`
  font-family: "poppinsregular";
  font-size: 16px;
  cursor: pointer;
  color: #807d7e;
  &:hover {
    font-weight: 700;
    color: #3c4242;
  }
`;
const Form = styled.div`
  display: flex;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;
`;
const SearchImgContainer = styled.div``;
const SearchImage = styled.img`
  display: block;
  width: 100%;
`;
const StyledInput = styled.input`
  border: none;
  padding: 6px 5px;
  font-size: 14px;
  color: #807d7e;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const ImageContainer = styled.div`
  cursor: pointer;
  width: 18px;
`;
const Wishlist = styled.img`
  display: block;
  width: 100%;
`;
const Account = styled.img`
  display: block;
  width: 100%;
`;
const Cart = styled.img`
  display: block;
  width: 100%;
`;
