import { products, categories } from "./mockData.js";

export const getProducts = () => {
  return new Promise((resolve, _) => resolve(products));
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

export const addNewProduct = (input) => {
  const newProduct = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...input,
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProductDetails = (input) => {
  const updatedProducts = products.map((product) =>
    product.id === input.id ? { ...product, ...input } : product
  );
  return updatedProducts.find((product) => product.id === input.id);
};

export const deleteProduct = (productId) => {
  const productToBeDeleted = products.find(
    (product) => product.id === productId
  );
  const updatedProducts = products.filter(
    (product) => product.id !== productId
  );
  return productToBeDeleted;
};
