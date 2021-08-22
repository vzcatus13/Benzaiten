import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  margin: auto;
`;

export const Container = styled.div`
  height: ${(props) => props.theme.search.searchBar.height};
  position: relative;
  border-radius: 13px;
  background: ${(props) => props.theme.search.searchBar.backgroundColor};
  border: 1px solid transparent;
`;

export const InputWrapper = styled.div`
  margin: 0 56px 0 20px;
  height: 100%;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.textColor};
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  height: 100%;
  font: normal 16px Roboto;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  display: flex;
  align-items: center;

  margin-right: 10px;

  opacity: ${(props) => props.theme.iconOpacity};

  :hover {
    opacity: ${(props) => props.theme.iconOpacityHover};
  }
`;
