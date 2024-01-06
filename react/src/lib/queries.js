import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:9999/",
  cache: new InMemoryCache(),
});

const productFragment = gql`
  fragment productFields on Product {
    id
    title
    description
    category {
      id
      title
    }
  }
`;

export const getAllProductsQuery = gql`
  query products {
    products {
      id
      title
    }
  }
`;

export const getProductByIdQuery = gql`
  query productById($productId: ID) {
    product(id: $productId) {
      ...productFields
    }
  }

  ${productFragment}
`;

/* framework agnostic way to query graphql api, otherwise for ReactJS projects, 
we can use `useQuery()` hook provided by apollo client to fetch data */
export const getAllProducts = async () => {
  const { data } = await apolloClient.query({
    query: getAllProductsQuery,
    fetchPolicy: "network-only",
  });
  return data.products;
};

export const getProductDetails = async (productId) => {
  const { data } = await apolloClient.query({
    query: getProductByIdQuery,
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
        ...productFields
      }
    }

    ${productFragment}
  `;

  const { data } = await apolloClient.mutate({
    mutation,
    variables: { input: productDetails },

    /* update the client side cache with the newly added product details so that the extra network call to fetch the 
    newly added product details can be avoided after moving to the product details page once the product is added */
    update: (cache, result) => {
      cache.writeQuery({
        query: getProductByIdQuery,
        data: result.data,
        variables: { productId: result.data.product.id },
      });
    },
  });

  return data.product;
};
