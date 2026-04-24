import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="bg-green-700 text-white flex items-center justify-between gap-4">
      <div className="flex items-center">
        <Link to="/" className="font-bold">
          Pizzería Mamma Mía!
        </Link>
        {token ? (
          <>
            <button>Profile</button>
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
