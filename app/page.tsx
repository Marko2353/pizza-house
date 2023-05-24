"use client";
import React from "react";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
import PCardCarousel from "../components/PizzaCard/PCardCarousel";
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
              <NavBar background={undefined} />
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
