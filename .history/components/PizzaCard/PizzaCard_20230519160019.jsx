import React from 'react'
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
export default function PizzaCard() {
  return (
    <div className='bg-light inline-block'>
        <div className='text-center items-center'>
        <h2>Margaritta</h2>
        <Image src={PizzaImg} alt="" />
        </div>
        <p className='my-2 mx-2'>Tomato, mozzarella and basil</p>
    </div>
  )
}


