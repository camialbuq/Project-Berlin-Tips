import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemList from "./components/TipList";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import TipDetailPage from "./pages/TipDetailPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        {/* the : is already a react router to use URL parameter dynamically */}
        {/* <Route path="/tips/:tipId" element={<TipDetailPage />} /> */}
        <Route path="/tips/" element={<TipDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
