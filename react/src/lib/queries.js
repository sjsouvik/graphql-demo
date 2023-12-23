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

  const { data } = await apolloClient.query({
    query,
    fetchPolicy: "network-only",
  });
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

export const getCategoryDetails = async (categoryId) => {
  const query = gql`
    query categoryById($categoryId: ID) {
      category(id: $categoryId) {
        id
        title
        description
        products {
          id
          title
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query,
    variables: { categoryId },
  });

  return data.category;
};

export const addNewProduct = async (productDetails) => {
  const mutation = gql`
    mutation addNewProduct($input: AddProductInput) {
      product: addProduct(input: $input) {
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

  const { data } = await apolloClient.mutate({
    mutation,
    variables: { input: productDetails },
  });

  return data.product;
};
