import React from "react";
import styled from "styled-components";

import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 89%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  font-weight: 600;
  margin-top: 5px;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin-top: 5px;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  //this is the function that scroll the whole page to the top
  const scrollToTop = (id) => {
    let element = document.getElementById("about");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>
      <Title>
        Discover A New Era Of Cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1" > NFTs.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2" >Collectible items.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3" >Ape Killers!</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored of Apes? Try Something New.</SubTitle>
      <ButtonContainer onClick={() => scrollToTop()}>
        <Button text="Explore" link="#about"  />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
