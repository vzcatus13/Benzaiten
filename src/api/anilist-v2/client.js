import {
  HttpLink,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "https://graphql.anilist.co" });

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Page: {
            keyArgs: false,
            merge: true,
          },
        },
      },

      // This works fine with merging recommendations or popular titles, but in cache pageInfo is saved separately from list
      // (therefore pageInfo with every request is replaced) so cache is useless 
      // Page: {
      //   fields: {
      //     recommendations: {
      //       keyArgs: ["mediaId"],

      //       merge(existing = [], incoming) {
      //         const map = new Map();

      //         existing.forEach((media) => {
      //           map.set(media.mediaRecommendation.__ref, media);
      //         });

      //         incoming.forEach((media) => {
      //           map.set(media.mediaRecommendation.__ref, media);
      //         });

      //         console.log([...map.values()]);
      //         return [...map.values()];
      //       },
      //     },
      //   },
      // },

      MediaTitle: {
        merge: true,
      },
      MediaCoverImage: {
        merge: true,
      },
    },
  }),
});

export default client;
