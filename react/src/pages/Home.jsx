import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../lib/queries";
import { Layout } from "../components/Layout";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
