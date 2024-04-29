import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import TipDetailPage from "./pages/TipDetailPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import AddTip from "./pages/AddTip";
import tipsData from "./tips-data.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        {/* the : is already a react router to use URL parameter dynamically */}
        {/* <Route path="/tips/:tipId" element={<TipDetailPage />} /> */}
        <Route path="/tips/:tipId" element={<TipDetailPage />} tip={tipsData} />
        <Route path="/addTip" element={<AddTip />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
