import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="bg-green-700 text-white flex items-center justify-between gap-4">
      <div className="flex items-center">
        <p className="font-bold">Pizzería Mamma Mía!</p>
        <button>Home</button>
        {token ? (
          <>
            <button>Profile</button>
            <button>Logout</button>
          </>
        ) : (
          <>
            <button>Login</button>
            <button>Register</button>
          </>
        )}
      </div>
      <button>Total: ${total.toLocaleString("es-CL")}</button>
    </nav>
  );
};

export default Navbar;
