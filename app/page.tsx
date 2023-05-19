"use client";
import React from "react";
import Image from "next/image";
import CallToAction from "../components/buttons/CallToAction";
import useFetchPizzas from "../hooks/fetchPizzas";
import Button from "../components/buttons/Button";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
import PCardContainer from "../components/PizzaCard/PCardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

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
      <DailyPizza />
      <main>
        <PCardContainer />
      </main>
    </>
  );
}
