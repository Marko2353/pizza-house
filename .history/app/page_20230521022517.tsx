"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import NavBar from "../components/Navbar/Navbar";
import DailyPizza from "../components/DailyPizza/DailyPizza";
import PCardContainer from "../components/PizzaCard/PCardContainer";
import PCardCarousel from "../components/PizzaCard/PCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import AboutContact from "../components/AboutContact/AboutContact";
import BookStatic from "../components/BookStatic/BookStatic";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [staticData, setStaticData] = useState<{ [x: string]: any }[]>([]);

  const dbInstance = collection(db, "static");

  const getStatic = () => {
    getDocs(dbInstance).then((data) => {
      setStaticData(
        data.docs.map((item) => {
          return { ...item.data() };
        })
      );
    });
  };

  useEffect(() => {
    getStatic();
  }, []);

  return (
    <>
      <div>
        {staticData.map((data) => {
          return (
            <>
              <NavBar />
             
              <Footer />
            </>
          );
        })}
      </div>
    </>
  );
}
