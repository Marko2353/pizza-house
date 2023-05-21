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
        Introducing our Pizza of the Day: the magnificent Margherita! This
        timeless classic pays homage to its origins in Naples, Italy. Picture a
        canvas of our artisanal, hand-stretched dough, topped with a luscious
        layer of San Marzano tomato sauce, made from sun-ripened tomatoes. Each
        bite reveals the perfect balance of flavors, as the sauce harmonizes
        with the creamy mozzarella cheese, creating a melty and gooey delight.
        To add a touch of freshness, we garnish it with fragrant basil leaves,
        enhancing the aroma and taste. The Margherita captures the essence of
        simplicity and purity, offering an unforgettable sensory experience.
        It's a perfect choice for those seeking a traditional pizza that
        transcends time. Join us at Pizzarella and savor the perfection of our
        Margherita Pizza, a true masterpiece in every sense. Buon appetito!
      </p>
      <span className="z-30 text-lg">
        <CallToAction name="order now" link="#" />
      </span>
    </section>
  );
}
