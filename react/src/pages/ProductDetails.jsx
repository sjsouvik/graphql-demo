import { useEffect, useState } from "react";
import { getProductDetails } from "../lib/queries";
import { useParams } from "react-router-dom";

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
      <p>Title: {details.title}</p>
      <p>Description: {details.description}</p>
    </div>
  );
};
