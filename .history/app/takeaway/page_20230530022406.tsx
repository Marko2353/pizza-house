import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchData from "../../hooks/fetchData";
import CallToAction from "../../components/buttons/CallToAction";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import PizzaMenu from "./pizzaMenu";

const PizzaMenu = () => {
  const [cartItems, setCartItems] = useState([]);

  const handlePizzaClick = (pizzaId, clickCount) => {
    const newItem = { pizzaId, clickCount };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <h2>Pizza Menu</h2>
      <PizzaCard
        pizzaId="1"
        pizzaName="Margherita"
        pizzaDescription="Classic cheese pizza"
        price="$10"
        onClick={handlePizzaClick}
      />
      <PizzaCard
        pizzaId="2"
        pizzaName="Pepperoni"
        pizzaDescription="Pizza with pepperoni toppings"
        price="$12"
        onClick={handlePizzaClick}
      />

      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <span>Pizza ID: {item.pizzaId}</span>
          <span>Click Count: {item.clickCount}</span>
        </div>
      ))}
    </div>
  );
};

export default PizzaMenu;