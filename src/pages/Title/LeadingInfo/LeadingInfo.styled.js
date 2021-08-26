import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 50px;
  position: relative;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
  }
`;

export const PosterWrapper = styled.div`
  margin-top: -50px;

  @media screen and (max-width: 767px) {
    margin-top: -100px;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Poster = styled.div`
  position: relative;
  width: 250px;
  border-radius: 6px;
  margin-bottom: 20px;

  img {
    display: block;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    object-fit: cover;

    background-color: ${(props) => props.theme.skeletonColor.background};
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: 0px 6px 8px 0px #00000033;
  }

  @media screen and (max-width: 767px) {
    width: 150px;
    margin-bottom: 0;
  }
`;

export const InfoSection = styled.div`
  padding: 10px 20px;

  ${(props) =>
    props.$loading &&
    css`
      width: 100%;
    `}
`;

export const Titles = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 24px;
      line-height: 26px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;

export const QuickInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Genres = styled.div`
  color: ${(props) => props.theme.secondaryTextColor};
  padding: 3px 0;
  margin-right: 5px;
  font-size: 16px;
  line-height: 18px;
`;

export const Grade = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  padding: 3px 0;
  margin-right: 5px;
  color: ${(props) => props.color};
`;

export const Description = styled.div`
  padding-top: 5px;
  font-size: 16px;
  line-height: 20px;

  li {
    list-style: inside;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`;

export const ButtonLinkOutside = styled(Button)`
  &.MuiButtonBase-root {
    margin: 4px 0;
  }

  &.MuiButton-root {
    padding: 6px 10px;
  }
`;
