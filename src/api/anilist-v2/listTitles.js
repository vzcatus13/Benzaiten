import { gql } from "@apollo/client";

export const GET_POPULAR_TITLES = gql`
  query getPopularTitles($perpage: Int!, $status: MediaStatus, $genre: String) {
    Page(perPage: $perpage) {
      media(
        sort: POPULARITY_DESC
        status: $status
        genre: $genre
        type: ANIME
        isAdult: false
      ) {
        id
        idMal

        title {
          romaji
        }

        coverImage {
          large
        }
      }

      pageInfo {
        total
        perPage
      }
    }
  }
`;

export const QUERY_TITLES = gql`
  query searchTitleByName($q: String!, $perPage: Int!, $page: Int!) {
    Page(perPage: $perPage, page: $page) {
      media(search: $q, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        id
        idMal

        title {
          romaji
        }

        coverImage {
          large
        }
      }

      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;
