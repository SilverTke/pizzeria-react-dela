import { useState } from "react";
import heroImg from "./assets/hero.png";
import Cart from "./pages/Cart";
import Footer from "./Footer";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
