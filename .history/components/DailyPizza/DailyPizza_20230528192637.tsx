import React from "react";
import CallToAction from "../buttons/CallToAction";
import fetchData from "../../hooks/fetchData";

async function DailyPizza() {

  const generateRandomNumber = (date) => {
    const day = date.getDate();
    const randomNumber = Math.floor(Math.random() * 10);
    const result = (day + randomNumber) % 10;
    return result;
  };

  console.log(generateRandomNumber )

  const { docData } = await fetchData("pizzas", "pizza");

  return (
    <section className="responsive-image">
      <span className="z-20 text-lg uppercase text-light w-fit">
        the pizza of the day
      </span>
      <h1 className="z-20 mt-4 text-6xl w-fit">{docData?.title[0]}</h1>
      <p className="text-light w-[60ch] z-20 mb-8 mt-8 text-center">
      {docData?.info[0]}
      </p>
      <span className="z-30 text-lg">
        <CallToAction name="order now" link="#" />
      </span>
    </section>
  );
}

export default DailyPizza;
