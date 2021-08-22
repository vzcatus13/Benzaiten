import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 250px;

  @media screen and (max-width: 767px) {
    margin: 40px 20px;
  }

  @media screen and (min-width: 767px) and (max-width: 1200px) {
    margin: 40px 100px;
  }
`;
