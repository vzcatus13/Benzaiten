import { useEffect } from "react";
import SearchBar from "./SearchBar";

import { Container } from "./Search.styled.js";
import TitleList from "./TitleList";
import { QUERY_TITLES } from "../../api/anilist-v2";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useQueryParams } from "../../hooks/router";

const Search = () => {
  const [queryTitles, { loading, data }] = useLazyQuery(QUERY_TITLES);
  const queryParams = useQueryParams();
  const history = useHistory();

  const handleSearch = (q) => {
    queryParams.set("q", q);
    history.replace({
      pathname: history.location.pathname,
      search: queryParams.toString(),
    });

    queryTitles({
      variables: {
        q,
        perPage: 30,
        page: 1,
      },
    });
  };

  useEffect(() => {
    document.title = "Search";

    queryParams.get("q") && handleSearch(queryParams.get("q"));

    // ???
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <SearchBar
        handleSearch={handleSearch}
        defaultValue={queryParams.get("q") ? queryParams.get("q") : ""}
      />
      <TitleList loading={loading} data={data} />
    </Container>
  );
};
export default Search;
