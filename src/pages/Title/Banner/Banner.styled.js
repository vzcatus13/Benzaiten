import styled, { css } from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  height: 300px;

  @media screen and (max-width: 767px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) =>
    !props.disableLinear &&
    css`
      ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100.2%;
        background: ${(props) => props.theme.title.banner.backgroundLinear};
      }
    `}

  ${(props) =>
    props.blur &&
    css`
      filter: blur(13px);
    `}
`;
