import {
  getCategory,
  getProducts,
  getProductsByCategory,
  getProduct,
} from "./db/products.js";

export const resolvers = {
  Query: {
    product: (_root, args) => getProduct(args.id),
    products: async () => {
      return await getProducts();
    },
    category: (_root, args) => getCategory(args.id),
  },

  Product: {
    date: (product) => toIsoDate(product.createdAt),
    category: (product) => getCategory(product.categoryId),
  },

  Category: {
    products: (category) => {
      return getProductsByCategory(category.id);
    },
  },
};

const toIsoDate = (value) => value.slice(0, "yyyy-mm-dd".length);
