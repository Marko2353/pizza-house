"use client"
import React, { useState } from 'react';

const PizzaCard = ({ pizzaId, pizzaName, pizzaDescription, price, onAddToCart }) => {
  const handleButtonClick = () => {
    onAddToCart(pizzaId);
  };

  return (
    <div>
      <h3>{pizzaName}</h3>
      <p>{pizzaDescription}</p>
      <p>Price: {price}</p>
      <button onClick={handleButtonClick}>Add to Cart</button>
    </div>
  );
};

const PizzaMenu = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (pizzaId) => {
    const existingItem = cartItems.find((item) => item.pizzaId === pizzaId);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.pizzaId === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { pizzaId, quantity: 1 }]);
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
        onAddToCart={handleAddToCart}
      />
      <PizzaCard
        pizzaId="2"
        pizzaName="Pepperoni"
        pizzaDescription="Pizza with pepperoni toppings"
        price="$12"
        onAddToCart={handleAddToCart}
      />

      <h2>Cart</h2>
      {cartItems.map((item) => (
        <p key={item.pizzaId}>
          Pizza ID: {item.pizzaId} | Quantity: {item.quantity}
        </p>
      ))}
    </div>
  );
};

export default PizzaMenu;
