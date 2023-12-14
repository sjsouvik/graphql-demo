import { getProducts } from "./db/products.js";

export const resolvers = {
  Query: {
    products: async () => {
      return await getProducts();
    },
  },

  Product: {
    date: (product) => toIsoDate(product.createdAt),
  },
};

const toIsoDate = (value) => value.slice(0, "yyyy-mm-dd".length);
