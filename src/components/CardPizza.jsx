import { useContext } from "react";
import "./CardPizza.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import * as R from "radashi";

/**
 *
 * @param {{img: string, name: string, desc: string, ingredients: string[], price: number}} props
 * @returns
 */
const CardPizza = (props) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <article className="card-pizza">
      <img src={props.img} />
      <div>
        <h2 className="font-bold">Pizza {props.name}</h2>
        <p className="text-gray-500">{props.desc}</p>
        <p className="font-medium font-italic">Ingredientes:</p>
        <ul>
          {props.ingredients.map((i, index) => (
            <li key={index}>- {i}</li>
          ))}
        </ul>
      </div>
      <p className="font-bold text-green-700">
        ${props.price.toLocaleString("es-CL")}
      </p>
      <div className="flex gap-4">
        <Link
          to={`/pizza/${props.id}`}
          className="border-black border-2 rounded-md px-4"
        >
          Ver más
        </Link>
        <button
          onClick={() =>
            setCart((cart) => {
              const pizza = cart.find((p) => p.id === props.id);
              if (pizza) {
                return cart.map((p) =>
                  p.id === props.id ? { ...p, count: p.count + 1 } : p,
                );
              } else {
                return [...cart, { ...R.omit(props, ["key"]), count: 1 }];
              }
            })
          }
          className="bg-black text-white rounded-md px-4"
        >
          Añadir
        </button>
      </div>
    </article>
  );
};

export default CardPizza;
