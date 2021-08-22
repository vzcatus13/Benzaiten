import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  height: ${(props) => props.theme.headerHeight};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 2px 10px 2px #00000033;
`;

export const HeaderContainer = styled.div`
  height: ${(props) => props.theme.headerHeight};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
`;

export const Left = styled.div`
  display: flex;
  min-width: 230px;
`;

export const Right = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: flex-end;
`;

export const IconContainer = styled.div`
  margin: 0 5px 0 0;
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;

  opacity: ${(props) => props.theme.iconOpacity};

  :hover {
    opacity: ${(props) => props.theme.iconOpacityHover};
    background-color: ${(props) => props.theme.iconBackgroundColorHover};
  }

  transition: background-color 0.13s linear, opacity 0.13s linear;

  svg {
    display: block;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }

  -webkit-tap-highlight-color: transparent;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 20px;

  color: ${(props) => props.theme.textColor};
  text-decoration: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
`;
