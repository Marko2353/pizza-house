"use client"
import React, { useState } from "react";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
const PizzaMenu = () => {
  const [clickedPizzas, setClickedPizzas] = useState([]);

  const handlePizzaClick = (pizzaId) => {
    if (!clickedPizzas.includes(pizzaName)) {
      setClickedPizzas([...clickedPizzas, pizzaName]);
    }
  };

  return (
    <div>
      <h2>Pizza Menu</h2>
      

      <h2>Clicked Pizzas</h2>
      {clickedPizzas.map((pizzaId) => (
        <p key={pizzaId}>Pizza ID: {pizzaId}</p>
      ))}
    </div>
  );
};

export default PizzaMenu;