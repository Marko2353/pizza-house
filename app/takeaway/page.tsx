import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchData from "../../hooks/fetchData";
import CallToAction from "../../components/buttons/CallToAction";
import PizzaCard from "../../components/PizzaCard/PizzaCard";

export default async function Takeaway() {
  const { docData } = await fetchData("static", "landing");
  const { pizzas } = await fetchData("pizzas", "pizza");

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10">
        <OurAboutContactHeader
          title={docData?.title[3]}
          description={docData?.description[3]}
        />

        <div className="container m-auto flex gap-5">
          <div className="container flex flex-wrap gap-4 m-auto">
            {Object.keys(pizzas?.title).map((pizzaId) => {
              const pizzaName = pizzas?.title[pizzaId];
              const pizzaDescription = pizzas?.description[pizzaId];
              const pizzaPrice = pizzas?.price[pizzaId];

              return (
                <PizzaCard
                  key={pizzaId}
                  pizzaName={pizzaName}
                  pizzaDescription={pizzaDescription}
                  price={pizzaPrice}
                  click={undefined}
                />
              );
            })}
          </div>

          <div className="bg-dark w-1/3 h-64 rounded-xl p-5 flex flex-col justify-between box-shadow">
            <h2>Shopping cart</h2>
            <div>
              <div className="flex justify-between">
                <span className="text-light">asdsad</span>
                <span className="text-light">$ 5</span>
                <button className="text-light">X</button>
              </div>
            </div>
            <p className="text-light">Total cost: </p>
            <CallToAction name={"Check out"} link={"#"} />
          </div>
        </div>
      </section>
    </>
  );
}
