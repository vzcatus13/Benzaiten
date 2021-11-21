import React, { useEffect } from "react";

import TitleList from "./PopularTitleList";

const Home = () => {
  const defaultVariables = { page: 1, perPage: 10 };

  useEffect(() => {
    document.title = "Benzaiten";
  }, []);

  return (
    <>
      <TitleList
        listName="Top Airing Anime"
        variables={{ ...defaultVariables, status: "RELEASING" }}
      />

      <TitleList
        listName="Top Upcomming Anime"
        variables={{ ...defaultVariables, status: "NOT_YET_RELEASED" }}
      />

      <TitleList listName="Top Anime" variables={{ ...defaultVariables }} />

      <TitleList
        listName="Top Anime in Comedy"
        variables={{ ...defaultVariables, genre: "Comedy" }}
      />

      <TitleList
        listName="Top Anime in Sports"
        variables={{ ...defaultVariables, genre: "Sports" }}
      />

      <TitleList
        listName="Top Anime in Music"
        variables={{ ...defaultVariables, genre: "Music" }}
      />

      <TitleList
        listName="Top Anime in Sci-Fi"
        variables={{ ...defaultVariables, genre: "Sci-Fi" }}
      />

      <TitleList
        listName="Top Anime in Psychological"
        variables={{ ...defaultVariables, genre: "Psychological" }}
      />

      <TitleList
        listName="Top Anime in Horror"
        variables={{ ...defaultVariables, genre: "Horror" }}
      />
    </>
  );
};

export default Home;
