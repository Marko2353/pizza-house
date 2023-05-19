import React from 'react'
import Image from "next/image";
import PizzaImg from "../../public/img/pizza_example.png";
export default function PizzaCard() {
  return (
    <div className='bg-light inline-block'>
        <div className=''>
        <h2 className='text-3xl mx-auto my-2 text-center'>Margaritta</h2>
        <Image className='flex justify-center' src={PizzaImg} alt="" />
        </div>
        <p className='my-2 mx-2'>Tomato, mozzarella and basil</p>
    </div>
  )
}


