import { useState } from "react";
import { pizzaCart } from "./pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);
  return (
    <section id="cart">
      <h1 className="text-4xl font-bold">Carrito</h1>
      <p>
        Total:
        <strong>
          {` $${cart.reduce((acc, it) => acc + it.price * it.count, 0).toLocaleString("es-CL")}`}
        </strong>
      </p>
      <div id="cartContainer" className="flex gap-4 flex-col">
        {cart.map((pizza) => (
          <div
            className="border-3 border-lime-300 rounded-md flex gap-4 overflow-hidden"
            key={pizza.id}
          >
            <img src={pizza.img} className="w-32 rounded-r-sm" />
            <div>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
