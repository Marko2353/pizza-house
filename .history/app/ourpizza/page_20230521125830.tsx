"use client";
import React, { useRef, useEffect, useState } from "react";
import PCardContainer from "../../components/PizzaCard/PCardContainer";
import OurAboutContactHeader from "../../components/OurAboutContactHeader/OurAboutContactHeader";
import Navbar from "../../components/Navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
function OurPizzas() {


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
      <div className="bg-dark w-full h-24 flex static">
        <Navbar />
      </div>
      <section className="my-10">
        <OurAboutContactHeader
          title={"Our pizzas"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Amet auctor orci elementum consectetur felis libero massa ac rhoncus. Ultrices sem ut nulla nec.Cursus varius at tincidunt fringilla diam neque euismod odio dignissim. Sagittis vitae feugiat aliquet nisl i"
          }
        />
        <PCardContainer />
      </section>
    </>
  );
}

export default OurPizzas;
