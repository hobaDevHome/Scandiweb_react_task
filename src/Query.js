import { gql } from '@apollo/client';

export const getItemsByCategory = gql`
  query getItemsByCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        name
        gallery
        inStock
        prices {
          currency
          amount
        }
        category
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;


// export const GetProductListData = async (category) => {
//   const query = gql`
//   {
//       category(input:{
//         title:"${category!=="all"?category:''}"
//       }){
//         products{
//            id
//              brand 
//              name
//              category
//              attributes{
//                 id
//                 name
//                 items{
//                   displayValue
//                   value
//                   id
//                 }
//               }
//              gallery
//              inStock
//              prices{
//               currency
//               amount
//             }
//         }
//       }
//     }
//   `
//   try {
//       const data = await request(endPoint, query).then(data=> categoryProductList(data.category.products));
//       console.log(data)
//       return data
//   } catch (error) {
//       console.log(error)
//       return [];
//   }
// }