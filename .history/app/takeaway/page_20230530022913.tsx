import React, { useState } from "react";
import PizzaCard from "./PizzaCard";

const PizzaMenu = ({ pizzas }) => {
  const [cartItems, setCartItems] = useState([]);

  const handlePizzaClick = (pizzaId, clickCount) => {
    const newItem = { pizzaId, clickCount };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <h2>Pizza Menu</h2>
      <div className="container flex flex-wrap gap-4 m-auto">
        {Object.keys(pizzas).map((pizzaId) => {
          const { pizzaName, pizzaDescription, price } = pizzas[pizzaId];
          return (
            <PizzaCard
              key={pizzaId}
              pizzaId={pizzaId}
              pizzaName={pizzaName}
              pizzaDescription={pizzaDescription}
              price={price}
              onClick={handlePizzaClick}
            />
          );
        })}
      </div>

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