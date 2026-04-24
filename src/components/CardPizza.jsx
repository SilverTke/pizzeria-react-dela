import "./CardPizza.css";
import { Link } from "react-router-dom";

/**
 *
 * @param {{img: string, name: string, desc: string, ingredients: string[], price: number}} props
 * @returns
 */
const CardPizza = (props) => (
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
      <button className="border-black border-2 rounded-md px-4">Ver más</button>
      <Link
        to={`/pizza/${props.id}`}
        className="bg-black text-white rounded-md px-4"
      >
        Añadir
      </Link>
    </div>
  </article>
);

export default CardPizza;
