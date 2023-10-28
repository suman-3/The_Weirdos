import React from "react";
import styled from "styled-components";

import Button from "./Button";

import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";
import img10 from "../assets/Nfts/bighead-10.svg";

const Section = styled.section`
  width: 100vw;
  height: 24rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};

  display: flex;
  // justify-content: space-between;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;

  img {
    width: 13rem;
    height: auto;
  }

  @media (max-width: 48em) {
    img {
      width: 8rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};


  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%; 
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    padding:2rem 0;
    width: 100%; 
  }
`;

const ButtonContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em){
    width: 100%;
    justify-content: center;
  }
`;

const JoinNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em){
    padding: 1rem 2rem;
  }
  @media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.7rem 2rem;
  }

  a {
    text-transform: capitalize;
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img5} alt="The Weirdos" />
        <img src={img6} alt="The Weirdos" />
        <img src={img7} alt="The Weirdos" />
        <img src={img8} alt="The Weirdos" />
        <img src={img9} alt="The Weirdos" />
        <img src={img10} alt="The Weirdos" />
      </ImgContainer>
        <Title>
          Join the <br /> weirdos club
        </Title>
        <ButtonContainer>
          <JoinNow>Join Now</JoinNow>
        </ButtonContainer>
    </Section>
  );
};

export default Banner;
