import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";
import HomeDefault from "./pages/HomeDefault";
import About from "./pages/About";
import Service from "./pages/Service";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Products from "./pages/Products.js";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          element={<HomeDefault />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/about`}
          exact
          element={<About />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/services`}
          exact
          element={<Service />}
        />

        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          exact
          element={<Projects />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/products`}
          exact
          element={<Products />}
        />

        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          exact
          element={<Contact />}
        />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;
