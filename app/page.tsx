import React from "react";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
// import PCardCarousel from "../components/PizzaCard/PCardCarousel";
import AboutContact from "../components/AboutContact/AboutContact";
import BookStatic from "../components/BookStatic/BookStatic";
import fetchData from "../hooks/fetchData";

export default async function Home() {
  const { docData } = await fetchData("static", "landing");

  return (
    <>
      <NavBar background={undefined} />
      <DailyPizza />
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
        {/* <PCardCarousel /> */}
        <AboutContact
          title={docData?.title[1]}
          description={docData?.description[1]}
          button={"contact us"}
        />
      </main>
    </>
  );
}
