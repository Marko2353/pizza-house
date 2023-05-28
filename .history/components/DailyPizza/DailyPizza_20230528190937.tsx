import React from "react";
import CallToAction from "../buttons/CallToAction";
import fetchData from "../../hooks/fetchData";

async export default function DailyPizza() {

  const { docData } = await fetchData("static", "landing");

  return (
    <section className="responsive-image">
      <span className="z-20 text-lg uppercase text-light w-fit">
        the pizza of the day
      </span>
      <h1 className="z-20 mt-4 text-6xl w-fit">Margharita</h1>
      <p className="text-light w-[60ch] z-20 mb-8 mt-8 text-center">
        Introducing our Pizza of the Day: Margherita! A classic blend of tangy
        tomato sauce, creamy mozzarella, and aromatic basil. Delizioso!
      </p>
      <span className="z-30 text-lg">
        <CallToAction name="order now" link="#" />
      </span>
    </section>
  );
}
