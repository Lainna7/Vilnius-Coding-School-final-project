import Home from "./pages/home/Home";
import Meniu from "./pages/meniu/Meniu";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";
import Orders from "./pages/orders/Orders";
import Navbaras from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbaras />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/meniu"} element={<Meniu />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/orders"} element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
