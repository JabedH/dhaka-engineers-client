import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Nvbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Whyus from "./Components/Whyus/Whyus";
import Services from "./Components/Services/Services";
import Courses from "./Components/Courses/Courses";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
