import { ApolloClient, InMemoryCache } from '@apollo/client';

export const clientScandiweb = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
// export const RESULTS = null;
// export const SCANDI_WEB = clientScandiweb
//   .query({
//     query: gql`
//       query GetCategories {
//         categories {
//           name
//           products {
//             id
//             name
//             inStock
//             gallery
//             description
//             category
//             attributes {
//               name
//               items {
//                 displayValue
//                 value
//                 id
//               }
//             }
//             prices {
//               currency {
//                 label
//                 symbol
//               }
//               amount
//             }
//             brand
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
