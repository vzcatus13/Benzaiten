import styled from "styled-components";

import {
  ButtonLeft,
  ButtonRight,
} from "../../../components/ScrollableCarousel/ScrollableCarousel.styled";

export const Wrapper = styled.div`
  margin: 30px 50px;

  @media screen and (max-width: 767px) {
    margin: 20px 25px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const List = styled.div`
  display: flex;
`;

export const sQButtonLeft = styled(ButtonLeft)`
  left: ${(props) => `${props.$size / 2}px`};
`;

export const sQButtonRight = styled(ButtonRight)`
  right: ${(props) => `${props.$size / 2}px`};
`;
