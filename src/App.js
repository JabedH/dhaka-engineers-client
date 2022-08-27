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
import Showall from "./Components/Home/LatestProjects/Showall";
import Interior from "./Components/Home/LatestProjects/Interior";
import Exterior from "./Components/Home/LatestProjects/Exterior";
import Commercial from "./Components/Home/LatestProjects/Commercial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/showall" element={<Showall />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/commercial" element={<Commercial />} />
        </Route>
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
