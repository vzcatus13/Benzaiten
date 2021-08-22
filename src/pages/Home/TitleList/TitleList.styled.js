import styled from "styled-components";

export const ComponentWrapper = styled.div`
  margin: 20px 120px;

  @media screen and (max-width: 767px) {
    margin: 20px 0;
  }
`;

export const ListCategory = styled.div`
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  margin: 0 0 13px 10px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }
`;

export const List = styled.div`
  display: flex;
  padding: 0 10px;
`;
