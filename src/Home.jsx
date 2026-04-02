import Header from "./Header";
import napolitana from "./assets/napolitana.jpg";
import española from "./assets/española.jpg";
import pepperoni from "./assets/pepperoni.jpg";
import CardPizza from "./components/CardPizza";

const pizzas = [
	{
		name: "Napolitana",
		price: 5950,
		ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
		img: napolitana,
	},
	{
		name: "Española",
		price: 6950,
		ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
		img: española,
	},
	{
		name: "Pepperoni",
		price: 6950,
		ingredients: ["mozzarella", "pepperoni", "orégano"],
		img: pepperoni,
	},
];

const Home = () => {
	return (
		<section id="home" className="w-full flex flex-col gap-4 pb-4">
			<Header />
			<div className="flex gap-4">
				{pizzas.map((pizza) => (
					<CardPizza {...pizza} />
				))}
			</div>
		</section>
	);
};

export default Home;
