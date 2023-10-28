import { createGlobalStyle } from "styled-components";

// imported installed required font family
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Sora', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Hide the main scrollbar */
  body {
    scrollbar-width: thin; /* for Firefox */
    scrollbar-color: transparent transparent; /* for Firefox */
  }

  /* Hide the scrollbar in Webkit browsers */
  body::-webkit-scrollbar {
    width: 1px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Allow scrolling within a specific element */
  .scroll-container {
    overflow-y: scroll;
  }
`;

export default GlobalStyles;
