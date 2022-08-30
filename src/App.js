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
import Footer from "./Components/Nvbar/Footer";
import Viewall from "./Components/Home/LatestProjects/Viewall";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Components/Courses/Form/Form";
import Payment from "./Components/Courses/Form/Payment";
import Registration from "./Components/Courses/Form/Registration";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Showall />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/commercial" element={<Commercial />} />
        </Route>
        <Route path="/viewall" element={<Viewall />} />
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/form" element={<Form />} />
        {/* <Route path="/payment" element={<Payment />} />{" "}  */}
        <Route path="/course/registration" element={<Registration />}></Route>

        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<Whyus />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
