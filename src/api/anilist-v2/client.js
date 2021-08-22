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
      Page: {
        merge: true,
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
