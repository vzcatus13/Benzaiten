import styled, { css } from "styled-components";

export const ScrollableWrapper = styled.div`
  /* This can fix problem, when there is few items in list,
  but wrapper is block, so wrapper is bigger than actual list
  display: inline-grid; */
  position: relative;
`;

const Button = styled.div`
  position: absolute;
  height: ${(props) => `${props.$size * 2}px`};
  width: ${(props) => `${props.$size * 2}px`};
  top: ${(props) => `${props.top}px`};
  z-index: ${(props) => props.zIndex};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  color: ${(props) =>
    props.buttonColor || props.theme.scrollableCarouselColor.button.iconMain};
  background: ${(props) =>
    props.buttonBackgroundColor ||
    props.theme.scrollableCarouselColor.button.background};
  box-shadow: 0 7px 15px ${(props) => props.buttonShadowColor || "#00000033"};

  opacity: 0.9;

  :hover {
    color: ${(props) =>
      props.buttonHoverColor ||
      props.theme.scrollableCarouselColor.button.iconHover};
    opacity: 1;
  }

  transition: opacity 0.5s, visibility 0.5s;

  ${(props) =>
    !props.visible &&
    css`
      visibility: hidden;
      opacity: 0;

      :hover {
        opacity: 0;
      }
    `}

  -webkit-tap-highlight-color: transparent;
`;

Button.defaultProps = {
  theme: {
    scrollableCarouselColor: {
      button: {
        background: "#fff",
        iconMain: "#70757a",
        iconHover: "#202124",
      },
    },
  },
};

export const ButtonLeft = styled(Button)`
  left: ${(props) => `${-props.$size}px`};

  @media screen and (max-width: 767px) {
    left: 0;
    margin-left: ${(props) => `${props.$size / 2}px`};
  }
`;

export const ButtonRight = styled(Button)`
  right: ${(props) => `${-props.$size}px`};

  @media screen and (max-width: 767px) {
    right: 0;
    margin-right: ${(props) => `${props.$size / 2}px`};
  }
`;

export const ScrollableContainer = styled.div`
  overflow-x: ${(props) => (props.disableScroll ? "hidden" : "auto")};
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
