import { getCategoryByIdQuery } from "../lib/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

export const Category = () => {
  const { categoryId } = useParams();

  const { data, loading, error } = useQuery(getCategoryByIdQuery, {
    variables: { categoryId },
  });

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Got some error...</p>;
  }

  const { category: details } = data;

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
