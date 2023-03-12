import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductPage from "./components/ProductPage.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Slider />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
