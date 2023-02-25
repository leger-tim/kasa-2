import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/404/404';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
