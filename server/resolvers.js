import {
  getCategory,
  getProducts,
  getProductsByCategory,
  getProduct,
  addNewProduct,
  updateProductDetails,
  deleteProduct,
} from "./db/products.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    product: (_root, args) => {
      const product = getProduct(args.id);

      if (!product) {
        throw notFoundError(`no product found with id ${args.id}`);
      }

      return product;
    },
    products: async () => {
      return await getProducts();
    },
    category: (_root, args) => getCategory(args.id),
  },

  Mutation: {
    addProduct: (_root, args) => {
      const categoryId = "cat2"; // TODO: once the user is authenticated, categoryId should come from the user details
      const newProduct = addNewProduct({ ...args.input, categoryId });
      return newProduct;
    },
    updateProduct: (_root, args) => {
      const updatedProduct = updateProductDetails({ ...args.input });
      return updatedProduct;
    },
    deleteProduct: (_root, args) => deleteProduct(args.id),
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

const notFoundError = (message) => {
  return new GraphQLError(message, {
    extensions: { code: "NOT_FOUND" },
  });
};
