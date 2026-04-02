import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<Register />*/}
      <Login />
      <Footer />
    </>
  );
}

export default App;
