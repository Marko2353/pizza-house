"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
import PCardContainer from "../components/PizzaCard/PCardContainer";
import PCardCarousel from "../components/PizzaCard/PCardCarousel";
import OurPizzas from "./ourpizza/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import AboutContact from "../components/AboutContact/AboutContact";
import BookStatic from "../components/BookStatic/BookStatic";
import Footer from "../components/Footer/Footer";
import fetchStatic from "../hooks/fetchStatic";

export default function Home() {
  const { staticData } = fetchStatic();

  return (
    <>
      <div>
        {staticData.map((data) => {
          return (
            <>
              <NavBar />
              <DailyPizza />
              <main>
                <AboutContact
                  title={data.title[0]}
                  description={data.description[0]}
                  button={"more about us"}
                />

                <BookStatic
                  title={data.title[2]}
                  description={data.description[2]}
                  button={"book now"}
                />

                <PCardCarousel />

                <AboutContact
                  title={data.title[1]}
                  description={data.description[1]}
                  button={"contact us"}
                />
              </main>
            </>
          );
        })}
      </div>
    </>
  );
}
