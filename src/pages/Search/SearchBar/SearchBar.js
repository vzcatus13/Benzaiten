import { Search } from "@material-ui/icons";
import { useState } from "react";
import {
  SearchBarWrapper,
  Container,
  Input,
  InputWrapper,
  SearchIconWrapper,
} from "./SearchBar.styled";

const SearchBar = ({ handleSearch, defaultValue = "" }) => {
  const [query, setQuery] = useState(defaultValue);

  const search = (q) => {
    q = q.trim();

    if (q) {
      handleSearch(q);
    }

    return;
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
      search(query);
    }
  };

  const handleClickOnSearchIcon = (e) => {
    e.target.blur();
    search(query);
  };

  return (
    <SearchBarWrapper>
      <Container>
        <InputWrapper>
          <Input
            value={query}
            placeholder="Search"
            onInput={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </InputWrapper>
        <SearchIconWrapper onClick={handleClickOnSearchIcon}>
          <Search />
        </SearchIconWrapper>
      </Container>
    </SearchBarWrapper>
  );
};

export default SearchBar;
