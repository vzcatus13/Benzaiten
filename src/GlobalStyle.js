import * as styled from "styled-components";

const globalStyle = styled.createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }

  body::-webkit-scrollbar {
    width: 13px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarColor};
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  body {
    padding-top: ${(props) => props.theme.headerHeight};
  }

  body {
    transition-property: background-color, color;
    transition-duration: 0.13s;
  }

  img {
    user-select: none;
  }
`;

export default globalStyle;
