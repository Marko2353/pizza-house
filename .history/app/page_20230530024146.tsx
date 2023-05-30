import React from "react";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
import PCardCarousel from "../components/PizzaCard/PCardCarousel";
import AboutContact from "../components/AboutContact/AboutContact";
import BookStatic from "../components/BookStatic/BookStatic";
import fetchData from "../hooks/fetchData";
import { CronJob } from "./api/cron";
import "leaflet/dist/leaflet.css";
import '..\app\globals.css';

export default async function Home() {
  const { docData } = await fetchData("static", "landing");
  const { pizzas } = await fetchData("pizzas", "pizza");

  const { dailyPizzaName, dailyPizzaDesc } = await CronJob();

  return (
    <>
      <NavBar background={undefined} />
      <DailyPizza title={dailyPizzaName} description={dailyPizzaDesc} />
      <main>
        <AboutContact
          title={docData?.title[0]}
          description={docData?.description[0]}
          button={"more about us"}
        />
        <BookStatic
          title={docData?.title[2]}
          description={docData?.description[2]}
          button={"book now"}
        />
        <PCardCarousel pizza={pizzas} />
        <AboutContact
          title={docData?.title[1]}
          description={docData?.description[1]}
          button={"contact us"}
        />
      </main>
    </>
  );
}
