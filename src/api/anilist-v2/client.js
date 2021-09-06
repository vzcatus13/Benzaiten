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

      Page: {
        fields: {
          recommendations: {
            keyArgs: ["mediaId"],

            merge(existing = [], incoming) {
              console.log(existing, incoming)
              return [...existing, ...incoming];
            },
          },
        },
      },

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
