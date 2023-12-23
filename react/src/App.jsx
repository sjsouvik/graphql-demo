import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Category } from "./pages/Category";
import { AddProduct } from "./pages/AddProduct";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
