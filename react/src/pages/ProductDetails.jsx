import { useEffect, useState } from "react";
import { getProductDetails } from "../lib/queries";
import { Link, useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [details, setDetails] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getProductDetails(productId).then(setDetails);
  }, [productId]);

  if (details === null) {
    return null;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>
        Category:
        <Link to={`/categories/${details.category.id}`}>
          {details.category.title}
        </Link>
      </p>
      <p>Description: {details.description}</p>
    </div>
  );
};
