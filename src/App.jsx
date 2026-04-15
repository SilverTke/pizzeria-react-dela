import { useState } from "react";
import heroImg from "./assets/hero.png";
import Cart from "./Cart";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-4">
        <Home />
        <Cart />
      </main>
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
