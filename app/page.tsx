"use client";
import React from "react";
import Image from "next/image";
import CallToAction from "../components/buttons/CallToAction";
import useFetchPizzas from "../hooks/fetchPizzas";
import Button from "../components/buttons/Button";
import NavBar from "../components/Navbar/Navbar";

export default function Home() {
  const { pizzas, descriptions, loading, error } = useFetchPizzas();

  if (
    pizzas === null ||
    pizzas === undefined ||
    descriptions === null ||
    descriptions === undefined
  ) {
    return <div>{loading}</div>;
  }
  return (
    <>
      <NavBar />
      <section className="w-full h-screen bg-black">
        <Image
          src="/img/pizza-of-the-day.jpg"
          alt=""
          width={1440}
          height={1024}
        />
      </section>
      <main>
        <Button name={"pinga"} link={"/"} />
        {Object.keys(pizzas).map((pizzaId) => {
          const pizzaName = pizzas[pizzaId];
          const pizzaDescription = descriptions[pizzaId];

          return (
            <div key={pizzaId}>
              <h1>{pizzaName}</h1>
              <p>{pizzaDescription}</p>
            </div>
          );
        })}

        <CallToAction name="order takeaway" link="#" />
      </main>
    </>
  );
}
