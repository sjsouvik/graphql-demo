import { useState } from "react";
import { addNewProductMutation, getProductByIdQuery } from "../lib/queries";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

export const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
  });

  const [mutate, { loading }] = useMutation(addNewProductMutation);

  const navigate = useNavigate();

  const addProductHandler = async (e) => {
    e.preventDefault();
    const {
      data: { product },
    } = await mutate({
      variables: { input: productDetails },
      update: (cache, result) => {
        cache.writeQuery({
          query: getProductByIdQuery,
          data: result.data,
          variables: { productId: result.data.product.id },
        });
      },
    });
    navigate(`/products/${product.id}`);
  };

  return (
    <div>
      <form onSubmit={addProductHandler} style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <input
            type="text"
            placeholder="Add title"
            id="title"
            value={productDetails.title}
            onChange={(e) =>
              setProductDetails((prevValue) => ({
                ...prevValue,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <input
            type="text"
            placeholder="Add description"
            id="description"
            value={productDetails.description}
            onChange={(e) =>
              setProductDetails((prevValue) => ({
                ...prevValue,
                description: e.target.value,
              }))
            }
          />
        </div>
        <button disabled={loading}>{loading ? "Adding..." : "Submit"}</button>
      </form>
    </div>
  );
};
