import fetchData from "./hooks/fetchData";
import { Product } from "./interfaces";

import React from "react";

export default async function FetchedPizzas() {
  const { pizzas } = await fetchData("pizzas", "pizzas");
  const pizzaProducts: Product[] = pizzas?.products;
  return { pizzaProducts };
}

// export const pizzaProducts: Product[] = pizzas
// export const pizzaProducts: Product[] = [
//   {
//     id: 0,
//     name: "Pizza 1",
//     price: 7.5,
//   },
//   {
//     id: 1,
//     name: "Pizza 2",
//     price: 11.99,
//   },
//   {
//     id: 2,
//     name: "Pizza 3",
//     price: 15.99,
//   },
//   {
//     id: 3,
//     name: "Pizza 4",
//     price: 20,
//   },
//   {
//     id: 4,
//     name: "Pizza 5",
//     price: 10,
//   },
//   {
//     id: 5,
//     name: "Pizza 6",
//     price: 15,
//   },
// ];
