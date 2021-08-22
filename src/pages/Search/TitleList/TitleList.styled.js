import styled from "styled-components";
import { Container } from "../../../components/TitleCard/TitleCard.styled";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
`;

export const CardContainer = styled(Container)`
  &,
  :first-child {
    margin: 8px;
  }
`;

export const NothingFound = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
