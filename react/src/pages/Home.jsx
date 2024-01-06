import { Link } from "react-router-dom";
import { getAllProductsQuery } from "../lib/queries";
import { useQuery } from "@apollo/client";

export const Home = () => {
  const { data, loading, error } = useQuery(getAllProductsQuery, {
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Got some error...</p>;
  }

  const { products } = data;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};
