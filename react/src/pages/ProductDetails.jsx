import { getProductByIdQuery } from "../lib/queries";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

export const ProductDetails = () => {
  const { productId } = useParams();

  const { data, loading, error } = useQuery(getProductByIdQuery, {
    variables: { productId },
  });

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Got some error...</p>;
  }

  const { product: details } = data;

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
