import React, { useEffect } from "react";
import CallToAction from "../buttons/CallToAction";
import fetchData from "../../hooks/fetchData";

async function DailyPizza() {

  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    // Obtener la fecha actual
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();

    // Generar el número aleatorio utilizando la semilla
    const seed = `${day}${month}`;
    const random = generateRandomNumber(seed);

    // Actualizar el estado con el número aleatorio
    setRandomNumber(random);
  }, []);

  // Función para generar el número aleatorio
  const generateRandomNumber = (seed) => {
    let random = 0;

    // Generar número aleatorio a partir de la semilla
    const x = Math.sin(seed) * 10000;
    random = Math.floor((x - Math.floor(x)) * 10);

    return random;
  };
  const { docData } = await fetchData("pizzas", "pizza");

  return (
    <section className="responsive-image">
      <span className="z-20 text-lg uppercase text-light w-fit">
        the pizza of the day
      </span>
      <h1 className="z-20 mt-4 text-6xl w-fit">{docData?.title[0]}</h1>
      <p className="text-light w-[60ch] z-20 mb-8 mt-8 text-center">
      {docData?.info[0]}
      </p>
      <span className="z-30 text-lg">
        <CallToAction name="order now" link="#" />
      </span>
    </section>
  );
}

export default DailyPizza;
