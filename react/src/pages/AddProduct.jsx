import { useState } from "react";
import { addNewProduct } from "../lib/queries";

export const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
  });

  const addProductHandler = async (e) => {
    e.preventDefault();
    const product = await addNewProduct(productDetails);
    console.log("log-", product);
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
        <button>Submit</button>
      </form>
    </div>
  );
};
