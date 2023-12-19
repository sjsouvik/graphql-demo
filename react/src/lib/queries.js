import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:9999/",
  cache: new InMemoryCache(),
});

export const getAllProducts = async () => {
  const query = gql`
    query products {
      products {
        id
        title
      }
    }
  `;

  const { data } = await apolloClient.query({ query });
  return data.products;
};

export const getProductDetails = async (productId) => {
  const query = gql`
    query productById($productId: ID) {
      product(id: $productId) {
        id
        title
        description
        category {
          id
          title
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query,
    variables: { productId },
  });
  return data.product;
};
