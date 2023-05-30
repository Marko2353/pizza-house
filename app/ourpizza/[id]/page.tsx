import React from "react";
import NavBar from "../../../components/Navbar/Navbar";
import fetchData from "../../../hooks/fetchData";
import Button from "../../../components/buttons/Button";

export default async function page({ params }) {
  const { pizzas } = await fetchData("pizzas", "pizza");

  return (
    <>
      <NavBar background={"bg-dark"} />
      <section className="fixed w-screen h-screen bg-light flex flex-col justify-center items-center gap-5">
        {Object.keys(pizzas?.title).map((pizzaId) => {
          const pizzaName = pizzas?.title[pizzaId];
          const pizzaDescription = pizzas?.description[pizzaId];
          return params.id === pizzaId ? (
            <>
              <h2>{pizzaName}</h2>
              <p>{pizzaDescription}</p>
              <Button name={"back"} link={"/ourpizza"} func={undefined} />
            </>
          ) : (
            ""
          );
        })}
      </section>
    </>
  );
}
