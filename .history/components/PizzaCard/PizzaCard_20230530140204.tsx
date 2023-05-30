import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";


export default function PizzaCard({
 
  pizzaName,
  pizzaDescription,
}) {


  return (
    <div className="flex flex-col justify-between gap-5 p-5 shadow-xl bg-light rounded-xl">
      <h2 className="text-3xl h-20 mx-auto text-center w-[10ch]">
        {pizzaName}
      </h2>
      <Image src={PizzaImg} alt="" />
      <div className="flex flex-col justify-between gap-4">
        <p className=" w-[20ch] text-center h-32">{pizzaDescription}</p>
      </div>
    </div>
  );
}
