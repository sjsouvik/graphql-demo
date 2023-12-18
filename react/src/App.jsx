import { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import "./App.css";

const client = new GraphQLClient("http://localhost:9999/");

const query = gql`
  {
    products {
      id
      title
      description
    }
  }
`;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await client.request(query);
      setProducts(data.products);
    };

    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default App;
