import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import  Navebar  from "./components/common/Navbar/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/common/Footer";
import { PostHeader } from "./components/common/PostHeader";
import { Property } from "./pages/Property";
import Luxury from "./pages/Luxury";
import Premium from "./pages/Premium";
import Affordable from "./pages/Affordable";
import Contact from "./pages/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navebar />
        <PostHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/affordable" element={<Affordable />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
