import { useEffect, useState } from "react";
import { getCategoryDetails } from "../lib/queries";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getCategoryDetails(categoryId).then(setDetails);
  }, [categoryId]);

  if (details === null) {
    return null;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
      <label htmlFor="products">Products:</label>
      <ul id="products">
        {details.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
