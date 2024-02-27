import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
