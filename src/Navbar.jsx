import { CartContext } from "./context/CartContext";
import "./Navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const token = false;
  const total = cart.reduce((acc, it) => acc + it.price * it.count, 0);

  return (
    <nav className="bg-green-700 text-white flex items-center justify-between gap-4">
      <div className="flex items-center">
        <Link to="/" className="font-bold">
          Pizzería Mamma Mía!
        </Link>
        {token ? (
          <>
            <Link to="/profile">Profile</Link>
            <button>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      <Link to="/cart">Total: ${total.toLocaleString("es-CL")}</Link>
    </nav>
  );
};

export default Navbar;
