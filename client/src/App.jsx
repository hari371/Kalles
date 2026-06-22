import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blogs/Blogs";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;