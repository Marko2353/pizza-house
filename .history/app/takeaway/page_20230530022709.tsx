import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchData from "../../hooks/fetchData";
import CallToAction from "../../components/buttons/CallToAction";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import PizzaMenu from "./pizzaMenu";

export default async function Takeaway() {
  const { docData } = await fetchData("static", "landing");
  const { pizzas } = await fetchData("pizzas", "pizza");

  function text() {
    console.log("works");
  }

  return (
    <>
      <Navbar background={"bg-dark relative mb-10"} />
      <section className="my-10">
        <OurAboutContactHeader
          title={docData?.title[3]}
          description={docData?.description[3]}
        />

        <div className="container flex gap-5 m-auto">
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
                  
                />
                

                
              );
            })}
          </div>

          <div className="flex flex-col justify-between w-1/3 h-64 p-5 bg-dark rounded-xl box-shadow">
            <h2>Shopping cart</h2>
            <div>
              <div className="flex justify-between">
                <span className="text-light">PizzaName</span>
                <span className="text-light">$ price</span>
                <button className="text-light">Xdelete</button>
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
