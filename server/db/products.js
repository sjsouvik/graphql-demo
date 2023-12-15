import { products, categories } from "./mockData.js";

export const getProducts = () => {
  return new Promise(products);
};

export const getCategory = (categoryId) => {
  return categories.find((category) => category.id === categoryId);
};

export const getProductsByCategory = (categoryId) => {
  return products.filter((product) => product.categoryId === categoryId);
};

export const getProduct = (productId) => {
  return products.find((product) => product.id === productId);
};
