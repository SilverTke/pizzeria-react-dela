import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex gap-4 flex-col w-fit">
      <h1 className="text-4xl">Error 404</h1>
      <p>
        ¿No sabes qué es eso? Significa que esta página no existe. Vamos,
        volvamos a la página principal
      </p>
      <Link
        to="/"
        className="p-2 bg-green-700 text-white w-fit hover:bg-green-300 hover:text-black"
      >
        Ir al inicio
      </Link>
    </section>
  );
};

export default NotFound;
