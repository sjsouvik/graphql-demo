import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Category } from "./pages/Category";
import { AddProduct } from "./pages/AddProduct";
import { Layout } from "./components/Layout";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./lib/queries";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </Layout>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
