import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export const client2 = new ApolloClient({
  uri: "../graphQl",
  cache: new InMemoryCache(),
});

export const EXCHANGE_RATES = client
  .query({
    query: gql`
      query GetExchangeRates {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `,
  })
  .then((result) => console.log(result));
