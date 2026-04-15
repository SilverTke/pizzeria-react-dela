import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const fetchPizza = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const res = await fetch(url);
    const data = await res.json();
    setPizza(data);
  };
  useEffect(() => {
    fetchPizza();
  });
  return (
    pizza && (
      <section id="pizza">
        <h1 className="text-4xl font-bold">Pizza {pizza.name}</h1>
        <p className="text-green-700 font-bold text-2xl">
          ${pizza.price.toLocaleString("es-CL")}
        </p>
        <img src={pizza.img} className="rounded-md" />
        <p>{pizza.descripcion}</p>
        <h2 className="text-3xl">Ingredientes</h2>
        <ul>
          {pizza.ingredients.map((i, index) => (
            <li key={index}>- {i}</li>
          ))}
        </ul>
        <button className="text-white bg-black p-2 rounded-md">
          Añadir al carrito
        </button>
      </section>
    )
  );
};

export default Pizza;
