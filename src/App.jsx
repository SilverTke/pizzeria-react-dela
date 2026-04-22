import { useState } from "react";
import heroImg from "./assets/hero.png";
import Cart from "./pages/Cart";
import Footer from "./Footer";
import Home from "./pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-4">
        <Home />
        <Cart />
      </main>
      <Footer />
    </>
  );
}

export default App;
