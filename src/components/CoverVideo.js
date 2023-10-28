import React from "react";
import GIF2 from "../assets/Home GIF.gif"; // Updated import
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={GIF2} alt="GIF" /> {/* Replaced video element with img */}
    </VideoContainer>
  );
};

export default CoverVideo;
