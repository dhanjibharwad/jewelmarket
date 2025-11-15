import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gold from "./pages/shop/Gold";
import Silver from "./pages/shop/Silver";
import Rings from "./pages/shop/Rings";
import Productpage from "./pages/shop/Productpage";


function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Shop Pages */}
        <Route path="/shop/gold" element={<Gold />} />
        <Route path="/shop/silver" element={<Silver />} />
        <Route path="/shop/rings" element={<Rings />} />
        <Route path="/shop/earrings" element={<Rings />} />
        <Route path="/shop/product" element={<Productpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
