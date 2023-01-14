import "./App.css";
import AboutPage from "./Pages/AboutPage";
import AlbumPage from "./Pages/AlbumPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import TourPage from "./Pages/TourPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
