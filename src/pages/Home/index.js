import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import TitleList from "./TitleList";

import { GET_POPULAR_TITLES } from "../../api/anilist-v2";

const Home = () => {
  const defaultVariables = { perpage: 30 };

  const allPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables },
  });

  const airingPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, status: "RELEASING" },
  });

  const upcommingPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, status: "NOT_YET_RELEASED" },
  });

  const comedyPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, genre: "Comedy" },
  });

  const scifiPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, genre: "Sci-Fi" },
  });

  const sportsPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, genre: "Sports" },
  });

  const musicPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, genre: "Music" },
  });

  const psychoPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, genre: "Psychological" },
  });

  const horrorPopular = useQuery(GET_POPULAR_TITLES, {
    variables: { ...defaultVariables, genre: "Horror" },
  });

  useEffect(() => {
    document.title = "Benzaiten";
  }, []);

  return (
    <>
      <TitleList
        listName="Top Airing Anime"
        data={airingPopular.data}
        loading={airingPopular.loading}
      />

      <TitleList
        listName="Top Upcomming Anime"
        data={upcommingPopular.data}
        loading={upcommingPopular.loading}
      />

      <TitleList
        listName="Top Anime"
        data={allPopular.data}
        loading={allPopular.loading}
      />

      <TitleList
        listName="Top Anime in Comedy"
        data={comedyPopular.data}
        loading={comedyPopular.loading}
      />

      <TitleList
        listName="Top Anime in Sports"
        data={sportsPopular.data}
        loading={sportsPopular.loading}
      />

      <TitleList
        listName="Top Anime in Music"
        data={musicPopular.data}
        loading={musicPopular.loading}
      />

      <TitleList
        listName="Top Anime in Sci-Fi"
        data={scifiPopular.data}
        loading={scifiPopular.loading}
      />

      <TitleList
        listName="Top Anime in Psychological"
        data={psychoPopular.data}
        loading={psychoPopular.loading}
      />

      <TitleList
        listName="Top Anime in Horror"
        data={horrorPopular.data}
        loading={horrorPopular.loading}
      />
    </>
  );
};

export default Home;
