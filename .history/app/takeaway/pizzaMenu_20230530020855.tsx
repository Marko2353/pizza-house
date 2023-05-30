"use client"
import React, { useState } from "react";
import PizzaCard from "./PizzaCard";

const PizzaMenu = () => {
  const [clickedPizzas, setClickedPizzas] = useState([]);

  const handlePizzaClick = (pizzaId) => {
    if (!clickedPizzas.includes(pizzaId)) {
      setClickedPizzas([...clickedPizzas, pizzaId]);
    }
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

      <h2>Clicked Pizzas</h2>
      {clickedPizzas.map((pizzaId) => (
        <p key={pizzaId}>Pizza ID: {pizzaId}</p>
      ))}
    </div>
  );
};

export default PizzaMenu;