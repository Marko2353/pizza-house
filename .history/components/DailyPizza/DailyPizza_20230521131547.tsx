import React from "react";
import CallToAction from "../buttons/CallToAction";

export default function DailyPizza() {
  return (
    <section className="responsive-image">
      <span className="text-lg text-light uppercase z-20 w-fit">
        the pizza of the day
      </span>
      <h1 className="text-6xl z-20 w-fit mt-4">Margharita</h1>
      <p className="text-light w-[60ch] z-20 mb-8 mt-8 text-center">
      Introducing our Pizza of the Day: Margherita! A classic blend of tangy tomato sauce, creamy mozzarella, and aromatic basil. Delizioso!
      </p>
      <span className="z-30 text-lg">
        <CallToAction name="order now" link="#" />
      </span>
    </section>
  );
}
