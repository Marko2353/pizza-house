import React from 'react'
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
export default function PizzaCard() {
  return (
    <div className='bg-light inline-block'>
        <h2 className='text-3xl mx-auto my-2 font-pacifico'>Margaritta</h2>
        <Image src={PizzaImg} alt="" />
        <p className='my-2'>Tomato, mozzarella and basil</p>
    </div>
  )
}


