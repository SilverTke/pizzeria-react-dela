import española from "./assets/española.jpg";
import napolitana from "./assets/napolitana.jpg";
import pepperoni from "./assets/pepperoni.jpg";
import CardPizza from "./components/CardPizza";
import Header from "./Header";
import { pizzas } from "./pizzas";

const Home = () => {
  return (
    <section id="home" className="w-full flex flex-col gap-4 pb-4">
      <Header />
      <div className="flex gap-4">
        {pizzas.map(({ id, ...pizza }) => (
          <CardPizza key={id} {...pizza} />
        ))}
      </div>
    </section>
  );
};

export default Home;
