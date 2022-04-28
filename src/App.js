import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Register from "./component/Register";
import ForgotPass from "./component/ForgotPass";
import Contact from "./component/Contact";
import About from "./component/About";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const pathWithoutHeader = ["/login", "/register", "/forgot-password"];

function App() {
  const location = useLocation();

  const [withHeader, setWithHeader] = useState(true);

  useEffect(() => {
    if (pathWithoutHeader.find((path) => path === location.pathname)) {
      setWithHeader(false);
    }
  }, [location.pathname]);

  return (
    <>
      {withHeader && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-pass" element={<ForgotPass />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
