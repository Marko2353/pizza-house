"use client";
import React from "react";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
import PCardContainer from "../components/PizzaCard/PCardContainer";
import PCardCarousel from "../components/PizzaCard/PCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import AboutContact from "../components/AboutContact/AboutContact";
import useFetchStatic from "../hooks/fetchStatic";

export default function Home() {
  // const { title, description, loading, error } = useFetchStatic();

  // if (
  //   title === null ||
  //   title === undefined ||
  //   description === null ||
  //   description === undefined
  // ) {
  //   return <div>{loading}</div>;
  // }

  return (
    <>
      <NavBar />
      
      <DailyPizza />
      
      <main>
        <AboutContact
          title={"titles"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Consectetur donec maecenas nisl pellentesque amet non. Pellentesque aliquam vestibulum quis et purus est. Purus elementum quis sodales dictumst eget. Dignissim et lacus nibh duis mauris turpis mi id."
          }
        />

        <AboutContact
          title={"Contact"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Consectetur donec maecenas nisl pellentesque amet non. Pellentesque aliquam vestibulum quis et purus est. Purus elementum quis sodales dictumst eget. Dignissim et lacus nibh duis mauris turpis mi id."
          }
        />

        
      </main>
      <PCardCarousel />
    </>
  );
}
