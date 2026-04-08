import { useState } from "react";
import { pizzaCart } from "./pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);
  return (
    <div id="cartContainer" className="flex gap-4 flex-col">
      {cart.map((pizza) => (
        <div className="border-3 border-lime-300 rounded-md p-2" key={pizza.id}>
          <h2>Pizza {pizza.name}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setCart((cart) =>
                  cart.map((p) =>
                    p.id === pizza.id ? { ...p, count: p.count + 1 } : p,
                  ),
                );
              }}
              className="bg-blue-500 px-4 text-white rounded-md"
            >
              +
            </button>
            <p className="text-grey-500">{pizza.count}</p>
            <button
              onClick={() => {
                setCart((cart) =>
                  cart
                    .map((p) =>
                      p.id === pizza.id ? { ...p, count: p.count - 1 } : p,
                    )
                    .filter((p) => p.count > 0),
                );
              }}
              className="bg-red-500 px-4 text-white rounded-md"
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
