import { gql } from "@apollo/client";

export const GET_TITLE_BY_ID = gql`
  query getTitleById($id: Int!) {
    Media(id: $id) {
      id
      title {
        english
        romaji
        native
      }
      description(asHtml: true)
      coverImage {
        extraLarge
      }
      bannerImage
      genres
      averageScore
      recommendations(perPage: 13, sort: RATING_DESC) {
        nodes {
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
        }
      }
    }
  }
`;
