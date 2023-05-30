import React, { useState } from 'react';

const PizzaCard = ({ pizzaId, pizzaName, pizzaDescription, price, onAddToCart }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    onAddToCart(pizzaId, clickCount + 1);
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
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (pizzaId, clickCount) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [pizzaId]: clickCount,
    }));
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
      {Object.entries(cartItems).map(([pizzaId, clickCount]) => (
        <p key={pizzaId}>
          Pizza ID: {pizzaId} | Click Count: {clickCount}
        </p>
      ))}
    </div>
  );
};

export default PizzaMenu;