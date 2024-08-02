import React from "react";
import styled from "styled-components";


const Related = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
            <Container>
                <Text>Low Price</Text>
                <Heading>High Coziness</Heading>
                <Offer>UPTO 50% OFF</Offer>
                <Explore>Explore Items</Explore>
            </Container>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Related;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const MainContainer = styled.div``
const Container = styled.div``
const Text = styled.h5``
const Heading = styled.h3``
const Offer = styled.span``
const Explore = styled.h5``


