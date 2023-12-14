export const getProducts = () => {
  return new Promise((resolve, _) =>
    resolve([
      {
        id: "1",
        title: "product title",
        description: "product description",
        createdAt: "2023-12-14T11:05:10:100Z",
      },
    ])
  );
};
