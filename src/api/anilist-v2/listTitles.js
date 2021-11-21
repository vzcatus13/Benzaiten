import { gql } from "@apollo/client";

export const GET_POPULAR_TITLES = gql`
  query getPopularTitles(
    $page: Int!
    $perPage: Int!
    $status: MediaStatus
    $genre: String
  ) {
    Page(perPage: $perPage, page: $page) {
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
        currentPage
        hasNextPage
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

// recommendations gives unexpected duplicates, if fetching in a small (perPage: 3-5) chunks. Problem is on Anilist api
// perPage: 5, reproduced on titles with id: 100388, 13601, 20623
export const GET_RECOMMENDATIONS_BY_ID = gql`
  query getRecommendationsById($id: Int!, $perPage: Int!, $page: Int!) {
    Page(perPage: $perPage, page: $page) {
      recommendations(mediaId: $id, sort: RATING_DESC) {
        mediaRecommendation {
          id
          title {
            romaji
          }
          coverImage {
            large
          }
        }
      }

      pageInfo {
        total
        currentPage
        hasNextPage
      }
    }
  }
`;
