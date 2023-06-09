import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import fetchData from "../../hooks/fetchData";
import { PizzaProduct } from "../../components/PizzaCard/PizzaProduct";
import CheckoutBox from "../../components/Checkout/CheckoutBox";
import FetchedPizzas from "../../pizzaProducts";

export default async function Takeaway() {
  const { docData } = await fetchData("static", "landing");

  const { pizzaProducts } = await FetchedPizzas();

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
            {pizzaProducts.map((product) => (
              <PizzaProduct key={product.id} product={product} />
            ))}
          </div>

          <CheckoutBox />
        </div>
      </section>
    </>
  );
}
