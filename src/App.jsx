import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/404/404";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Housing from "./pages/Housing/Housing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 
