import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: block;
  margin: 0 0 0 12px;

  :first-child {
    margin: 0;
  }

  width: ${(props) => props.$width};
`;

export const ImageWrapper = styled(Link)`
  display: block;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: 6px;

  cursor: pointer;

  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0px 0px 5px 0px #00000033;
  }

  /* Was working version */
  /* background-size: cover;
  background-position: 50%; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;

  background-color: ${(props) => props.theme.skeletonColor.background};
`;

export const Caption = styled.div`
  margin: 4px 0 0 0;

  & > div {
    padding: 4px 0 0 0;
  }
`;

export const Title = styled(Link)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
